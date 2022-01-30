import React, { useState } from "react";
import AddItem from "./addItem";
import ListItems from "./listItems";

import "./App.css";
import Header from "./header";

const App = () => {

  const [sumTotal, setSumTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  const [positions, setPositions] = useState([]);
  const deleteItem = (id) => {
    const newPositions = [...positions] ;
    const index = newPositions.findIndex(position => position.id === id);
    positions.splice(index, 1);
    setPositions([...positions])
    };

    const addItem =(product, unit, unitNumber, unitPrice, sum) =>{
      if(sum > 0 && unitNumber > 0 && unitPrice > 0) {
      const item = {
      id: counter,
      product,
      unit, 
      unitNumber,
      unitPrice,
      sum,
      }
      setCounter(counter + 1)
      setPositions([...positions, item]);
      } else {
        alert("Źle wpowadzone dane. Spróbuj ponownie.");
      }
    }
  
    const handleFullCalculation = () => {
      const totalSum = positions.map((position) => position.sum * 1);
      setSumTotal(totalSum.reduce((a, b) => a + b, 0));
    };

  return (
    <div>
      <Header />
      <AddItem add={addItem}/>
      <ListItems items={positions} delete={deleteItem}/>
      <button onClick={handleFullCalculation}>Podlicz wszystko</button>
      <h2> kwota całościowa netto: {(sumTotal).toFixed(2)} </h2>
    </div>
  );
};

export default App;
