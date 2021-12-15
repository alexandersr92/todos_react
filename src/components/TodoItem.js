import React from "react";

function TodoItem(props) {

  let completeClass = (props.complete) ? 'completed' : ''
  let checkedVal = (props.complete) ? 'checked="checked"' : ''
  return (
    <li className={completeClass}>
      <div>
        <input type="checkbox" onChange={props.onComplete}  checked={checkedVal}/>
        <p>{props.text}</p>
      </div>
      <button onClick={props.onDelete}>X</button>
    </li>
  );
}

export { TodoItem };
