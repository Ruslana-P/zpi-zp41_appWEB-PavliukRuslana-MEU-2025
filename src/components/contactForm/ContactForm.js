import React, { useState } from "react";
import { SectionWrapper } from "./styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // тут ми маємо вислати дані на сервер
    alert("Form submitted!");
  };

  return (
    <SectionWrapper>
      <h2>
        HAVE MORE QUESTIONS ?<span>WE ARE HERE FOR YOU!</span>
        JUST CONTACT US
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <label>Mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label>Please enter your question here</label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Enter your question"
            required
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </SectionWrapper>
  );
};

export default ContactForm;
