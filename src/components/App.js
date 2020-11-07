import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="page">
      <div className="page__container">

        <Header />
        <Main />
        <Footer />

      </div> 
      <PopupWithForm name="edit-profile" title="Edit Profile">
        <fieldset className="popup__info">
          <div className="popup__label">
            <input id="profile-name" type="text" name="name" className="popup__field popup__field_type_name" placeholder="Name" required minLength="2" maxLength="40" />
            <span id="profile-name-error" className="popup__error"></span>
          </div>
          <div className="popup__label">
            <input id="profile-title" type="text" name="title" className="popup__field popup__field_type_title" placeholder="About me" required minLength="2" maxLength="200" />
            <span id="profile-title-error" className="popup__error"></span>
          </div>
        </fieldset>
        <input type="submit" className="popup__button" value="Save" disabled />
      </PopupWithForm>

      <PopupWithForm name="edit-avatar" title="Change profile picture">
        <fieldset className="popup__info">
          <div className="popup__label">
            <input id="profile-avatar" type="url" name="avatar" className="popup__field popup__field_type_url" placeholder="Profile picture URL" required />
            <span id="profile-avatar-error" className="popup__error"></span>
          </div>
        </fieldset>
        <input type="submit" className="popup__button" value="Save" disabled />
      </PopupWithForm>

      <PopupWithForm name="delete-card" title="Are your sure?">
        <h3 className="popup__heading popup__heading_type_no-inputs">Are you sure?</h3>
        <input type="submit" className="popup__button" value="Yes" />
      </PopupWithForm>

      <PopupWithForm name="add-card" title="New Place">
        <fieldset className="popup__info">
          <div className="popup__label">
            <input id="card-title" type="text" name="title" className="popup__field popup__field_type_card-title" placeholder="Title" required minLength="1" maxLength="30" />
            <span id="card-title-error" className="popup__error"></span>
          </div>
          <div className="popup__label">
            <input id="card-url" type="url" name="url" className="popup__field popup__field_type_url" placeholder="Image link" required />
            <span id="card-url-error" className="popup__error"></span>
          </div>
        </fieldset>
        <input type="submit" className="popup__button" value="Save" disabled />
      </PopupWithForm>

      <ImagePopup />

      




      <template className="card-template">
        <li className="photo-grid__item">
          <div className="photo-grid__image"></div>
          <button className="photo-grid__remove"></button>
          <div className="photo-grid__title-container">
            <h2 className="photo-grid__title">#</h2>
            <div className="photo-grid__like-wrapper">
              <button className="photo-grid__like"></button>
              <p className="photo-grid__like-count"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
