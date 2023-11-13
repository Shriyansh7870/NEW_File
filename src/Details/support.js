import React from "react";
function Support() {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>Have questions or need assistance? We're here to help!</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email:Shriyansh7870@gmail.com</p>
        <p>Phone: +91 9351864035</p>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>How can I track my order?</li>
          <li>What is your return policy?</li>
          <li>How do I contact customer support?</li>
          {/* Add more FAQ items as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Support;
