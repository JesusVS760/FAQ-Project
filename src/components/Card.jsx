import React, { useState } from "react";
import Star from "../images/icon-star.svg";
import Plus from "../images/icon-plus.svg";
import "./Card.css";
import DeskBackground from "../images/background-pattern-desktop.svg";

const Card = () => {
  const [activeFAQs, setActiveFAQs] = useState(false);
  function active(faqNumber) {
    setActiveFAQs((prevState) => ({
      ...prevState,
      [faqNumber]: !prevState[faqNumber],
    }));
  }

  return (
    <div className="card-body">
      <img src={DeskBackground} />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>
              <img src={Star} />
              FAQs
            </h1>
          </div>
          <div className="card-content">
            <div className="card-question">
              <h3
                className={
                  activeFAQs[1] ? "card-description-active" : "card-description"
                }
                onClick={() => active(1)}
              >
                What is Frontend Mentor, and how will it help me?{" "}
                <img src={Plus} />
              </h3>
              <p
                className={`${
                  activeFAQs[1] ? "card-description-active" : "card-description"
                }`}
              >
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            </div>
            <div className="card-question">
              <h3>
                Is Frontend Mentor free? <img src={Plus} />
              </h3>
            </div>
            <div className="card-question">
              <h3>
                Can I use frontend Mentor projects in my portfolio?{" "}
                <img src={Plus} />
              </h3>
            </div>
            <div className="card-question">
              <h3>
                How can I get help if I'm stuck on a challenge?{" "}
                <img src={Plus} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
