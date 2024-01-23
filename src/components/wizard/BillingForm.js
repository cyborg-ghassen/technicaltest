import React, {useState} from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import {Accordion, Col, FormLabel, Row, Table} from 'react-bootstrap';
import Flex from "../common/Flex";
import cloudUpload from 'assets/images/icons/cloud-upload.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDropzone} from "react-dropzone";

const BillingUserForm = ({register, errors, setValue}) => {
    const [collapsed, setCollapsed] = useState(false)
    const [quotations] = useState([
        {
            id: 1,
            title: "Sales Quotation #1",
            body: ""
        },
        {
            id: 2,
            title: "Sales Quotation #2",
            body: ""
        },
        {
            id: 3,
            title: "Sales Quotation #3",
            body: ""
        }
    ])

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <>
            <Row className="g-2 mb-3">
                <Col>
                    <h5>Event Details</h5>
                </Col>
            </Row>
            <WizardInput
                type="text"
                errors={errors}
                name="eventURL"
                placeholder="Event URL"
                formGroupProps={{as: Col, sm: 12}}
                formControlProps={{
                    className: 'input-spin-none',
                    ...register('eventURL', {
                        required: 'Please Enter your event url'
                    })
                }}
            />
            <FormLabel className={"text-dark"}>Example: <a
                href={"https://events.vtools.ieee.org/m/123456"}>https://events.vtools.ieee.org/m/123456</a></FormLabel>
            <Table className={"mt-3"}>
                <thead>
                <tr>
                    <th>Event Title</th>
                    <th>Event Type</th>
                    <th>Event Date</th>
                    <th>Event Venue/City</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                </tr>

                </tbody>
            </Table>
            <FormLabel className={"text-secondary"}>Does the event have attendees?</FormLabel>

            <Row>
                <Col>
                    <WizardInput
                        type={"radio"}
                        name={"attendees"}
                        errors={errors}
                        label={"Yes"}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('attendees')
                        }}
                    />
                </Col>
                <Col>
                    <WizardInput
                        type={"radio"}
                        name={"attendees"}
                        errors={errors}
                        label={"No"}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('attendees')
                        }}
                    />
                </Col>
            </Row>
            <FormLabel className={"text-dark"}>Sales Quotations</FormLabel><br/>
            <FormLabel className={"text-secondary"}>Currency</FormLabel>
            <Row>
                <Col>
                    <WizardInput
                        type={"radio"}
                        name={"currency"}
                        errors={errors}
                        label={"USD"}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('currency')
                        }}
                    />
                </Col>
                <Col>
                    <WizardInput
                        type={"radio"}
                        name={"currency"}
                        errors={errors}
                        label={"TND "}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('currency')
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        {quotations.map(quotation => (
                            <Accordion.Item eventKey={quotation.id}>
                                <Accordion.Header>
                                    <Flex justifyContent={"between"}>
                                        <div className={"justify-content-start"}>
                                            {quotation.title}
                                        </div>
                                    </Flex>
                                </Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        ))}

                    </Accordion>
                    <Flex
                        alignItems="center"
                        className="mb-4 mt-4 text-primary cursor-pointer fs-0"
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                    >
        <span className="circle-dashed">
          <FontAwesomeIcon icon="plus"/>
        </span>
                        <span className="ms-3">Add Sales Quotation</span>
                    </Flex>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WizardInput
                        type={"select"}
                        name={"quote"}
                        errors={errors}
                        placeholder={"Which quote?"}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('quote')
                        }}
                    />
                    <WizardInput
                        type={"textarea"}
                        name={"justif"}
                        errors={errors}
                        placeholder={"Justification"}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('justif')
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                        <tr>
                            <th>TOT. REQUESTED AMOUNT</th>
                            <th>OLD BALANCE</th>
                            <th>NEW BALANCE <FontAwesomeIcon icon={"info-circle"}/></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={"text-primary"}>$598.24</td>
                            <td className={"text-success"}>$6,598.24</td>
                            <td className={"text-danger"}>$6,000.00</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <FormLabel className={"text-dark"}>Additional Information</FormLabel><br/>
            <FormLabel className={"text-secondary"}>
                <FontAwesomeIcon icon={"warning"} className={"me-2 text-warning"}/>
                you have requested an amount over $150, please upload a detailed event agenda.
            </FormLabel>
            <Row>
                <Col>
                    <div {...getRootProps({className: 'dropzone-area py-6'})}>
                        <input {...getInputProps({multiple: false})} accept={"application/pdf"} />
                        <Flex justifyContent="between">
                            <div className={"d-inline-flex"}>
                                <img src={cloudUpload} alt="" width={25} className="me-2"/>
                                <p className="fs-9 mb-0 text-700">Attach PDF File</p>
                            </div>
                            <div>
                                <p className="fs-9 mb-0 text-700">Max Upload 10.0 MB</p>
                            </div>
                        </Flex>
                    </div>
                    <div className="mt-3">
                    {acceptedFiles.length > 0 && (
                            <>
                                <h6>File</h6>
                                <ul>{files}</ul>
                            </>
                        )}
                    </div>
                </Col>
            </Row>
        </>
    );
};

BillingUserForm.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    setValue: PropTypes.func.isRequired
};

export default BillingUserForm;
