import {Fragment} from "react";
import {Breadcrumb, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Wizard from "../../components/wizard/Wizard";

const Requests = () => {
    return (
        <Fragment>
            <Breadcrumb className={"mt-4 ms-4"}>
                <Breadcrumb.Item href="/">
                    <FontAwesomeIcon icon={faChevronLeft} className={"me-3"} />
                    Go back to Requests
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    /
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    New Outcome Request
                </Breadcrumb.Item>
            </Breadcrumb>

            <Container>
                <Wizard progressBar={true} />
            </Container>
        </Fragment>
    )
}

export default Requests