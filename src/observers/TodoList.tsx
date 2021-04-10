import { observer } from 'mobx-react';
import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import FlipMove from 'react-flip-move'
import TodoCard from '../components/TodoCard'
import { TodosStore } from '../stores';

type TodoListProps = {
    store: TodosStore
}

@observer
export class TodoList extends Component<TodoListProps> {
    constructor(props: TodoListProps) {
        super(props);
    }

    render(): JSX.Element {
        const { store } = this.props

        return store.todos.case<JSX.Element>({
            fulfilled: response =>
                <ListGroup>
                    <FlipMove
                        typeName={null}
                        delay={0}
                        duration={900}
                        enterAnimation={"accordionVertical"}
                        leaveAnimation={"accordionVertical"}
                    >
                        {store.ordered.map((todo, i) => {
                            return (
                                <TodoCard
                                    key={todo.id}
                                    todo={todo}
                                    owner={"owner"}
                                    checkBoxId={i}
                                    checkBoxCallBack={() => {
                                        let i = response.data.findIndex(t => t.id === todo.id)
                                        response.data[i].toggle()
                                    }}
                                ></TodoCard>
                            );
                        })}
                    </FlipMove>
                </ListGroup>,
            rejected: err =>
                <div>
                    <p>Sorry! There was an error loading the items</p>
                    <p className="text-danger">{err}</p>
                </div>,
            pending: () => <p>Loading…</p>
        })
    }
}