import React from 'react';

export const Prices = () => {

  return (
    <section className="prices" name="prices">
      <h2 className="prices__title">Pricing</h2>
      <div className="prices__cards">
        <div className="prices__card prices__card--redish">
          <p className="prices__subtitle">Basic</p>
          <p className="prices__price prices__price--redish">$0</p>
          <ul className="prices__items">
            <li className="prices__item prices__item--yes">MB HDD</li>
            <li className="prices__item prices__item--yes">1 Subdomain</li>
            <li className="prices__item prices__item--yes">2 E-mails</li>
            <li className="prices__item prices__item--not">Two years licence</li>
            <li className="prices__item prices__item--not">Full support</li>
          </ul>
          <button className="prices__btn prices__btn--redish">Begin</button>
        </div>

        <div className="prices__card prices__card--primary">
          <p className="prices__subtitle">Professional</p>
          <p className="prices__price prices__price--primary">$25</p>
          <p className="prices__limitedOffert">Limited Offert</p>
          <ul className="prices__items">
            <li className="prices__item prices__item--yes"> 500 MB HDD</li>
            <li className="prices__item prices__item--yes">2 Subdomain</li>
            <li className="prices__item prices__item--yes">5 E-mails</li>
            <li className="prices__item prices__item--yes">Two years licence</li>
            <li className="prices__item prices__item--not">Full support</li>
          </ul>
          <button className="prices__btn  prices__btn--primary">Begin</button>
        </div>

        <div className="prices__card prices__card--greenish">
          <p className="prices__subtitle">Premium</p>
          <p className="prices__price prices__price--greenish">$60</p>
          <p className="prices__limitedOffert">Limited Offert</p>
          <ul className="prices__items">
            <li className="prices__item prices__item--yes">2 GB HDD</li>
            <li className="prices__item prices__item--yes">5 Subdomain</li>
            <li className="prices__item prices__item--yes">20 E-mails</li>
            <li className="prices__item prices__item--yes">Two years licence</li>
            <li className="prices__item prices__item--yes">Full support</li>
          </ul>
          <button className="prices__btn prices__btn--greenish">Begin</button>
        </div>
      </div>

    </section>
  )
}