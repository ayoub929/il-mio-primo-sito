import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- GLASS NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
           {/* Logo */}
           <div className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
             Malabocca
           </div>
           
           {/* Desktop Links */}
           <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-stone-300">
             <Link href="#chi-siamo" className="hover:text-orange-400 transition-colors duration-300">CHI SIAMO</Link>
             <Link href="#menu" className="hover:text-orange-400 transition-colors duration-300">MENU</Link>
             <Link href="#contatti" className="hover:text-orange-400 transition-colors duration-300">CONTATTI</Link>
           </div>

           {/* CTA Button */}
           <Link href="tel:+390645503437" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/20">
             PRENOTA
           </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
            alt="Osteria Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest mb-6 uppercase">
            Cucina Romana Autentica
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white drop-shadow-lg">
            OSTERIA MALABOCCA
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Dove la tradizione incontra l'eleganza. Un'esperienza culinaria indimenticabile nel cuore di Roma.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <Link href="#menu" className="group relative px-8 py-4 bg-white text-stone-950 rounded-full overflow-hidden transition-all hover:bg-stone-200 font-bold tracking-wide shadow-xl">
               SCOPRI IL MENU
             </Link>
             <Link href="#contatti" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-all font-medium tracking-wide text-white">
               DOVE SIAMO
             </Link>
          </div>
        </div>
      </section>

      {/* --- CHI SIAMO SECTION --- */}
      <section id="chi-siamo" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           {/* Image Card */}
           <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
             <img 
               src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop" 
               alt="Pasta Fresca" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
           </div>
           
           {/* Text Content */}
           <div className="space-y-8">
             <h2 className="text-4xl md:text-6xl font-bold text-white">
               Passione & <br/>
               <span className="text-orange-500">Tradizione</span>
             </h2>
             <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
               <p className="text-stone-300 text-lg leading-relaxed mb-6">
                 L'Osteria Malabocca nasce dall'amore per la cucina romana verace. Selezioniamo solo ingredienti freschi dai mercati locali per portare in tavola i sapori di una volta, rivisitati con un tocco moderno.
               </p>
               <p className="text-stone-300 text-lg leading-relaxed">
                 Dalla Carbonara cremosa all'Amatriciana ricca, ogni piatto è un viaggio nella storia gastronomica della nostra città.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* --- MENU HIGHLIGHTS --- */}
      <section id="menu" className="py-24 bg-stone-900/50 relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Il Nostro Gusto</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">I Classici Romani</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=2071&auto=format&fit=crop" alt="Carbonara" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <h3 className="text-3xl font-bold mb-2 text-white">Carbonara</h3>
                     <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       Guanciale croccante, pecorino romano DOP, uova bio e pepe nero macinato fresco.
                     </p>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1546549010-413bc4f4d756?q=80&w=2069&auto=format&fit=crop" alt="Cacio e Pepe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <h3 className="text-3xl font-bold mb-2 text-white">Cacio e Pepe</h3>
                     <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       Tonnarelli freschi, Pecorino Romano buccia nera e pepe tostato.
                     </p>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1974&auto=format&fit=crop" alt="Amatriciana" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <h3 className="text-3xl font-bold mb-2 text-white">Amatriciana</h3>
                     <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       Pomodoro San Marzano, guanciale di Amatrice e pecorino.
                     </p>
                  </div>
               </div>
            </div>
            
            <div className="text-center mt-16">
               <button className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 font-bold tracking-wide">
                 VEDI IL MENU COMPLETO
               </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contatti" className="bg-black py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
           {/* Address */}
           <div>
             <h4 className="text-2xl font-bold mb-6 text-white">Osteria Malabocca</h4>
             <p className="text-stone-400 mb-4 leading-relaxed">
               Via Esempio, 123<br/>
               00100 Roma (RM)
             </p>
             <a href="tel:+390645503437" className="text-orange-500 hover:text-orange-400 block mb-2 font-bold text-lg">+39 06 4550 3437</a>
             <a href="mailto:info@osteriamalabocca.it" className="text-stone-400 hover:text-white transition-colors">info@osteriamalabocca.it</a>
           </div>
           
           {/* Hours */}
           <div>
             <h4 className="text-xl font-bold mb-6 text-white">Orari</h4>
             <ul className="text-stone-400 space-y-3">
               <li className="flex justify-center md:justify-start justify-between border-b border-white/10 pb-2">
                 <span>Lun - Ven</span>
                 <span>12:00 - 15:00 / 19:00 - 23:30</span>
               </li>
               <li className="flex justify-center md:justify-start justify-between border-b border-white/10 pb-2">
                 <span>Sab - Dom</span>
                 <span>12:00 - 16:00 / 19:00 - 00:00</span>
               </li>
             </ul>
           </div>

           {/* Social */}
           <div className="flex flex-col items-center md:items-end">
             <h4 className="text-xl font-bold mb-6 text-white">Seguici</h4>
             <div className="flex gap-4">
               <a href="https://www.instagram.com/osteria_malabocca/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-600 transition-all duration-300 group">
                 <span className="font-bold text-xs group-hover:text-white">IG</span>
               </a>
               <a href="https://www.facebook.com/osteriamalabocca/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                 <span className="font-bold text-xs group-hover:text-white">FB</span>
               </a>
             </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-stone-600 text-sm">
          © {new Date().getFullYear()} Osteria Malabocca. Tutti i diritti riservati.
        </div>
      </footer>
    </main>
  );
}
