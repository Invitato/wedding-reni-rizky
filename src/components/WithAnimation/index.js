import React, { useState } from 'react';
import { node, oneOf, func, number } from 'prop-types';
import useIntersect from '@jackyef/use-intersect';
import noop from '@helpers/noop';
import animationStyles from './styles';

/**
 * Simple div that wraps your element and animate it when the component is revealed on screen
 * to achieve it we are using useState useIntersect hooks
 */
const INTERSECT_OPTIONS = {
  root: null,
  rootMargin: '0px 0px -20% 0px',
  threshold: [0.05, 0.3, 0.6, 0.95],
};

const WithAnimation = ({ type, children, onShowAnimation, ...rest }) => {
  const [showed, setShowed] = useState(false);

  const animStyle = animationStyles[type] || noop;
  const targetRef = useIntersect(() => {
    setShowed(true);
    onShowAnimation();
  }, INTERSECT_OPTIONS);

  return (
    <div ref={targetRef} css={animStyle(showed)} {...rest}>
      {children}
    </div>
  );
};

WithAnimation.propTypes = {
  children: node.isRequired,
  delay: number,
  type: oneOf(['fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight']),
  onShowAnimation: func,
};

WithAnimation.defaultProps = {
  delay: 0,
  type: 'fadeInUp',
  onShowAnimation: noop,
};

export default WithAnimation;
