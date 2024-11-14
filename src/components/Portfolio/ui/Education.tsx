import { IEducation } from "@/types/portfolio";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./utils";

type EducationProps = {
  education: IEducation[];
};

const Education = ({ education }: EducationProps) => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
        Education
      </h2>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              {edu.school}
            </h3>
            <p className="text-gray-800 mb-2">{edu.degree}</p>
            <p className="text-gray-600">{edu.period}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Education;
