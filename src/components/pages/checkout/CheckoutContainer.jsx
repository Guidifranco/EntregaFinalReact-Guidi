import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });

  const envioFormulario = (event) => {
    event.preventDefault();
    console.log("se envio el formulario");
    console.log(userInfo);
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Checkout envioFormulario={envioFormulario} capturar={capturar} />
    </div>
  );
};
