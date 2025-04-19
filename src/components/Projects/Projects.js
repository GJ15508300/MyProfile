import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CreditTriangle from "../../Assets/Projects/Credit-Triangle.png";
import LearnTrading from "../../Assets/Projects/learnTrading.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import LKN from "../../Assets/Projects/Lakshmi-Krishna-Naturals.png";
import Agreap from "../../Assets/Projects/Agreap.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agreap}
              isBlog={false}
              title="Agreap"
              description="Agri trade and inventory management app built with React Native for farmers, traders, brokers, and corporates. Features include bid & quotation management, price discovery, trade book, payment reminders, inventory tracking, and transport coordination. Developed real-time modules for trade closure, stock movement, and integrated Firebase for data handling."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.tt.ylp_mobile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LKN}
              isBlog={false}
              title="Lakshmi Krishna Naturals"
              description="E-commerce mobile app developed using React Native for a leading Indian natural cosmetic brand. Integrated secure login, product listing with search & filter features, and smooth user experience across Android and iOS. Managed reusable components, Redux-based state, and optimized UI for 500+ products shipped worldwide."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.tt.LKN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CreditTriangle}
              isBlog={false}
              title="Credit Triangle"
              description="A mobile app built using React Native for managing credit-related services. Handled full app architecture including secure authentication, token-based login validation, dashboard UI, and credit flow tracking. Designed reusable components, ensured smooth navigation, and integrated scalable authentication logic for better user experience."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor} // Replace with actual image import/path
              isBlog={false}
              title="Flystar – SaaS Blog Platform"
              description="SaaS-based blog platform built with Next.js, Tailwind CSS, and TypeScript. Designed for publishing company news, tech blogs, and marketing articles with a smooth, responsive UI. Implemented SEO-friendly routing, reusable components, and a performance-optimized layout. Part of full-stack learning with future backend integration in Node.js/Spring Boot."
              ghLink=""
              demoLink="https://fly-star-next-js-sass.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide} // Replace with actual image import/path
              isBlog={false}
              title="Quiz App"
              description="A dynamic multiple-choice quiz application built with React.js. Includes real-time score tracking, conditional rendering, and countdown timers per question. Focused on state management, performance optimization, and engaging user feedback. Great practice for React fundamentals and logic building."
              ghLink=""
              demoLink="https://quiz-app-zeta-rouge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnTrading} // Replace with actual image import/path
              isBlog={false}
              title="Trading Course Platform"
              description="A full-stack web application built for purchasing and managing trading-related courses. Developed the frontend using React.js and Tailwind CSS, and implemented backend services with Node.js, Express.js, and MongoDB. Features include secure user authentication, dynamic course catalog, payment simulation, and user dashboard for tracking enrolled courses."
              ghLink="" // Add if available
              demoLink="" // Add if deployed
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
