import React, { useEffect, useState } from "react";
import AddItem from "./addItem";
import ListItems from "./listItems";
import "./App.scss";
import Header from "./header";
import axios from "axios";

const url = "http://localhost:4000/info";

const App = () => {
  const [sumTotal, setSumTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(url);
        setPositions(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.res);
      }
    };
    fetchData();
  }, []);
  

  const deleteItem = async (id) => {
    const newPositions = [...positions] ;
    const index = newPositions.findIndex(position => position.id === id);
    positions.splice(index, 1);
    setPositions([...positions])
    try {
      await axios.delete(`http://localhost:4000/info/${id}`);
      setPositions(positions.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (product, name, unit, unitNumber, unitPrice, sum) => {
    if (sum > 0 && unitNumber > 0 && unitPrice > 0) {
      const item = {
        id: counter,
        product,
        name,
        unit,
        unitNumber,
        unitPrice,
        sum,
      };
      setCounter(counter + 1);
      setPositions([...positions, item]);
    } 
  };

  useEffect(() => {
    const totalSum = positions.map((position) => position.sum * 1);
    setSumTotal(totalSum.reduce((a, b) => a + b, 0));
  }, [positions]);
  

  return (
    <div>
      <Header />
      <AddItem add={addItem} />
      <ListItems items={positions} delete={deleteItem} />
      <h2> kwota całościowa netto: {sumTotal.toFixed(2)} </h2>
    </div>
  );
};

export default App;
