import React, { useEffect, useState } from "react";
import { productType, packages, products } from "./arrays";
import axios from "axios";

// const url = "server/bd.json/info";

const AddItem = (props) => {
  const [name, setName] = useState(products[0]);
  const [unit, setUnit] = useState(packages[0]);
  const [unitNumber, setUnitNumber] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [sum, setSum] = useState("");
  const [product, setProduct] = useState(productType[0]);

  const productName = (e) => setProduct(e.target.value);
  const detailName = (e) => setName(e.target.value);
  const unitName = (e) => setUnit(e.target.value);
  const numberUnit = (e) => setUnitNumber(e.target.value);
  const priceUnit = (e) => setUnitPrice(e.target.value);

  useEffect(() => {
    const newSum = (unitNumber * unitPrice).toFixed(2);
    setSum(newSum);
  }, [unitNumber, unitPrice]);

  const handleClick = () => {
    props.add(product, name, unit, unitNumber, unitPrice, sum);
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sum > 0 && unitNumber > 0 && unitPrice > 0) {
    try {
      const res = await axios.post("data/bd.json/info", {
        product,
        name,
        unit,
        unitNumber,
        unitPrice,
        sum,
      });
      console.log(res.data);
      setProduct("");
      setName("");
      setUnit("");
      setUnitNumber("");
      setUnitPrice("");
      setSum("");
    } catch (error) { 
    }
  } else {
    alert("brak danych do dodania")
  } 
}

  return (
    <div>
      <h2>Dodaj pozycję</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Produkt:
          <select value={product} onChange={productName}>
            {productType.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="label">
          Nazwa:
          <select value={name} onChange={detailName}>
            {products.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="label">
          Jednostka:
          <select value={unit} onChange={unitName}>
            {packages.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>      
        <input
          type="number"
          placeholder="ilość jednostek"
          value={unitNumber}
          onChange={numberUnit}
        />
        </label>
        <label>
        <input
          type="number"
          placeholder="cena jednostkowa netto"
          value={unitPrice}
          onChange={priceUnit}
        />
        </label>
        <span>kwota: {sum} </span>
        <button onClick={handleClick}>Dodaj</button>
      </form>
      <hr />
    </div>
  );
};

export default AddItem;
