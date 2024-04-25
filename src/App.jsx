import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/counter/todosSlice";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

function App() {
  const [text, setText] = useState("");
  const { todos } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const toast = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(
      addTodo({
        id: uuidv4(),
        text,
      })
    );

    setText("");
    showToast();
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const showToast = () => {
    toast.current.show({
      severity: "success",
      detail: "Muvoffaqiyatli qo'shildi",
    });
  };
  const showToast2 = () => {
    toast.current.show({
      severity: "success",
      detail: "O'chirildi",
    });
  };
  const showToast3 = () => {
    toast.current.show({
      detail: "Input bosh",
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <div className=" grid place-items-center card w-96 glass ml-auto mr-auto mt-20 gap-10 pt-10 pb-10">
        <p className="text-base font-bold">TODOS LIST</p>
        <form onSubmit={handleSubmit} className="flex gap-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="btn btn-error"
            type="submit"
            label="Success"
            severity="success"
            onClick={() => {
              if (text.trim() === "") {
                showToast3();
              } else {
                showToast();
              }
            }}
          >
            ADD
          </button>
        </form>
        <ul className="flex flex-col w-full gap-10">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between pl-10 pr-10 items-center"
            >
              <p>{todo.text}</p>
              <div className="flex gap-10">
                <div className="form-control ml-3">
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-success"
                    />
                  </label>
                </div>
                <button
                  className="btn btn-active btn-accent"
                  onClick={() => {
                    handleRemove(todo.id);
                    showToast2();
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
