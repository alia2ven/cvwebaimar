import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const ProfessionalExperience = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  const experiences = [
    {
      period: '2018 - Presente',
      position: 'Directora Financiera Senior',
      company: 'Corporación Global S.A.',
      achievements: [
        'Liderazgo de equipo de 25 profesionales contables',
        'Implementación exitosa de sistema SAP financiero',
        'Reducción de 40% en tiempo de cierre mensual',
        'Optimización de procesos que generaron ahorros de $2M anuales'
      ]
    },
    {
      period: '2010 - 2018',
      position: 'Gerente de Auditoría',
      company: 'Deloitte & Associates',
      achievements: [
        'Supervisión de auditorías para empresas Fortune 500',
        'Desarrollo de metodologías de riesgo innovadoras',
        'Certificación de más de 200 estados financieros',
        'Mentoría de 50+ contadores junior'
      ]
    },
    {
      period: '2005 - 2010',
      position: 'Consultora Contable Senior',
      company: 'KPMG International',
      achievements: [
        'Especialización en transiciones NIIF',
        'Consultoría para 30+ empresas medianas',
        'Diseño de sistemas de control interno',
        'Reconocimiento como "Consultora del Año 2009"'
      ]
    },
    {
      period: '1995 - 2005',
      position: 'Contadora Pública',
      company: 'Múltiples Organizaciones',
      achievements: [
        'Experiencia diversa en diferentes sectores',
        'Desarrollo de expertise en regulaciones fiscales',
        'Construcción de reputación profesional sólida',
        'Establecimiento de red profesional extensa'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperience((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-emerald-900 mb-6">Experiencia Profesional</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline navigation */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="flex space-x-4 bg-white rounded-full p-2 shadow-lg">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExperience(index)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    currentExperience === index
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                      : 'text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Experience content */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentExperience * 100}%)` }}
            >
              {experiences.map((exp, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-emerald-900 mt-4">{exp.position}</h3>
                      <p className="text-amber-600 font-semibold text-lg">{exp.company}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg"
                        >
                          <Star className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-emerald-800">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {experiences.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentExperience === index ? 'bg-emerald-500' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;