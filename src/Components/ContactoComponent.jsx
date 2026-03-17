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
      setStatus(prev => ({
        ...prev,
        error: false,
        success: false,
        message: ''
      }));
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
        message: '¡Mensaje enviado exitosamente! Te responderé pronto.'
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
        message: 'Error al enviar el mensaje. Inténtalo de nuevo.'
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
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Información de Contacto</h3>
                <p className="text-lg text-slate-600 mb-8">
                  Estoy disponible para discutir oportunidades profesionales, 
                  consultas especializadas o colaboraciones estratégicas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-slate-600">aimarcvweb@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Teléfono</p>
                    <p className="text-slate-600">+34 (034) 679886703</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Ubicación</p>
                    <p className="text-slate-600">Palma, Baleares. España</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Linkedin className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-slate-800">LinkedIn</p>
                    <p className="text-slate-600">linkedin.com/in/aimar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Envíame un Mensaje</h3>
              
              {status.message && (
                <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                  status.success 
                    ? 'bg-green-50 border border-green-200 text-green-700' 
                    : status.error 
                    ? 'bg-red-50 border border-red-200 text-red-700'
                    : 'bg-blue-50 border border-blue-200 text-blue-700'
                }`}>
                  {status.success && <CheckCircle className="w-5 h-5" />}
                  {status.error && <XCircle className="w-5 h-5" />}
                  {status.loading && <Loader2 className="w-5 h-5 animate-spin" />}
                  <span>{status.message}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Asunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-green-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
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