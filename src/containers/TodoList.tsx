import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import FlipMove from 'react-flip-move';
import TodoCard from '../components/TodoCard';
import { ITodo, ITodosState } from '../interfaces';
import todosService, { TodoThunkDispatch } from '../services/todos';
import { StateType } from '../store';
import { todosItemToggled } from '../actions/todos/creators';

interface ITodoListProps extends ITodosState {
    fetchData: () => void;
    toggleTodo: (todoId: number) => object;
}

type ITodoListState = {};

class TodoList extends Component<ITodoListProps, ITodoListState>{
    constructor(props: ITodoListProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render(): JSX.Element {
        if (this.props.err !== null) {
            return (
                <div>
                    <p>Sorry! There was an error loading the items</p>
                    <p className="text-danger">{this.props.err}</p>
                </div>
            );
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
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
            </ListGroup>
        );
    }
}

function mapStateToProps(state: StateType): ITodosState {
    return {
        isLoading: state.todosReducer.isLoading,
        items: state.todosReducer.items,
        err: state.todosReducer.err
    };
}

function mapDispatchToProps(dispatch: TodoThunkDispatch) {
    return {
        fetchData: () => dispatch(todosService.getTodos()),
        toggleTodo: (todoId: number) => dispatch(todosItemToggled(todoId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);