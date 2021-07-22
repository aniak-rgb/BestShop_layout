import React from 'react';

export const WhyUs = () => {

  return (
    <section className="whyUs" name="whyUs">
      <h2 className="whyUs__title">The most popular sales platform in country</h2>
      <div className="whyUs__container">
        <div className="whyUs__box">
          <div className="whyUs__cicle cicle__redish">
            <div className="whyUs__icon--person"></div>
          </div>

          <p className="whyUs__number">100000+</p>
          <p className="whyUs__txt">daily entries</p>
        </div>

        <div className="whyUs__box">
          <div className="whyUs__cicle cicle__blueish">
            <div className="whyUs__icon--eye"></div>
          </div>

          <p className="whyUs__number">200000+</p>
          <p className="whyUs__txt">seen products every day</p>
        </div>

        <div className="whyUs__box">
          <div className="whyUs__cicle cicle__greenish">
            <div className="whyUs__icon--catalog"></div>
          </div>
          <p className="whyUs__number">100000+</p>
          <p className="whyUs__txt">added posts daily</p>
        </div>
      </div>

    </section>
  )
}