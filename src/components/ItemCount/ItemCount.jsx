import React, { useState } from "react";

const ItemCount = () => {
  const [numero, setNumero] = useState(0);

  const sumar = () => {
    setNumero(numero + 1);
  };
  const restar = () => {
if (numero> 1) {
    setNumero(numero - 1);
}
  };
  const reset = () => {
    setNumero(0);
  };


  return (
    <div className="d-flex">
      <div>
        <button className="btn btn-warning border border-dark text-center m-1 p-2" onClick={restar}>-</button>
      </div>
      <h3 className="m-2">Cantidad: {numero}</h3>
      <div>
        <button className="btn btn-warning border border-dark text-center m-1 p-2" onClick={sumar}>+</button>
      </div>
      <div>
        <button className="btn btn-warning border border-dark text-center m-1 p-2" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default ItemCount;
