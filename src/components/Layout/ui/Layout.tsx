import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/utils/meta";

const Layout = () => {
  const location = useLocation();

  // Define SEO metadata based on current route
  const getSEOData = () => {
    switch (location.pathname) {
      case "/":
        return {
          title: siteConfig.title,
          description: siteConfig.description,
        };
      case "/thoughts":
        return {
          title: "Thoughts | Lanre Popoola",
          description:
            "Personal thoughts and musings on software development, technology, and life.",
        };
      case "/articles":
        return {
          title: "Articles | Lanre Popoola",
          description:
            "Technical articles and tutorials about software development, web3, and more.",
        };
      case "/projects":
        return {
          title: "Projects | Lanre Popoola",
          description:
            "Showcase of my personal and professional software development projects.",
        };
      default:
        return {
          title: siteConfig.title,
          description: siteConfig.description,
        };
    }
  };

  const seoData = getSEOData();

  return (
    <div className="flex flex-col min-h-screen">
      <SEO title={seoData.title} description={seoData.description} />
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
