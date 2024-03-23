import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });

  const envioFormulario = (event) => {
    event.preventDefault();
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
