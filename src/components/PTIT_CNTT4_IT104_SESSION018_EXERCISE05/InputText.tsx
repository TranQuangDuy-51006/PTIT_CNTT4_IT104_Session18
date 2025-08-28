import React, { useReducer } from "react";

type State = {
  text: string;
};

type Action = {
  type: "CHANGE_TEXT";
  payload: string;
};

const inputReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default function InputText() {
  const [state, dispatch] = useReducer(inputReducer, { text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_TEXT", payload: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
        placeholder="Nhập vào đây"
      />
      <p>{state.text}</p>
    </div>
  );
}
