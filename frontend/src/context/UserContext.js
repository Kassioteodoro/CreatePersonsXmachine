import React from 'react';
import PropTypes from 'prop-types';
import { globalContext } from './globalContext';

function UserContext({ children }) {
  const state = {
    useID: 0,
    name: ""
  };

  return (
    <globalContext.Provider value={ state }>
      {children}
    </globalContext.Provider>
  );
}

UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;