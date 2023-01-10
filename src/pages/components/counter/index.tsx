import { useState } from "react";

function index() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="text-center">
      <h1 className="">Counter</h1>
      <p>{counter}</p>
      <button className="p-4" onClick={handleIncrement}>
        Increment
      </button>

      <button className="p-4" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default index;
