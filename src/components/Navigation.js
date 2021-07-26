import React from 'react';
import {
  Link,
} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export const Navigation = () => {

  return (
    <section className="navigation">
      <Link to='/' className="navigation__logo">BestShop</Link>
      <nav className="navigation__nav">
        <ul className="navigation__items">
          <li className="navigation__item">
            <Scroll.Link to='whyUs' offset={-150} spy={true} smooth={true} className="navigation__link">Why Us</Scroll.Link>
          </li>

          <li className="navigation__item">
            <Scroll.Link to='benefits' spy={true} smooth={true} className="navigation__link">Benefits</Scroll.Link>
          </li>

          <li className="navigation__item">
            <Scroll.Link to='prices' offset={-180} spy={true} smooth={true} className="navigation__link">Prices</Scroll.Link>
          </li>

          <li className="navigation__item">
            <Scroll.Link to='contact' spy={true} smooth={true} className="navigation__link">Contact</Scroll.Link>
          </li>
        </ul>
      </nav>

      <nav className="hamburger__nav">
        <input type="checkbox" className="hamburger__checkbox" id="hamburger__checkbox" />
        <label for="hamburger__checkbox" className="hamburger__label">
          <span ></span>
          <span></span>
          <span></span>
        </label>
        <ul className="hamburger__items">
          <li className="hamburger__item">
            <Scroll.Link to='whyUs' spy={true} smooth={true} className="hamburger__link">Why Us</Scroll.Link>
          </li>


          <li className="hamburger__item">
            <Scroll.Link to='benefits' spy={true} smooth={true} className="hamburger__link">Benefits</Scroll.Link>
          </li>

          <li className="hamburger__item">
            <Scroll.Link to='prices' spy={true} smooth={true} className="hamburger__link">Prices</Scroll.Link>
          </li>

          <li className="hamburger__item">
            <Scroll.Link to='contact' spy={true} smooth={true} className="hamburger__link">Contact</Scroll.Link>
          </li>
        </ul>


      </nav>

    </section>
  )
}