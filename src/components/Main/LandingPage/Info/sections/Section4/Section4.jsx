import React from 'react';

function Section4() {
  return (
    <section id={'contact'}>
      <div className="contact-section">
        <h1>Contact</h1>
        <p>Let's work together! Get in touch :</p>
        <form>
          {' '}
          <label htmlFor="inputName">First name</label>
          <input type="firstName" id="firstName" required />
          <label htmlFor="inputName">Last name</label>
          <input type="lastName" id="lastName" />
          <label htmlFor="inputEmail4">E-mail</label>
          <input
            type="e-mail"
            id="e-mail"
            placeholder="example@email.com"
            required
          />
          <label htmlFor="text">Message:</label>
          <textarea
            name="text"
            id="textMsg"
            rows="10"
            required
            placeholder="Your message here"
          ></textarea>
          <a href="mailto:simona_hriscu@yahoo.com?Subject=Hello">
            <button type="submit">Send</button>
          </a>
        </form>
      </div>
    </section>
  );
}

export default Section4;
