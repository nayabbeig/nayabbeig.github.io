import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./Resume.page.css";
import ResumeData from "./Resume.data";
import { MdCall, MdLocationOn, MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import $ from "jquery";

const scrollTo = (id) => {
  $(`#${id}`)[0].scrollIntoView({ behavior: "smooth", block: "start" });
  $(`#${id}`)
    .addClass("bg-warning")
    .fadeOut(300)
    .fadeIn(300)
    .fadeOut(300)
    .fadeIn(300);
  setTimeout(() => $(`#${id}`).removeClass("bg-warning"), 2000);
};

const AboutSection = () => (
  <div class="quill-readonly">
    <div class="quill ">
      <pre class="ql-container ql-snow ql-disabled">
        <div class="ql-editor" data-gramm="false" contenteditable="false">
          <p>{ResumeData.about}</p>
        </div>
        <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
      </pre>
    </div>
  </div>
);

const AboutAndExperience = () => (
  <div class="about-desc capital-start">
    <div class="profile-left-content"></div>
    <h4 class="left-sec-title" id="about">
      About
    </h4>
    <AboutSection />
    <ul class="btnsBox mt-3 p-0">
      <li>Total Work Experience: 4 Years</li>
      <li>Availability: Full Time</li>
    </ul>
  </div>
);

const Languages = () => (
  <div class="skillList">
    <h4 class="left-sec-title" id="languages">
      Languages
    </h4>
    <ul className="p-0">
      {ResumeData.skills.map((skill) => (
        <li>
          <span class="name">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Interests = () => (
  <div class="interests">
    <h4 class="left-sec-title" id="interests">
      INTERESTS
    </h4>
    {ResumeData.interests.map(({ title, image }) => (
      <div class="intBox">
        <figure>
          <img src={image} />
        </figure>
        <span>{title}</span>
      </div>
    ))}
  </div>
);

const ProfileImage = () => (
  <div class="profilePhoto">
    <figure>
      <img className="w-100" src={ResumeData.profilePicture} alt="profile" />
    </figure>
  </div>
);

const Title = () => (
  <>
    <h1>
      <span
        class="underline text-capitalize"
        style={{
          wordBreak: "break-all",
        }}
      >
        {ResumeData.name}
      </span>
    </h1>
    <h2 class="text-capitalize">{ResumeData.designation}</h2>
  </>
);

const ProfessionalExperience = () => (
  <>
    <h4 class="right-sec-title" id="experience">
      PROFESSIONAL EXPERIENCE
    </h4>
    <div class="row major-projects p-0">
      {ResumeData.experience.map(({ title, dateSubtitle, details }) => (
        <div class="col-sm-12 proBox exp">
          <div class="info-no-ul exp">
            <p>
              <strong class="text-black">
                <span class="text-capitalize">{title}</span>
              </strong>
              <br />
              <span>{`(${dateSubtitle})`}</span>
            </p>
            <div class="capital-start">
              <div class="quill-readonly">
                <div class="quill ">
                  <pre class="ql-container ql-snow ql-disabled">
                    <div
                      class="ql-editor"
                      data-gramm="false"
                      contenteditable="false"
                    >
                      <ul>
                        {details.map((detail) => (
                          <li>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div
                      class="ql-clipboard"
                      contenteditable="true"
                      tabindex="-1"
                    ></div>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

const Skills = () => (
  <>
    <h4 class="right-sec-title" id="skills">
      SKILLS
    </h4>
    <ul class="logos">
      {ResumeData.tools.map(({ title, image }) => (
        <li>
          <img src={image} />
          <p className="text-center">{title}</p>
        </li>
      ))}
    </ul>
  </>
);

const Education = () => (
  <>
    <h4 class="right-sec-title" id="education">
      EDUCATION
    </h4>
    <ul>
      <li>
        <span class="text-capitalize">Bachelor of Engineering (CSE)</span> from{" "}
        <span class="text-capitalize">
          Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
        </span>
        <span> in 2019</span>
      </li>
    </ul>
  </>
);

const Contacts = () => (
  <div className="mb-2 mb-5">
    <h4 class="left-sec-title" id="contacts">
      Contacts
    </h4>
    <ul className="p-0">
      <li className="d-flex my-2 mt-0 align-items-center">
        <MdOutlineMail size={25} />
        <p className="m-0 mx-2">{ResumeData.email}</p>
      </li>
      <li className="d-flex my-2 align-items-center">
        <MdCall size={25} />
        <p className="m-0 mx-2">{ResumeData.phone}</p>
      </li>
      <li className="d-flex my-2 align-items-center">
        <MdLocationOn size={25} />
        <p className="m-0 mx-2">{ResumeData.location}</p>
      </li>
      <li className="d-flex my-2 align-items-start">
        <FaLinkedin size={25} />
        <p className="m-0 mx-2">
          <span>Linked In</span>
          <a
            className="mx-1"
            href="https://www.linkedin.com/in/md-nayab-alam-a242b0134/"
          >
            md-nayab-alam-a242b0134/
          </a>
        </p>
      </li>
      <li className="d-flex my-2 align-items-start">
        <FaGithub size={25} />
        <p className="m-0 mx-2">
          <span>Github</span>
          <a className="mx-1" href="https://github.com/nayabbeig">
            nayabbeig
          </a>
        </p>
      </li>
    </ul>
  </div>
);

const NavBar = () => (
  <div className="my-5 d-flex justify-content-center">
    {[
      { label: "About", url: "about" },
      { label: "Contacts", url: "contacts" },
      { label: "Experience", url: "experience" },
      { label: "Skills", url: "skills" },
      { label: "Eduction", url: "education" },
      { label: "Languages", url: "languages" },
      { label: "Interests", url: "interests" },
    ].map(({ label, url }) => (
      <Button variant="outline-warning mx-2" onClick={() => scrollTo(url)}>
        {label}
      </Button>
    ))}
  </div>
);

const ResumePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={4} className="leftSide">
          <ProfileImage />
          <div class="aboutWrap">
            <Contacts />
            <AboutAndExperience />
            <Languages />
            <Interests />
          </div>
        </Col>
        <Col sm={8} className="rightSide px-5">
          <div class="main-title">
            <Title />
            <NavBar />
            <ProfessionalExperience />
            <Skills />
            <Education />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumePage;
