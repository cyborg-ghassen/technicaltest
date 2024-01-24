import {Col, FormLabel, Row} from "react-bootstrap";
import React from "react";
import WizardInput from "./WizardInput";

const PersonalForm = ({setValue, register, errors}) => {
    return (
        <>
            <WizardInput
                type="text"
                errors={errors}
                name="fullName"
                placeholder="Full Name"
                formGroupProps={{as: Col, sm: 12}}
                formControlProps={{
                    className: 'input-spin-none',
                    ...register('fullName')
                }}
            />

            <WizardInput
                type="text"
                errors={errors}
                name="email"
                placeholder="Email"
                formGroupProps={{as: Col, sm: 12}}
                formControlProps={{
                    className: 'input-spin-none',
                    ...register('email')
                }}
            />

            <WizardInput
                type="text"
                errors={errors}
                name="phone"
                placeholder="Phone Number"
                formGroupProps={{as: Col, sm: 12}}
                formControlProps={{
                    className: 'input-spin-none',
                    ...register('phone')
                }}
            />

            <WizardInput
                type="text"
                errors={errors}
                name="membership"
                placeholder="IEEE Member Number"
                formGroupProps={{as: Col, sm: 12}}
                formControlProps={{
                    className: 'input-spin-none',
                    ...register('membership')
                }}
            />

            <FormLabel className={"text-secondary"}>Role:</FormLabel>

            <Row>
                <Col>
                    <WizardInput
                        type={"radio"}
                        name={"role"}
                        errors={errors}
                        label={"Chair"}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('role')
                        }}
                    />
                </Col>
                <Col>
                    <WizardInput
                        type={"radio"}
                        name={"role"}
                        errors={errors}
                        label={"Treasurer"}
                        formGroupProps={{as: Col, sm: 12}}
                        formControlProps={{
                            ...register('role')
                        }}
                    />
                </Col>
            </Row>
        </>
    )
}

export default PersonalForm