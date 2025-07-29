import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">María Elena González</h3>
            <p className="text-slate-300 leading-relaxed">
              Contador Público Certificado con más de 30 años de experiencia 
              en soluciones financieras estratégicas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Auditoría Financiera</li>
              <li>• Consultoría Contable</li>
              <li>• Implementación NIIF</li>
              <li>• Gestión de Riesgos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
            <div className="space-y-2 text-slate-300">
              <p>maria.gonzalez@email.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Ciudad de México, México</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 María Elena González. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;