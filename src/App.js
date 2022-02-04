import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState("");

  const inc = () => {
    setNum(num + 1);
  };

  const dec = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
