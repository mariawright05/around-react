import React from 'react';
import avatar from '../images/avatar.jpg';

function Main () {

  const handleEditAvatarClick = () => {
    const avatarPopup = document.querySelector(".popup_type_edit-avatar");
    avatarPopup.classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    const profilePopup = document.querySelector(".popup_type_edit-profile");
    profilePopup.classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    const cardPopup = document.querySelector(".popup_type_add-card");
    cardPopup.classList.add('popup_opened');
  };


  return (
    <main>
      <section className="profile">
        <div className="profile__user-container">
          <div className="profile__avatar-container">
            <img className="profile__user-avatar" src={avatar} alt="" />
            <button className="profile__user-avatar_overlay" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__user-info">
            <h1 className="profile__user-name">Jacques Cousteau</h1>
            <p className="profile__user-about">Explorer</p>
            <button className="profile__edit-button" onClick={handleEditProfileClick}></button>
          </div>
        </div>
        <button className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section>
        <ul className="photo-grid">
        </ul>
      </section>
    </main>
  );
}

export default Main;



