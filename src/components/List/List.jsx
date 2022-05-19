import React from "react";
import "./LIst.css";

export default function List(props) {

    // ? RemoveHandler
  let removeHandler = (e) => {
      props.setNewArr(
        props.newArr.filter((item) => {
          return e.target.id !== item.desc;
        })
      );
  };

    // ? Selected Li
  let SelectedHandler = (e) => {
      if (e.target.id === 'uncompleted') {
        e.target.id = 'completed';
        props.SetComplete(true)
      } else {
        e.target.id = 'uncompleted'
        props.SetComplete(false)
      }
  }
  return (
    <li className='li'>
      <div className="right-desc">
      <i className={`${props.complete ? ' bx bx-select-multiple selected': 'bx bx-select-multiple'}`} id='uncompleted' onClick={SelectedHandler}></i>
        <p className={`${props.complete ? 'p-selected': ''}`}>{props.li}</p>
      </div>
      
      <div className="left-delete">
      <i className="bx bx-trash" id={props.li} onClick={removeHandler} />
      </div>
    </li>
  );
}
// 

