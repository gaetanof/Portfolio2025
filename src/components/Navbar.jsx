import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';
import { LanguageContext } from '../context/LanguageContext';
import { strings } from '../constants/strings';

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [borderAnimation, setBorderAnimation] = useState(false);

  // Animación 1s al cambiar idioma
  const handleLanguageToggle = () => {
    toggleLanguage();
    setBorderAnimation(true);
    setTimeout(() => {
      setBorderAnimation(false);
    }, 1000);
  };

  const animationClass = borderAnimation
    ? language === 'en'
      ? 'animate-flashES'
      : 'animate-flashEN'
    : '';

  const hoverClass = language === 'en' ? 'hover-flashES' : 'hover-flashEN';

  return (
    <nav className="fixed top-8 left-0 w-full z-20">
      <div
        className={`mx-auto w-[85%] bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh] py-2 px-4
        border border-black rounded-xl shadow-3xl flex items-center justify-between`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
        </Link>

        {/* Menú Desktop */}
        <div className="hidden sm:flex flex-row gap-14 mt-2 mr-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`list-none ${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>
                {strings.navbar[nav.id]
                  ? strings.navbar[nav.id][language]
                  : nav.title}
              </a>
            </li>
          ))}
        </div>

        {/* Botón de idioma Desktop */}
        <div className="hidden sm:flex">
          <button
            onClick={handleLanguageToggle}
            className={`w-[48px] h-[48px] border border-black text-black 
            flex items-center justify-center rounded-lg transition-colors 
            ${animationClass} ${hoverClass}`}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        {/* Menú Mobile */}
        <div className="sm:hidden flex justify-end items-center">
          {/* Botón de idioma Mobile */}
          <button
            onClick={handleLanguageToggle}
            className={`mr-2 w-[48px] h-[48px] border border-black text-black 
            flex items-center justify-center rounded-lg transition-colors 
            ${animationClass} ${hoverClass}`}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10 menu`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              {/* UL con clase "mobile-ul" */}
              <ul className="mobile-ul list-none flex flex-col gap-4 items-start justify-end mt-[10rem] -ml-[9px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`mobile-menu-item ${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>
                      {strings.navbar[nav.id]
                        ? strings.navbar[nav.id][language]
                        : nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>

      <style>{`
        @keyframes flashES {
          0% {
            border-color: black;
            color: black;
          }
          50% {
            border-color: red;
            color: yellow;
          }
          100% {
            border-color: black;
            color: black;
          }
        }
        @keyframes flashEN {
          0% {
            border-color: black;
            color: black;
          }
          50% {
            border-color: red;
            color: blue;
          }
          100% {
            border-color: black;
            color: black;
          }
        }

        /* Hover animations */
        .hover-flashES:hover {
          animation: flashES 1s forwards;
        }
        .hover-flashEN:hover {
          animation: flashEN 1s forwards;
        }
        .animate-flashES {
          animation: flashES 1s forwards;
        }
        .animate-flashEN {
          animation: flashEN 1s forwards;
        }

        .shadow-3xl {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        }

        /* === Ajustes EXCLUSIVOS para MOBILE (max-width: 640px) === */
        @media (max-width: 640px) {
          /* Ajustar el UL del menú móvil */
          .mobile-ul {
            margin-top: 6rem !important; 
            margin-left: 0 !important;   
            gap: 2rem !important;        
          }
          /* Ajustar la fuente de cada elemento */
          .mobile-ul .mobile-menu-item {
            font-size: 36px !important;   
            line-height: 1.2 !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
