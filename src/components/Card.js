import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {

  // USER INFO
  const currentUser = React.useContext(CurrentUserContext);
  
  // Checking if you are the owner of the current card
  const isOwn = props.card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = (
    `${isOwn ? 'photo-grid__remove' : 'photo-grid__remove_hidden'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-grid__item">
    <div className="photo-grid__image" style={{ backgroundImage: `url(${props.link})` }} onClick={handleClick}></div>
      <button className={cardDeleteButtonClassName}></button>
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