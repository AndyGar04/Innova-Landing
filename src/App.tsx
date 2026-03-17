import { Contacto } from './sections/contacto';
import { Proyectos } from './sections/proyectos';
import { SobreNosotros } from './sections/sobreNosotros';
import { Inicio } from './sections/inicio';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Stock } from './sections/stock';
import { Servicios } from './sections/servicios';
import { Testimonios } from './sections/testimonios';

//Modularizacion de secciones y componentes.
const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30">
      <Navbar />

      <Inicio />

      <SobreNosotros />
      
      <Proyectos />

      <Stock />

      <Servicios />

      <Testimonios />

      <Contacto />

      <Footer />
    </div>
  );
};

export default App;