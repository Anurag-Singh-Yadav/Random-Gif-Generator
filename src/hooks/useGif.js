import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
  // console.log(API_KEY);
  const [gif, setGif] = useState("");
  const [loading, setloading] = useState(false);
  const fetchRandomGif = async (tag) => {
    setloading(false);
   
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const image = data.data.images.downsized_large.url;
    setloading(true);
    setGif(image);
    
  };

  useEffect(() => {
    fetchRandomGif(tag);
  });

  return { gif, loading, fetchRandomGif };
};
export default useGif;
