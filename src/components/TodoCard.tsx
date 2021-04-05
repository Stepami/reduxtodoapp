import React, { Component, Children } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import CheckBox from './CheckBox'
import ConditionalWrapper from './ConditionalWrapper'
import { ITodo } from '../interfaces'
import '../styles/TodoCard.css'

export interface ITodoCardProps {
    todo: ITodo;
    owner: string;
    checkBoxId: number;
    checkBoxCallBack: () => void;
}

export default class TodoCard extends Component<ITodoCardProps> {
    constructor(props: ITodoCardProps) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <ListGroup.Item className={this.props.todo.completed ? 'card-disabled' : ''}>
                <Card >
                    <ConditionalWrapper
                        condition={this.props.todo.completed}
                        wrapper={children => <del>{children}</del>}
                    >
                        <Card.Body>
                            <Card.Title>{"Todo #" + this.props.todo.id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.owner}</Card.Subtitle>
                            <Card.Text>{this.props.todo.title}</Card.Text>
                            <CheckBox onChange={this.props.checkBoxCallBack} id={"checkbox" + this.props.checkBoxId} labelText="Done" isToggled={this.props.todo.completed}></CheckBox>
                        </Card.Body>
                    </ConditionalWrapper>
                </Card>
            </ListGroup.Item>
        )
    }
}