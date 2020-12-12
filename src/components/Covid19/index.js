import React from 'react';

import WithAnimation from '../WithAnimation';

import DATA from './rules-data';
import { styWrapper } from './styles';

function CovidSection() {
  return (
    <div id="fh5co-couple" className="content__padding" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <WithAnimation>
              <h2 className="main-font pr-co text__title">Panduan Protokol Covid-19</h2>
              <p className="info" style={{ marginBottom: '-16px' }}>
                <i>Keberlangsungan acara ini mengacu pada pedoman kesehatan dari Kementerian Kesehatan:</i>
              </p>
            </WithAnimation>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
          <div className="col-md-12">
            <WithAnimation>
              <ul className="order__styles">
                {DATA.map((item) => {
                  return <li>{item.text}</li>;
                })}
              </ul>
            </WithAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
