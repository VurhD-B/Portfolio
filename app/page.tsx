'use client';
import { useState } from "react"

export default function Home() {
  // Creating a counter with useState:
  const [count, setCount] = useState(0);

  // Function to add a number to the counter:

  return (
      <div className="flex flex-col w-full h-full justify-center items-center gap-5">
        <p className="text-3xl font-extrabold">
          Count your life away:
        </p>
      </div>
  )
}
