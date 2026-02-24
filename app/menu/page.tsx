import Link from "next/link";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-stone-950 font-sans selection:bg-orange-500 selection:text-white pb-20">
      
      {/* --- NAVIGATION SEMPLIFICATA --- */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
           <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
             Malabocca
           </Link>
           <Link href="/" className="text-sm font-medium tracking-wide text-stone-300 hover:text-orange-400 transition-colors flex items-center gap-2">
             <span>←</span> TORNA ALLA HOME
           </Link>
        </div>
      </nav>

      {/* --- HEADER MENU --- */}
      <div className="pt-40 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">La Nostra Proposta</span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-16">Menu & Vini</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid gap-20">
        
        {/* --- SEZIONE 1: MENU ALLA CARTA --- */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 border-b border-orange-500/30 pb-6">Menu alla Carta</h2>
            
            {/* Antipasti */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Antipasti
                </h3>
                <ul className="space-y-6">
                    <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Tagliere dell'Osteria</h4>
                            <p className="text-stone-400 text-sm mt-1">Selezione di salumi nostrani, formaggi e piadina calda</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€16</span>
                    </li>
                    <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Crostini Misti</h4>
                            <p className="text-stone-400 text-sm mt-1">Fegatini, funghi porcini, salsiccia e stracchino</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€12</span>
                    </li>
                     <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Sformatino di Stagione</h4>
                            <p className="text-stone-400 text-sm mt-1">Con fonduta di parmigiano e granella di noci</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€14</span>
                    </li>
                </ul>
            </div>

            {/* Primi */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Primi Piatti
                </h3>
                <ul className="space-y-6">
                    <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Cappelletti al Ragù</h4>
                            <p className="text-stone-400 text-sm mt-1">Pasta fresca fatta a mano, ripieno tradizionale</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€15</span>
                    </li>
                    <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Tagliatelle al Cinghiale</h4>
                            <p className="text-stone-400 text-sm mt-1">Sfoglia ruvida tirata al mattarello</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€16</span>
                    </li>
                    <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Passatelli Asciutti</h4>
                            <p className="text-stone-400 text-sm mt-1">Con crema di fossa e tartufo nero</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€18</span>
                    </li>
                </ul>
            </div>

            {/* Secondi */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Secondi Piatti
                </h3>
                <ul className="space-y-6">
                    <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Tagliata di Manzo</h4>
                            <p className="text-stone-400 text-sm mt-1">Sale di Cervia e rosmarino, con patate al forno</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€22</span>
                    </li>
                    <li className="flex justify-between items-baseline border-b border-white/5 pb-4">
                        <div>
                            <h4 className="text-xl font-bold text-stone-200">Castrato ai Ferri</h4>
                            <p className="text-stone-400 text-sm mt-1">Specialità di Bagnacavallo con pomodori gratinati</p>
                        </div>
                        <span className="text-orange-500 font-bold text-lg ml-4">€20</span>
                    </li>
                </ul>
            </div>
        </section>

        {/* --- SEZIONE 2: CARTA DEI VINI --- */}
        <section className="bg-stone-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 border-b border-orange-500/30 pb-6">Carta dei Vini</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Rossi del Territorio</h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <span className="text-stone-300">Sangiovese Superiore Riserva</span>
                            <span className="text-orange-500 font-bold">€24</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone-300">Bursôn Etichetta Nera</span>
                            <span className="text-orange-500 font-bold">€28</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone-300">Centesimino</span>
                            <span className="text-orange-500 font-bold">€22</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Bianchi e Bollicine</h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <span className="text-stone-300">Albana di Romagna Secca</span>
                            <span className="text-orange-500 font-bold">€20</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone-300">Trebbiano</span>
                            <span className="text-orange-500 font-bold">€16</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone-300">Pagadebit</span>
                            <span className="text-orange-500 font-bold">€18</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}
