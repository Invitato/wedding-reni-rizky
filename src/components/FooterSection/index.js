import React from 'react';
import { bool } from 'prop-types';

import { THE_BRIDE, SOUND_BY, SOUND_URL } from '@/constants';

import WithAnimation from '../WithAnimation';
import ArrowIcon from '../common/ArrowIcon';
import { styWrapper } from './styles';

function FooterSection({ isInvitation }) {
  return (
    <div css={styWrapper} className="padding__content secondary-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <WithAnimation>
              <p className="info">
                Sehubungan dengan kondisi saat ini mengenai pembatasan jumlah tamu undangan, Tanpa mengurangi rasa
                hormat, kami mohon segala doa dan restu dari bapak/ ibu/saudara/i, dan kami berharap tetap dapat
                menjalin tali silahturahmi melalui media online.
              </p>
            </WithAnimation>
            <WithAnimation delay={100}>
              <h2 className="main-font pr-co">Terima Kasih</h2>
            </WithAnimation>

            <WithAnimation delay={200}>
              <ArrowIcon className="img__arrow" />
              <footer>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <p>
                        &copy; 2020 {THE_BRIDE}. All Rights Reserved. <br />
                        Song by{' '}
                        <a href={SOUND_URL} target="_blank" rel="noreferrer" className="pr-co">
                          {SOUND_BY}
                        </a>
                        <br /> <br />
                        Create with Love by{' '}
                        <a href="http://invitato.net" target="_blank" rel="noreferrer" className="pr-co">
                          Invitato.net
                        </a>
                        <br />
                        <a href="https://www.instagram.com/dindadipoyono/">Instagram</a>
                        <a
                          href="https://wa.me/+628112778189?text=Hi%20Kak,%20aku%20mau%20pesan%20undangan%20online%20nih!"
                          style={{ marginLeft: '8px' }}
                        >
                          WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </WithAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
