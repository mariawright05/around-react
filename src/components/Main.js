import React from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main ({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick }) {

  // API
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAppInfo()
    .then(([userData, initialCardList]) => {
      setUserName(userData.name);
      setUserAvatar(userData.avatar);
      setUserDescription(userData.description);
      return(initialCardList);
    })
    .then((res) => {
      setCards(res.map((card) => ({
        link:card.link,
        name: card.name,
        likes: card.likes,
        _id: card._id
      })));
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__user-container">
          <div className="profile__avatar-container">
            <img className="profile__user-avatar" style={{ backgroundImage: `url(${userAvatar})` }} alt={userName} />
            <button className="profile__user-avatar_overlay" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__user-info">
            <h1 className="profile__user-name">{userName}</h1>
            <p className="profile__user-about">{userDescription}</p>
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
              onCardClick={() => handleCardClick(card.link, card.name)} />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;



