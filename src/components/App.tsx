import React, { FunctionComponent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Header'
import { TodoList } from '../observers/TodoList'
import { TodosStore } from '../stores'

const App: FunctionComponent = () =>
    <Container>
        <Row>
            <Col>
                <Header headerText="Todo's List"></Header>
            </Col>
        </Row>
        <Row>
            <Col>
                <TodoList store={new TodosStore()}/>
            </Col>
        </Row>
    </Container>

export default App