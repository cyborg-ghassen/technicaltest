import React from 'react';
import {Col, Row} from 'react-bootstrap';

const Footer = () => (
    <footer className="footer">
        <Row className="justify-content-between text-center fs--1 mt-4 mb-3">
            <Col sm="auto" className={"ms-4"}>
                <p className="mb-0 text-600">
                    &copy; {new Date().getFullYear()} IEEE Tunisia Section{' '}
                    <span className="d-none d-sm-inline-block">| </span>
                    <br className="d-sm-none"/> 2023/08/12  •  16:45 (GMT+1)
                </p>
            </Col>
            <Col sm="auto" className={"me-4"}>
                <p className="mb-0 text-600">
                    Help center     •     Terms of use     •     Privacy policy
                </p>
            </Col>
        </Row>
    </footer>
);

export default Footer;
