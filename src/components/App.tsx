import React, { FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import TodoList from '../containers/TodoList';

type IAppProps = {};

const App: FunctionComponent<IAppProps> = () =>
    <Container>
        <Row>
            <Col>
                <Header headerText="Todo's List"></Header>
            </Col>
        </Row>
        <Row>
            <Col>
                {/* place for container*/}
                <TodoList></TodoList>
            </Col>
        </Row>
    </Container>;

export default App;