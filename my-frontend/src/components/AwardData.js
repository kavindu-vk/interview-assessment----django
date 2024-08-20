import React, { useState, useEffect } from 'react';
import { fetchAwards } from '../services/api';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const AwardData = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        fetchAwards()
            .then(response => setAwards(response.data))
            .catch(error => console.error('Error fetching awards:', error));
    }, []);

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Awards</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awards.map(award => (
                                        <tr key={award.id}>
                                            <td>{award.id}</td>
                                            <td>{award.name}</td>
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

export default AwardData;
