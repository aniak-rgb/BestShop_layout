import React from 'react';
import laptop from '../assets/Macbook.png';
import iphone from '../assets/iPhone.png';
import trumpet from '../assets/Trumpet.png';

export const Benefits = () => {

  return (
    <section className="benefits" name="benefits">
      <div className="benefits__box">
        <div className="benefits__txt">
          <h2 className="benefits__title">Be always first</h2>
          <p className="benefits__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quae ad ipsa eaque ullam laboriosam quoaccusamus tempore facere illo blanditiis. Ducimus voluptatem quos architecto?</p>
          <div className="benefits__line benefits__line--redish"></div>
        </div>
        <div className="benefits__imgArea">
          <img src={laptop} alt="laptop" className="benefits__laptopImg" />

          <div className="benefits__shape--square"></div>
        </div>
      </div>

      <div className="benefits__box benefits__box--iphone">
        <div className="benefits__imgArea">
          <img src={iphone} alt="iphone" className="benefits__iphoneImg" />
          <div className="benefits__shape--cicle"></div>
        </div>
        <div className="benefits__txt">
          <h2 className="benefits__title">Your shop is where you are!</h2>
          <p className="benefits__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quae ad ipsa eaque ullam laboriosam quoaccusamus tempore facere illo blanditiis. Ducimus voluptatem quos architecto?</p>
          <div className="benefits__line benefits__line--primary"></div>
        </div>
      </div>

      <div className="benefits__box--trumpet">
        <div className="benefits__txt benefits__txt--trumpet">
          <h2 className="benefits__title">Your shop is the best!</h2>
          <p className="benefits__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quae ad ipsa eaque ullam laboriosam quoaccusamus tempore facere illo blanditiis. Ducimus voluptatem quos architecto?</p>
          <div className="benefits__line benefits__line--greenish"></div>
        </div>

        <div className="benefits__trumpet  benefits__trumpet--img">
          <img src={trumpet} alt="trumpet" className="trumpet__img" />
        </div>
      </div>

    </section>
  )
}