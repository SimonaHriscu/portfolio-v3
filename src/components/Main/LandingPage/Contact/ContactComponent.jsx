import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <ul>
        <li>get in touch</li>
        <li>
          <div></div>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/simona-hriscu/" target="_black">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>{' '}
        </li>
        <li>
          <a href="https://github.com/SimonaHriscu" target="_black">
            {' '}
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li>
          <a href="mailto:simona_hriscu@yahoo.com?Subject=Hello">
            <ion-icon name="mail"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
