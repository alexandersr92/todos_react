import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodo } from "./components/CreateTodo";
import { TodoForm } from "./components/TodoForm";
import { TodoContext } from "./TodoContext";
import {Modal} from "./components/modal";
import "./scss/App.scss";

/* const defaultTodos = [
  {text:"Cortar Cebolla", complete: false},
  {text:"Tomar curso", complete: true},
  {text:"Llorar con la llorona", complete: false},
  {text:"Cortar Cebolla 2", complete: false},

] */

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>

        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {error && <p>Error en la carga</p>}
          {loading && <p>Cargando ....</p>}
          {!loading && !searchedTodos.length && <p>Crea nuevos todos</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              complete={todo.complete}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
           {!!openModal && (
              <Modal>
              <TodoForm/>
            </Modal>
           )}
        <CreateTodo 
          setOpenModal = {setOpenModal}
          openModal = {openModal}
        />
 
    </React.Fragment>
  );
}
export { AppUI };
