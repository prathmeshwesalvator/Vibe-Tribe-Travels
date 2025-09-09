import React, { useState, useRef } from "react";
import "./ContactPage.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";  // <-- import emailjs

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  destinationInterest: "",
  message: "",
};

const destinationOptions = [
  { value: "", label: "Select Destination Interest" },
  { value: "beach", label: "🏖️ Beach" },
  { value: "mountain", label: "🏔️ Mountains" },
  { value: "city", label: "🏙️ City" },
  { value: "culture", label: "🏛️ Culture" },
  { value: "wildlife", label: "🦁 Wildlife" },
  { value: "luxury", label: "💎 Luxury" },
  { value: "others", label: "🌍 Others" }
];

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: (
      <a href="mailto:info.vibetribetravels@gmail.com" className="contact-link">
        info.vibetribetravels@gmail.com
      </a>
    ),
  },
  {
    icon: "📞",
    title: "Phone",
    value: (
      <a href="tel:+919309898602" className="contact-link">
        +91 9309898602 / +91 8080674676
      </a>
    ),
  },
  {
    icon: "📍",
    title: "Office",
    value: "Ambernath , Maharashtra , India",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(); // <-- ref for form

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      formData.message.trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_3brwh39",      // replace with EmailJS service ID
        "template_p8sd9me",     // replace with EmailJS template ID
        formRef.current,        // form reference
        "_koHg-ANN9elktUd_"       // replace with EmailJS public key
      )
      .then(
        () => {
          setSubmitting(false);
          setSubmitted(true);
          setFormData(initialFormState);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setSubmitting(false);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section
        className="page-hero"
        style={{ paddingTop: "5.5rem", display: "flex", justifyContent: "center" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>✨ Let's Plan Your Dream Trip</h1>
          <p>Our travel experts are here to help you create unforgettable memories</p>
          <div className="underline"></div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>📬 Get In Touch</h2>
            <p>
              Ready to start your next adventure? Contact us and let's plan the trip of your dreams.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-info"
            >
              <h3>🧭 Let's Start Planning</h3>
              <p>
                Whether it's a romantic getaway, family adventure, or solo exploration - 
                we'll make sure every detail is perfect. Reach out and let us craft your next journey!
              </p>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="contact-method"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <span className="method-icon">{method.icon}</span>
                    <div>
                      <h5>{method.title}</h5>
                      <p>{method.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form"
            >
              <h3>📨 Send Us a Message</h3>
              {submitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">🎉</div>
                  <h4>Thank you for reaching out!</h4>
                  <p>We've received your message and will get back to you soon.</p>
                  <button
                    className="btn-submit secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-row">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <select
                    name="destinationInterest"
                    value={formData.destinationInterest}
                    onChange={handleInputChange}
                  >
                    {destinationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your dream trip *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <button type="submit" className="btn-submit" disabled={submitting}>
                    {submitting ? (
                      <span>
                        <span className="spinner"></span> Sending...
                      </span>
                    ) : (
                      <>📤 Send Message</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
