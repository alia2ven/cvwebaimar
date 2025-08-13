import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensaje enviado correctamente. Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                  <p className="text-slate-600">accdelfin@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Phone className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-slate-800">Teléfono</p>
                  <p className="text-slate-600">+34 (034) 123-4567</p>
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-green-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;