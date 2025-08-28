import React, { useReducer } from "react";

type State = {
  gender: string;
};

type Action = {
  type: "CHANGE_GENDER";
  payload: string;
};

const genderReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_GENDER":
      return { gender: action.payload };
    default:
      return state;
  }
};

export default function InputRadio() {
  const [state, dispatch] = useReducer(genderReducer, { gender: "Nam" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_GENDER", payload: e.target.value });
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={state.gender === "Nam"}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={state.gender === "Nữ"}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={state.gender === "Khác"}
          onChange={handleChange}
        />
        Khác
      </label>

      <p>Selected gender: {state.gender}</p>
    </div>
  );
}
