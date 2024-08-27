import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="p=10px border-2">
      <h1>Count:{count}</h1>
      <button onClick={() => {}}>Increase count</button>
      <h2>name: {name}</h2>
      <h3>location:munger</h3>
      <h4>contact: 7260858566</h4>
    </div>
  );
};

export default User;
