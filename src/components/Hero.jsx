import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { fran, bwmap, worldmap } from '../assets';
import { strings } from '../constants/strings';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Hero = () => {
  // Se obtiene el idioma desde el contexto global
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt={strings.hero.altWorldMap[language]}
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt={strings.hero.altWorldMap[language]}
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        {/* Contenedor del texto */}
        <div
          className={`hero-text-container absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          {/* Línea negra y gradiente */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          {/* Texto principal */}
          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              {strings.hero.greeting.preName[language]}{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                {strings.hero.greeting.name[language]}
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              {strings.hero.description[language]}
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          />
        </div>

        {/* Flecha con animación */}
        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Imagen de la cara (mitad visible) */}
        <div>
          <img
            className="face-img absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={fran}
            alt={strings.hero.altFrancisco[language]}
          />
        </div>
      </section>

      <style>{`
        /* Achicar la foto en pantallas muy pequeñas (<= 375px) */
        @media (max-width: 375px) {
          .face-img {
            height: 40vh !important;
            margin-left: 
          }
          /* Subir el texto */
          .hero-text-container {
            top: 100px !important;
  
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
