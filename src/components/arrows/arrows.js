import React, { PureComponent } from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import { Container } from './arrows.css';
import PropTypes from 'prop-types';
import { Dialog } from '@reach/dialog';

export default class Arrows extends PureComponent {
  render() {
    const { section, moveSectionUp, moveSectionDown } = this.props;

    return (
      <Container>
        <button onClick={moveSectionUp}>
          <GoArrowUp></GoArrowUp>
        </button>
        Section: {section}
        <button onClick={moveSectionDown}>
          <GoArrowDown></GoArrowDown>
        </button>
      </Container>
    );
  }
}
