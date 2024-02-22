import { faCloud, faCreditCard, faGlobe, faMobile, faScrewdriverWrench, faStar, faTablet } from "@fortawesome/free-solid-svg-icons";
import ProjectsEn from "./projects_en";
import tech from "./techStack";

const en = {
  author: "David Quintanilla",
  role: "System Engineering Student, Programmer and UI/UX Designer",
  email: "davidquintr@gmail.com",
  birthday: "2004/04/19",
  country: "Nicaragua",
  hero: {
    title: 'Services',
    action: {
      title: 'Make your online presence stand out with our web pages!',
      description: 'From initial loading to user interaction, we guarantee an exceptional experience. Boost your online success with fast, efficient, and responsive web pages.',
    },
    button_aria: 'Slide',
  },
  technologies: {
    title: 'Technologies',
    action: {
      image: '/action-technologies/computer.png',
      title: 'Leading-edge technology for your web page',
      description: 'Every project is an opportunity to leave a lasting impression and build meaningful connections between brands and their audience. Welcome to our digital world, we are excited to share our work with you.'
    },
    tech: [tech.wordpress, tech.html, tech.css, tech.javascript, tech.php, tech.tailwind,tech.sass, tech.vuejs, tech.nuxtjs, tech.nextjs, tech.csharp],
    start: 'Get Started Now'
  },
  services: {
    title: "Services",
    items:[
      {
        title: 'Custom Design',
        description: 'Taking into account your requirements and preferences.',
        icons: [faGlobe],
        active: true
      },
      {
        title: 'Responsive Design',
        description: 'Guaranteed navigability across devices',
        icons: [faMobile, faTablet],
        active: true
      },
      {
        title: 'E-Commerce',
        description: 'Creation of pages dedicated to e-commerce.',
        icons: [faCreditCard],
        active: false
      },
      {
        title: 'We Create Your Brand',
        description: 'If you don\'t have your own brand, we take care of it.',
        icons: [faStar],
        active: true
      },
      {
        title: 'Maintenance',
        description: 'Customized support for your pages made by third parties.',
        icons: [faScrewdriverWrench],
        active: true
      },
      {
        title: 'Web Hosting',
        description: 'We facilitate hosting for your website or web project.',
        icons: [faCloud],
        active: true
      },
    ],
    action: {
      title: 'Make your online presence take off today!',
      description: 'From initial loading to user interaction, we guarantee an exceptional experience. Boost your online success with fast, efficient, and responsive web pages.',
    },
    start: 'Get Started Now'
  },
  projects: {
    title: "Projects",
    onlineText: "Watch Online",
    sourceText: "View Source",
    moreText: "Know More",
    list: ProjectsEn,
  },
  contact: {
    title: "Contact",
    cta: "If you are looking for help with a project or need assistance, you can contact me!",
    direct_comm:
      "Do you want more direct communication? There's another way to contact me:",
    form: {
      names: "First Name and Last Name",
      email: "Email",
      message: "Message",
      success:
        "Your email was sent successfully. You will receive a response soon!",
      fail: "Something went wrong, try later...",
      send: "Send Message",
    },
    visit: "Visit Portfolio",
  },
  detail_item: {
    open: "Open",
    emailText: "Email",
    birthdayText: "Birthday",
    countryText: "Country",
    cvText: "CV",
  },
  navigation: {
    home: "Home",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
  },
  footer: {
    credits: "©2024 Designed and Programmed by David Quintanilla",
    source: "View Source",
  },
  home: {
    experience: {
      title: "Relevant Experience",
      list: [
        {
          name: "Central American University",
          position: "Project Manager",
          location: "Managua, Nicaragua",
          time: "September 2022 - August 2022",
          tech: [tech.html, tech.css, tech.javascript,tech.dotnet, tech.sqlserver],
          description: `- Development of Web Platform 'Teacher Record' for the Department of Education of the Central American University.`
        },
        {
          name: "OOQIA",
          position: "Web Developer Intern",
          location: "Managua, Nicaragua",
          time: "September 2023 - Present",
          tech: [tech.wordpress, tech.html, tech.css, tech.javascript, tech.php, tech.tailwind,tech.sass, tech.vuejs, tech.nuxtjs, tech.mysql],
          description: `- Development of WordPress themes, improvements and support for the customers of OOQIA.
          - Building strong websites for effective SEO performance and smooth UI/UX.`
        },
      ],
    },
    about_me: {
      title: "About Me",
      description: `Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs. I possess excellent communication skills and know how to lead teams effectively. My expertise lies in creating and designing web pages, particularly focusing on user interface and user experience.
      I served as a Project Manager for the development of the 'Teacher Record' platform at the Central American University of Nicaragua, I'm currently employed as a Web Developer at OOQIA and not seeking new positions.
      Among my interests are playing video games, watching technology videos, and occasionally drawing.`,
    },
    personal_info: {
      title: "Personal Info",
    },
  },
  blog: {
    title: "Blog",
  },
  post: {
    author: "Author",
    share: "Share my post!"
  }
};

export default en;
