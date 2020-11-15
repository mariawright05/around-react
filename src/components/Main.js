import React from 'react';
import api from '../utils/api.js';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main ({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick }) {

  // USER INFO
  const currentUser = React.useContext(CurrentUserContext);

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

  return (
    <main>
      <section className="profile">
        <div className="profile__user-container">
          <div className="profile__avatar-container">
            <img className="profile__user-avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} alt={currentUser.name} />
            <button className="profile__user-avatar_overlay" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__user-info">
            <h1 className="profile__user-name">{currentUser.name}</h1>
            <p className="profile__user-about">{currentUser.about}</p>
            <button className="profile__edit-button" onClick={handleEditProfileClick}></button>
          </div>
        </div>
        <button className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section>
        <ul className="photo-grid">
          {cards.map((card, index) => 
            <Card 
              key={index}
              card={card}
              name={card.name}
              link={card.link}
              likes={card.likes}
              _id={card._id}
              owner={card.owner}
              onCardClick={() => handleCardClick(card.link, card.name)}
              onCardLike={() => handleCardLike(card)}
              onCardDelete={() => handleCardDelete(card)} />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;



