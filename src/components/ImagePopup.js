import React from 'react';

function ImagePopup() {
  return(
    <div id="abc" className="popup popup_type_display-image">
      <div className="popup__image-wrapper">   
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
        <button className="popup__close-button"></button>
      </div>
    </div>
  );
}

export default ImagePopup;