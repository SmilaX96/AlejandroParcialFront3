import React from "react";

const Card = ({ nombre, generoMusical }) => {
  return (
    <div>
      <h2>Hola {nombre} </h2>
      <h3> Sabemos que tu Género Musical Preferido es:</h3>
      <h2>{generoMusical}</h2>
      
    </div>
  );
};

export default Card;
