
import React from 'react';
import Navbar from './components/Navbar';
import { CASE_STUDIES, FAQS, SOLUTIONS, PROCESS } from './constants';
import { 
  ChevronRight, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Mail,
  Zap,
  LineChart,
  ShieldCheck
} from 'lucide-react';

const App: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu interés! Nos pondremos en contacto con vós a la brevedad.");
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#004d80]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#004d80]">Expertos en Automatización con IA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                Hacemos que tu empresa <span className="logo-gradient">vuelva a ser ágil</span> con IA
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Liberamos a tu equipo de la carga operativa. Diseñamos sistemas de IA que automatizan procesos y mejoran cómo funciona tu negocio.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contacto" className="bg-[#004d80] text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#003d66] transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-2 group">
                  Agendar auditoría <Calendar size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/" className="bg-white text-[#004d80] border-2 border-[#004d80] px-8 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  Contactar ventas <MessageCircle size={22} />
                </a>
              </div>
              <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-10 opacity-60">
                 <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest"><Zap size={18}/> Velocidad</div>
                 <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest"><LineChart size={18}/> ROI Directo</div>
                 <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest"><ShieldCheck size={18}/> Seguridad</div>
              </div>
            </div>
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
  

  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>
</div>

          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-[#004d80] font-black uppercase tracking-[0.2em] text-sm mb-4">Nuestro Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">IA que realmente funciona</h3>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto font-medium text-lg">
              Diseñamos e implementamos sistemas de IA que aportan valor desde el primer día operativo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {SOLUTIONS.map((sol, i) => (
              <div key={i} className="group bg-white border border-slate-200 p-12 rounded-[2.5rem] hover:shadow-[0_30px_60px_rgba(0,40,80,0.06)] transition-all duration-500 hover:-translate-y-2">
                <div className="mb-10 p-5 bg-blue-50 rounded-2xl w-fit text-[#004d80] group-hover:bg-[#004d80] group-hover:text-white transition-all duration-500">
                   {React.cloneElement(sol.icon as React.ReactElement, { className: "w-10 h-10" })}
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-5">{sol.title}</h4>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">
                  {sol.description}
                </p>
                <div className="space-y-4 mb-12">
                  {sol.features.map((feat, fi) => (
                    <div key={fi} className="flex items-center gap-4 text-slate-700 font-bold">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-[#004d80]" />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
                <a href="#contacto" className="inline-flex items-center gap-3 text-[#004d80] font-black text-lg hover:gap-5 transition-all">
                  Quiero esta solución <ArrowRight size={22} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="casos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[#004d80] font-black uppercase tracking-[0.2em] text-sm mb-4 text-center md:text-left">Casos de Uso</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 text-center md:text-left">Aplicaciones reales de automatización inteligente</h3>
            </div>
            <p className="text-slate-500 font-medium text-lg text-center md:text-left">
              Ejemplos concretos de cómo la automatización inteligente puede impactar en operaciones reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-10 rounded-[2rem] flex flex-col hover:border-blue-200 transition-colors">
                <div className="mb-8">
                  <span className="text-xs font-black text-[#004d80] bg-blue-100 px-4 py-1.5 rounded-full mb-6 inline-block uppercase tracking-widest">
                    {cs.industry}
                  </span>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Desafío</h4>
                      <p className="text-slate-700 font-semibold leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#004d80] uppercase tracking-widest mb-2">Implementación</h4>
                      <p className="text-slate-900 font-bold leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-8 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-emerald-600 uppercase mb-1 tracking-widest">Resultado Clave</p>
                    <p className="text-slate-900 font-black text-xl">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="proceso" className="py-32 bg-[#004d80] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-blue-300 font-black uppercase tracking-[0.2em] text-sm mb-4">El Camino</h2>
            <h3 className="text-4xl md:text-5xl font-black">Implementación sin fricción</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4 leading-none">
                  {p.id}
                </div>
                <div className="relative pt-6">
                  <h4 className="text-2xl font-black mb-4 group-hover:text-blue-300 transition-colors">{p.title}</h4>
                  <p className="text-blue-100/70 font-medium leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 bg-white/5 border border-white/10 p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="max-w-xl text-center md:text-left">
                <h4 className="text-2xl font-black mb-3 italic">"No buscamos sumar clientes. Buscamos construir casos de éxito reales."</h4>
                <p className="text-blue-100 font-medium">Trabajamos con cada empresa de forma personalizada, involucrándonos en el problema, la solución y los resultados.</p>
             </div>
             <a href="#contacto" className="bg-white text-[#004d80] px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-50 transition-all flex items-center gap-3">
                Agendar ahora <ArrowRight size={22}/>
             </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[#004d80] font-black uppercase tracking-[0.2em] text-sm mb-4">Resolución de dudas</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Transparencia desde el inicio</h3>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden group hover:border-blue-200 transition-all">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-bold text-slate-900 group-hover:text-[#004d80] transition-colors pr-8">{faq.question}</span>
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#004d80] transition-transform group-open:rotate-180">
                      <ChevronRight size={20} />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 pt-0 text-slate-600 font-medium text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-20 shadow-[0_40px_100px_rgba(0,40,80,0.06)] overflow-hidden relative">
            <div className="flex flex-col lg:flex-row gap-20 relative z-10">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Iniciemos la <span className="logo-gradient">Inmersión</span></h2>
                <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
                  Completá el formulario para que nuestro equipo técnico analice la viabilidad de tu proyecto. Te contactamos en menos de 24hs hábiles.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#004d80] group-hover:bg-[#004d80] group-hover:text-white transition-all shadow-sm">
                      <Calendar size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Diagnóstico</p>
                      <p className="text-xl font-bold text-slate-900">Llamada de 30 min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                      <MessageCircle size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                      <p className="text-xl font-bold text-slate-900">+598 98 035 567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-slate-800 group-hover:text-white transition-all shadow-sm">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-xl font-bold text-slate-900">contact@diveautomations.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-black text-slate-500 mb-3 uppercase tracking-widest">Nombre completo</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Tu nombre"
                          className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-[#004d80] transition-colors font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-slate-500 mb-3 uppercase tracking-widest">Empresa</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Nombre de la Cia."
                          className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-[#004d80] transition-colors font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-black text-slate-500 mb-3 uppercase tracking-widest">Email Corporativo</label>
                      <input 
                        type="email" 
                        required
                        placeholder="email@empresa.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-[#004d80] transition-colors font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-slate-500 mb-3 uppercase tracking-widest">Desafío a automatizar</label>
                      <textarea 
                        rows={4}
                        placeholder="Contanos qué tarea repetitiva te hace perder más tiempo hoy…"
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-[#004d80] transition-colors resize-none font-medium"
                      ></textarea>
                    </div>
                    <button className="w-full bg-[#004d80] hover:bg-[#003d66] text-white font-black py-5 rounded-xl transition-all shadow-xl shadow-blue-900/10 text-lg uppercase tracking-widest">
                      Evaluar mi caso
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start">
               <div className="flex items-center gap-1">
                  <span className="text-2xl font-black logo-gradient tracking-tight">Dive</span>
               </div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-0.5">Automations</span>
            </div>
            
            <div className="flex gap-12 text-slate-500 font-bold text-sm">
              <a href="#" className="hover:text-[#004d80] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#004d80] transition-colors">Términos</a>
              <a href="#" className="hover:text-[#004d80] transition-colors">LinkedIn</a>
            </div>
            
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Dive Automations. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
