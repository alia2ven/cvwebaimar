import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, User } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
      <div className="bg-[url('/assets/fondo4.png')] bg-cover bg-center bg-no-repeat h-screen">

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className={`py-4 text-center z-10 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
         

  <img
    alt=""
    src="/public/assets/fondo4.png"

    
    className="w-30 h-30  inline-block size-45 rounded-full ring-2 ring-red shadow-xl/60 transition delay-400 duration-500 ease-in-out transform hover:rotate-45 "  />

            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Aimar Caldera Delfin
          </h1>
          <p className="text-2xl text-purple-200 mb-8 font-light">
            Contador Público Certificado
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Más de 30 años de experiencia transformando la gestión financiera empresarial 
            con precisión, integridad y visión estratégica.
          </p>
        </div>

        <button
          onClick={onEnter}
          className="group bg-gradient-to-r from-brown-600 to-green-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Explorar Perfil
          <ChevronRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-300 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
