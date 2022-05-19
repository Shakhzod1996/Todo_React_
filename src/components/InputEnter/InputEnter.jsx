import React from "react";
import "./InputEnter.css";

export default function InputEnter(props) {

   // ?OnchangeHandler
  let onchangeHandler = (e) => {
    let objNew = { desc: e.target.value, isTrue: false};
    props.setObj(objNew);
  };

  // ?SubmitHandler
  let submitHandler = (e) => {
    e.preventDefault();  
    props.setNewArr([...props.newArr, props.obj]);
    e.target.reset();
    console.log(props.obj);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-enter">
        <input type="text" placeholder="Your Plan..." required onChange={onchangeHandler} />
        <button className="add-btn">
          <i className="bx bx-plus"></i>
        </button>
      </div>
    </form>
  );
}
