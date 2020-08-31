import React from 'react';

function Section4() {
  return (
    <section id={'section_4'}>
      <div className="contact-section">
        <h1>Contact</h1>
        <p>Let's work together! Get in touch :</p>
        <form>
          {' '}
          <label for="inputName">First name</label>
          <input type="firstName" id="firstName" required />
          <label for="inputName">Last name</label>
          <input type="lastName" id="lastName" />
          <label for="inputEmail4">E-mail</label>
          <input
            type="e-mail"
            id="e-mail"
            placeholder="example@email.com"
            required
          />
          <label for="text">Message:</label>
          <textarea
            name="text"
            id="textMsg"
            rows="10"
            required
            placeholder="Your message here"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Section4;
