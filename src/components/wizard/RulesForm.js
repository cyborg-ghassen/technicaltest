import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import {Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RulesForm = ({ register, errors, watch }) => {
  return (
    <>

      <Row className="g-2 mb-3">
          <Col>
              <h5>Rules and Acknowledgement</h5>
              <p className={"text-dark mt-4"}>Your 10 keys to receive funds:</p>
              <ol className={"text-dark mt-4"}>
                  <li>The unit's treasurer and chair should keep their own financial report (incomes & expenses) and verify that they have sufficient funds before submitting the payment / reimbursement request. The unit's treasurer and chair should give their financial report to the next officers of their unit.</li>
                  <li>In case of reimbursement request (reimbursement means that the services were already payed and the event was organized), a report with photos and the list of participants (name, IEEE member (yes/no), email) must be uploaded in the request. Otherwise, the reimbursement will not be done.</li>
                  <li>In case of payment request (payment means a direct money transfer from the Tunisia section to the provider bank account), a report with photos and the list of participants (name, IEEE member (yes/no), email) must be sent to <a href={"mailto:tunisia-officers@ieee.org"}>tunisia-officers@ieee.org</a> within 7 days after the event. Otherwise, the section will not be able to help the unit in the future, even if they have sufficient funds in the section bank account.</li>
                  <li>The Tunisia section needs at the minimum 15 days to complete your request. No urgent payements could be done. All requests should be submitted well in advance.</li>
                  <li>In case of invoices with an amount over 100 TND, the forum must include 3 quotes (devis) from different providers. Please clarify if you are not selecting the lowest price, in the description of expenses field above. You should ask for payment option in order to pay directly the provider and avoid the reimbursement option.</li>
                  <li>No clear invoices will not be paid or reimbursed. All invoices must be billed to "IEEE Tunisia section" (and clearly include section's tax id 1496298 T P N 000), including the word "Facture", clear details of the provider, stamp, and signature. Otherwise, the payment/reimbursement can't be done.</li>
                  <li>The unit's chair/treasurer should collect all original invoices and give them to the section treasurer by 31 December every year. Otherwise, the section will not be able to help the unit in the future.</li>
                  <li>if the expenses includes a restaurant invoice, the request should includes ALL the names, IEEE id, and emails of the beneficiary persons.</li>
                  <li>The request will be automatically declined if one of the emails of the officers are wrong.</li>
                  <li>The unit's website should be updated and includes the call for participation to the related event. Further more, an e-notice call for participation should be sent via enotice.vtools.ieee.org</li>
              </ol>
          </Col>
      </Row>

        <WizardInput
        type="checkbox"
        errors={errors}
        label={
          <>
            By ticking, you are confirming that you have read, understood and agree to the requests rules and conditions, and acknowledge the <Link to="#!">IEEE Code of Ethics</Link>
          </>
        }
        name="agreedToTerms"
        formControlProps={{
          ...register('agreedToTerms', {
            required: 'You need to agree the rules and acknowledgement.'
          })
        }}
      />
    </>
  );
};

RulesForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default RulesForm;
