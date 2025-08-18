import React, { useState } from "react";
import "./ContactPage.css";
import { motion } from "framer-motion";

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
];

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: (
      <a href="mailto:hello@vibetribetravels.com" style={{ color: "#3b82f6", textDecoration: "underline" }}>
        hello@vibetribetravels.com
      </a>
    ),
    color: "#3b82f6",
  },
  {
    icon: "📞",
    title: "Phone",
    value: (
      <a href="tel:+15551234567" style={{ color: "#10b981", textDecoration: "underline" }}>
        +1 (555) 123-4567
      </a>
    ),
    color: "#10b981",
  },
  {
    icon: "📍",
    title: "Office",
    value: "123 Travel Street, Adventure City, AC 12345",
    color: "#8b5cf6",
  },
  {
    icon: "⏰",
    title: "Business Hours",
    value: "Mon-Fri: 9AM-6PM EST",
    color: "#f59e0b",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Simple validation: all required fields must be filled
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
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData(initialFormState);
    }, 1200);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>
            <span role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            Let's Plan Your Dream Trip
          </h1>
          <p>
            Our travel experts are here to help you create unforgettable memories
          </p>
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
            <h2>
              <span role="img" aria-label="envelope">
                📬
              </span>{" "}
              Get In Touch
            </h2>
            <p>
              Ready to start your next adventure? Contact us and let's plan the trip of your dreams.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-info"
            >
              <h3>
                <span role="img" aria-label="compass">
                  🧭
                </span>{" "}
                Let’s Start Planning
              </h3>
              <p>
                Whether it's a romantic getaway, family adventure, or solo exploration –{" "}
                we’ll make sure every detail is perfect. Reach out and let us craft your next journey!
              </p>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="contact-method"
                    style={{ borderLeft: `4px solid ${method.color}` }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <span className="method-icon" aria-label={method.title}>
                      {method.icon}
                    </span>
                    <div>
                      <h5>{method.title}</h5>
                      <p>{method.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form"
            >
              <h3>
                <span role="img" aria-label="mailbox">
                  📨
                </span>{" "}
                Send Us a Message
              </h3>
              {submitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: "#e0f2fe",
                    borderRadius: "12px",
                    padding: "2rem",
                    textAlign: "center",
                    color: "#2563eb",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎉</div>
                  <h4>Thank you for reaching out!</h4>
                  <p>
                    We’ve received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    className="btn-submit"
                    style={{ marginTop: "1rem", background: "#3b82f6" }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-row">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      autoComplete="given-name"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      autoComplete="family-name"
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
                      autoComplete="email"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
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
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={submitting}
                    style={submitting ? { opacity: 0.7, cursor: "not-allowed" } : {}}
                  >
                    {submitting ? (
                      <span>
                        <span
                          className="spinner"
                          style={{
                            display: "inline-block",
                            width: "1.2em",
                            height: "1.2em",
                            border: "3px solid #fff",
                            borderTop: "3px solid #3b82f6",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                            marginRight: "0.5em",
                            verticalAlign: "middle",
                          }}
                        ></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        📤 Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Spinner animation keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage;
