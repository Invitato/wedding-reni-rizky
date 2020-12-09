import React from 'react';
import { bool } from 'prop-types';
import LazyLoad from 'react-lazyload';
import { animations } from 'react-animation';

import {
  THE_BRIDE,
  SOUND_BY,
  SOUND_URL,
  CUSTOM_ANIMATION,
  LAZY_LOAD,
  YOUTUBE_EMBED,
  WEDDING_AKAD,
  WEDDING_AKAD_TIME,
} from '@/constants';
import CountContainer from '../WelcomeSection/CountContainer';
import { styWrapper } from './styles';

const ANIMATION = animations || {};

function FooterSection({ isInvitation }) {
  return (
    <div css={styWrapper}>
      <div id="fh5co-couple" className="secondary-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <LazyLoad {...LAZY_LOAD}>
                <p className="info" style={{ animation: ANIMATION.fadeInUp }}>
                  Sehubungan dengan kondisi saat ini mengenai pembatasan jumlah tamu undangan, <br />
                  Tanpa mengurangi rasa hormat, kami mohon segala doa dan restu dari bapak/ ibu/saudara/i, dan kami
                  berharap tetap dapat menjalin tali silahturahmi melalui media online.
                </p>
              </LazyLoad>

              <LazyLoad {...LAZY_LOAD}>
                <h2 className="main-font pr-co">Terima Kasih</h2>
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <LazyLoad {...LAZY_LOAD}>
              <div className="col-md-12 text-center" style={{ animation: ANIMATION.fadeInUp }}>
                <p>
                  <small className="block">&copy; 2020 {THE_BRIDE}. All Rights Reserved.</small>
                  <small className="block">
                    Song by{' '}
                    <a href={SOUND_URL} target="_blank" rel="noreferrer" className="pr-co">
                      {SOUND_BY}
                    </a>
                  </small>
                  <small className="block">
                    Create with Love by{' '}
                    <a href="http://inviato.net" target="_blank" rel="noreferrer" className="pr-co">
                      Invitato.net
                    </a>
                  </small>
                </p>
              </div>
            </LazyLoad>
          </div>
        </div>
      </footer>
    </div>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
