import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContadorComEstado = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h3>Contador: {contador}</h3>
        {contador % 3 === 0 && contador !== 0 && (
          <div className="alert alert-info mt-2">O número é múltiplo de 3!</div>
        )}
      </div>
      <button
        onClick={incrementar}
        className="btn btn-warning mt-3 px-4 py-2"
      >
        Incrementar
      </button>
    </div>
  );
};

export default ContadorComEstado;
