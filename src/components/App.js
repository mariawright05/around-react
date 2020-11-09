import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App(props) {

  // POPUPS
  // set states for popups
  const [isEditProfilePopopOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  // set states for image popups
  const [selectedLink, setSelectedLink] = React.useState('');
  const [selectedName, setSelectedName] = React.useState('');

  // handler functions for popups  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const handleCardClick = (link, name) => {
    setSelectedCard(true);
    setSelectedLink(link);
    setSelectedName(name);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };



  return (
    <div className="page">
      <div className="page__container">

        <Header />
        <Main 
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleAddPlaceClick={handleAddPlaceClick}
          handleCardClick={handleCardClick}
        />
        <Footer />

      </div> 
      <PopupWithForm name="edit-profile" title="Edit Profile" isOpen={isEditProfilePopopOpen} onClose={closeAllPopups}>
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
      </PopupWithForm>

      <PopupWithForm name="edit-avatar" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__info">
          <div className="popup__label">
            <input id="profile-avatar" type="url" name="avatar" className="popup__field popup__field_type_url" placeholder="Profile picture URL" required />
            <span id="profile-avatar-error" className="popup__error"></span>
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="delete-card" title="Are your sure?">
        <h3 className="popup__heading popup__heading_type_no-inputs">Are you sure?</h3>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
      </PopupWithForm>

      <ImagePopup 
        onClose={closeAllPopups}
        isOpen={selectedCard}
        link={selectedLink}
        name={selectedName}
      />

    </div>
  );
}

export default App;
