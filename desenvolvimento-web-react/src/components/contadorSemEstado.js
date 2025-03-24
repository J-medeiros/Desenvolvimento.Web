import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContadorSemEstado = () => {
  let contador = 0;

  const incrementar = () => {
    contador++;
    alert(`Contador: ${contador}`);
    if (contador % 3 === 0 && contador !== 0) {
      alert('O número é múltiplo de 3!');
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <button
        onClick={incrementar}
        className="btn btn-warning mt-3 px-4 py-2"
      >
        Incrementar
      </button>
    </div>
  );
};

export default ContadorSemEstado;
