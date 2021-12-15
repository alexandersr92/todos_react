import React from 'react';
function CreateTodo(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    let buttonClass = !props.openModal ? "createTodo" : "createTodo clouse";
  
    return(
        <button className={buttonClass} type='button' onClick={onClickButton}>+</button>
    )
}

export {CreateTodo}