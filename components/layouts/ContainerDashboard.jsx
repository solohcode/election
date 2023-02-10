import React from 'react';
import Head from 'next/head';
// import FooterCopyright from '../shared/footers/FooterCopyright';
import MenuSidebar from '../shared/menus/MenuSidebar';
// import WidgetEarningSidebar from '../shared/widgets/WidgetEarningSidebar';
// import WidgetUserWelcome from '../shared/widgets/WidgetUserWelcome';
import HeaderDashboard from '../shared/headers/HeaderDashboard';
import HeaderMobile from '../shared/headers/HeaderMobile';
// import Router from 'next/router';

const ContainerDashboard = ({ children, title, icon }) => {
  const titleView = 'Election Update';

    return (
		<>
		  <HeaderMobile />
      <div className="martfury-admin">
        <Head>
          <title>{titleView}</title>
        </Head>
        <div className='top-header'>
          <div className='align-items-center d-flex'>
            <img src='/logo.png' alt='logo' width={50} height={50} />
            <span>all progressives congress - APC</span>
          </div>
          <div></div>
        </div>
        <main className="ps-main">
          <div className="ps-main__sidebar">
            <div className="ps-sidebar">
              <div className="ps-sidebar__content">
                <div className="ps-sidebar__center">
                  <MenuSidebar />
                </div>
                <div className='mt-5'>
                  <img src="/svg/box-logo.svg" alt="box" />
                </div>
              </div>
            </div>
          </div>
          <div className="ps-main__wrapper">
            <HeaderDashboard title={title} icon={icon} />
            {children}
          </div>
        </main>
      </div>
		</>
    );
};

export default ContainerDashboard;
