const PAGE_PREFIX = "DavidQuint's Web Developer";
const PAGE_DESCRIPTION =
  "¡Hola! Soy David Quintanilla Ruiz, un programador que también incursiona en el mundo del diseño. Me considero un aprendiz rápido, fácilmente adaptable a las necesidades actuales. Ofrezco servicios como desarrollador web, creando soluciones digitales eficientes y personalizadas para satisfacer las demandas de mis clientes.";
const PAGE_URL = "https://services.davidquintr.com/";

const MetadataBase = {
  default: {
    metadataBase: new URL(PAGE_URL),
    description: PAGE_DESCRIPTION,
    icons: {
      icon: [
        { url: "/icon_light.png" },
        { url: "/icon_dark.png", media: "(prefers-color-scheme: dark)" },
      ],
    },
  },
  openGraph: {
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    sitename: PAGE_PREFIX,
    images: [
      {
        url: `${PAGE_URL}thumbnail-full.png`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: PAGE_DESCRIPTION,
    images: [`${PAGE_URL}thumbnail-full.png`],
  },
};

const createPageMetadata = (pageTitle: string) => ({
  title: `${pageTitle} | ${PAGE_PREFIX} `,
  ...MetadataBase.default,
  openGraph: {
    title: `${pageTitle} | ${PAGE_PREFIX} `,
    ...MetadataBase.openGraph,
  },
  twitter: {
    title: `${pageTitle} | ${PAGE_PREFIX} `,
    ...MetadataBase.twitter,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
    }
  }
});

const Metadata = createPageMetadata("Servicios");

export default Metadata;
