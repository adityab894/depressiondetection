import requests
import re
import string
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from transformers import pipeline
from flask import Flask, request, jsonify
from flask_cors import CORS

nltk.download('stopwords')
nltk.download('punkt')
output_dir = "C:/Users/adity/OneDrive/Documents/Depression/server/modelOutput"
BERT_MODEL = "distilbert-base-cased"
pipe = pipeline("text-classification", model=output_dir, tokenizer=BERT_MODEL)

app = Flask(__name__)
CORS(app)

def preprocess_tweet(tweet):
    tweet = tweet.lower()
    tweet = re.sub(r"http\S+|www\S+|https\S+", "", tweet, flags=re.MULTILINE)
    tweet = re.sub(r'\@\w+|\#\w+', '', tweet)
    tweet = tweet.translate(str.maketrans("", "", string.punctuation))
    tweet = re.sub(r'\d+', '', tweet)
    tokens = word_tokenize(tweet)
    stop_words = set(stopwords.words('english'))
    tokens = [token for token in tokens if token not in stop_words]
    preprocessed_tweet = ' '.join(tokens)
    return preprocessed_tweet

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Receive data from the request
        data = request.json
        
        # Extract username from data
        username = data['username']
        
        # Meta Threads API integration
        meta_threads_url = "https://meta-threads.p.rapidapi.com/v1/user/details-by-username/"
        meta_threads_headers = {
            "X-RapidAPI-Key": "0429ff70efmsh8a7701d26f5f499p1e257ajsne97558bf76f0",
            "X-RapidAPI-Host": "meta-threads.p.rapidapi.com"
        }
        querystring = {"username": username}
        response = requests.get(meta_threads_url, headers=meta_threads_headers, params=querystring)

        # Check the status code
        if response.status_code == 200:
            user_info = response.json()
            text_posts = [thread.get('articleBody', '') for thread in user_info.get('threads', [])]
            print(text_posts)
            # Preprocess the extracted text
            preprocessed_posts = [preprocess_tweet(post) for post in text_posts]

            # Load the pre-trained BERT model for text classification
            

            # Predict the output for preprocessed posts
            prediction_results = pipe(preprocessed_posts, top_k=100)

            # Choose the top prediction based on the highest score
            top_predictions = [max(result, key=lambda x: x['score']) for result in prediction_results]

            return jsonify({"predictions": top_predictions})
        else:
            return jsonify({"error": f"Error in Meta Threads API: {response.status_code}, {response.text}"})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
