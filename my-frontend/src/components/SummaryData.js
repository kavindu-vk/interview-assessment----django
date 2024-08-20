import React, { useState, useEffect } from 'react';
import { fetchSummaries } from '../services/api';
import { Table, Container, Row, Col, Card, Pagination } from 'react-bootstrap';

const PAGE_SIZE = 17; // Number of items per page

const SummaryData = () => {
    const [summaries, setSummaries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchSummaries()
            .then(response => {
                const data = response.data;
                setSummaries(data);
                setTotalPages(Math.ceil(data.length / PAGE_SIZE));
            })
            .catch(error => console.error('Error fetching summaries:', error));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedSummaries = summaries.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Summaries</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>School</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                        <th>Student</th>
                                        <th>Score</th>
                                        <th>Assessment Area</th>
                                        <th>Award</th>
                                        <th>Participant</th>
                                        <th>Correct Answer Percentage</th>
                                        <th>Year Level</th>
                                        <th>Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedSummaries.map(summary => (
                                        <tr key={summary.id}>
                                            <td>{summary.id}</td>
                                            <td>{summary.school}</td>
                                            <td>{summary.class_name}</td>
                                            <td>{summary.subject}</td>
                                            <td>{summary.student}</td>
                                            <td>{summary.student_score}</td>
                                            <td>{summary.assessment_area}</td>
                                            <td>{summary.award}</td>
                                            <td>{summary.participant}</td>
                                            <td>{summary.correct_answer_percentage_per_class}</td>
                                            <td>{summary.year_level_name}</td>
                                            <td>{summary.answer}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination>
                                <Pagination.Prev
                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next
                                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SummaryData;
