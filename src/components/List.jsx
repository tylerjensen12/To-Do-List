import React from "react";
import Item from "./Item";

function List({tasks}) {
    let taskDisplay = tasks.map((task) => {
        return <Item task={task}/>
    })
  return <ul>{taskDisplay}</ul>;
}

export default List;
