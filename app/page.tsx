import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-orange-700 selection:text-white">
      
      {/* --- ELEGANT NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
           {/* Logo - Text based for elegance */}
           <Link href="/" className="flex flex-col items-center group">
             <span className="font-serif text-2xl tracking-widest text-stone-900 group-hover:text-orange-800 transition-colors">MALABOCCA</span>
             <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Osteria & Vini</span>
           </Link>
           
           {/* Desktop Links */}
           <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest text-stone-600">
             <Link href="#filosofia" className="hover:text-orange-800 transition-colors">FILOSOFIA</Link>
             <Link href="#menu" className="hover:text-orange-800 transition-colors">IL MENU</Link>
             <Link href="#gallery" className="hover:text-orange-800 transition-colors">ATMOSFERA</Link>
             <Link href="#contatti" className="hover:text-orange-800 transition-colors">CONTATTI</Link>
           </div>

           {/* CTA Button - Gold/Elegant style */}
           <Link 
             href="tel:+39054564468" 
             className="hidden md:inline-block border border-stone-900 px-8 py-3 text-xs font-bold tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-500"
           >
             PRENOTA UN TAVOLO
           </Link>
        </div>
      </nav>

      {/* --- HERO SECTION (Parallax & Immersive) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Immagine scura ed elegante di interni o dettaglio cibo */}
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
            alt="Osteria Malabocca Atmosphere" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <span className="block text-orange-200 text-xs md:text-sm tracking-[0.4em] mb-6 uppercase font-medium">
            Bagnacavallo, Ravenna
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight">
            L'Arte del <br/>
            <span className="italic text-orange-100">Buon Gusto</span>
          </h1>
          <p className="text-stone-200 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Dove la tradizione romagnola incontra l'eleganza contemporanea. 
            Un'esperienza culinaria autentica, in un'atmosfera intima e raffinata.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link href="#menu" className="bg-white text-stone-900 px-10 py-4 text-xs font-bold tracking-widest hover:bg-orange-50 transition-colors duration-300">
               SCOPRI IL MENU
             </Link>
             <Link href="tel:+39054564468" className="border border-white text-white px-10 py-4 text-xs font-bold tracking-widest hover:bg-white hover:text-stone-900 transition-colors duration-300">
               RISERVA ORA
             </Link>
          </div>
        </div>
      </section>

      {/* --- FILOSOFIA (Clean & Airy) --- */}
      <section id="filosofia" className="py-32 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-orange-800/30 hidden md:block"></div>
             <img 
               src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
               alt="Chef plating food" 
               className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out shadow-2xl"
             />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-orange-800/30 hidden md:block"></div>
           </div>
           
           <div className="space-y-8">
             <span className="text-orange-800 text-xs font-bold tracking-[0.2em] uppercase">La Nostra Filosofia</span>
             <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
               Cucina Autentica, <br/>
               <span className="italic text-stone-500">Cuore Romagnolo</span>
             </h2>
             <div className="w-12 h-0.5 bg-orange-800"></div>
             <p className="text-stone-600 text-lg leading-relaxed font-light">
               All'Osteria Malabocca, crediamo che ogni piatto racconti una storia. Selezioniamo rigorosamente ingredienti locali, rispettando i ritmi delle stagioni e i produttori del territorio.
             </p>
             <p className="text-stone-600 text-lg leading-relaxed font-light">
               La nostra è una cucina che non dimentica le radici, ma le serve con guanti bianchi. Dai cappelletti fatti a mano ai vini pregiati della nostra cantina, ogni dettaglio è curato per offrirvi un momento di puro piacere.
             </p>
             <div className="pt-4">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Slow_Food_logo.svg/1200px-Slow_Food_logo.svg.png" alt="Slow Food" className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
             </div>
           </div>
        </div>
      </section>

      {/* --- MENU PREVIEW (Elegant Cards) --- */}
      <section id="menu" className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-orange-800 text-xs font-bold tracking-[0.2em] uppercase">Eccellenze</span>
              <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mt-4">Il Nostro Menu</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Dish 1 */}
               <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-6 relative h-[400px]">
                    <img src="https://images.unsplash.com/photo-1626804475297-411dbe6314c9?q=80&w=800&auto=format&fit=crop" alt="Pasta Fresca" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <div className="text-center">
                     <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-orange-800 transition-colors">Primi della Tradizione</h3>
                     <p className="text-stone-500 font-light text-sm tracking-wide">CAPPELLETTI • TAGLIATELLE • PASSATELLI</p>
                  </div>
               </div>

               {/* Dish 2 */}
               <div className="group cursor-pointer mt-0 md:-mt-12"> {/* Staggered grid effect */}
                  <div className="overflow-hidden mb-6 relative h-[400px]">
                    <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop" alt="Secondi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <div className="text-center">
                     <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-orange-800 transition-colors">Carni Selezionate</h3>
                     <p className="text-stone-500 font-light text-sm tracking-wide">TAGLIATA • CASTRATO • FILETTO</p>
                  </div>
               </div>

               {/* Dish 3 */}
               <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-6 relative h-[400px]">
                    <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" alt="Vini" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <div className="text-center">
                     <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-orange-800 transition-colors">Cantina Pregiata</h3>
                     <p className="text-stone-500 font-light text-sm tracking-wide">SANGIOVESE • ALBANA • BURSÔN</p>
                  </div>
               </div>
            </div>
            
            <div className="text-center mt-20">
               <Link href="/menu" className="inline-block border-b-2 border-stone-900 pb-1 text-stone-900 text-sm font-bold tracking-widest hover:text-orange-800 hover:border-orange-800 transition-all duration-300">
                 VISUALIZZA IL MENU COMPLETO
               </Link>
            </div>
         </div>
      </section>

      {/* --- PARALLAX QUOTE --- */}
      <section className="relative py-40 bg-stone-900 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop")'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <p className="font-serif text-3xl md:text-5xl text-white leading-snug italic">
            "Non si può pensare bene, amare bene, dormire bene, se non si è mangiato bene."
          </p>
          <p className="text-orange-200 mt-8 text-sm tracking-widest uppercase font-bold">— Virginia Woolf</p>
        </div>
      </section>

      {/* --- REVIEWS (Minimal) --- */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <span className="text-orange-800 text-4xl mb-6 block">❝</span>
           <p className="font-serif text-2xl text-stone-800 leading-relaxed mb-8">
             Un'esperienza indimenticabile. L'atmosfera è calda e accogliente, il personale impeccabile e i piatti sono un vero viaggio nei sapori della Romagna. La carta dei vini è eccellente.
           </p>
           <div className="flex items-center justify-center gap-4">
             <div className="w-10 h-10 bg-stone-300 rounded-full overflow-hidden">
               <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
             </div>
             <div className="text-left">
               <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">Giulia M.</p>
               <p className="text-xs text-stone-500">TripAdvisor Review</p>
             </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER (Sophisticated) --- */}
      <footer id="contatti" className="bg-stone-950 text-stone-400 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
           {/* Brand */}
           <div className="md:col-span-1">
             <h4 className="font-serif text-2xl text-white mb-6 tracking-wide">MALABOCCA</h4>
             <p className="text-sm leading-relaxed mb-6 font-light">
               Osteria tradizionale e moderna nel cuore di Bagnacavallo. Passione, gusto e accoglienza dal 2000.
             </p>
             <div className="flex gap-4">
               <a href="#" className="text-white hover:text-orange-500 transition">IG</a>
               <a href="#" className="text-white hover:text-orange-500 transition">FB</a>
             </div>
           </div>
           
           {/* Contact */}
           <div className="md:col-span-1">
             <h5 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Contatti</h5>
             <p className="text-sm mb-2 font-light">Piazza della Libertà, 15</p>
             <p className="text-sm mb-6 font-light">48012 Bagnacavallo (RA)</p>
             <p className="text-sm mb-2"><a href="tel:+39054564468" className="hover:text-white transition">0545 64468</a></p>
             <p className="text-sm"><a href="mailto:info@osteriamalabocca.it" className="hover:text-white transition">info@osteriamalabocca.it</a></p>
           </div>

           {/* Hours */}
           <div className="md:col-span-1">
             <h5 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Orari</h5>
             <ul className="text-sm space-y-2 font-light">
               <li className="flex justify-between"><span>Lun - Ven</span> <span>12:00 - 15:00</span></li>
               <li className="flex justify-between"><span></span> <span>19:00 - 23:00</span></li>
               <li className="flex justify-between mt-4 text-white"><span>Sab - Dom</span> <span>12:00 - 16:00</span></li>
               <li className="flex justify-between text-white"><span></span> <span>19:00 - 00:00</span></li>
             </ul>
           </div>

           {/* Newsletter / CTA */}
           <div className="md:col-span-1">
             <h5 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Prenotazioni</h5>
             <p className="text-sm mb-6 font-light">
               I posti sono limitati, specialmente nel fine settimana. Consigliamo la prenotazione anticipata.
             </p>
             <Link href="tel:+39054564468" className="block text-center bg-orange-800 text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-white hover:text-stone-900 transition-all duration-300">
               CHIAMA ORA
             </Link>
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800 text-center text-xs font-light tracking-wide">
          <p>© {new Date().getFullYear()} Osteria Malabocca di Roberto Dalfiume & C. | P.IVA 02176510390 | Privacy Policy</p>
        </div>
      </footer>
    </main>
  );
}
