import Spinner from './Spinner'
import './random.css'
import useGif from "../hooks/useGif";
export default function Random() {
  const { gif, loading, fetchRandomGif } = useGif();
    function clickHandler(){
      fetchRandomGif();
    }
  return (
    <div className='card-width flex flex-col bg-green-500 w-1/2 border border-black rounded-md mt-12 items-center gap-y-3'>
      <div className='underline font-bold text-2xl mt-4'>A Random GIF</div>
      <div>
        {
            (loading === true) ? (<img src={gif} alt=''></img>) : (<Spinner></Spinner>)
        }
       
      </div>
      <button onClick={clickHandler} className='w-10/12 bg-yellow-500 rounded-md mb-4 p-2'>Generate</button>
    </div>
  )
}
