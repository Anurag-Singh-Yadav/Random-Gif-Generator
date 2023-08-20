
import Spinner from './Spinner'
import GifUse from './GifUse'
export default function Random() {
    const {gif,loading,fetchData} = GifUse();
    function clickHandler(){
        fetchData();
    }

  return (
    <div className='flex flex-col bg-green-500 w-1/2 border border-black rounded-md mt-12 items-center gap-y-3'>
      <div className='underline font-bold text-2xl mt-4'>A Random GIF</div>
      <div>
        {
            loading ? (<img src={gif} alt=''></img>) : (<Spinner></Spinner>)
        }
       
      </div>
      <button onClick={clickHandler} className='w-10/12 bg-yellow-500 rounded-md mb-4 p-2'>Generate</button>
    </div>
  )
}
