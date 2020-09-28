import React from 'react';

function Section4() {
  return (
    <section id={'section_4'}>
      <div className="contact-section">
        <h1>Contact</h1>
        <p>Let's work together! Get in touch :</p>
        <form id="contact-form" method="post" action="contact-form-handler.php">
          {' '}
          <label htmlFor="inputName">First name</label>
          <input
            type="firstName"
            id="firstName"
            className="form-control"
            required
          />
          <label htmlFor="inputName">Last name</label>
          <input type="lastName" id="lastName" className="form-control" />
          <label htmlFor="inputEmail4">E-mail</label>
          <input
            type="e-mail"
            id="e-mail"
            placeholder="example@email.com"
            required
          />
          <label htmlFor="text">Message:</label>
          <textarea
            name="message"
            id="textMsg"
            rows="10"
            className="form-control"
            required
            placeholder="Your message here"
          ></textarea>
          <button type="submit" className="form-control" value="SEND MESSAGE">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Section4;
