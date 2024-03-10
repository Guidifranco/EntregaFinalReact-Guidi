import { useState } from "react";

export const useCount = ({stock, initial=1}) => {
  const [count, setCount] = useState(initial);


  const reset = () => {
    console.log("Se agrego al carrito");
    setCount(0);
  };

  const addOne = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
        alert("Stock maximo")
    }
  }

    const subOne = () => {
        if (count > 1) {
          setCount(count - 1);
        } else {
          alert("no puede ser menos de 1");
        }
      };

  return { count, reset, addOne, subOne };
};
