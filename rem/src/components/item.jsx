import React from "react";

const Item = (props) => {
  const { product, unit, unitNumber, unitPrice, sum, id } = props.position;

  return (
    <div>
      <div>
        <span className="product">{product}</span> 
        <span> {unit}</span>
        <span> cena: {unitPrice}</span>
        <span> ilość: {unitNumber}</span> 
        <span> kwota: {sum} </span>       
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    </div>
  );
};

export default Item;
