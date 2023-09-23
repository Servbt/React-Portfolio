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
    <div className="main-content-2 container">
      <div className="row">
        <div className="col-md-6 ">
          <div className=''>
            <h2>I'd love to get in touch, let me know if you need anything!</h2>

            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <label className='d-block'>Name</label>
                <input className='form-control' type="text" name="user_name" />
              </div>
              <div className='form-group'>
                <label className='d-block'>Email</label>
                <input className='form-control' type="email" name="user_email" />
              </div>
              <div className='form-group'>
                <label className='d-block'>Message</label>
                <textarea className='form-control' name="message" />
              </div>
              <input className='btn btn-primary' type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="col-md-6">
          {/* Content for the right side */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;