import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div class="App">
      <Buttons />
    </div>
  );
}

function Buttons() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + step);
  }
  function decreaseCount() {
    setCount((c) => c - step);
  }

  const date = new Date("September 8 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
      </div>
      <div>
        <button type="button" onClick={decreaseCount}>
          -
        </button>
        <input
          type="text"
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}
        ></input>
        <button type="button" onClick={increaseCount}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `After ${count} days, it will be `
            : `${Math.abs(count)} days ago, it was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
