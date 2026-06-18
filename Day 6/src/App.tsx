import { useState } from "react";
import "./index.css";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex">
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;
