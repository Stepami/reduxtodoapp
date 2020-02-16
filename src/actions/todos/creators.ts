import { ITodo, IAction } from '../../interfaces';
import TodosConstants from './constants';

export function todosHasErrored(err: string): IAction<string, string> {
    return {
        type: TodosConstants.TODOS_HAS_ERRORED,
        payload: err
    };
}

export function todosIsLoading(isLoading: boolean): IAction<string, boolean> {
    return {
        type: TodosConstants.TODOS_IS_LOADING,
        payload: isLoading
    };
}

export function todosFetchDataSuccess(items: ITodo[]): IAction<string, ITodo[]> {
    return {
        type: TodosConstants.TODOS_FETCH_DATA_SUCCESS,
        payload: items
    };
}

export function todosItemToggled(todoId: number): IAction<string, number> {
    return {
        type: TodosConstants.TODOS_ITEM_TOGGLED,
        payload: todoId
    }
}