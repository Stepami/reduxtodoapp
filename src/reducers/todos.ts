import * as constants from '../actions/todos/constants';
import TodosActionTypes from '../actions/todos/types';
import { ITodo, ITodosState } from '../interfaces';

const initialState: ITodosState = {
    isLoading: false,
    items: [],
    err: null
};

function orderTodos(todos: ITodo[]): ITodo[] {
    const comparator = (a: ITodo, b: ITodo) => {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    };
    const items = todos.slice();
    const incompleted = items.filter(x => !x.completed).sort(comparator);
    const completed = items.filter(x => x.completed).sort(comparator);
    return incompleted.concat(completed);
}

export default function todosReducer(state = initialState, action: TodosActionTypes): ITodosState {
    switch (action.type) {
        case constants.TODOS_IS_LOADING:
            return {
                ...state,
                isLoading: <boolean>action.payload
            };
        case constants.TODOS_FETCH_DATA_SUCCESS:
            return {
                isLoading: false,
                items: orderTodos(<ITodo[]>action.payload),
                err: null
            };
        case constants.TODOS_HAS_ERRORED:
            return {
                ...state,
                isLoading: false,
                err: <string>action.payload
            };
        case constants.TODOS_ITEM_TOGGLED:
            const items = state.items.slice();
            const index = items.findIndex(x => x.id === <number>action.payload);
            items[index].completed = !items[index].completed;
            return {
                ...state,
                items: orderTodos(items)
            };
        default:
            return state;
    }
}