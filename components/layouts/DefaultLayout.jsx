import React from 'react';
import Head from './modules/Head';
import DrawerMenu from '../shared/drawers/DrawerMenu';

const DefaultLayout = ({ children }) => {
    return (
      <div id="pss">
        <Head />
        {children}
        <DrawerMenu />
        <div id="loader-wrapper">
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </div>
    );
};

export default DefaultLayout;
