import React, { useState, useEffect } from 'react';
import { fetchClasses } from '../services/api';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const ClassData = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetchClasses()
            .then(response => setClasses(response.data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Classes</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Class Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classes.map(cls => (
                                        <tr key={cls.id}>
                                            <td>{cls.id}</td>
                                            <td>{cls.class_name}</td>
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

export default ClassData;
