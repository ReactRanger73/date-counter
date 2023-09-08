import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div class="app">
      <Buttons />
    </div>
  );
}

function Buttons() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function decreaseStep() {
    setStep((s) => s - 1);
  }
  function increaseStep() {
    setStep((s) => s + 1);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }
  function decreaseCount() {
    setCount((c) => c - step);
  }

  const date = new Date("September 8 2023");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button type="button" onClick={decreaseStep}>
          -
        </button>
        <span>Step : {step}</span>
        <button type="button" onClick={increaseStep}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={decreaseCount}>
          -
        </button>
        <span>Count : {count}</span>
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
    </>
  );
}
