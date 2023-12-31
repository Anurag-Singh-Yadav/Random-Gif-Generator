import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
export default function Random() {
  const [tag, setTag] = useState("car");

  const { gif, loading, fetchRandomGif } = useGif(tag);
  function clickHandler() {
    fetchRandomGif(tag);
  };
  return (
    <div className="card-width flex flex-col bg-blue-500 w-1/2 border border-black rounded-md mt-12 items-center gap-y-3">
      <div className="underline font-bold text-2xl mt-4">Random {tag} GIF</div>
      <div>{(loading === true) ? <img src={gif} alt=""></img> : <Spinner></Spinner>}</div>
      <input
      type="text"
        className="w-10/12 bg-white-500 rounded-md mb-4 p-2 text-black text-center"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        value={tag}
      ></input>
      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-500 rounded-md mb-4 p-2"
      >
        Generate
      </button>
    </div>
  );
}
