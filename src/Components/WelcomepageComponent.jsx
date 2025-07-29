import React, { useState, useEffect } from 'react';
import { Award, Star, Briefcase, GraduationCap } from 'lucide-react';

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50 py-20">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-6">Bienvenido</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-emerald-800 leading-tight">
                Transformando números en decisiones estratégicas
              </h3>
              
              <p className="text-lg text-amber-700 leading-relaxed">
                Durante más de tres décadas, he dedicado mi carrera a proporcionar 
                soluciones financieras precisas y estratégicas que impulsan el crecimiento empresarial.
              </p>

              <p className="text-lg text-amber-700 leading-relaxed">
                Mi experiencia abarca desde auditorías complejas hasta la implementación 
                de sistemas contables innovadores, siempre manteniendo los más altos 
                estándares de precisión e integridad profesional.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-amber-600 mb-2">30+</div>
                  <div className="text-emerald-700">Años de Experiencia</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                  <div className="text-emerald-700">Proyectos Completados</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-emerald-100 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-amber-600" />
                    <span className="text-emerald-800">Contador Público Certificado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-amber-600" />
                    <span className="text-emerald-800">Especialista en Auditoría</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-6 h-6 text-amber-600" />
                    <span className="text-emerald-800">Consultoría Financiera</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-amber-600" />
                    <span className="text-emerald-800">Formación Continua</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;