import React, { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function UserList() {
  const users: User[] = [
    { id: 1, name: "Nguyễn A", age: 16 },
    { id: 2, name: "Nguyễn B", age: 20 },
    { id: 3, name: "Nguyễn C", age: 25 },
    { id: 4, name: "Nguyễn D", age: 17 },
    { id: 5, name: "Nguyễn E", age: 30 },
  ];

  const usersOver18 = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <p>Danh sách người dùng trên 18 tuổi</p>
      <ul>
        {usersOver18.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
