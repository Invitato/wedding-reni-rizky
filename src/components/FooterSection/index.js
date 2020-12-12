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
              <h2 className="main-font pr-co">Apakah kamu hadir?</h2>
              <p className="info">
                Atas kehadiran & do'a restu saudara/i, <br /> kami ucapkan terima kasih.
              </p>
            </WithAnimation>
            <WithAnimation delay={100}>
              <h2 className="main-font pr-co" style={{ fontSize: '3rem' }}>
                Wassalamualaikum Wr.Wb
              </h2>
            </WithAnimation>
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
