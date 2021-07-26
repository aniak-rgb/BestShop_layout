import React, { useState } from 'react';
import mail from '../assets/Mail Icon.svg';
import phone from '../assets/Phone Icon.svg'

const validationName = (form) => {
  if (!form.name) {
    return "imię jest wymagane!"
  } else if (form.name.includes(" ")) {
    return "imię nie może zawierać spacji"
  } else if (form.name.length < 2) {
    return "imię musi zawierać conajmniej 2 znaki"

  }
  return null
}

const validationMail = (form) => {
  if (!form.mail) {
    return "mail jest wymagany!"
  } else if (!form.mail.includes("@")) {
    return "mail musi zawierać @!"
  }
  return null
}


const validationCheckbox = (checked) => {
  if (!checked) {
    return "zaakceptuj regulamin!"
  }
}

export const Contact = () => {

  const [form, setForm] = useState({ name: "", mail: "" });
  const [checked, setChecked] = useState(false)
  const [errorName, setErrorName] = useState(null);
  const [errorMail, setErrorMail] = useState(null);
  const [errorChecked, setErrorChecked] = useState(null);



  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckbox = (e) => {
    setChecked(!checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsgName = validationName(form);
    if (errorMsgName) {
      setErrorName(errorMsgName)
    } else {
      setErrorName(null)
    };
    const errorMsgMail = validationMail(form);
    if (errorMsgMail) {
      setErrorMail(errorMsgMail)
    } else {
      setErrorMail(null)
    };

    const errorMsgChecked = validationCheckbox(checked);
    if (errorMsgChecked) {
      setErrorChecked(errorMsgChecked)
    } else {
      setErrorChecked(null)
    }


  }

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

          <form action="" className="contact__form" onSubmit={handleSubmit}>

            <label className="contact__label" htmlFor="" for="name">Name</label>
            <input type="text" className="contact__input" id="name" name="name" value={form.name} onChange={handleChange} />
            <div className="errorMsgName">{errorName && <p>{errorName}</p>}</div>

            <label htmlFor="" className="contact__label contact__label--email" for="email">E-mail</label>
            <input type="text" className="contact__input" id="email" name="mail" value={form.mail} onChange={handleChange} />
            <div className="errorMsgMail">{errorMail && <p>{errorMail}</p>}</div>

            <div className="contact__agreeArea">

              <label htmlFor="" className="contact__agree" for="agree">
                i hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the european parliament’s and council of the european union regulation on the protection of natural persons as of 27 april 2016, with regard to the processing of personal data and on the free movement of such data, and repealing directive 95/46/ec (data protection directive)
                <input type="checkbox" className="contact__checkbox" id="agree" name="checkbox" value={checked} onChange={handleCheckbox} />
                <span className="contact__checkboxSpan"></span>
              </label>

            </div>
            <div className="errorMsgChecked">{errorChecked && <p>{errorChecked}</p>}</div>

            <button className="contact__btn">Send</button>
          </form>
        </div>
      </div>

    </section>
  )
}