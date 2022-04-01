import React from "react";
import "./Contador.css";
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  // Funciòn de flecha
  const incrementar = (previo) => {
    return previo + 1;
  };
  const disminuir = (previo) => {
    return previo - 1;
  };

  return (
    <div className="App">
      <h1>Lista de Posts</h1>
      <h2>{contador}</h2>
      <button
        onClick={() => {
          setContador(incrementar);
        }}
        className="btn-incremento"
      >
        +
      </button>
      <button
        onClick={() => {
          setContador(disminuir);
        }}
        className="btn-incremento"
      >
        -
      </button>
    </div>
  );
}

export default Contador;
