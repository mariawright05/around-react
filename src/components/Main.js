import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main ({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick, cards, handleCardLike, handleCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

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



