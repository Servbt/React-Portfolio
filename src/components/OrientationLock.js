/* eslint-disable no-restricted-globals */

import React, { Component } from 'react';
import PortfolioContainer from "./PortfolioContainer";


class OrientationLock extends Component {
  componentDidMount() {
    // Lock the orientation to portrait mode
    if (screen.orientation) {
      screen.orientation.lock("portrait").catch(error => {
        console.error('Failed to lock orientation:', error);
      });
    }
  }

  render() {
    return (
 <PortfolioContainer />
    );
  }
}

export default OrientationLock;
