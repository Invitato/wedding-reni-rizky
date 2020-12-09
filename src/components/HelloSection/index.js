import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import LazyLoad from 'react-lazyload';
import { animations } from 'react-animation';

import {
  LAZY_LOAD,
  CUSTOM_ANIMATION,
  GIRL_NAME,
  GIRL_PARENT_NAME,
  BOY_NAME,
  BOY_PARENT_NAME,
  IS_USE_PHOTO_WEDDING,
} from '@/constants';
import { styWrapper } from './styles';

import IMG_BRIDE from './w-bride-3.jpg';
import IMG_GROOM from './w-groom.jpg';
import ImgAndSymbol from './img/and-simbol.png';

const ANIMATION = animations || {};

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper(true)} className="fh5co-section-gray">
        <div className="container" style={{ marginTop: '2em' }}>
          <LazyLoad {...LAZY_LOAD}>
            <div className="row" style={{ animation: ANIMATION.fadeInUp }}>
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h3 className="sub-title hs">BISMILLAHIRAHMANIRRAHIIM</h3>
                <h3 className="sub-title hs">Assalamualaikum Wr. Wb</h3>
                <p className="info">
                  Dengan penuh rasa atas limpahan ramhat dan ridho Allah SWT, <br />
                  kami bermaksud menyelenggarakan acara resepsi pernikahan putra-putri kami:
                </p>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad {...LAZY_LOAD}>
            <div className="row" style={{ animation: CUSTOM_ANIMATION }}>
              <div className="col-md-8 col-md-offset-2 text-center">
                {IS_USE_PHOTO_WEDDING && <img src={IMG_BRIDE} alt="bride" className="img__bride" />}
                <h3 className="main-font text__bride">{GIRL_NAME}</h3>
                <p className="parent" dangerouslySetInnerHTML={{ __html: GIRL_PARENT_NAME }} />
              </div>
            </div>
          </LazyLoad>
          <LazyLoad {...LAZY_LOAD}>
            <div style={{ animation: CUSTOM_ANIMATION }}>
              <img src={ImgAndSymbol} alt="" className="img__symbol" />
            </div>
            {/* GROOM */}
            <div className="row" style={{ animation: CUSTOM_ANIMATION, marginBottom: '9em' }}>
              <div className="col-md-8 col-md-offset-2 text-center">
                {IS_USE_PHOTO_WEDDING && <img src={IMG_GROOM} alt="groom" className="img__groom" />}
                <h3 className="main-font text__groom">{BOY_NAME}</h3>
                <p className="parent" dangerouslySetInnerHTML={{ __html: BOY_PARENT_NAME }} />
              </div>
            </div>
          </LazyLoad>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
