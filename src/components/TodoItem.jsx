import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions'

function TodoItem({todo}) {
    let dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState(todo.name)
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    <h4>
                        {editable ? 
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Edit Title"
                            onChange={(e) => setTitle(e.target.value)} 
                            value={title}
                        /> 
                        : todo.name}
                    </h4>
                </div>
                <button 
                    className="btn btn-primary m-2"
                    onClick={() => {
                            dispatch(updateTodo(
                                {
                                    ...todo, 
                                    name: title
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
                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="btn btn-danger m-2">
                        Delete
                </button>
            </div>
        </div>
    )
}

export default TodoItem
