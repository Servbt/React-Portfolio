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
    <div>
      <h2>I'd love to get in touch, please let me know if you need anything!</h2>
      
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;