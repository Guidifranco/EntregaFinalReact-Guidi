import { FormFormik } from "./FormFormik";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

export const FormFormikContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  let totalPrice = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: {
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email,
          telefono: data.telefono,
        },
        items: cart,
        total: totalPrice,
      };

      let ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => {
        setOrderId(res.id);
      });

      cart.forEach((product) => {
        let refDoc = doc(db, "products", product.id);
        updateDoc(refDoc, { stock: product.stock - product.quantity });
      });

      Swal.fire("Compra realizada con éxito!");
      clearCart();
    },

    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Debe tener al menos 3 caracteres")
        .required("Campo Requerido"),
      apellido: Yup.string().required("Campo Requerido"),
      email: Yup.string()
        .email("Debes ingresar un email válido")
        .required("Campo Requerido"),
      telefono: Yup.string()
        .matches(/^[0-9]{10}$/, "Teléfono inválido, 10 números requeridos")
        .required("Campo Requerido"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <FormFormik
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        orderId={orderId}
      />
    </div>
  );
};
