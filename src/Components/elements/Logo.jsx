import React from "react";
import "./styles/Logo.css"; // Make sure to import the corresponding CSS file

const Logo = () => {
  return (
    <button data-text='Awesome' className='button'>
      <span className='actual-text'>&nbsp;Divyam&nbsp;</span>
      <span className='hover-text' aria-hidden='true'>
        &nbsp;Divyam&nbsp;
      </span>
    </button>
  );
};

export default Logo;
