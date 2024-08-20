import React, { useState, useEffect } from 'react';
import { fetchStudents } from '../services/api';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const StudentData = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents()
            .then(response => setStudents(response.data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Students</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Full Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map(student => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.fullname}</td>
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

export default StudentData;
