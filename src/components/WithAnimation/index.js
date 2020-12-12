import React, { useState } from 'react';
import { node, oneOf, number } from 'prop-types';
import useIntersect from '@hooks/useIntersect';
import noop from '@helpers/noop';
import animationStyles from './styles';

const WithAnimation = ({ type, children, ...rest }) => {
  return children;
};

WithAnimation.propTypes = {
  children: node.isRequired,
  delay: number,
  type: oneOf(['fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight']),
};

WithAnimation.defaultProps = {
  delay: 0,
  type: 'fadeInUp',
};

export default WithAnimation;
