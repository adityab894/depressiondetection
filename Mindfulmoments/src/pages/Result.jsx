// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Result() {
  const [data, setData] = useState(null);
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: localStorage.getItem('username') })
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json.predictions); // Assuming json contains an object with a 'predictions' key
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div className="bg-[rgb(12,16,46)] w-screen h-screen">
      <Link to="/">
        <h2 className="fixed z-50 p-3 text-white font-bold text-2xl">LOGO</h2>
      </Link>
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[60%] aspect-video rounded-3xl bg-[#5311e21f] flex flex-col gap-10 justify-center items-center">
        <h1 className="text-xl bg-[#731ddd2f] p-2 rounded-lg font-semibold text-white">
          You are worthy of happiness and peace of mind
        </h1>
        <div className="w-[30%] aspect-square bg-[#741dddb5] rounded-full flex justify-center items-center text-5xl font-bold text-white">
          {loading ? 'Loading...' : data && `${Math.round(data[0].score * 100)}%`}
        </div>
        <h1 className="text-xl bg-[#731ddd2f] p-2 rounded-lg font-semibold text-white">
        {loading ? 'Loading...' : data && `${data[0].label}`}
        </h1>
        
      </div>
    </div>
  );
}

export default Result;
