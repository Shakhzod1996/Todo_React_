import React, { useState } from "react";
import InputEnter from "./components/InputEnter/InputEnter";
import List from "./components/List/List";
import Search from "./components/Search/Search";
import Select from "./components/Select/Select";
import "./ParentContainer.css";

export default function ParentContainer() {
  let arr = [
    {
      desc: "Do my homeworks",
      isTrue: false
    },
  ];

  let [newArr, setNewArr] = useState(arr);
  let [obj, setObj] = useState();
  let [complete, SetComplete] = useState(null);


  return (
    <div className="parent-todo">
      <div className="top-sel">
        <Select />
        <Search />
      </div>
      <div className="name-shakh">
        <h2>Shak's Todo</h2>
      </div>

      <ul className="main-ul">
        {newArr.map((item, i) => (
          <List
            key={i}
            li={item.desc}
            setNewArr={setNewArr}
            newArr={newArr}
            complete={complete}
            SetComplete={SetComplete}
          />
        ))}
      </ul>
      <InputEnter
        newArr={newArr}
        setNewArr={setNewArr}
        obj={obj}
        setObj={setObj}
      />
    </div>
  );
}
