import React from "react";

const Item = (props) => {
  const { product, name, unit, unitNumber, unitPrice, sum, id } = props.position;

  return (
    <div>
      <div>
        <span className="product">{product}</span>
        <span className="product">{name},</span> 
        <span> {unit},</span>
        <span> ilość: {unitNumber},</span>
        <span> cena: {unitPrice},</span> 
        <span> kwota: {sum} </span>       
        <button onClick={() => props.delete(id)}>X</button>
        <hr />
      </div>
    </div>
  );
};

export default Item;
