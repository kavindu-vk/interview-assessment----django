import React, { useState, useEffect } from 'react';
import { fetchSchools } from '../services/api';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const SchoolData = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        fetchSchools()
            .then(response => setSchools(response.data))
            .catch(error => console.error('Error fetching schools:', error));
    }, []);

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Schools</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schools.map(school => (
                                        <tr key={school.id}>
                                            <td>{school.id}</td>
                                            <td>{school.name}</td>
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

export default SchoolData;
