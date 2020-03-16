import React from 'react';
import PropTypes from 'prop-types';
import { SectionLayout } from './section.css';

const Section = ({ children, bgColor }) => (
  <SectionLayout bgColor={bgColor}>{children}</SectionLayout>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.node.isRequired,
};

export default Section;
