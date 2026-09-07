import { useEffect } from 'react';

const WhatsappRedirect = () => {
  useEffect(() => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER;

    if (number) {
      window.location.replace(`https://wa.me/${number}`);
    } else {
      console.error('VITE_WHATSAPP_NUMBER is missing.');
    }
  }, []);

  return null;
};

export default WhatsappRedirect;