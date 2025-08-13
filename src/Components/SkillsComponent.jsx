import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [skillProgress, setSkillProgress] = useState({});

  const skillCategories = [
    {
      title: 'Habilidades Técnicas',
      skills: [
        { name: 'Auditoría Financiera', level: 95 },
        { name: 'NIIF/GAAP', level: 90 },
        { name: 'Análisis Financiero', level: 92 },
        { name: 'Gestión de Riesgos', level: 88 }
      ]
    },
    {
      title: 'Software Especializado',
      skills: [
        { name: ' Financial', level: 85 },
        { name: 'QuickBooks Enterprise', level: 90 },
        { name: 'Excel ', level: 70 },
        { name: 'Power BI', level: 50 }
      ]
    },
    {
      title: 'Competencias Profesionales',
      skills: [
        { name: 'Trabajo en Equipos', level: 93 },
        { name: 'Comunicación Ejecutiva', level: 88 },
        { name: 'Planificación Estratégica', level: 90 },
        { name: 'Cumplimiento Regulatorio', level: 94 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setSkillProgress(prev => ({
              ...prev,
              [`${categoryIndex}-${skillIndex}`]: skill.level
            }));
          }, (categoryIndex * 500) + (skillIndex * 200));
        });
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="SkillsPage">
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">Habilidades y Competencias</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-emerald-800 font-medium">{skill.name}</span>
                      <span className="text-amber-600 font-semibold">
                        {skillProgress[`${categoryIndex}-${skillIndex}`] || 0}%
                      </span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skillProgress[`${categoryIndex}-${skillIndex}`] || 0}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;