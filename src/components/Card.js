import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-grid__item" onClick={handleClick}>
    <div className="photo-grid__image" style={{ backgroundImage: `url(${props.link})` }}></div>
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