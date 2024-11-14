import { motion } from "framer-motion";

interface LearningProps {
  learning: string[];
}

const Learning = ({ learning }: LearningProps) => {
  return (
    <>
      {/* ... Learning section content with similar updates ... */}
      <h2 className="text-2xl font-bold mb-6 text-black">Currently Learning</h2>
      <motion.div className="flex flex-wrap gap-2">
        {learning.map((item, index) => (
          <span
            key={index}
            className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm border border-gray-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </>
  );
};

export default Learning;
