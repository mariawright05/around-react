import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api.js';

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

  // LIKES & DISLIKES API
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    let res;

    if (isLiked === false) {
      res = api.cardLikeAdd(card._id)
      } else {
      res = api.cardLikeRemove(card._id)
    }
    res.then((newCard) => {
      // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c)
      // Update the state
      setCards(newCards);
    })
    .catch(err => console.log(err));
  }

  // TRASH API
  function handleCardDelete(card) {
    api.removeCard(card._id)
    .then(() => {
      const newCardList = cards.filter((c) => c._id !== card._id);
      setCards(newCardList);
    })
    .catch(err => console.log(err));
  }

  // API
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCardList()
    .then((res) => {
      setCards(res.map((card) => ({
        link:card.link,
        name: card.name,
        likes: card.likes,
        _id: card._id,
        owner: card.owner
      })));
    })
    .catch(err => console.log(err))
  }, []);

  // USER DATA
  const [currentUser, setCurrentUser] = React.useState('');
  
  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => setCurrentUser(res))
    .catch(err => console.log(err))
  }, []);

  function handleUpdateUser(userInfo) {
      api.setUserInfo(userInfo)
      .then(res => {setCurrentUser({name:res.name, about:res.about, avatar:res.avatar})})
      .then(() => {closeAllPopups()})
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
    .then(res => {setCurrentUser({name:res.name, about:res.about, avatar:res.avatar})})
    .then(() => {closeAllPopups()})
    .catch(err => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="page__container">

        <Header />
        <Main 
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleAddPlaceClick={handleAddPlaceClick}
          handleCardClick={handleCardClick}
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />
        <Footer />

      </div> 
      <EditProfilePopup isOpen={isEditProfilePopopOpen} onClose={closeAllPopups} handleUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} handleUpdateAvatar={handleUpdateAvatar} />

      

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
    </CurrentUserContext.Provider>
  );
}

export default App;
