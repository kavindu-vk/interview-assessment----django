import React, { useState, useEffect } from 'react';
import { fetchAnswers } from '../services/api';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const AnswerData = () => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetchAnswers()
            .then(response => setAnswers(response.data))
            .catch(error => console.error('Error fetching answers:', error));
    }, []);

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Answers</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {answers.map(answer => (
                                        <tr key={answer.id}>
                                            <td>{answer.id}</td>
                                            <td>{answer.answers}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AnswerData;
