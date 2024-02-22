import techs from "./techStack";

const ProjectsEs = [
  {
    title: "BrainView - 3D",
    description:
      "Creado por encargo - Vista básica de puntos limitados del cerebro, interna y externamente.",
    techs: [techs.csharp, techs.unity],
    gallery: ["/brainview-1.png"],
    sourceLink: "https://github.com/davidquintr/brain-3d",
    onlineLink: "",
    moreLink: "",
  },
  {
    title: "Expediente Docente",
    description:
      "Mi primera experiencia laboral en Desarrollo de Software. Funciona como un gestor de profesores o red social interna para una universidad, incluyendo un sistema de autoevaluación y un registro histórico de profesores.",
    techs: [techs.dotnet, techs.csharp, techs.html, techs.css, techs.sqlserver],
    gallery: ["/expedoc-1.png"],
    sourceLink: "",
    onlineLink: "",
    moreLink:
      "https://davidquintr.github.io/portfolio/blog/expedoc-development",
  },
  {
    title: "Portafolio Antiguo",
    description:
      "Creado para recopilar mis proyectos en el desarrollo de mi carrera universitaria y autoaprendizaje.",
    techs: [techs.react, techs.sass, techs.photoshop, techs.illustrator],
    gallery: ["/portafolio-1.png"],
    sourceLink: "https://github.com/davidquintr/old-portfolio",
    onlineLink: "https://github.io/davidquintr/old-portfolio/",
    moreLink: "",
  },
  {
    title: "Documentación Simple",
    description:
      "Proyecto personal para crear documentación simple a través de Markdown. Puede interpretar líneas de código y no requiere recargar la página para cambiar el artículo.",
    techs: [techs.html, techs.css, techs.javascript, techs.markdown],
    gallery: ["/simple-documentation-1.png"],
    sourceLink: "https://github.com/davidquintr/simple-documentation",
    onlineLink: "https://github.io/davidquintr/simple-documentation/",
    moreLink: "",
  },
  {
    title: "WhatsApp Reader Next",
    description:
      "Proyecto personal remasterizado, interpreta los mensajes exportados del chat de WhatsApp y los muestra en un formato familiar para una mejor lectura.",
    techs: [techs.nextjs, techs.tailwind],
    gallery: ["/wreader-1.png"],
    sourceLink: "https://github.com/davidquintr/whatsapp-reader-next",
    onlineLink: "https://whatsapp-reader-next.vercel.app/",
    moreLink: "",
  },
];

export default ProjectsEs;
