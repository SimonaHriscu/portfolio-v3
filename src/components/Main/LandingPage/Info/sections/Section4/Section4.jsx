import React from 'react';
import configData from "../config.json";


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
  return (
    <section id={'contact'}>
      <div className="contact-section">
        <h1>Contact</h1>
        <p>Let's work together! Get in touch :</p>
        <form
        onSubmit={this.submitForm}
        action={`${configData.SERVER_URL}${configData.END_URL}`}
        method="POST"
      >
          <label >First name</label>
          <input type="firstName" id="firstName" required />
          <label >Last name</label>
          <input type="lastName" id="lastName" />
          <label >E-mail</label>
          <input
            type="e-mail"
            id="e-mail"
            placeholder="example@email.com"
            required
          />
          <label >Message:</label>
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
          {status === "SUCCESS" ? <p>Thanks for you message!</p> :''}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    </section>
  );
}


submitForm(ev) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      this.setState({ status: "SUCCESS" });
    } else {
      this.setState({ status: "ERROR" });
    }
  };
  xhr.send(data);
}
}


