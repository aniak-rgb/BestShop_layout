import React from 'react';
import background from '../assets/Background.png'

export const Header = () => {

  return (
    <section className="header">
      <h1 className="header__title">Sell More!</h1>
      <p className="header__text">Lorem ipsum dolor sit amet cono esse soluta tempore dolorum modi.</p>
      <button className="header__btn">Open your shop</button>
      <img className="header__img" src={background} alt="notebook" />
    </section>
  )
}