import React from 'react';
import mail from '../assets/Mail Icon.svg';
import phone from '../assets/Phone Icon.svg'

export const Contact = () => {

  return (
    <section className="contact" name="contact">
      <div className="contact__area">
        <div className="contact__txt">
          <h2 className="contact__title">Any question?</h2>
          <p className="contact__subtitle">Leave your email address or contact us!</p>
          <div className="contact__media">
            <div className="contact__mail">
              <img src={mail} alt="mail" />
              <p className="contact__text">Info@bestshop.com</p>

            </div>
            <div className="contact__phone">
              <img src={phone} alt="phone" />
              <p className="contact__text">123 123 345</p>
            </div>


          </div>
        </div>

        <div className="contact__formArea">
          <form action="" className="contact__form">
            <label className="contact__label" htmlFor="" for="name">Name</label>
            <input type="text" className="contact__input" id="name" />
            <label htmlFor="" className="contact__label contact__label--email" for="email">E-mail</label>
            <input type="text" className="contact__input" id="email" />

            <div className="contact__agreeArea">
              <input type="checkbox" className="contact__checkbox" id="agree" />
              <span className="contact__checkboxSpan"></span>
              <label htmlFor="" className="contact__agree" for="agree">

                i hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the european parliament’s and council of the european union regulation on the protection of natural persons as of 27 april 2016, with regard to the processing of personal data and on the free movement of such data, and repealing directive 95/46/ec (data protection directive)</label>
            </div>

            <button className="contact__btn">Send</button>
          </form>
        </div>
      </div>

    </section>
  )
}