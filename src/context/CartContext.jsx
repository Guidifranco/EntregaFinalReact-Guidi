import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    // función Existe que tiene un some que devuelve true o false, para determinar si el elemento ya está en el carrito
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const addToCart = (product) => {
    let existe = isInCart(product.id); //variable para ver si existe el producto

    if (existe) {
      //si existe el elemento en el carrito, haremos un nuevo arreglo donde se le suma la cantidad al elemento
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      //si no existe el elemento en el carrito, se agrega
      setCart([...cart, product]);
    }
  };

  const removeId = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return total;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);

    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    removeId,
    clearCart,
    addToCart,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};


