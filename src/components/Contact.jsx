import React, { useState, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { LanguageContext } from '../context/LanguageContext';
import { strings } from '../constants/strings';

// Web3Forms Access Key (es pública y segura de exponer en el frontend).
// Conseguí la tuya en https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'd85579ee-1753-4f58-94c1-0adcc97e05dd';

const Contact = () => {
  const formRef = useRef();
  const { language } = useContext(LanguageContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Estado de errores individuales en cada campo (true si está vacío)
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Mensaje de error general para los campos
  const [formError, setFormError] = useState('');

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Si el usuario comienza a escribir, se limpia el error correspondiente
    setErrors((prev) => ({ ...prev, [name]: false }));
    setForm({ ...form, [name]: value });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    const newErrors = {
      name: form.name.trim() === '',
      email: form.email.trim() === '',
      message: form.message.trim() === '',
    };

    setErrors(newErrors);

    // Si hay algún campo vacío, mostramos un mensaje y no enviamos aún
    if (Object.values(newErrors).some((val) => val === true)) {
      setFormError(strings.contact.emptyFieldsError[language]);
      return;
    }

    setFormError(''); // Limpiamos mensaje de error si todo está correcto

    // Honeypot anti-spam: si este campo oculto está tildado, es un bot.
    // Simulamos éxito y no enviamos nada.
    if (formRef.current?.botcheck?.checked) {
      setSuccessMessage(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccessMessage(false), 5000);
      return;
    }

    setLoading(true);

    // Envío mediante Web3Forms (https://web3forms.com)
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Nuevo mensaje de ${form.name} desde tu portfolio`,
        from_name: 'Portfolio franciscogaetano.com',
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setSuccessMessage(true);
          // Limpiar campos y errores
          setForm({
            name: '',
            email: '',
            message: '',
          });
          setErrors({
            name: false,
            email: false,
            message: false,
          });
          // Reinicia el formulario nativo (por si fuese necesario)
          formRef.current?.reset();
          // Oculta el mensaje de éxito después de unos segundos
          setTimeout(() => setSuccessMessage(false), 5000);
        } else {
          console.error('Web3Forms error:', data);
          setFormError(strings.contact.sendError[language]);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setFormError(strings.contact.sendError[language]);
      });
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          {strings.contact.sectionSubText[language]}
        </p>
        <h3 className={styles.sectionHeadTextLight}>
          {strings.contact.sectionHeadText[language]}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          {/* Honeypot anti-spam (invisible para humanos) */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* NOMBRE */}
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              {strings.contact.nameLabel[language]}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={
                !errors.name
                  ? strings.contact.namePlaceholder[language]
                  : strings.contact.mandatoryPlaceholder[language]
              }
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium 
                bg-eerieBlack placeholder:text-taupe text-timberWolf 
                ${errors.name ? 'placeholder:text-red-500' : ''}`}
            />
          </label>

          {/* EMAIL */}
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              {strings.contact.emailLabel[language]}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={
                !errors.email
                  ? strings.contact.emailPlaceholder[language]
                  : strings.contact.mandatoryPlaceholder[language]
              }
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium 
                bg-eerieBlack placeholder:text-taupe text-timberWolf
                ${errors.email ? 'placeholder:text-red-500' : ''}`}
            />
          </label>

          {/* MENSAJE */}
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              {strings.contact.messageLabel[language]}
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={
                !errors.message
                  ? strings.contact.messagePlaceholder[language]
                  : strings.contact.mandatoryPlaceholder[language]
              }
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium resize-none 
                bg-eerieBlack placeholder:text-taupe text-timberWolf
                ${errors.message ? 'placeholder:text-red-500' : ''}`}
            />
          </label>

          {/* Mensaje de error (formError) en rojo */}
          {formError && (
            <div className="text-red-500 font-semibold text-[14px] mt-[-8px] mb-[4px]">
              {formError}
            </div>
          )}

          {/* BOTÓN DE ENVÍO */}
          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] 
            text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap
            sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              if (!loading) {
                document
                  .querySelector('.contact-btn')
                  ?.setAttribute('src', sendHover);
              }
            }}
            onMouseOut={() => {
              if (!loading) {
                document
                  .querySelector('.contact-btn')
                  ?.setAttribute('src', send);
              }
            }}
          >
            {/* Si está enviando, mostramos texto "Enviando" (sin ícono) */}
            {loading ? (
              strings.contact.sendingText[language]
            ) : (
              <>
                {strings.contact.buttonText[language]}
                <img
                  src={send}
                  alt="send"
                  className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                />
              </>
            )}
          </button>
        </form>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="mt-6 text-timberWolf bg-jetLight p-4 rounded-lg text-center">
            {strings.contact.successMessage[language]}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
