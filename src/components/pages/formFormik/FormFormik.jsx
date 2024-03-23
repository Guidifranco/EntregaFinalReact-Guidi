import { Button, TextField } from "@mui/material";
import "./FormFormik.css";

export const FormFormik = ({ handleSubmit, handleChange, errors, orderId }) => {
  return (
    <div>
      {orderId ? (
        <div>
          <h1 className="orden">Gracias por su compra</h1>
          <p className="num-orden">Su número de orden es: </p>
          <p className="num-orden-id">{orderId}</p>
        </div>
      ) : (
        <form className="formulario" onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="filled"
            name="nombre"
            onChange={handleChange}
            autoComplete="off"
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
          <TextField
            label="Apellido"
            variant="filled"
            name="apellido"
            onChange={handleChange}
            autoComplete="off"
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
          />
          <TextField
            label="Email"
            variant="filled"
            name="email"
            onChange={handleChange}
            autoComplete="off"
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            label="Telefono"
            variant="filled"
            name="telefono"
            onChange={handleChange}
            autoComplete="off"
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
          />
          <Button type="submit" variant="outlined">
            Enviar
          </Button>
        </form>
      )}
    </div>
  );
};
