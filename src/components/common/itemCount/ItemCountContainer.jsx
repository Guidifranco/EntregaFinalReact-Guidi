import { useState } from "react";
import { ItemCount } from "./ItemCount";

export const ItemCountContainer = ({stock, onAdd, initial=1}) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
        alert("Stock maximo")
    }

    const subOne = () => {
        if (counter > 1) {
          setCounter(counter - 1);
        } else {
          alert("no puede ser menos de 1");
        }
      };
  
  return (
    <div>
      <ItemCount countar={counter} onAdd={onAdd} addOne={addOne} subOne={subOne} />
    </div>
  );
};
}