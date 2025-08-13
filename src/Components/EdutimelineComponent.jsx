import React, { useState, useEffect } from 'react';

const EducationTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const education = [
    {
      year: '1992',
      title: 'Licenciatura en Contaduría Pública',
      institution: 'Universidad del Zulia',
      description: 'Graduada con especialización en Auditoría Financiera'
    },
    {
      year: '1995',
      title: 'Analista Tributario y Auditoría Interna,',
      institution: 'Instituto Tecnológico Superior',
      description: 'Enfoque en análisis financiero avanzado y gestión de riesgos'
    },
    {
      year: '2000',
      title: 'Certificación CPA',
      institution: 'Colegio de Contadores Públicos del Zulia Venezuela',
      description: 'Certificación profesional en Contaduría Pública'
    },
    {
      year: '2010',
      title: '´Control Interno en Análisis del área administrativa contable, ley de protección de datos',
      institution: 'Universidad de las Islas Baleares',
      description: 'Especialización en Normas de Información Financiera'
    },
    {
      year: '2022',
      title: 'Marketing On Line Comercios al por menor,',
      institution: 'Instituto de Innovación',
      description: 'Adopción de tecnologías emergentes en contabilidad'
    }
  ];

  useEffect(() => {
    education.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section id="FormacionPage">
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">Formación Académica</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-amber-200 to-emerald-200"></div>

            {education.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{item.title}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{item.institution}</p>
                  <p className="text-amber-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EducationTimeline;