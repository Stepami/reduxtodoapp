import { ITodo, IAction } from '../../interfaces';
import * as constants from './constants';

export function todosHasErrored(err: string): IAction<string, string> {
    return {
        type: constants.TODOS_HAS_ERRORED,
        payload: err
    };
}

export function todosIsLoading(isLoading: boolean): IAction<string, boolean> {
    return {
        type: constants.TODOS_IS_LOADING,
        payload: isLoading
    };
}

export function todosFetchDataSuccess(items: ITodo[]): IAction<string, ITodo[]> {
    return {
        type: constants.TODOS_FETCH_DATA_SUCCESS,
        payload: items
    };
}

export function todosItemToggled(todoId: number): IAction<string, number> {
    return {
        type: constants.TODOS_ITEM_TOGGLED,
        payload: todoId
    }
}