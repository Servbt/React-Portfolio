import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>

      <h2>I'd love to get in touch, please let me know if there's anything I can do for you!</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <button type="button" class="btn btn-primary btn-lg">Submit</button>

    </div>
  );
}
