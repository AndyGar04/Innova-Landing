import React, { useMemo, useState } from 'react';
import { Monitor, X, ChevronRight, Search, Star, ShieldCheck } from 'lucide-react';

type ProductState = 'nuevo' | 'usado';

type Product = {
  id: number;
  nombre: string;
  categoria: string;
  estado: ProductState;
  precio: number;
  descripcion: string;
  especificaciones: string[];
  fotos: string[];
  garantia: string;
  destacado?: boolean;
};

const productos: Product[] = [
  {
    id: 1,
    nombre: 'GeForce GTX 1050 TI',
    categoria: 'Componente',
    estado: 'usado',
    precio: 250000,
    descripcion: 'Tarjeta gráfica, excelente estado',
    especificaciones: ['NVIDIA'],
    fotos: [
      '/Stock/GeForceGtx1050ti.jpeg'
    ],
    garantia: '',
    destacado: true,
  },
  {
    id: 2,
    nombre: 'CORSAIR DDR4 2X8GB',
    categoria: 'Componente',
    estado: 'usado',
    precio: 280000,
    descripcion: 'Corsair Vengance RGB PRO 3000MHz',
    especificaciones: ['2x8Gb', '3000MHz'],
    fotos: [
        '/Stock/Corsair_Ddr4_2X8GB.jpeg'
      ],
    garantia: '',
    destacado: true,
  },
  {
    id: 3,
    nombre: 'AMD Ryzen 6 3600X',
    categoria: 'Componente',
    estado: 'usado',
    precio: 200000,
    descripcion: 'Procesador Ryzen 6, tercera generación',
    especificaciones: ['Ryzen 6', '3600X'],
    fotos: [
        '/Stock/AMD_Ryzen_5_3600X.jpeg'
    ],
    garantia: '',
  },
  {
    id: 4,
    nombre: 'SDP_650-FX',
    categoria: 'Fuente de alimentación SDP',
    estado: 'usado',
    precio: 50000,
    descripcion: 'Fuente de alimentación SDP de 650W',
    especificaciones: ['650W', 'RGB', 'Full Size', 'USB'],
    fotos: [
        '/Stock/SDP_650-FX.jpeg'
    ],
    garantia: '',
  },
  {
    id: 5,
    nombre: 'SSD NVMe 1TB',
    categoria: 'Almacenamiento',
    estado: 'usado',
    precio: 100000,
    descripcion: 'Disco m.2 WD GREEN SATA SSD M.2 2280',
    especificaciones: ['240GB', 'Alta velocidad', 'Compatible con PC y notebook'],
    fotos: [
        '/Stock/WD-GREEN-SATA-SSD-M.2.jpeg'
    ],
    garantia: '',
  },
  {
    id: 6,
    nombre: 'Placa de MSI B550M',
    categoria: 'Componentes',
    estado: 'usado',
    precio: 200000,
    descripcion: 'Placa madre MSI B550M PRO-VDH WIFI',
    especificaciones: ['WIFI', 'Placa madre', 'MSI'],
    fotos: [
       '/Stock/MSI_B550M_PRO-VDH.jpeg'
      ],
    garantia: '',
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value);

export const Stock: React.FC = () => {
  const [filtro, setFiltro] = useState<'todos' | ProductState>('todos');
  const [productoSeleccionado, setProductoSeleccionado] = useState<Product | null>(null);
  const [fotoActiva, setFotoActiva] = useState(0);

  const productosFiltrados = useMemo(() => {
    if (filtro === 'todos') return productos;
    return productos.filter((producto) => producto.estado === filtro);
  }, [filtro]);

  return (
    <section id="stock" className="bg-slate-50 py-24 transition-colors duration-500 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-500">
              <Monitor size={16} />
              Stock de componentes
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Hardware y componentes <span className="text-cyan-500">disponibles</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {(['todos', 'nuevo', 'usado'] as const).map((estado) => (
              <button
                key={estado}
                onClick={() => setFiltro(estado)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  filtro === estado
                    ? 'bg-slate-900 text-white shadow-lg dark:bg-cyan-500 dark:text-slate-950'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {estado === 'todos' ? 'Todos' : estado === 'nuevo' ? 'Nuevos' : 'Usados'}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            readOnly
            value="Listados desde código frontend — podés agregar más productos en el array de la sección"
            className="w-full bg-transparent text-sm text-slate-500 outline-none dark:text-slate-400"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {productosFiltrados.map((producto) => (
            <article
              key={producto.id}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative">
                <img
                  src={producto.fotos[0]}
                  alt={producto.nombre}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800 backdrop-blur-sm">
                  {producto.categoria}
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950">
                  {producto.estado}
                </div>

                {producto.destacado && (
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    <Star size={12} className="fill-white text-white" />
                    Destacado
                  </div>
                )}
              </div>

              <div className="space-y-5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{producto.nombre}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {producto.estado === 'nuevo' ? 'Equipo nuevo' : 'Equipo usado revisado'}
                    </p>
                  </div>

                  <span className="text-lg font-black text-cyan-500">{formatPrice(producto.precio)}</span>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {producto.descripcion}
                </p>

                <div className="flex flex-wrap gap-2">
                  {producto.especificaciones.slice(0, 2).map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck size={16} />
                    Garantía {producto.garantia}
                  </div>

                  <button
                    onClick={() => {
                      setProductoSeleccionado(producto);
                      setFotoActiva(0);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:text-slate-950 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                  >
                    Ver más
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {productoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl">
            <button
              onClick={() => setProductoSeleccionado(null)}
              className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20"
              aria-label="Cerrar modal"
            >
              <X size={22} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="bg-slate-800 p-5">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-700">
                  <img
                    src={productoSeleccionado.fotos[fotoActiva]}
                    alt={productoSeleccionado.nombre}
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex gap-3">
                  {productoSeleccionado.fotos.map((foto, index) => (
                    <button
                      key={foto}
                      onClick={() => setFotoActiva(index)}
                      className={`h-16 w-16 overflow-hidden rounded-xl border-2 transition-all ${
                        fotoActiva === index ? 'border-cyan-400' : 'border-transparent opacity-70'
                      }`}
                    >
                      <img src={foto} alt="Vista del producto" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="mb-4 inline-flex w-fit items-center rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  {productoSeleccionado.estado}
                </div>

                <h3 className="text-3xl font-black text-white">{productoSeleccionado.nombre}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                  {productoSeleccionado.categoria}
                </p>

                <div className="my-6 flex items-end gap-3">
                  <span className="text-4xl font-black text-cyan-400">
                    {formatPrice(productoSeleccionado.precio)}
                  </span>
                  <span className="mb-1 text-sm text-slate-400">Precio final</span>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">
                  {productoSeleccionado.descripcion}
                </p>

                <div className="mt-6 space-y-3">
                  {productoSeleccionado.especificaciones.map((spec) => (
                    <div key={spec} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-300">
                  Garantía: <span className="font-bold text-white">{productoSeleccionado.garantia}</span>
                </div>

                <a
                  href="https://wa.me/5492923565384?text=Hola,%20me%20interesa%20este%20producto%20de%20InnovaByte"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-6 py-4 text-base font-black text-slate-950 transition-all hover:bg-cyan-400"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};