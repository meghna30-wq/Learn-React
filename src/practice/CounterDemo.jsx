import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        onClick={() => count > 0 && setCount(count - 1)}
      >
        Decrement
      </button>

      <h1>Count: {count}</h1>
    </>
  );
}