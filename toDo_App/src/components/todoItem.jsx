export default function todoItem() {
  return (
    <div className=" flex justify-center mt-12">
      <div className=" flex justify-between   bg-slate-200 mx-32 p-4 items-center w-1/2 rounded-lg">
        <input className="bg-white" type="checkbox" aria-label="todo iput " />
        <h1> what to do here !</h1>
        <button className="rounded-full bg-blue-500 text-white text-lg h-24 w-24 hover:bg-blue-600">
          DELETE
        </button>
      </div>
    </div>
  );
}
