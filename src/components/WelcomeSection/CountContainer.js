import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';

import { THE_BRIDE, YOUTUBE_LINK } from '@/constants';
import CountItem from './CountItem';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  /**
   * render alternative link
   * if user can't play directly via Youtube Embed link
   */
  if (timeHasRunOut && !isEventOver) {
    return (
      <div style={{ marginBottom: '16px' }}>
        Klik link berikut jika anda tidak bisa putar video: <br />
        <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
          {`Youtube Live Akad  ${THE_BRIDE}`}
        </a>
      </div>
    );
  }

  if (timeHasRunOut) return null;

  return (
    <div className="col-md-12 wrapper__counter" css={styMargin('0 0 16px 0')}>
      <CountItem text="Days" number={days} />:
      <CountItem text="Hours" number={hours} />:
      <CountItem text="Minutes" number={minutes} />:
      <CountItem text="Seconds" number={seconds} />
    </div>
  );
}

export default CountContainer;
