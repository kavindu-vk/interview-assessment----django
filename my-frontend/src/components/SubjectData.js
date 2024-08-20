import React, { useState, useEffect } from 'react';
import { fetchSubjects } from '../services/api';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const SubjectData = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchSubjects()
            .then(response => setSubjects(response.data))
            .catch(error => console.error('Error fetching subjects:', error));
    }, []);

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Subjects</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Subject</th>
                                        <th>Content</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjects.map(subject => (
                                        <tr key={subject.id}>
                                            <td>{subject.id}</td>
                                            <td>{subject.subject}</td>
                                            <td>{subject.subject_content}</td>
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

export default SubjectData;
