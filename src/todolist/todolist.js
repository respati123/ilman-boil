import React from 'react';
import ListItems from './listItems';

const TodoList = () => {


    const onClickTodoList = () => {
        alert('3')
    }

    return (
        <React.Fragment>
            <h1>todoList</h1>
            <div className="todo__container">
                <input className="todo__input"/>
                <button className="todo__button" onClick={onClickTodoList}>Input</button>
            </div>

            <ListItems   />
        </React.Fragment>
        
    )
}

export default TodoList;    