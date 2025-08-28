import React, { useReducer } from "react";

type Job = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  jobs: Job[];
  new_title: string;
};

type Action =
  | { type: "SET_TITLE"; payload: string }
  | { type: "ADD"; payload: Job }
  | { type: "DELETE"; payload: number };

export default function TodoList() {
  const initial: State = {
    jobs: [
      { id: 1, title: "học C++", completed: true },
      { id: 2, title: "python", completed: false },
    ],
    new_title: "",
  };

  const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_TITLE":
        return { ...state, new_title: action.payload };

      case "ADD":
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
          new_title: "",
        };

      case "DELETE":
        return {
          ...state,
          jobs: state.jobs.filter((job) => job.id !== action.payload),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_TITLE", payload: e.target.value });
  };

  const addTodo = () => {
    if (!state.new_title.trim()) return;
    const newTodo: Job = {
      id: Math.floor(Math.random() * 9999999),
      title: state.new_title,
      completed: false,
    };
    dispatch({ type: "ADD", payload: newTodo });
  };

  const deleteJob = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div>
      <input value={state.new_title} onChange={handleChange} type="text" />
      <button onClick={addTodo}>Thêm công việc</button>
      <h1> DANH SÁCH CÔNG VIỆC</h1>
      <ul>
        {state.jobs.map((item) => (
          <li key={item.id}>
            {item.title} <button onClick={() => deleteJob(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
