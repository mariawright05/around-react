import React from 'react';

function PopupWithForm(props) {
  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__profile-wrapper">
        <button className="popup__close-button" onClick={props.onClose}></button>
        <form action="#" className="popup__form">
          <h3 className="popup__heading">{props.title}</h3>
          {props.children}
          <input type="submit" className="popup__button" value="Save" disabled />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;