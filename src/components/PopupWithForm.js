import React from 'react';

function PopupWithForm(props) {
  return(
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container popup__profile-wrapper">
        <button className="popup__close-button"></button>
        <form action="#" className="popup__form">
          <h3 className="popup__heading">{props.title}</h3>
          <div>{props.children}</div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;