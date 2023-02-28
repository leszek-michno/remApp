import React from "react";
import Item from "./item";

const ListItems = (props) => {
  const items = props.items.map((position) => (
    <Item key={position.id} position={position} delete={props.delete}/>
  ));

  return (
    <div>
      <h2>Lista pozycji</h2>
      {items}
      <hr />
    </div>
  );
};

export default ListItems;
