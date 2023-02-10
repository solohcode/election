import React from 'react';

const FooterCopyright = () => {
	const date = new Date()
  return (
    <div className="ps-copyright">
      <img src="/svg/box-logo.svg" alt="box" />
      <p>
        &copy;{date.getFullYear()} Election Updates. <br /> All rights reversed.
      </p>
    </div>
  );
};

export default FooterCopyright;
