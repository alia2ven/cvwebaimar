import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';

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

  const EMAIL_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };

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
    if (formData.message.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: validationError
      });
      return;
    }

    if (!EMAIL_CONFIG.SERVICE_ID || !EMAIL_CONFIG.TEMPLATE_ID || !EMAIL_CONFIG.PUBLIC_KEY) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Faltan variables de entorno'
      });
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: 'Enviando mensaje...'
    });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      console.log('✅ Email enviado:', response);

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: '¡Mensaje enviado exitosamente!'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ Error:', error);

      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Error al enviar. Intenta nuevamente.'
      });
    }
  };

  return (
    <section id="ContactoPage">
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Contacto</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-purple-700 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

            {/* INFO */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-800">Información de Contacto</h3>
              <p className="text-lg text-slate-600">
                Estoy disponible para oportunidades, consultas o colaboraciones.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail /> <span>aimarcvweb@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone /> <span>+34 679886703</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin /> <span>Palma, España</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin /> <span>linkedin.com/in/aimar</span>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-8 rounded-xl shadow-xl">

              {status.message && (
                <div className="mb-4">
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" />

                <button type="submit" disabled={status.loading}>
                  {status.loading ? 'Enviando...' : 'Enviar'}
                </button>
              </form>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;