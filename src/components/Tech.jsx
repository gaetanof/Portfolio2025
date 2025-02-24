import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { LanguageContext } from '../context/LanguageContext';
import { strings } from '../constants/strings';

const Tech = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>
          {strings.tech.skills[language]}
        </p>
        <h2 className={styles.sectionHeadTextLight}>
          {strings.tech.technologies[language]}
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div key={technology.name} className="relative group w-28 h-28">
            <BallCanvas icon={technology.icon} />
            {/* Tooltip que aparece al hover */}
            <div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded pointer-events-none"
            >
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
