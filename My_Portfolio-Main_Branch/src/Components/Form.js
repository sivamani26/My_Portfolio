import "./Form.css";
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/form/submitform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form', error);
  }
};


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          value={formData.message}
          placeholder="Type your message here"
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
