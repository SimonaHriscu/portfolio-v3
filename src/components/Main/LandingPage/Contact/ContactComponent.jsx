import React from 'react';

const links = [
  'https://www.linkedin.com/in/simona-hriscu/',
  'https://github.com/SimonaHriscu',
  'mailto:simona_hriscu@yahoo.com?Subject=Hello',
];
const names = ['logo-linkedin', 'logo-github', 'mail'];

function Contact() {
  return (
    <div className="contact">
      <ul>
        <li>get in touch</li>
        <li>
          <div></div>
        </li>
        {names.map((name, i) => (
          <li key={i} className="contact-icons">
            {' '}
            <a href={links[i]} target="_black">
              {' '}
              <ion-icon name={name}></ion-icon>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
