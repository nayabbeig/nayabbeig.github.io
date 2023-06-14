import painting from "../assets/images/Painting.png";
import poetry from "../assets/images/Poetry.png";
import singing from "../assets/images/Singing.png";
import sketching from "../assets/images/Sketching.png";

import javaScript from "../assets/images/JavaScript.png";
import reactImage from "../assets/images/React.png";
import htmlImage from "../assets/images/HTML5.png";
import cssImage from "../assets/images/CSS3.png";
import sassImage from "../assets/images/Sass.jpg";
import jestImage from "../assets/images/Jest.png";
import cypressImage from "../assets/images/Cypress .png";
import webpackImage from "../assets/images/Webpack.png";
import nodeJsImage from "../assets/images/NodeJS.svg";
import bootstrapImage from "../assets/images/bootstrapImage.png";
import reduxImage from "../assets/images/reduxImage.png";
import typescriptImage from "../assets/images/typescriptImage.png";
import reactTestingLibraryImage from "../assets/images/reactTestLibraryLogo.jpeg";
import expressImage from "../assets/images/expressImage.png";
import profilePicture from "../assets/images/profilePicture.jpg";

const data = {
  name: "Md Nayab Alam",
  email: "mdnayabalam26@gmail.com",
  phone: "7223944224",
  location: "Pune",
  profilePicture,
  designation:
    "Full Stack Developer | Frontend Engineer | UI Engineer | Application Engineer | Senior Development Engineer",
  about:
    "I am a Front End developer with 4 years of experience in React Js, JavaScript, HTML/CSS, and Node Js. I have worked in various projects which allowed me to gain expertise in developing user interfaces, optimizing the performance of applications, and ensuring cross-browser compatibility. My technical skills have enabled me to develop web applications and services with an eye towards scalability, performance, and reliability. I have a passion for developing efficient and effective user experiences and am always looking for challenges and opportunities to improve my skills.",
  skills: ["English", "Hindi", "Urdu"],
  tools: [
    { title: "JavaScript", image: javaScript },
    { title: "React Js", image: reactImage },
    { title: "HTML", image: htmlImage },
    { title: "CSS", image: cssImage },
    { title: "Bootstrap", image: bootstrapImage },
    { title: "SASS", image: sassImage },
    { title: "Node JS", image: nodeJsImage },
    { title: "Express JS", image: expressImage },
    { title: "Webpack", image: webpackImage },
    { title: "Redux", image: reduxImage },
    { title: "TypeScript", image: typescriptImage },
    { title: "Jest", image: jestImage },
    { title: "React Testing Library", image: reactTestingLibraryImage },
    { title: "Cypress", image: cypressImage },
  ],
  interests: [
    { title: "painting", image: painting },
    { title: "poetry", image: poetry },
    { title: "sketching", image: sketching },
    { title: "singing", image: singing },
  ],
  experience: [
    {
      title: "R & D Development Engineer at Dassault Systems",
      dateSubtitle: "May 2021 to Present",
      details: [
        "Working as a UI lead",
        "Developing UI components in React JS with Typescript",
        "Writing unit test and integration test cases",
        "Doing code review and PR reviews",
        "Conducting technical sessions",
        "Ensuring that team members are following the coding best practices",
        "Working on backend to implement new features and modifying existing ones.",
        "Working with the architect to finalize the technologies to be used in the project",
        "Laying out foundation of the project with initial architecture",
        "Mentoring others and helping other members to resolve their issue",
        "Working with BA to finalize the features and helping him/her creating tickets",
        "Having meeting with BA and PM and the other team members for ticket sizing and story grooming",
        "Working with the testing team to get the feature tested",
      ],
    },
    {
      title: "Development Engineer at Calsoft Pvt Ltd.",
      dateSubtitle: "Feb 2020 to Apr 2021",
      details: [
        "Developing UI components in JavaScript as MVP for UI.",
        "Communicating with backend developers for the integration",
        "Working with UX designer for getting designs ready according to the feature and discussing feasibility.",
        "Working with client and project managers to get the requirements and proposing the solutions.",
        "Demonstrating the implemented features to client and team.",
        "Ticket sizing and time estimation for upcoming tasks.",
        "Working with testing team to get the features tested.",
      ],
    },
    {
      title: "Intern at Calsoft Pvt Ltd",
      dateSubtitle: "Jun 2019 to Jan 2020",
      details: [
        "Writing scripts and workflows in JavaScript",
        "Getting my code reviewed",
        "Addressing review comments",
      ],
    },
  ],
};

export default data;
