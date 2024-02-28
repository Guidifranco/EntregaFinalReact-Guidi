import { useState } from "react";

export const useCount = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    console.log("Se agrego al carrito");
    setCount(0);
  };

  return { count, increment, decrement, reset };
};
