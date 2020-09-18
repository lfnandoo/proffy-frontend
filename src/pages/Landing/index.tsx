import React from 'react';

import logo from '../../assets/images/logo.svg';

export default function Landing() {
  return (
    <div id='page-landing'>
      <div id='page-landing-content'>
        <div className='logo-container'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  );
}
