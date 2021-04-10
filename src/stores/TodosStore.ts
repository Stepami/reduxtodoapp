import axios from "axios";
import { makeAutoObservable } from "mobx";
import { fromPromise } from "mobx-utils";

export class TodosStore {
    //todos = fromPromise(axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos'))
}

class Todo {
    constructor() {
        //makeAutoObservable(this)
    }
    userId: number = 0
    id: number = 0
    title: string = ''
    completed: boolean = false
}