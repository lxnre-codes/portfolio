import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import * as icons from "simple-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-spaceGrotesk">LANRE.CODES</h3>
            <p className="text-gray-400 font-outfit">
              Building amazing stuffs with code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-spaceGrotesk">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                to="/#"
                className="block text-gray-400 hover:text-white transition-colors font-outfit"
              >
                Home
              </Link>
              <Link
                to="/thoughts#"
                className="block text-gray-400 hover:text-white transition-colors font-outfit"
              >
                Thoughts
              </Link>
              <Link
                to="/articles#"
                className="block text-gray-400 hover:text-white transition-colors font-outfit"
              >
                Articles
              </Link>
              <Link
                to="/projects#"
                className="block text-gray-400 hover:text-white transition-colors font-outfit"
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-spaceGrotesk">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/lxnre-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon slug={icons.siGithub.slug} className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/lxnre_codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon slug={icons.siX.slug} className="w-6 h-6" />
              </a>
              <a
                href="mailto:admin@lanrecodes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon slug={icons.siGmail.slug} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 font-outfit">
            © {currentYear} Lanre Popoola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
