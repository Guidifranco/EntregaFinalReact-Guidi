export const ItemCount = ({ counter, onAdd, addOne, subOne }) => {
  return (
    <>
      <div>
        <button onClick={addOne}>sumar</button>
        <h4> {counter}</h4>
        <button onClick={subOne}>restar</button>
        <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
      </div>
    </>
  );
};
