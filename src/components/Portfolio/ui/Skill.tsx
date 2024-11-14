import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./utils";

interface SkillProps {
  skills: string[];
}

const Skill = ({ skills }: SkillProps) => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black font-spaceGrotesk">
        Skills
      </h2>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-200 transition-colors font-outfit"
            style={{
              willChange: "transform",
              transformOrigin: "center",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default Skill;
