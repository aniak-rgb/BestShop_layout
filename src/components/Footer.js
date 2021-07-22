import React from 'react';
import {
  Link,
} from 'react-router-dom';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/Twitter.svg'

export const Footer = () => {

  return (
    <section className="footer">
      <div className="footer__txt">
        <Link to='/' className="navigation__logo footer__logo">BestShop</Link>
        <p className="footer__rights">© 2019 BestShop LTD, All Rights Reserved

        </p>
      </div>
      <div className="footer__socialMedia">
        <img src={facebook} alt="facebook" className="footer__facebook" />
        <img src={twitter} alt="twitter" />
      </div>

    </section>
  )
}