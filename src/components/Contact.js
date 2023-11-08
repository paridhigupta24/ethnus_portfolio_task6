import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Contact.css'; // Create a separate CSS file for styling

const Contact = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');

  // State variable for submission status
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    // You can add your own logic for submitting the form data

    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobileNumber('');
    setCountry('');
    setQuery('');

    // Mark the form as submitted
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="contact-form">
        <h2>Drop Your Contact Information</h2>
        <p>We will contact you.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button type="submit">Let's Talk</button>
          {submitted && (
            <p className="success-message">Thank you! We will be contacting you shortly.</p>
          )}
        </form>
      </div>
      <div className="contact-info"> <p>
        <span>Email: paridhig.gupta@gmail.com</span> <span>VIT Vellore</span>
        </p>
      </div>
      <div className="contact-footer">
        <a href="your-facebook-link" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="your-instagram-link" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="your-github-link" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a href="your-linkedin-link" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <div className="contact-copyright">
        <p>&copy; {new Date().getFullYear()} Paridhi Gupta. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
