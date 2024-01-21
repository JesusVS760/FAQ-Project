import React, { useState } from "react";
import Star from "../images/icon-star.svg";
import Plus from "../images/icon-plus.svg";
import "./Card.css";
import DeskBackground from "../images/background-pattern-desktop.svg";

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleActive(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor is free.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use Frontend Mentor projects in your portfolio for educational and personal purposes. Check and adhere to the licensing terms for each project.",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "You can seek help by engaging with the Frontend Mentor community on the platform's forum or joining their social media channels.",
    },
  ];

  return (
    <div className="card-body">
      <img src={DeskBackground} alt="Background" />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>
              <img src={Star} alt="Star" />
              FAQs
            </h1>
          </div>
          <div className="card-content">
            {faqs.map((faq, index) => (
              <div className="card-question" key={index}>
                <h3 onClick={() => toggleActive(index)}>
                  {faq.question} <img src={Plus} alt="Plus" />
                </h3>
                {activeIndex === index && (
                  <p className="card-description">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
