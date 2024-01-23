import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RequestWizardContext } from 'context/Context';

const WizardProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [step, setStep] = useState(1);

  const value = { user, setUser, step, setStep };
  return (
    <RequestWizardContext.Provider value={value}>
      {children}
    </RequestWizardContext.Provider>
  );
};

WizardProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default WizardProvider;
