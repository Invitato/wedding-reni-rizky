import React from 'react';

import { SOUND_URL, THE_BRIDE, SOUND_BY, URL_WA_INVITATO, URL_IG_INVITATO, URL_INVITATO } from '@/constants';

function CopyRight() {
  return (
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
              <a href={URL_INVITATO} target="_blank" rel="noreferrer" className="pr-co">
                Invitato.net
              </a>
              <br />
              <a href={URL_IG_INVITATO}>Instagram</a>
              <a href={URL_WA_INVITATO} style={{ marginLeft: '8px' }}>
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CopyRight;
