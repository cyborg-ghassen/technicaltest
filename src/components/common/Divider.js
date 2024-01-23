import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ className, children }) => (
  <div className={"w-100 position-relative text-center"}>
    <hr className="text-300" />
    <div className="divider-content-center">{children}</div>
  </div>
);

Divider.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node
};

export default Divider;
