import React from 'react';
import {Col, Row} from 'react-bootstrap';
import IconButton from "../common/IconButton";
import {faChevronLeft, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import Divider from "../common/Divider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LogoutButton = () => (
    <footer className="footer">
        <Row className="justify-content-between align-items-center text-center fs--1 mt-4 mb-3">
            <Divider/>
            <Col sm="auto">
                <IconButton
                    icon={faRightFromBracket}
                    variant={"blue"}
                    className={"text-white"}
                    iconClassName={"me-2"}
                >
                    Logout
                </IconButton>
            </Col>
            <Col sm="auto">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Col>
        </Row>
    </footer>
);

export default LogoutButton;
