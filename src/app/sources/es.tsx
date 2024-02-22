import { faCloud, faCreditCard, faGlobe, faMobile, faScrewdriverWrench, faStar, faTablet } from "@fortawesome/free-solid-svg-icons";
import tech from "./techStack";
import ProjectsEs from "./projects_es";

const es = {
  author: "David Quintanilla",
  role: "Estudiante de Ingeniería de Sistemas, Programador y Diseñador UI/UX",
  email: "davidquintr@gmail.com",
  birthday: "2004/04/19",
  country: "Nicaragua",
  hero: {
    title: 'Servicios',
    action: {
      title: '¡Haz que tu presencia en línea destaque con nuestras páginas web!',
      description: 'Desde la carga inicial hasta la interacción del usuario, garantizamos una experiencia excepcional. Impulsa tu éxito en línea con páginas web veloces, eficaces y responsivas.',
    }
  },
  technologies: {
    title: 'Tecnologías',
    action: {
      image: '/action-technologies/computer.png',
      title: 'A la vanguardia de tecnología para tu página web',
      description: 'Cada proyecto es una oportunidad para dejar una impresión duradera y construir conexiones significativas entre marcas y su audiencia. Bienvenido a nuestro mundo digital, estamos emocionados de compartir nuestro trabajo contigo.'
    },
    tech: [tech.wordpress, tech.html, tech.css, tech.javascript, tech.php, tech.tailwind,tech.sass, tech.vuejs, tech.nuxtjs, tech.nextjs, tech.csharp],
    start: 'Empieza ahora'
  },
  services: {
    title: "Servicios",
    items:[
      {
        title: 'Diseño Personalizado',
        description: 'Teniendo en cuenta tus requerimientos y preferencias.',
        icons: [faGlobe],
        active: true
      },
      {
        title: 'Diseño Responsive',
        description: 'Navegabilidad entre dispositivos garantizada',
        icons: [faMobile, faTablet],
        active: true
      },
      {
        title: 'E-Commerce',
        description: 'Creación de páginas dedicadas al comercio electrónico.',
        icons: [faCreditCard],
        active: false
      },
      {
        title: 'Creamos tu marca',
        description: 'En caso de no tener una marca propia, nosotros nos encargamos.',
        icons: [faStar],
        active: true
      },
      {
        title: 'Mantenimiento',
        description: 'Soporte personalizado para tus páginas realizadas por terceros.',
        icons: [faScrewdriverWrench],
        active: true
      },
      {
        title: 'Alojamiento web',
        description: 'Te facilitamos el alojamiento de tu página o proyecto web.',
        icons: [faCloud],
        active: true
      },
    ],
    action: {
      title: '¡Haz que tu presencia en línea despegue hoy mismo!',
      description: 'Desde la carga inicial hasta la interacción del usuario, garantizamos una experiencia excepcional. Impulsa tu éxito en línea con páginas web veloces, eficaces y responsivas.',
    },
    start: 'Empieza ahora'
  },
  projects: {
    title: "Proyectos",
    onlineText: "Ver en línea",
    sourceText: "Ver código fuente",
    moreText: "Saber más",
    list: ProjectsEs,
  },
  contact: {
    title: "Contacto",
    cta: "¡Si estás buscando ayuda con un proyecto o necesitas asistencia, puedes contactarme!",
    direct_comm:
      "¿Quieres una comunicación más directa? Hay otra forma de contactarme:",
    form: {
      names: "Nombre y Apellido",
      email: "Correo electrónico",
      message: "Mensaje",
      success:
        "¡Tu correo electrónico se ha enviado con éxito! ¡Recibirás una respuesta pronto!",
      fail: "Algo salió mal, inténtalo más tarde...",
      send: "Enviar Mensaje",
    },
    visit: "Visitar Portafolio",
  },
  detail_item: {
    open: "Abrir",
    emailText: "Correo electrónico",
    birthdayText: "Fecha de nacimiento",
    countryText: "País",
    cvText: "CV",
  },
  navigation: {
    home: "Inicio",
    blog: "Blog",
    projects: "Proyectos",
    contact: "Contacto",
  },
  footer: {
    credits: "©2024 Diseñado y Programado por David Quintanilla",
    source: "Ver código fuente",
  },
  home: {
    experience: {
      title: "Experiencia Relevante",
      list: [
        {
          name: "Universidad Centroamericana",
          position: "Gerente de Proyecto",
          location: "Managua, Nicaragua",
          time: "Septiembre 2022 - Agosto 2022",
          tech: [tech.html, tech.css, tech.javascript,tech.dotnet, tech.sqlserver],
          description: `- Desarrollo de la plataforma web 'Expediente Docente' para el Departamento de Educación de la Universidad Centroamericana confiscada.`
        },
        {
          name: "OOQIA",
          position: "Practicante de Desarrollo Web",
          location: "Managua, Nicaragua",
          time: "Septiembre 2023 - Presente",
          tech: [tech.wordpress, tech.html, tech.css, tech.javascript, tech.php, tech.tailwind,tech.sass, tech.vuejs, tech.nuxtjs, tech.mysql],
          description: `- Desarrollo de temas de WordPress, mejoras y soporte para los clientes de OOQIA.
          - Construcción de sitios web sólidos para un rendimiento efectivo de SEO y una interfaz de usuario / experiencia de usuario fluida.`
        },
      ],
    },
    about_me: {
      title: "Acerca de mí",
      description: `¡Hola! Soy David Quintanilla Ruiz, un programador que también incursiona en el mundo del diseño. Me considero un aprendiz rápido, adaptable fácilmente a las necesidades actuales. Poseo excelentes habilidades de comunicación y sé cómo liderar equipos de manera efectiva. Mi experiencia se centra en crear y diseñar páginas web, centrándome particularmente en la interfaz de usuario y la experiencia del usuario.
      Me desempeñé como Gerente de Proyecto para el desarrollo de la plataforma 'Expediente Docente' en la Universidad Centroamericana de Nicaragua, actualmente trabajo como Desarrollador Web en OOQIA y no estoy buscando nuevas posiciones.
      Entre mis intereses se encuentran jugar videojuegos, ver videos de tecnología y dibujar ocasionalmente.`,
    },
    personal_info: {
      title: "Información Personal",
    },
  },
  blog: {
    title: "Blog",
  },
  post: {
    author: "Autor",
    share: "¡Compartir mi publicación!"
  }
};

export default es;
