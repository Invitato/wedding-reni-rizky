import React from 'react';
import { bool } from 'prop-types';

import WithAnimation from '../WithAnimation';
import ArrowIcon from '../common/ArrowIcon';
import CovidSection from '../Covid19';
import CopyRight from './CopyRight';
import { styWrapper } from './styles';

function FooterSection({ isInvitation }) {
  return (
    <div css={styWrapper}>
      <CovidSection />
      <div className="secondary-bg" style={{ padding: '0 16px' }}>
        <div className="row padding__content">
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
            <ArrowIcon className="img__arrow" />
          </div>
        </div>
      </div>
      <WithAnimation>
        <CopyRight />
      </WithAnimation>
    </div>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
