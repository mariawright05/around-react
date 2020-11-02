import React from 'react';
import avatar from '../images/avatar.jpg';

function Main () {
  return (
    <main>
      <section className="profile">
        <div className="profile__user-container">
          <div className="profile__avatar-container">
            <img className="profile__user-avatar" src={avatar} alt="" />
            <button className="profile__user-avatar_overlay"></button>
          </div>
          <div className="profile__user-info">
            <h1 className="profile__user-name">Jacques Cousteau</h1>
            <p className="profile__user-about">Explorer</p>
            <button className="profile__edit-button"></button>
          </div>
        </div>
        <button className="profile__add-button"></button>
      </section>

      <section>
        <ul className="photo-grid">
        </ul>
      </section>
    </main>
  );
}

export default Main;



