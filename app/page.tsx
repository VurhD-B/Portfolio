'use client';
import { useState } from "react"

export default function Home() {
  // Creating a counter with useState:
  const [count, setCount] = useState(0);

  // Function to add a number to the counter:
  const counterFuncAdd = () => {
    setCount(count + 1);
  }

  // Function to subtract a number from the counter:
  const counterFuncSubtract = () => {
    setCount(count - 1);
  }

  // Function to reset the counter:
  const counterFuncReset = () => {
    setCount(0);
  }

  return (
      <div className="flex flex-col w-full h-full justify-center items-center gap-5 mt-10">
        <p className="text-3xl font-extrabold">
          Count your life away: {count}
        </p>
        <div className="flex gap-5">
          <button className="button" onClick={counterFuncAdd}>+</button>
          <button className="button" onClick={counterFuncSubtract}>-</button>
          <button className="button" onClick={counterFuncReset}>Reset</button>
        </div>
      </div>
  )
}
