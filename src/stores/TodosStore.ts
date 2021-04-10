import { computed, makeObservable, observable } from "mobx"
import { fromPromise } from "mobx-utils"
import { Todo } from "../models"
import { makeArrApiRequest } from "../services/api"

export class TodosStore {
    @observable
    todos = fromPromise(makeArrApiRequest(Todo, {
        url: 'https://jsonplaceholder.typicode.com/todos', method: 'get'
    }))

    constructor() {
        makeObservable(this)
    }

    @computed
    get ordered() {
        if (this.todos.state === 'fulfilled') {
            const comparator = (a: Todo, b: Todo) => {
                if (a.id < b.id) {
                    return -1
                }
                if (a.id > b.id) {
                    return 1
                }
                return 0
            }
            const items = this.todos.value.data.slice()
            const incompleted = items.filter(x => !x.completed).sort(comparator)
            const completed = items.filter(x => x.completed).sort(comparator)
            return incompleted.concat(completed)
        }
        return []
    }
}

