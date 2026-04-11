import React, { useState } from 'react';
import { Monitor, X, ChevronRight, ZoomIn } from 'lucide-react';

// 1. Definimos el tipo de datos para nuestros productos
interface Producto {
    id: number;
    nombre: string;
    specs: string;
    precio: string;
    fotos: string[];
}

const productos: Producto[] = [
{
    id: 1,
    nombre: "Sony PlayStation 4 Pro 1TB Standard color negro azabache",
    specs: "1TB HDD - 4K HDR - Wi-Fi y Bluetooth - Incluye 2 controles DualShock 4 ergonómicos",
    precio: "$600.000",
    fotos: [
        "/FotosStock/play41.jpg",
        "/FotosStock/play42.jpg",
        "/FotosStock/play43.jpg",
        "/FotosStock/play44.jpg",
        "/FotosStock/play45.jpg"
    ]
},
   {
    id: 2,
    nombre: "Canon PIXMA MP280 multifunción",
    specs: "Impresora multifunción (impresión, escaneo y copia) - Inyección de tinta - Resolución 4800x1200 dpi - Escáner 1200x2400 dpi - USB (sin WiFi) - Soporta A4, carta, legal y fotos - Bandeja hasta 100 hojas",
    precio: "$300.000",
   fotos: [
        "/FotosStock/impresora1.jpg",
        "/FotosStock/impresora2.jpg",
        "/FotosStock/impresora3.jpg",
    ]
},
   
];

export const Stock: React.FC = () => {
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
    const [fotoActiva, setFotoActiva] = useState(0);

    return (
        <section id="stock" className="py-24 bg-white dark:bg-innova-dark-bg transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-innova-tech font-bold uppercase tracking-widest text-sm mb-2">
                            <Monitor size={18} />
                            <span>Equipos Listos</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-innova-dark dark:text-white">Stock Disponible</h2>
                    </div>
                    <p className="hidden md:block text-slate-500 dark:text-slate-400 max-w-xs text-right italic">
                        Equipos seleccionados y testeados por nuestro equipo técnico.
                    </p>
                </div>

                {/* CARRUSEL - Scroll horizontal */}
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
                    {productos.map((prod) => (
                        <div 
                            key={prod.id}
                            onClick={() => { setProductoSeleccionado(prod); setFotoActiva(0); }}
                            className="min-w-[300px] md:min-w-[350px] snap-center bg-innova-bg dark:bg-slate-800/50 rounded-[2rem] p-4 border border-slate-100 dark:border-slate-700 hover:border-innova-tech transition-all cursor-pointer group"
                        >
                            <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-4 bg-white dark:bg-slate-900">
                                <img src={prod.fotos[0]} alt={prod.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-innova-dark/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <ZoomIn className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-innova-dark dark:text-white mb-1">{prod.nombre}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{prod.specs}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-innova-tech font-black text-xl">{prod.precio}</span>
                                <button className="p-2 bg-innova-dark text-white rounded-xl group-hover:bg-innova-tech group-hover:text-innova-dark transition-colors">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MODAL DE FOTOS */}
                {productoSeleccionado && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-innova-dark/90 backdrop-blur-sm">
                        <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl">
                            <button 
                                onClick={() => setProductoSeleccionado(null)}
                                className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* Galería del Modal */}
                                <div className="bg-slate-100 dark:bg-slate-800 p-6 flex flex-col justify-center items-center gap-4">
                                    <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-lg bg-white">
                                        <img 
                                            src={productoSeleccionado.fotos[fotoActiva]} 
                                            alt="Detalle" 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        {productoSeleccionado.fotos.map((f, index) => (
                                            <button 
                                                key={index}
                                                onClick={() => setFotoActiva(index)}
                                                className={`w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${fotoActiva === index ? 'border-innova-tech scale-110' : 'border-transparent opacity-50'}`}
                                            >
                                                <img src={f} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Info del Modal */}
                                <div className="p-10 flex flex-col justify-center">
                                    <h3 className="text-3xl font-black text-innova-dark dark:text-white mb-4">{productoSeleccionado.nombre}</h3>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                            {productoSeleccionado.specs}
                                        </p>
                                        <div className="text-4xl font-black text-innova-tech">
                                            {productoSeleccionado.precio}
                                        </div>
                                    </div>
                                <a 
                                href={`https://wa.me/5492923464118?text=Hola! Me interesa la ${productoSeleccionado.nombre}`}
                            className="w-full py-4 bg-innova-tech text-innova-dark font-bold rounded-2xl text-center hover:scale-[1.02] transition-transform shadow-xl shadow-innova-tech/20"
                            >
                 Consultar por WhatsApp
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};