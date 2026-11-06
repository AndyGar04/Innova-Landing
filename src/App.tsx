import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Contacto } from './sections/contacto';
import { Proyectos } from './sections/proyectos';
import { SobreNosotros } from './sections/sobreNosotros';
import { Inicio } from './sections/inicio';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { FAQ } from './sections/FAQ';
import { Servicios } from './sections/servicios';
import { Stock } from './sections/stock';
import { Testimonios } from './sections/testimonios';

const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <>
      <Inicio />
      <SobreNosotros />
      <Proyectos />
      <Servicios />
      <Testimonios />
      <FAQ />
      <Contacto />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/compra-venta" element={<Stock />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;