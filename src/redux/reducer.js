import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODO } from './actions';
import { todos } from './states'
import axios from 'axios';

export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case FETCH_TODO:
            newTodos = [...state]
            axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list').then(({data}) => {
                newTodos.push(...data)
            })
            return newTodos;

        case ADD_TODO:
            newTodos = [...state]
            newTodos.push(action.payload)
            return newTodos;

        case DELETE_TODO:
            newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;

        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for(let i = 0; i < newTodos.length; i++){
                index++;
                if(newTodos[i].id === action.payload.id) {
                    break;
                }
            }
            if(index !== -1) {
                newTodos[index] = action.payload
                return newTodos;
            }
            return newTodos;
        default:
            return state;
        }
}