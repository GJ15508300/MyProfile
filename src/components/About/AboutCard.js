import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! 👋, I am <span className="purple">Jagadeesh GJ </span>a
            passionate software developer based in{" "}
            <span className="purple"> Salem, Tamil Nadu, India.</span>
            <br />
            <br />
            I recently worked as a Software Developer at BestLabz, where I was
            involved in building scalable and efficient tech solutions.
            <br />
            <br />
            I hold a Bachelor’s degree in Electrical and Electronics Engineering
            (B.E. EEE) and have transitioned into the software world with a
            strong interest in modern web and mobile technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jagadeesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
