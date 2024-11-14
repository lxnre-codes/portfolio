import { IEducation } from "@/types/portfolio";
import { motion } from "framer-motion";

type EducationProps = {
  education: IEducation[];
};

const Education = ({ education }: EducationProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-black">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              {edu.school}
            </h3>
            <p className="text-gray-800 mb-2">{edu.degree}</p>
            <p className="text-gray-600">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Education;
