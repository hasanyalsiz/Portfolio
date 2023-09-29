// Import images
import Image1 from "../images/ui-project-1.jpg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/gmail.png";
import Image4 from "../images/RecipeProject.png";
import Image5 from "../images/map.png";
import Image6 from "../images/space.png";
import Image7 from "../images/web-project-1.jpg";


// Import icons
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const singleProjectData = {
  ProjectHeader: {
    title: "Projects",
    publishDate: "May 20, 2023",
    tags: "React / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: Image1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: Image2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: Image7,
    },
  ],
  ProjectInfo: {
    ClientHeading: "Projects",
    CompanyInfo: [
      {
        id: 1,
        title: "React",
        details: "@hasanyalsiz",
      },
      {
        id: 2,
        title: "Development",
        details: "React & Frontend Developer",
      },
      {
        id: 3,
        title: "Website",
        details: "https://linkedin/in/hasanyalsiz",
      },
      {
        id: 4,
        title: "Phone",
        details: "+90 551 064 5370",
      },
    ],
    ObjectivesHeading: "Repo",
    ObjectivesDetails:
      'you can review. "Github Repo:  https://github.com/hasanyalsiz"',
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"],
      },
    ],
    ProjectDetailsHeading: "Portfolio",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Hello! I would like to share my GitHub portfolio with you, which I have created with my passion and love for the world of software development. In this repository, you will find approximately 40 projects developed using various technologies. Each project stands out with elegant designs, vibrant colors, and unique typography.",
      },
      {
        id: 2,
        details:
          "Technologies and Tools:I have used the following technologies and tools in the development of these projects:HTML: For creating the basic structure of web pages.					CSS: To provide visual design and styling.					JavaScript: To make pages dynamic and add user interactions.					React: For building modern and fast user interfaces.					Redux: For managing the application state.					Redux Thunk: To manage asynchronous operations in Redux-based applications.					JavaScript Libraries: I enhanced functionality by incorporating various JavaScript libraries and packages into my projects.",
      },
      {
        id: 3,
        details:
          "Why Should You Explore This Repository? This GitHub portfolio was created to showcase my software development skills and gain experience with different technologies. My projects can serve as a source of inspiration for both beginners and experienced developers. Additionally, by accessing the project code, you can understand how they work and obtain valuable resources for enhancing your own projects.",
      },
      {
        id: 4,
        details:
          "Feedback and Contact : I welcome any feedback or questions you may have about these projects. If you have any inquiries or feedback regarding the projects in my GitHub repository, please do not hesitate to get in touch. Thank you for taking the time to explore my projects! ",
      },
    ],
    SocialSharingHeading: "Social Media",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/Hasanyalsiz",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/hasanyalsiz",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/in/hasanyalsiz",
      },
      {
        id: 5,
        name: "Youtube",
        icon: <FiGithub />,
        url: "https://www.youtube.com/",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Mobile UI",
        img: Image4,
      },
      {
        id: 2,
        title: "Web Application",
        img: Image5,
      },
      {
        id: 3,
        title: "UI Design",
        img: Image6,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Image3,
      },
    ],
  },
};
