import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <p>Màu người dùng chọn: </p>
      <input type="color" value={color} onChange={handleChangeColor} />

      <p>Màu hiển thị:</p>
      <div
        style={{
          width: "200px",
          height: "100px",
          border: "1px solid #ccc",
          backgroundColor: color || "white",
        }}
      ></div>
    </div>
  );
}
