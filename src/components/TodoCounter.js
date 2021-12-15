import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
        <h1>Has completado {completedTodos} de {totalTodos} todo</h1>
    )
}

export {TodoCounter}