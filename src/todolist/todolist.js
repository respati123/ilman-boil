import { fetch } from 'msw/lib/types/context';
import React, { useState, useEffect } from 'react';
import UseFetch from '../useFetch';
import ListItems from './listItems';


const TodoList = () => {

    const [data, setData] = useState([]);
    const [test, setTest] = useState();
    const [initConfig, setInitConfig] = useState({});
    
    useEffect(() => {

        const fetching = async () => {
            const result = await fetch(process.env.REACT_APP_BASE_URL + "api/TodoLists", {
                method: "GET",
                headers: {
                    
                }
            })
    
            setData(dataFetch);
        }
        
        fetching();

    },[])


    const onClickTodoList = () => {
    }


    return (
        <React.Fragment>
            <h1>TODO LIST</h1>
            <div>
                <pre>{JSON.stringify(data)}</pre>
            </div>
            <div className="todo__container">
                <input className="todo__input"/>
                <button className="todo__button" onClick={onClickTodoList}>Input</button>
            </div>

            <ListItems   />
        </React.Fragment>
        
    )
}

export default TodoList;    