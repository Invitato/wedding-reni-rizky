import React, { useState } from 'react';
import { node, oneOf, func } from 'prop-types';
import useIntersect from '@jackyef/use-intersect';
import noop from '@helpers/noop';
import animationStyles from './styles';

/**
 * Simple div that wraps your element and animate it when the component is revealed on screen
 * to achieve it we are using useState useIntersect hooks
 */
const rootMargin = '0px 0px -30% 0px';

const WithAnimation = ({ type, children, onShowAnimation }) => {
  const [showed, setShowed] = useState(false);

  const onIntersect = () => {
    setShowed(true);
    onShowAnimation();
  };

  const ref = useIntersect(onIntersect, { rootMargin }, true);
  const animStyle = animationStyles[type] || noop;

  return (
    <>
      {!showed && <div ref={ref} />}
      <div className={animStyle(showed)}>{children}</div>
    </>
  );
};

WithAnimation.propTypes = {
  children: node.isRequired,
  type: oneOf(['fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight']),
  onShowAnimation: func,
};

WithAnimation.defaultProps = {
  type: 'fadeInUp',
  onShowAnimation: noop,
};

export default WithAnimation;
