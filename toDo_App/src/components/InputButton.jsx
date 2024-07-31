export default function IputButton() {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Add new todo!"
        className="border-2 shadow-lg shadow-gray-700 text-center w-1/2 h-24 mt-12 rounded-2xl"
      />
    </div>
  );
}
