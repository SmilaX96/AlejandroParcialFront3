import React from 'react';

const Form = ({ handleChange, formData, handleSubmit }) => {
  return (
    <div>
      <h2>Formulario de Género Musical</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </label>
        <br />
        <label>
          Género Musical Preferido:
          <input type="text" name="generoMusical" value={formData.generoMusical} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
