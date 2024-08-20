// src/components/Dashboard.js
import React from 'react';
import SchoolData from './SchoolData';
import ClassData from './ClassData';
import SummaryData from './SummaryData';
import AnswerData from './AnswerData';
import AssessmentAreaData from './AssessmentAreaData';
import AwardData from './AwardData';
import StudentData from './StudentData';
import SubjectData from './SubjectData';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card className="text-center mb-4">
                        <Card.Body>
                            <Card.Title as="h1">Data Dashboard</Card.Title>
                            <Card.Text>
                                Welcome to the data visualization dashboard. Here you can view and manage the data for various categories.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SchoolData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ClassData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AssessmentAreaData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <StudentData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AnswerData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AwardData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <SubjectData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <SummaryData />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;