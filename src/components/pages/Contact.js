import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kce3qj8', 'template_ly42cay', form.current, 'Ydor8Sa-i_rkpp1N-')
      .then((result) => {
        console.log(result.text);
        console.log('message sent!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="main-content-2 container p-5 ">
      <div className="row ">
        <div className=" col-md-6 align-self-top">
          <h2 className='lemme-know text-left'>Let me know if you'd like to get in touch!</h2>
        </div>
      </div>
      <div className="col-md-6">
        <div className='py-2'>

          <form ref={form} onSubmit={sendEmail}>
            <div className='form-group'>
              <label className='d-block py-1 cust-form'>Name</label>
              <input className='form-control' type="text" name="user_name" />
            </div>
            <div className='form-group'>
              <label className='d-block py-1 cust-form'>Email</label>
              <input className='form-control' type="email" name="user_email" />
            </div>
            <div className='form-group'>
              <label className='d-block py-1 cust-form'>Message</label>
              <textarea className='form-control' name="message" />
            </div>
            <input className='d-block btn btn-dark mt-2 mb-5 custom-btn' type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;