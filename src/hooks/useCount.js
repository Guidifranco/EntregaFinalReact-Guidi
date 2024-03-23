import { useState } from "react";
import Swal from "sweetalert2";

export const useCount = ({ stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const reset = () => {
    setCount(0);
  };

  const addOne = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire("Stock máximo alcanzado");
    }
  };

  const subOne = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      Swal.fire("Debes agregar por lo menos 1 producto al carrito")
    }
  };

  return { count, reset, addOne, subOne };
};
