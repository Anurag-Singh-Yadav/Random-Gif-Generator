import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background p-[10px]">
      <div className="bg-white rounded-md mt-10 text-center p-4 mx-10 font-bold text-3xl">RANDOM GIFS</div>
      <div className="flex flex-col items-center">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
