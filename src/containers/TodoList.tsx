import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import FlipMove from 'react-flip-move'
import TodoCard from '../components/TodoCard'
import { makeArrApiRequest } from '../services/api';
import { TodosStore } from '../stores';

type TodoListProps = {
    store: TodosStore;
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
export class TodoList extends Component<TodoListProps> {
    constructor(props: TodoListProps) {
        super(props);
    }

    componentDidMount() {
        makeArrApiRequest(Todo, { url: 'https://jsonplaceholder.typicode.com/todos', method: 'get' }).then(r => {
            console.log(r)
        })
    }

    render(): JSX.Element {
        /*if (this.props.err !== null) {
            return (
                <div>
                    <p>Sorry! There was an error loading the items</p>
                    <p className="text-danger">{this.props.err}</p>
                </div>
            );
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }*/

        return (<></>/*
            <ListGroup>
                <FlipMove
                    typeName={null}
                    delay={0}
                    duration={900}
                    enterAnimation={"accordionVertical"}
                    leaveAnimation={"accordionVertical"}
                >
                    {this.props.items.map((todo: ITodo, i: number) => {
                        return (
                            <TodoCard
                                key={todo.id}
                                todo={todo}
                                owner={"owner"}
                                checkBoxId={i}
                                checkBoxCallBack={() => this.props.toggleTodo(todo.id)}
                            ></TodoCard>
                        );
                    })}
                </FlipMove>
            </ListGroup>*/
        );
    }
}