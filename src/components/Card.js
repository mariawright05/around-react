import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {

  // USER INFO
  const currentUser = React.useContext(CurrentUserContext);
  

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-grid__item">
    <div className="photo-grid__image" style={{ backgroundImage: `url(${props.link})` }} onClick={handleClick}></div>
      <button className="photo-grid__remove"></button>
      <div className="photo-grid__title-container">
        <h2 className="photo-grid__title">{props.name}</h2>
        <div className="photo-grid__like-wrapper">
          <button className="photo-grid__like"></button>
          <p className="photo-grid__like-count">{props.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;