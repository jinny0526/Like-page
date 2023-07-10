import { useState } from "react";
import { nanoid } from "nanoid";
import Selection from "./Selection";

function App() {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      content: "잠자기",
      like: 0,
    },
    {
      id: nanoid(),
      content: "낮잠자기",
      like: 0,
    },
  ]);

  const [value, setValue] = useState("");

  const 좋아요누르기 = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, like: todo.like + 1 } : todo
      )
    );
  };

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              id: nanoid(),
              content: value,
              like: 0,
            },
          ]);
          setValue("");
        }}
      >
        추가
      </button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.content}</span>
            <button
              onClick={() => {
                setTodos(todos.filter((item) => item.id !== todo.id));
              }}
            >
              삭제
            </button>
            <button onClick={() => 좋아요누르기(todo.id)}>
              좋아요 {todo.like}
            </button>
          </div>
        );
      })}

      <Selection />
    </>
  );
}

export default App;
