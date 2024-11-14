import { motion } from "framer-motion";
import { itemVariants } from "./utils";

interface SkillProps {
  skills: string[];
}

const Skill = ({ skills }: SkillProps) => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black font-spaceGrotesk">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-200 transition-colors font-outfit"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </>
  );
};

export default Skill;
