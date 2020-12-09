import React from 'react';
import { bool } from 'prop-types';
import LazyLoad from 'react-lazyload';

import {
  CUSTOM_ANIMATION,
  LAZY_LOAD,
  WEDDING_AKAD,
  WEDDING_AKAD_TIME,
  WEDDING_RESEPSI,
  WEDDING_RESEPSI_TIME,
  WEDDING_LOCATION,
  WEDDING_LOCATION_AKAD,
} from '@/constants';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <div id="fh5co-event" css={styWrapper}>
      <div className="overlay" />
      <div className="container">
        <LazyLoad {...LAZY_LOAD}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading" style={{ animation: CUSTOM_ANIMATION }}>
              <h2 className="main-font main-font__wedding">
                Akad Nikah dan <br />
                Resepsi Pernikahan
              </h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
        </LazyLoad>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <LazyLoad {...LAZY_LOAD} offset={0}>
              <div style={{ animation: CUSTOM_ANIMATION }}>
                <WeddingInfoBox
                  title="Akad Nikah"
                  time={WEDDING_AKAD_TIME}
                  date={WEDDING_AKAD}
                  description={WEDDING_LOCATION_AKAD}
                />
              </div>
            </LazyLoad>
            <LazyLoad {...LAZY_LOAD} offset={-200}>
              <div style={{ animation: CUSTOM_ANIMATION }}>
                <WeddingInfoBox
                  title="Resepsi Pernikahan"
                  time={WEDDING_RESEPSI_TIME}
                  date={WEDDING_RESEPSI}
                  description={WEDDING_LOCATION}
                />
              </div>
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
