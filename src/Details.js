// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "SHREYA",
  tagline: "I build things for web",
  img: profile,
  about: `As a dedicated Computer Science engineering student, I am eager to leverage my strong foundation in
programming, algorithms, and software development to contribute effectively to a dynamic team.
Seeking opportunities to apply my problem-solving skills and creative mindset in real-world projects,
while continuously learning and adapting in the rapidly evolving field of technology.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/shreyarangappa",
  github: "https://github.com/ShreyaBangeraaa",
};

// Enter your Work Experience here
export const workDetails = [
 
  {
    Position: "Web developer Intern",
    Company: `Vraio Software Solution`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Aug 2023 - Sept 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [

  {
    Position: "Bachelor in Computer Science and Engineering",
    Company: `SDM Institute of techology`,
    Location: "Ujire",
    Type: "Full Time",
    Duration: "2020 - 2024",
  },
  {
    Position: "Pre-University Education",
    Company: `SDM PU College`,
    Location: "Ujire",
    Type: "Full Time",
    Duration: "2018 - 2020",
  },
  {
    Position: "Secondary School leaving Certificate",
    Company: `SDM Secondary Aided School`,
    Location: "Ujire",
    Type: "Full Time",
    Duration: "2017 - 2018",
  },

];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Rental House Management System",
    image: projectImage1,
    description: `Objective of this project is to develop software to maintain the track record of renter information,
            receipts, rent advances made, maintenances made and other related issues.`,
    techstack: "HTML,CSS,JavaScript,MySQL",
    githubLink: "https://github.com/ShreyaBangeraaa/Rental-House-Management-System",
  },
  {
    title: "Notes Application",
    image: projectImage2,
    description: `Objective of this project is to develop an android application which helps the user to take notes at
           any time and make the available whenever need.`,
    techstack: "XML, Java",
    githubLink: "https://github.com/ShreyaBangeraaa/Notes-Application",
  },
  {
    title: "Task Manger Application",
    image: projectImage3,
    description: `The project’s main goal was to create an intuitive tool for managing tasks, ensuring accessibility for users of all technical levels.`,
    techstack: "React.js",
    githubLink: "https://github.com/ShreyaBangeraaa/Task-Manager-App",
  },
  {
    title: "Book Sales Forecast Using Machine Learning",
    image: projectImage4,
    description: `To leverage machine learning models for accurately predicting book sales, enabling publishers, booksellers,
       And authors to make informed decisions regarding book production, release timing, and market trends.`,
    techstack: "Python, Flask",
    githubLink: "https://github.com/ShreyaBangeraaa/Book_Sales_Forecast",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "shreyahippa@gmail.com",
  phone: "+917676150489",
};
