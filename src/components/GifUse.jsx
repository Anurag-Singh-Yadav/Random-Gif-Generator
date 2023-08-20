import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function gifUse(tag) {
  const [gif, setgif] = useState("");
  const [loading, setloading] = useState(false);
  async function fetchData(tag) {
    setloading(false);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageUrl = data.data.images.downsized_large.url;
    setloading(true);
    setgif(imageUrl);
  }

  useEffect(() => {
    fetchData('car');
  }, []);
  return {gif,loading,fetchData}
}
export default gifUse;
