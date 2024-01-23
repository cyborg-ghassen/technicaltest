import React from 'react';
import PropTypes from 'prop-types';
import WizardLayout from './WizardLayout';
import WizardProvider from './WizardProvider';

const Wizard = ({ variant, validation, progressBar }) => {
  return (
    <WizardProvider>
      <WizardLayout
        variant={variant}
        validation={validation}
        progressBar={progressBar}
      />
    </WizardProvider>
  );
};

Wizard.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default Wizard;
