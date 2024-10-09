import image from './image.jpg';

const logotext = "graciela";
const meta = {
    title: "cooperspalmer",
    description: "",
};

const introdata = {
    title: "Graciela Garcia",
    animated: {
        first: "Welcome to my portfolio",
        second: "Take a look around",
        third: "Let's get in touch!",
    },
    description: "A skilled and driven Full Stack Web Developer + Technical Project Manager with nearly six years of experience, I bring a unique blend of technical expertise, leadership, and strategic problem-solving. My background in web development and project management, coupled with my ability to communicate effectively across diverse teams, allows me to deliver innovative solutions that elevate business operations. I am passionate about leveraging my skills to make a positive impact, drawing on my adaptability, self-motivation, and deep understanding of both technical and business needs.",
    your_img_url: image,
};

const dataabout = {
    title: "About Myself",
    aboutme: "Washington born and raised, I have a deep love for a good book (anything Brandon Sanderson) and a captivating movie (Interstellar), both of which fuel my passion for storytelling. After completing a full-stack web developer BootCamp at the University of Washington, I joined Leggari Products, where my knack for leadership quickly earned me a promotion to Technical Project Manager. In this role, I led over five cross-functional teams, bridging the gap between technical and non-technical stakeholders to deliver innovative solutions. My work involved implementing critical systems like Netsuite, Zendesk, and Stamped.io, streamlining operations and improving efficiency. With nearly six years of management experience, I thrive in dynamic environments, driving projects forward while fostering collaboration and transparency. I’m always eager to learn, grow, and bring new ideas to the table.",
};
const worktimeline = [{
        jobtitle: " Technical Project Manager",
        where: "Leggari Products -- Pasco WA",
        date: "August 2021 - August 2024",
},
    
    {
        jobtitle: " Junior Web Developer",
        where: "Leggari Products -- Pasco WA",
        date: "January 2021 - August 2021",
    },

    {
        jobtitle: "Operations Manager",
       where: "Hope Outfitters -- Spokane WA",
        date: "August 2018 - January 2021",
   },
   
];

const skills = [{
        name: "Full-Stack Development: Proven ability in both frontend and backend web development, including database integration and server management.",
        value: 99,
    },
    {
        name: "Git Version Control: Skilled in using Git for version control, including branching, merging, andcollaboration.",
        value: 99,
    },
    {
        name: "Leverage Technical Expertise for Problem-Solving: My strong technical background enables me to identify and address management issues that may be impeding progress. By speaking the technical language fluently, I am able to bridge the gap between technical and non-technical team members, facilitating clearer communication and understanding. This proficiency allows me to diagnose problems more accurately and devise innovative solutions that enhance project efficiency and overcome obstacles.",
        value: 99,
    },
    {
        name: "Cross-Functional Collaboration: Effective in working with marketing, design, and other internalstakeholders to deliver high-quality web projects.",
        value: 99,
    },
    {
        name: "Technical Troubleshooting: Adept at diagnosing and resolving complex technical issues tomaintain optimal performance.",
        value: 99,
    },
    {
        name: "DNS & SSL Management: Knowledgeable in handling DNS configurations and SSL certificate installations.",
        value: 99,
    },
    {
        name: "Google Analytics: Proficient in setting up and analyzing web analytics to drive data-informed decisions.",
        value: 99,
    },
    
    {
        name: "Agile Methodologies: Proficient in Agile frameworks such as Scrum, Kanban, and Lean. Experienced in applying Agile principles to manage and execute projects efficiently.",
        value: 99,
    },
    {
        name: "API Integration: Experience in integrating third-party APIs and services to enhance functionality. ",
        value: 99,
    },
    {
        name: "Project Prioritization: Ability to manage multiple concurrent projects, balancing immediate needs with long-term goals.",
        value: 99,
    },


];

const services = [{
        title: "UI & UX Design",
        description: "My UX designs are crafted with the expertise and creativity of Joshua Zeiler, whose keen eye for detail and user-centric approach bring ideas to life. His innovative designs ensure a seamless and engaging user experience, perfectly blending aesthetics with functionality.",
        link: "https://joshuazeiler.com/"
    },
    {
        title: "React Web Development",
        description: "Expertly crafted React websites that are fast, responsive, and scalable. I specialize in building dynamic and interactive user interfaces, ensuring a smooth and engaging experience for all users. From single-page applications to complex web platforms, my React solutions are designed to meet your unique needs.",
    },
    {
        title: "Wordpress Development & Maintenece",
        description: "Custom WordPress development tailored to your needs—whether it’s building from scratch or enhancing existing sites, I create user-friendly, responsive, and visually appealing websites that help your brand stand out.",
    },
];

const dataportfolio = [{
        img: image,
        description: "Monthly WordPress maintenance to keep your site running smoothly—regular plugin updates, security checks, and optimizations ensure your website stays secure, up-to-date, and performing at its best. ",
        link: "https://www.fiestarestaurant.com/",
    },
    {
        img: image,
        description: "Led the deployment of this WordPress site, overseeing everything from initial setup to launch. Managed plugin integration, custom features, and ensured a seamless transition from development to live environment, delivering a smooth user experience.",
        link: "https://leggari.com/",
    },
    {
        img: image,
        description: "Led the deployment of this WordPress site, overseeing everything from initial setup to launch. Managed plugin integration, custom features, and ensured a seamless transition from development to live environment, delivering a smooth user experience.",
        link: "https://leggariacademy.com/",
    },
    {
        img: image,
        description: "Designed and implemented OpenSource APIs to seamlessly integrate third-party services, ensuring efficient data flow and enhanced functionality.",
        link: "https://graciela23garcia.github.io/WeatherDashboard/",
    },
    {
        img: image,
        description: "Random Password Generator using Javascript.",
        link: "https://graciela23garcia.github.io/Password-Generator/",
    },
    {
        img: image,
        description: "Workday Planner: using Moment.js API for daily date and time. Javascript Project",
        link: "https://graciela23garcia.github.io/WorkDayPlanner/",
    },

];

const contactConfig = {
    YOUR_EMAIL: " 23graciela.garcia@gmail.com",
    YOUR_FONE: "(509) 531-2239",
    description: "Have a project you’re excited about? Let’s bring it to life together—start by saying hello!",
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/graciela23garcia",
    linkedin: "https://www.linkedin.com/in/graciela-g-2298291b3/",
   
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};