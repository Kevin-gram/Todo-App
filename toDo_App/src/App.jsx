import Input from "./components/InputButton";
import TodoItem from "./components/todoItem";
export default function App() {
  return (
    <div>
      <h1 className="text-9xl font-extrabold text-center text-slate-300">
        todos
      </h1>
      <Input />
      <TodoItem />
    </div>
  );
}
