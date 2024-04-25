import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [text, setText] = useState("");
  const { todos } = useSelector((store) => store.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
          />
          <button>ADD</button>
        </form>

        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <p>{todo.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
