import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState('');
    let dispatch = useDispatch() 
    return (
        <div>
            <div className="row m-2">
                <input 
                    type="text" 
                    className="col form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button 
                    onClick={() => {
                        dispatch(addTodo(
                            {
                                id: uuid(),
                                title: name,
                                description: "lorem ipsum",
                                status: 0,
                                createdAt: "2019-11-15 04:00"
                            }
                        ))
                        setName('');
                    }}
                    className="btn btn-primary mx-2">
                        ADD
                </button>
            </div>
        </div>
    )
}

export default TodoInput;