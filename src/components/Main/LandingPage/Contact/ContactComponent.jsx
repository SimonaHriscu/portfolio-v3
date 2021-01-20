import React from 'react';

const links = [
  'https://www.linkedin.com/in/simona-hriscu/',
  'https://github.com/SimonaHriscu',
  'mailto:simona.hriscu06@gmail.com?Subject=Hello',
];
const names = ['logo-linkedin', 'logo-github', 'mail'];

export default function Contact() {
  return (
    <div className="contact">
      <ul>
        <li>get in touch</li>
        <li>
          <div></div>
        </li>
        {names.map((name, i) => (
          <li key={i} className="contact-icons">
            <a href={links[i]} target="_black">
              <ion-icon name={name}/>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

