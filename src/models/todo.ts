import { action, makeObservable, observable } from "mobx"

export class Todo {
    constructor() {
        makeObservable(this)
    }
    userId: number = 0
    id: number = 0
    title: string = ''
    @observable
    completed: boolean = false

    @action
    toggle() {
        this.completed = !this.completed
    }
}