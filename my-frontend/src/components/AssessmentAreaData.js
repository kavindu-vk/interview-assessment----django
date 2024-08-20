import React, { useState, useEffect } from 'react';
import { fetchAssessmentAreas } from '../services/api';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const AssessmentAreaData = () => {
    const [assessmentAreas, setAssessmentAreas] = useState([]);

    useEffect(() => {
        fetchAssessmentAreas()
            .then(response => setAssessmentAreas(response.data))
            .catch(error => console.error('Error fetching assessment areas:', error));
    }, []);

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Assessment Areas</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assessmentAreas.map(area => (
                                        <tr key={area.id}>
                                            <td>{area.id}</td>
                                            <td>{area.name}</td>
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

export default AssessmentAreaData;
