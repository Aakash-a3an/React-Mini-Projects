import React, { useState } from 'react';
import { LuCodesandbox } from "react-icons/lu";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";


const PopupAd = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle closing the popup ad
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="popup-container">
      {/* Display the popup only if isOpen state is true */}
      {isOpen && (
        <div className="popup">
          {/* Close button */}
          <button className='close-cross' onClick={handleClose}><RiCloseCircleFill size={25} /></button>
          {/* Popup content */}
          <div className="popup-content">
            <h2>Hello There!</h2>
            <p>Do follow for more content like this</p>
            <a href='https://www.linkedin.com/in/aakash-n0dev/'><button className='lead-link'><BsLinkedin size={25} /></button></a>
          </div>
        </div>
      )}

      {/* Button to open the popup */}
      {!isOpen && (
        <button className="open-btn" onClick={() => setIsOpen(true)}><LuCodesandbox size={35} />
        </button>
      )}
    </div>
  );
};

export default PopupAd;
