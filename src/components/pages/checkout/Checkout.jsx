export const Checkout = ({ envioFormulario, capturar }) => {
  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={envioFormulario}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={capturar}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          onChange={capturar}
          name="lastName"
        />
        <button type="submit"> Enviar </button>
      </form>
    </div>
  );
};
