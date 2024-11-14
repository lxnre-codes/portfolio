import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "./utils";
import { IExperience } from "@/types/portfolio";

interface ExperienceProps {
  experience: IExperience[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black font-spaceGrotesk">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border border-gray-200 p-4 md:p-6 rounded-lg hover:border-gray-400 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-black" />
              <h3 className="text-lg md:text-xl font-semibold text-black font-spaceGrotesk">
                {job.company}
              </h3>
            </div>
            <p className="text-gray-800 mb-2 font-outfit">{job.position}</p>
            <p className="text-gray-600 mb-4 font-outfit">{job.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {job.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 font-outfit text-sm md:text-base"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
