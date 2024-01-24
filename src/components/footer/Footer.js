import React from 'react';
import {Col, Row} from 'react-bootstrap';

const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('tn-TN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const formattedTime = currentDate.toLocaleTimeString('tn-TN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    return (
        <footer className="footer bg-light">
            <Row className="justify-content-between text-center fs--1 mt-4 mb-3">
                <Col sm="auto" className={"ms-4"}>
                    <p className="mb-0 text-600">
                        &copy; {new Date().getFullYear()} IEEE Tunisia Section{' '}
                        <span className="d-none d-sm-inline-block">| </span>
                        <br className="d-sm-none"/> {formattedDate} • {formattedTime} (GMT+1)
                    </p>
                </Col>
                <Col sm="auto" className={"me-4"}>
                    <p className="mb-0 text-600">
                        <a href={"#!"}>Help center</a> • <a href={"#!"}>Terms of use</a> • <a href={"#!"}>Privacy policy</a>
                    </p>
                </Col>
            </Row>
        </footer>
    )
}


export default Footer;
