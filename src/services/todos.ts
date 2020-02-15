import axios from 'axios';
import { ITodo, ITodosState } from '../interfaces';
import * as actions from '../actions/todos/creators';
import TodosActionTypes from '../actions/todos/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

type TodoThunkResult<R> = ThunkAction<R, ITodosState, undefined, TodosActionTypes>;
export type TodoThunkDispatch = ThunkDispatch<ITodosState, undefined, TodosActionTypes>;

class TodosService {
    private endpoint: string;

    constructor() {
        this.endpoint = 'https://jsonplaceholder.typicode.com';
    }

    public getTodos(): TodoThunkResult<void> {
        return (dispatch, getState) => {
            console.log(getState());

            dispatch(actions.todosIsLoading(true));

            axios
                .get<ITodo[]>(this.endpoint + '/todos')
                .then(result => {
                    dispatch(actions.todosFetchDataSuccess(result.data));
                })
                .catch(err => {
                    dispatch(actions.todosHasErrored(err.message));
                });
        }
    }
}

export default new TodosService();