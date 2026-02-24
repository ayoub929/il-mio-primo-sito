import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-orange-700">
            MALABOCCA
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-sm">
            <Link href="#chi-siamo" className="hover:text-orange-600 transition">CHI SIAMO</Link>
            <Link href="#menu" className="hover:text-orange-600 transition">MENU</Link>
            <Link href="#contatti" className="hover:text-orange-600 transition">CONTATTI</Link>
          </div>
          <Link 
            href="tel:+39000000000" 
            className="bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-800 transition"
          >
            PRENOTA ORA
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Sostituisci src con una foto reale del ristorante */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/40 z-10" />
           <Image 
             src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop"
             alt="Interno Osteria"
             fill
             className="object-cover"
             priority
           />
        </div>
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Osteria Malabocca
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Cucina tradizionale, sapori autentici e un'atmosfera che sa di casa.
          </p>
          <Link 
            href="#menu" 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-stone-900 transition duration-300"
          >
            SCOPRI IL MENU
          </Link>
        </div>
      </section>

      {/* --- CHI SIAMO --- */}
      <section id="chi-siamo" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">La Nostra Storia</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-stone-800">Passione e Tradizione</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Situata nel cuore della città, l'Osteria Malabocca offre un'esperienza culinaria che unisce le antiche ricette della tradizione con un tocco di modernità. Selezioniamo solo ingredienti freschi e locali per garantire un sapore indimenticabile in ogni piatto.
          </p>
        </div>
      </section>

      {/* --- HIGHLIGHTS MENU --- */}
      <section id="menu" className="py-20 bg-stone-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">I Nostri Piatti Forti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Piatto 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1626804475297-411dbe6314c9?q=80&w=800&auto=format&fit=crop"
                  alt="Pasta Fresca"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pasta Fresca</h3>
                <p className="text-stone-600">Tagliatelle fatte a mano con ragù di cinghiale a lenta cottura.</p>
              </div>
            </div>

            {/* Piatto 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop"
                  alt="Secondi di Carne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tagliata di Manzo</h3>
                <p className="text-stone-600">Carne selezionata alla griglia con rucola, grana e aceto balsamico.</p>
              </div>
            </div>

            {/* Piatto 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1551024601-bec0273e84f4?q=80&w=800&auto=format&fit=crop"
                  alt="Dolci"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tiramisù della Casa</h3>
                <p className="text-stone-600">La ricetta segreta della nonna, cremoso e indimenticabile.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="text-orange-700 font-bold border-b-2 border-orange-700 hover:text-orange-900 hover:border-orange-900 transition">
              VEDI IL MENU COMPLETO
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTATTI --- */}
      <footer id="contatti" className="bg-stone-900 text-stone-400 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Osteria Malabocca</h4>
            <p>Via Esempio, 123<br />00100 Roma (RM)</p>
            <p className="mt-4">
              <a href="tel:+39000000000" className="hover:text-white transition">Tel: +39 000 000 000</a><br />
              <a href="mailto:info@osteriamalabocca.it" className="hover:text-white transition">Email: info@osteriamalabocca.it</a>
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Orari</h4>
            <p>Lun - Ven: 12:00 - 15:00 / 19:00 - 23:00</p>
            <p>Sab - Dom: 12:00 - 16:00 / 19:00 - 00:00</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">TripAdvisor</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 text-sm border-t border-stone-800 pt-8">
          © {new Date().getFullYear()} Osteria Malabocca. Tutti i diritti riservati.
        </div>
      </footer>
    </main>
  );
}
