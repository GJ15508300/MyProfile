import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm Jagadeesh GJ — a passionate developer who fell in love
              with programming and has been continuously learning and building
              ever since.
              <br />
              <br /> I'm fluent in languages like{" "}
              <i>
                <b className="purple">Javascript and Java. </b>
              </i>
              and I enjoy exploring how things work under the hood.
              <br />
              <br />
              My primary interests lie in developing modern &nbsp;
              <i>
                <b className="purple">web technologies</b>,
                <b className="purple"> building scalable products</b>, and
                working on <b className="purple">cross-platform mobile apps </b>
                and <b className="purple">robust backend systems.</b>
              </i>
              <br />
              <br />I specialize in front-end development using{" "}
              <b className="purple">React.js</b>,{" "}
              <b className="purple">Next.js</b>, and{" "}
              <b className="purple">React Native</b>, bringing seamless user
              experiences to both <b className="purple">web</b> and{" "}
              <b className="purple">mobile platforms</b>. I also love working
              with <b className="purple">Node.js</b> and building{" "}
              <b className="purple">full-stack</b> applications.
              <br />
              <br />
              Currently, I’m expanding my skill set by learning backend
              development with <b className="purple">Node.js</b> and working on{" "}
              <b className="purple">Java</b>-based projects to strengthen my
              backend expertise.
              <br />
              <br /> Whenever possible, I channel my passion into creating{" "}
              <b className="purple">intuitive, efficient,</b> and
              <b className="purple"> impactful digital products.</b>
              I’m always eager to learn something new and contribute to exciting
              projects that solve real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GJ15508300"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Jagadeesh_GJ1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jagadeesh-gj-50a249161/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ja.ga.dee_sh_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
