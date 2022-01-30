import React, { useState } from "react";

const AddItem = (props) => {
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [sum, setSum] = useState('');

  const productName = (e) => setProduct(e.target.value);
  const unitName = (e) => setUnit(e.target.value);
  const numberUnit = (e) => setUnitNumber(e.target.value);
  const priceUnit = (e) => setUnitPrice(e.target.value);

  const handleSum = () => {
  setSum((unitNumber * unitPrice * 1).toFixed(2));
  }  
  const handleClick = () => {
      props.add(product, unit, unitNumber, unitPrice, sum);
      setProduct("");
      setUnit("");
      setUnitNumber("");
      setUnitPrice("");
      setSum(''); 
    };
    

  return (
    <div>
      <h2>Dodaj pozycję</h2>
      <input
        type="text"
        placeholder="nazwa"
        value={product}
        onChange={productName}
      />
      <input
        type="text"
        placeholder="rodzaj jednostki"
        value={unit}
        onChange={unitName}
      />
      <input
        type="number"
        placeholder="ilość jednostek"
        value={unitNumber}
        onChange={numberUnit}
        
      />
      <input
        type="number"
        placeholder="cena jednostkowa netto"
        value={unitPrice}
        onChange={priceUnit}
        
      />
      <button onClick={handleSum}>Policz</button>
      <span>kwota: {sum} </span>
      <button onClick={handleClick}>Dodaj</button>
      
      <hr />
      
    </div>
  );
};

export default AddItem;
