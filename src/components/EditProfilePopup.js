import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [userName, setUserName] = React.useState({});
  const [userAbout, setUserAbout] = React.useState({});

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleUserAboutChange = (e) => {
    setUserAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.handleUpdateUser({
      name: userName,
      about: userAbout
    });
  }

  return (
    <PopupWithForm name="edit-profile" title="Edit Profile" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__info">
        <div className="popup__label">
          <input id="profile-name" type="text" name="name" className="popup__field popup__field_type_name" placeholder={currentUser.name} required minLength="2" maxLength="40" onChange={handleUserNameChange} />
          <span id="profile-name-error" className="popup__error"></span>
        </div>
        <div className="popup__label">
          <input id="profile-title" type="text" name="title" className="popup__field popup__field_type_title" placeholder={currentUser.about} required minLength="2" maxLength="200" onChange={handleUserAboutChange} />
          <span id="profile-title-error" className="popup__error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditProfilePopup;