import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { useDispatch } from 'react-redux'
import { fetchTodo } from '../redux/actions'

function TodoList() {
    const [status, setStatus] = useState();
    let todos = useSelector(state => state)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodo('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'))
    }, [])

    useEffect(() => {
        setTimeout(() => {
        setStatus("Ready");
        }, 1000);
    }, []);

    return (
        <div className="my-4">
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-3">Completed</h4>
                {
                    status === 'Ready' && todos.length > 0 && todos.filter(todo => todo.status === 1).map(todo => (
                        <TodoItem key={todo.id} todo={todo}/>
                    ))
                }
                </div>
                <div className="col-md-6">
                    <h4 className="mb-3">On Progress</h4>
                {
                    status === 'Ready' && todos.length > 0 && todos.filter(todo => todo.status === 0).map(todo => (
                        <TodoItem key={todo.id} todo={todo}/>
                    ))
                }
                </div>
            </div>
            
        </div>
    )
}

export default TodoList
