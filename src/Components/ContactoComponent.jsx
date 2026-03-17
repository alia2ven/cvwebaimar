import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (status.error || status.success) {
      setStatus({
        loading: false,
        success: false,
        error: false,
        message: ''
      });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'El nombre es requerido';
    if (!formData.email.trim()) return 'El email es requerido';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Email inválido';
    if (!formData.subject.trim()) return 'El asunto es requerido';
    if (!formData.message.trim()) return 'El mensaje es requerido';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus({ loading: false, success: false, error: true, message: error });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Faltan variables de entorno'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: 'Enviando...' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      console.log('🚀 Enviando:', templateParams);

      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('✅ RESPUESTA EMAILJS:', res);

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Mensaje enviado correctamente'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (err) {
      console.error('❌ ERROR REAL:', err);

      setStatus({
        loading: false,
        success: false,
        error: true,
        message: `Error al enviar (${err?.status || 'sin status'})`
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" />

      <button type="submit" disabled={status.loading}>
        {status.loading ? 'Enviando...' : 'Enviar'}
      </button>

      {status.message && <p>{status.message}</p>}
    </form>
  );
};

export default ContactForm;