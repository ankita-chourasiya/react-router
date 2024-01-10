import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/login/${12}`);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setApiData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductListClick = () => {
    navigate(`/product_list/`, { state: { apiData } });
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={handleProductListClick}>Product list</button>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
