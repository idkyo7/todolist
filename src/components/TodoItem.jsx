import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions'

function TodoItem({todo}) {
    let dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState(todo.title)
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div style={{fontSize: 14}}>{todo.createdAt}</div>
                <div className="col" style={{fontSize: 16}}>
                        {editable ? 
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Edit Title"
                            onChange={(e) => setTitle(e.target.value)} 
                            value={title}
                        /> 
                        : todo.title}
                </div>
                <button 
                    className="btn btn-sm btn-primary m-2"
                    onClick={() => {
                            dispatch(updateTodo(
                                {
                                    ...todo, 
                                    title: title
                                }
                            ))
                            if(editable) {
                                setTitle(todo.name)
                            }
                            setEditable(!editable)
                        }
                    }
                >
                    {editable ? "Update" : "Edit"}
                </button>
                {
                    todo.status !== 1 && (
                    <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="btn btn-sm btn-danger m-2">
                            Delete
                    </button>
                    )
                }
                {
                    todo.status !== 1 ? (
                    <button
                        onClick={() => dispatch(updateTodo(
                            {
                                ...todo, 
                                status: 1
                            }
                        ))}
                        className="btn btn-sm btn-warning m-2">
                            Mark as done
                    </button>
                    ) : (
                        <button className="btn btn-sm btn-success">Done Already</button>
                    )
                }
            </div>
        </div>
    )
}

export default TodoItem
