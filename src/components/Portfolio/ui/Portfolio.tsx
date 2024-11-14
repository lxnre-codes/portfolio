import React from "react";
import * as icons from "simple-icons";
import { Globe, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import { portfolioData } from "@/data/portfolio";
import profileImage from "@/assets/images/profile.png";
import Education from "./Education";
import { containerVariants, itemVariants } from "./utils";
import Experience from "./Experience";
import Skill from "./Skill";
import Learning from "./Learning";
import "@fontsource-variable/outfit/index.css";
import "@fontsource-variable/space-grotesk/index.css";

const Portfolio: React.FC = () => {
  const { personalInfo, skills, experience, education, learning } =
    portfolioData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white"
      >
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
              />
            </motion.div>

            <div className="md:ml-8 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold mb-2 font-spaceGrotesk tracking-tight"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl mb-4 font-outfit text-gray-300"
              >
                {personalInfo.title}
              </motion.h2>

              {/* Social Icons */}
              <motion.div
                className="flex gap-4 mb-4 justify-center lg:justify-start"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { href: personalInfo.github, icon: icons.siGithub.slug },
                  { href: personalInfo.twitter, icon: icons.siX.slug },
                  {
                    href: `mailto:${personalInfo.emails[0]}`,
                    icon: icons.siGmail.slug,
                  },
                  { href: personalInfo.website, icon: "globe" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="hover:text-gray-300 transform hover:scale-110 transition-transform"
                    variants={itemVariants}
                  >
                    {social.icon === "globe" ? (
                      <Globe className="w-6 h-6" />
                    ) : (
                      <Icon slug={social.icon} className="w-6 h-6" />
                    )}
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-2 mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {personalInfo.emails.map((email, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-300 flex items-center justify-center lg:justify-start gap-2"
                    variants={itemVariants}
                  >
                    <Icon slug={icons.siGmail.slug} className="w-4 h-4" />
                    <span className="font-outfit">{email}</span>
                  </motion.p>
                ))}
                <motion.p
                  className="text-gray-300 flex items-center justify-center lg:justify-start gap-2"
                  variants={itemVariants}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-outfit">{personalInfo.phone}</span>
                </motion.p>
              </motion.div>

              {/* Summary */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="max-w-2xl mx-auto lg:mx-0 font-outfit text-gray-300 text-sm md:text-base leading-relaxed"
              >
                {personalInfo.summary}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Skills Section */}
        <motion.section
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Skill skills={skills} />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Experience experience={experience} />
        </motion.section>

        {/* Education Section */}
        <section className="mb-12">
          <Education education={education} />
        </section>

        {/* Currently Learning Section - Similar updates for Learning */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Learning learning={learning} />
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Portfolio;
