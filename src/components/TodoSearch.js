import React from 'react';
import { TodoContext } from '../TodoContext';
function TodoSearch() {

    const {searchValue,setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChanged = event => {
        setSearchValue(event.target.value)
        
    }
    return(
        <input 
        onChange={onSearchValueChanged}
        className="search" 
        type="text" 
        value={searchValue}
        placeholder="Busca lo que quieras 🔍"/>
    )
}

export {TodoSearch}