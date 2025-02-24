import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { strings } from '../constants/strings';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { LanguageContext } from '../context/LanguageContext';

const ServiceCard = ({ index, title, icon }) => {
  const { language } = useContext(LanguageContext);

  // Si title es un objeto, se muestra el string según el idioma; si no, se muestra directamente
  const displayedTitle = typeof title === 'object' ? title[language] : title;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="card-gradient p-[1px] rounded-[20px] shadow-card xs:w-[250px] w-full service-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={displayedTitle}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {displayedTitle}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {strings.about.sectionSubText[language]}
        </p>
        <h2 className={styles.sectionHeadText}>
          {strings.about.sectionHeadText[language]}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        {strings.about.description[language]}
      </motion.p>

      {/* Contenedor que envuelve las tarjetas */}
      <div className="services-container mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>

      <style>{`
        /* TABLET: 768px a 1023px 
           -> Dos columnas centradas */
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-container {
            justify-content: center !important; /* Centra las columnas */
          }
        }

        /* "Bache": 481px a 767px
           -> Una columna pero tarjetas más grandes */
        @media (min-width: 481px) and (max-width: 767px) {
          .services-container {
            flex-direction: column !important;
            align-items: center !important;
          }
          /* Aumentar anchura para que queden mucho más grandes */
          .services-container .service-card {
            width: 320px !important;
          }
        }

        /* Mobile: <= 480px
           -> Mantener el comportamiento original, 
              no se hace override adicional */
      `}</style>
    </div>
  );
};

export default SectionWrapper(About, 'about');
