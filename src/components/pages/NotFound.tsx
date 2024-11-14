import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <motion.h1
          className="text-6xl font-bold font-spaceGrotesk"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 font-outfit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Page not found
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-white text-black rounded-lg font-outfit hover:bg-gray-200 transition-colors"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
