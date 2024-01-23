import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {Card, Form, Nav, ProgressBar} from 'react-bootstrap';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useForm} from 'react-hook-form';
import RulesForm from './RulesForm';
import BillingForm from './BillingForm';
import AppContext, {RequestWizardContext} from 'context/Context';
import IconButton from 'components/common/IconButton';
import Flex from 'components/common/Flex';
import {faBank} from "@fortawesome/free-solid-svg-icons";

const WizardLayout = ({variant, validation, progressBar}) => {
    const {isRTL} = useContext(AppContext);
    const {user, setUser, step, setStep} = useContext(RequestWizardContext);
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
        clearErrors
    } = useForm();

    const [modal, setModal] = useState(false);

    const navItems = [
        {
            icon: 'lock',
            label: 'Rules Agreement'
        },
        {
            icon: 'dollar-sign',
            label: 'Payment Details'
        },
        {
            icon: faBank,
            label: 'Banking Details'
        },
        {
            icon: faBank,
            label: 'Banking Details'
        }
    ];

    const onSubmitData = data => {
        setUser({...user, ...data});
        setStep(step + 1);
    };
    const onError = () => {
        if (!validation) {
            clearErrors();
            setStep(step + 1);
        }
    };

    const toggle = () => setModal(!modal);

    const handleNavs = targetStep => {
        if (step !== 4) {
            if (targetStep < step) {
                setStep(targetStep);
            } else {
                handleSubmit(onSubmitData, onError)();
            }
        } else {
            toggle();
        }
    };

    return (
        <>
            <Card
                as={Form}
                noValidate
                onSubmit={handleSubmit(onSubmitData, onError)}
                className="theme-wizard mb-5 mt-5"
            >
                <Card.Header
                    className={classNames('bg-transparent', {
                        'px-4 py-3': variant === 'pills',
                        'pb-2': !variant
                    })}
                >
                    <Nav className="justify-content-center" variant={variant}>
                        {variant === 'pills'
                            ? navItems.map((item, index) => (
                                <NavItemPill
                                    key={item.label}
                                    index={index + 1}
                                    step={step}
                                    handleNavs={handleNavs}
                                    icon={item.icon}
                                    label={item.label}
                                />
                            ))
                            : navItems.map((item, index) => (
                                <NavItem
                                    key={item.label}
                                    index={index + 1}
                                    step={step}
                                    handleNavs={handleNavs}
                                    icon={item.icon}
                                    label={item.label}
                                />
                            ))}
                    </Nav>
                </Card.Header>
                {progressBar && <ProgressBar now={step * 25} style={{height: 2}}/>}
                <Card.Body className="fw-normal px-md-6 py-4">
                    {step === 1 && (
                        <RulesForm register={register} errors={errors} watch={watch}/>
                    )}
                    {step === 2 && (
                        <BillingForm
                            register={register}
                            errors={errors}
                            setValue={setValue}
                        />
                    )}
                    {step === 3 && (
                        <></>
                    )}
                    {step === 4 && <></>}
                </Card.Body>
                <Card.Footer
                    className={classNames('px-md-6 bg-light', {
                        'd-none': step === 4,
                        ' d-flex': step < 4
                    })}
                >
                    <IconButton
                        variant="link"
                        icon={isRTL ? 'chevron-right' : 'chevron-left'}
                        iconAlign="left"
                        transform="down-1 shrink-4"
                        className={classNames('px-0 fw-semi-bold', {
                            'd-none': step === 1
                        })}
                        onClick={() => {
                            setStep(step - 1);
                        }}
                    >
                        Prev
                    </IconButton>
                    <div className="ms-auto">
                        {step === 2 &&
                            <IconButton
                                variant="secondary"
                                type="submit"
                                iconAlign="right"
                                className="me-2"
                                transform="down-1 shrink-4"
                            >
                                Save Draft
                            </IconButton>
                        }

                        <IconButton
                            variant="primary"
                            className="bg-primary text-white"
                            type="submit"
                            transform="down-1 shrink-4"
                        >
                            Submit
                        </IconButton>
                    </div>

                </Card.Footer>
            </Card>
        </>
    );
};

const NavItem = ({index, step, handleNavs, icon, label}) => {
    return (
        <Nav.Item>
            <Nav.Link
                className={classNames('fw-semi-bold', {
                    done: index < 4 ? step > index : step > 3,
                    active: step === index
                })}
                onClick={() => handleNavs(index)}
            >
        <span className="nav-item-circle-parent">
          <span className="nav-item-circle">
            <FontAwesomeIcon icon={icon}/>
          </span>
        </span>
                <span className="d-none d-md-block mt-1 fs--1">{label}</span>
            </Nav.Link>
        </Nav.Item>
    );
};

const NavItemPill = ({index, step, handleNavs, icon, label}) => {
    return (
        <Nav.Item>
            <Nav.Link
                className={classNames('fw-semi-bold', {
                    done: step > index,
                    active: step === index
                })}
                onClick={() => handleNavs(index)}
            >
                <Flex alignItems="center" justifyContent="center">
                    <FontAwesomeIcon icon={icon}/>
                    <span className="d-none d-md-block mt-1 fs--1 ms-2">{label}</span>
                </Flex>
            </Nav.Link>
        </Nav.Item>
    );
};

WizardLayout.propTypes = {
    variant: PropTypes.oneOf(['pills']),
    validation: PropTypes.bool,
    progressBar: PropTypes.bool
};

NavItemPill.propTypes = {
    index: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    handleNavs: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

NavItem.propTypes = NavItemPill.propTypes;

export default WizardLayout;
