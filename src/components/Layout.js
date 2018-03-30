import React from 'react';
import PropTypes from 'prop-types';



const Layout = (props) => (
  <div className="container-fluid">
      {props.children}
  </div>
)

export default Layout;