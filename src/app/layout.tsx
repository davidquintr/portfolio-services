import "./style/globals.css";
import Footer from "./components/footer";
import { poppins } from "./utils/fonts";
import Hero from "./components/hero";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#11a5e0" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1738" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const enabled = true;
  
  return (
    <html lang="en">
      <body
        className={`flex justify-center items-center ${poppins.variable} font-poppins bg-white dark:bg-dark-bg min-h-screen`}
      >
        {
        // eslint-disable-next-line react/no-children-prop
        enabled && <Data children={children}></Data>}
        <h3>Something went wrong...</h3>
      </body>
    </html>
  );
}

const Data = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Hero />
        <main className="w-full mx-auto flex-grow">
          {children}
        </main>
        <Footer />
    </>
  )
}
