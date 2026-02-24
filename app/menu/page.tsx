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
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 border-b border-orange-500/30 pb-6">Menu alla Carta</h2>
            
            <div className="mb-10 text-stone-300 italic text-center border border-white/10 p-4 rounded-xl bg-white/5">
              <p>Il prezzo del menu completo comprende i 4 piatti (bevande escluse).</p>
              <p>E' possibile scegliere anche i piatti singolarmente.</p>
            </div>

            {/* Vegetariano */}
            <div className="mb-16">
                <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Vegetariano
                    </h3>
                    <span className="text-orange-400 font-medium">Menu completo €43</span>
                </div>
                <ul className="space-y-8">
                    <MenuItem name="Pancakes al cacao" desc="con pure' di patate dolci, crema di ricotta al timo e gocce di saba" price="16" allergens="1-3-7" />
                    <MenuItem name="Bottoni ripieni di finocchio arrosto" desc="salsa di rucola, demiglace vegetale e profumo di arancia" price="16" allergens="1-3-9" />
                    <MenuItem name="Verza cbt" desc="con fonduta al castelmagno tartufo bianchetto e burro nocciola" price="18" allergens="1-3-7" />
                    <MenuItem name="Raviolo di riso venere e riso carnaroli" desc="con anacardi e salsa al campari e frutti di bosco" price="9" allergens="7-8" />
                </ul>
            </div>

            {/* Carne */}
            <div className="mb-16">
                <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Carne
                    </h3>
                    <span className="text-orange-400 font-medium">Menu completo €46</span>
                </div>
                <ul className="space-y-8">
                    <MenuItem name="Porchettina di coniglio all'aneto" desc="con kimchi e gel di mango" price="16" />
                    <MenuItem name="Risotto alla rapa rossa" desc="con cotechino arrostito e crema di lenticchie allo zafferano di Bagnara" price="16" allergens="1-3-7" />
                    <MenuItem name="Controfiletto di agnello" desc="con broccoli, pure' di patate viola e salsa al porto" price="24" allergens="7" />
                    <MenuItem name="Tortino di gianduia e panettone" desc="gelato al panettone e salsa all'arancio" price="9" allergens="1-3-7" />
                </ul>
            </div>

            {/* Pesce */}
            <div className="mb-16">
                <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Pesce
                    </h3>
                    <span className="text-orange-400 font-medium">Menu completo €46</span>
                </div>
                <ul className="space-y-8">
                    <MenuItem name="Calamaro saltato" desc="su crema di mais bianco con pak choi e curry rosso" price="16" allergens="2-14" />
                    <MenuItem name="Tagliolini con farina di canapa" desc="tartare di scampi, la sua bisque e olio al lime" price="17" allergens="1-2-3" />
                    <MenuItem name="Filetto di soaso in oliocottura" desc="con salsa pil pil, bietole saltate e polvere di olive" price="24" allergens="4" />
                    <MenuItem name="Crostatina" desc="con crema e mele al te" price="9" allergens="1-3-7" />
                </ul>
            </div>

            {/* Profumi e Sapori del Territorio */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Profumi e Sapori del Territorio
                </h3>
                <ul className="space-y-8">
                    <MenuItem name="Costine di mora romagnola affumicate" desc="ripiene di sedano rapa con salsa di radicchio e mascarpone" price="16" allergens="7-9" />
                    <MenuItem name="Selezione di salumi di mora romagnola" desc="dell'Azienda Agricola Zavoli con la nostra giardiniera" price="18" tag="Presidio Slow Food" />
                    <MenuItem name="Bon bon di gamberi e fagioli cannellini" desc="su vellutata di zucca e riduzione di melograno" price="16" allergens="2" tag="Presidio Slow Food" />
                    <MenuItem name="Cappelletti di baccala'" desc="in brodo di cipolla rossa con olio al prezzemolo" price="16" allergens="1-3-4" tag="Presidio Slow Food" />
                    <MenuItem name="Tortelli al formaggio di fossa" desc="con caviale di aceto balsamico, timo e pepe nero" price="16" allergens="1-3-7" />
                    <MenuItem name="Tagliatelle" desc="con salsiccia di mora romagnola e scalogno" price="15" allergens="1-3-7" />
                    <MenuItem name="Cappello del prete di bianca romagnola al burson" desc="con sfiandrine, patate e crema di noci" price="24" allergens="8" tag="Presidio Slow Food" />
                    <MenuItem name="Filetto di mazzola arrostito" desc="con cicoria, crocchetta di polenta e formaggio di fossa e speck di mora romagnola" price="24" allergens="1-4" tag="Presidio Slow Food" />
                    <MenuItem name="Degustazione di formaggi" desc="con confetture fatte in casa" price="18" />
                </ul>
            </div>

            {/* Altri Dolci */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Altri Dolci
                </h3>
                <ul className="space-y-8">
                    <MenuItem name="Tartufini di mascarpone e arachidi" desc="con crema al frutto della passione" price="9" allergens="1-3-7-5" />
                    <MenuItem name="Latte brule' alla vaniglia, timo e caffe'" desc="con meringhe e crumble alle mandorle" price="9" allergens="1-3-7-8" />
                    <MenuItem name="Cannoli di cialda ripieni" desc="con mousse di zabaione allo zibibbo e nocciole tostate" price="9" allergens="1-3-7-8" />
                    <MenuItem name="Tortillas di platano con ananas" desc="crema di cocco al rum e pepe di sichuan" price="9" tag="Dolce vegano / Gluten free" />
                </ul>
            </div>
        </section>

        {/* --- SEZIONE 2: CARTA DEI VINI --- */}
        <section className="bg-stone-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 border-b border-orange-500/30 pb-6">Carta dei Vini</h2>
            
            <div className="grid grid-cols-1 gap-16">
                
                {/* Bolle */}
                <WineSection title="Bolle">
                    <WineItem name='"Rambela" vino spumante brut' producer="Az.Agr. Longanesi" desc="da uve famoso, metodo Martinotti-Charmat" price="18" alcohol="12" />
                    <WineItem name='"Trideo" pignoletto frizzante' producer="Az. Agr. Merlotta" desc="colli d'Imola DOC 2024" price="20" alcohol="12" />
                    <WineItem name='"Tridente" albana metodo classico' producer="Az.Agr. Merlotta" desc="dosaggio zero sboccatura 2024" price="31" alcohol="12" />
                    <WineItem name='"Nicolucci brut"' producer="Fattoria Nicolucci" desc="vino spumante metodo Martinotti brut" price="23" alcohol="11.5" />
                    <WineItem name="Borgoluce Valdobbiadene" producer="Az. Agr Borgoluce" desc="prosecco superiore brut DOCG" price="25" alcohol="11.5" />
                    <WineItem name='"Albarara" albana metodo classico' producer="Tenuta Santa Lucia" desc="vendemmia 2018 extrabrut" price="30" alcohol="12.5" />
                    <WineItem name="Cuvee Aurora extra brut" producer="Az. Agr. Banfi" desc="Metodo classico millesimato 2020, Alta Langa DOCG" price="35" alcohol="12.5" />
                    <WineItem name="Cuvee dei frati metodo classico" producer="Az. Agr. Ca' dei frati" desc="sboccatura 2025 (lugana, chardonnay)" price="32" alcohol="13" />
                    <WineItem name="Cuvee Lunae brut millesimato 2019" producer="Cantine Lunae Bosoni" desc="metodo classico (vermentino, albarola)" price="46" alcohol="12.5" />
                    <WineItem name='"Maso Martis" spumante Trento DOC' producer="Cantina Maso Martis" desc="blanc de blanc brut sboccatura 2024 (chardonnay)" price="42" alcohol="12.5" />
                    <WineItem name='"Berlucchi 61" Franciacorta extra brut' producer="Az. Agr. Guido Berlucchi" desc="sboccatura 2025" price="40" alcohol="12.5" />
                    <WineItem name='"Berlucchi 61" Franciacorta saten brut' producer="Az. Agr. Guido Berlucchi" desc="sboccatura 2024" price="44" alcohol="12.5" />
                    <WineItem name='"Gran cuvee bianca" metodo classico brut' producer="Az. Vinicola Villa Rinaldi" desc="millesimato 2020 sboccatura 2023" price="46" alcohol="12.5" />
                    <WineItem name='"Piancastello riserva" Trento Doc extra brut' producer="Az. Agricola Endrizzi" desc="millesimato 2020 sboccatura 2024" price="40" alcohol="13" />
                    <WineItem name="Rinaldi premiere Metodo classico brut" producer="Az. Agr. Villa rinaldi" desc="sboccatura 2024" price="42" alcohol="12.5" />
                    <WineItem name='"Santa Barbara" metodo classico brut' producer="Az. Santa Barbara" desc="sboccatura 2023 (chardonnay, pinot nero)" price="42" alcohol="12.5" />
                </WineSection>

                {/* Bolle Rosate */}
                <WineSection title="Bolle Rosate">
                    <WineItem name='"Burson rosato"' producer="Az.Agr. Longanesi" desc="metodo Martinotti-Charmat" price="18" alcohol="12" />
                    <WineItem name={`"Vensame' vino rosé"`} producer="Az. Agr. Santa Lucia" desc="dosaggio zero (metodo ancestrale)" price="20" alcohol="11.5" />
                    <WineItem name='"Malibran" rosé extra brut' producer="Az. Agr. Malibran" desc="vino spumante (incrocio Manzoni, raboso)" price="20" alcohol="12" />
                    <WineItem name={`"Maso Martis" rosé extra brut`} producer="Cantina Maso Martis" desc="biologico millesimato 2021 sboccatura 2024 (Pinot nero)" price="58" alcohol="12.5" />
                    <WineItem name={`"Berlucchi 61" Franciacorta rosé`} producer="Az. Agr. Guido Berlucchi" desc="sboccatura 2024 (pinot nero, chardonnay)" price="45" alcohol="12.5" />
                    <WineItem name={`"Rosé rosa" metodo classico brut`} producer="Az. Vinicola Villa Rinaldi" desc="millesimato 2019 sboccatura 2023" price="60" alcohol="12.5" />
                </WineSection>

                {/* Bianchi */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Bianchi</h3>
                    
                    <WineRegion region="Emilia Romagna">
                        <WineItem name='"Rambela" IGP 2023' producer="Az. Agr. Longanesi – Bagnacavallo" desc="(da uve famoso)" price="17" alcohol="12.5" />
                        <WineItem name='"Aulente bianco" rubicone IGT 2023' producer="Soc. Agr. San Patrignano" desc="(sauvignon blanc, chardonnay)" price="20" alcohol="12.5" />
                        <WineItem name='"Jaminia" Rimini rebola DOC 2024' producer="Soc. Agr. San Patrignano" price="24" alcohol="12.5" />
                        <WineItem name='"Arcaica" vino bianco biologico' producer="Az. Agr. Francesconi Paolo" desc="(albana) 2023" price="25" alcohol="14" />
                        <WineItem name='"I Fondatori" albana DOCG 2023' producer="Az. Agr. La Merlotta" price="20" alcohol="14" />
                        <WineItem name='"Tridente" albana secco' producer="Az. Agr. La Merlotta" desc="da vendemmie tardive DOCG 2022" price="29" alcohol="14" />
                        <WineItem name='"Paride" vino bianco biologico non filtrato' producer="Tenuta Santa Lucia" desc="(albana) 2020" price="35" alcohol="13.5" />
                        <WineItem name='"Progetto 1" albana biologica secca DOCG 2023' producer="Soc. Agr. Leone Conti" price="26" alcohol="14.5" />
                        <WineItem name='"Progetto 2" Albana biologica amabile DOCG 2019' producer="Soc. Agr. Leone Conti" price="30" alcohol="14.5" />
                        <WineItem name='"Vitalba" Albana in anfora secco DOCG 2019' producer="Soc. Agr. Tremonti" price="36" alcohol="14.5" />
                        <WineItem name='"Le One" Ravenna famoso biologico IGT 2022' producer="Soc. Agr. Leone Conti" price="27" alcohol="14" />
                        <WineItem name='"Anghingo" Ravenna biologico bianco IGT 2023' producer="Soc. Agr. Leone Conti" desc="(uve ruggine)" price="27" alcohol="14.5" />
                        <WineItem name='"Murales 1" Ravenna bianco biologico IGT 2023' producer="Soc. Agr. Leone Conti" desc="(riesling, vernaccino)" price="25" alcohol="13" />
                        <WineItem name='"Il tornese" 2024' producer="Soc. Agr. Drei Dona'" desc="(Chardonnay e Riesling Renano)" price="25" alcohol="13.5" />
                        <WineItem name='"Thea bianco" Rubicone IGT 2023' producer="Az. Agr. Tremonti" desc="(uve petit Manseng 100%)" price="36" alcohol="14.5" />
                    </WineRegion>

                    <WineRegion region="Piemonte">
                        <WineItem name='"Punset" arneis langhe DOC 2023' producer="Az. Agr. Punset" price="26" alcohol="13.5" />
                        <WineItem name='"La Zerba" Timorasso Colli Tortonesi DOC 2024' producer="Cantine Volpi" desc="(biologico)" price="25" alcohol="14" />
                    </WineRegion>

                    <WineRegion region="Friuli Venezia Giulia">
                        <WineItem name="Ribolla gialla DOC 2024" producer="Az. Agr. Muzic" price="25" alcohol="13" />
                        <WineItem name="Friulano Collio DOC 2024" producer="Az. Agr. Muzic" price="25" alcohol="14" />
                        <WineItem name='"Stare Brajde" Collio bianco DOC 2022' producer="Az. Agr. Muzic" desc="(friulano, malvasia istriana, ribolla gialla)" price="32" alcohol="11" />
                    </WineRegion>

                    <WineRegion region="Trentino Alto Adige">
                        <WineItem name="Pinot grigio Alto Adige DOC 2024" producer="Az. Agr. Abbazzia di Novacella" price="25" alcohol="13" />
                        <WineItem name="Sylvaner Alto Adige DOC 2023" producer="Az. Agr. Abbazia di Novacella" price="25" alcohol="13" />
                        <WineItem name="Gewurztraminer Alto Adige DOC 2024" producer="Az. Agr. Abbazia di Novacella" price="25" alcohol="14.5" />
                        <WineItem name="Kerner Alto Adige DOC 2024" producer="Az. Agr. Abbazia di Novacella" price="25" alcohol="13.5" />
                        <WineItem name="Gruener Veltliner Alto Adige DOC 2022" producer="Az. Agr. Novacella" price="23" alcohol="12.5" />
                        <WineItem name="Kerner Praepositus Alto Adige Valle Isarco DOC 2023" producer="Az. Agr. Abbazia di Novacella" price="35" alcohol="14" />
                        <WineItem name="Riesling Praepositus Alto Adige Valle Isarco DOC 2022" producer="Az. Agr. Abbazia di Novacella" price="46" alcohol="13" />
                        <WineItem name='"Sanct Valentin" sauvignon DOC 2023' producer="St. Michael Eppan" price="52" alcohol="14.5" />
                        <WineItem name='"505" sauvignon DOC 2023' producer="Soc. Agr. Von Blumen" price="29" alcohol="13" />
                        <WineItem name='"Alma" muller thurgau IGT 2022' producer="Az. Agr. Maso Martis" price="28" alcohol="12.5" />
                        <WineItem name='"Fragment" sauvignon blanc DOC 2023' producer="Tenuta Alois Lageder" price="32" alcohol="12" />
                        <WineItem name='"Al passo del leone bianco" vigneti delle Dolomiti IGT 2023' producer="Tenuta Alois Lageder" price="22" alcohol="14" />
                        <WineItem name="Riesling renano DOP 2023" producer="Az. Agricola Endrizzi" price="25" alcohol="13.5" />
                        <WineItem name="Nosiola vigneti delle dolomiti IGT 2023" producer="Az. Agr. Pojer e Sandri" price="23" alcohol="12" />
                        <WineItem name="Chardonnay vigneti delle dolomiti IGT 2024" producer="Az. Agr. Pojer e Sandri" price="23" alcohol="12.5" />
                    </WineRegion>

                    <WineRegion region="Veneto">
                        <WineItem name='Lugana "I frati" DOC 2024' producer="Az. Agr. Ca' dei Frati" price="26" alcohol="13" />
                        <WineItem name='"Agno bianco" Veneto bianco biologico IGT 2022' producer="Az. Agr. Masari" desc="(riesling, durella)" price="25" alcohol="12.5" />
                    </WineRegion>

                    <WineRegion region="Liguria">
                        <WineItem name="Vermentino etichetta grigia Colli di Luni DOC 2023" producer="Cantine Lunae Bosoni" price="26" alcohol="12.5" />
                        <WineItem name="Vermentino etichetta nera Colli di Luni DOC 2023" producer="Cantine Lunae Bosoni" price="34" alcohol="13.5" />
                        <WineItem name='"Cavagino" vermentino Colli di Luni DOC 2022' producer="Cantine Lunae Bosoni" price="40" alcohol="14" />
                    </WineRegion>

                    <WineRegion region="Marche">
                        <WineItem name='"Le Vaglie" verdicchio dei Castelli di Jesi DOC 2023' producer="Az. Agr. Antonucci" price="22" alcohol="13" />
                    </WineRegion>

                    <WineRegion region="Abruzzo">
                        <WineItem name='"Aries" pecorino colline pescaresi IGP 2024' producer="Az. Agr. Ciavolich" price="25" alcohol="13" />
                        <WineItem name="Passerina colline pescaresi IGP 2021" producer="Az. Agr. Ciavolich" price="23" alcohol="12.5" />
                        <WineItem name={`"Fosso Cancelli" trebbiano d'Abruzzo DOP 2022`} producer="Az. Agr. Ciavolich" price="59" alcohol="12.5" />
                        <WineItem name={`"Marina Cvetic" trebbiano d'Abruzzo DOC 2023`} producer="Az. Agr. Masciarelli" price="60" alcohol="14" />
                    </WineRegion>

                    <WineRegion region="Sicilia">
                        <WineItem name="Etna bianco DOC 2024" producer="Az. Agr. Tornatore" desc="(uve carricante)" price="27" alcohol="12.5" />
                        <WineItem name="Grillo DOC 2023" producer="Az. Agr. Augustali" price="22" alcohol="13" />
                    </WineRegion>
                </div>

                {/* Rosati */}
                <WineSection title="Rosati">
                    <WineItem name='"Impressioni di settembre" Ravenna rosato IGT 2023' producer="Az. Agr. Leone Conti – E. Romagna" desc="(uve syrah)" price="22" alcohol="12.5" />
                    <WineItem name='"Mea Rosa" Liguria di levante IGT 2024' producer="Cantine Lunae Bosoni – Liguria" price="22" alcohol="12.5" />
                    <WineItem name='"Vin dei molini" rosato IGT 2023' producer="Az. Agr. Pojer e Sandri – Trentino Alto Adige" desc="(uve rotberger)" price="22" alcohol="12.5" />
                    <WineItem name={`"Rosa'" lagrein rosé DOC 2024`} producer="Az. Agr. Abbazia di Novacella – Trentino Alto Adige" price="25" alcohol="13.5" />
                    <WineItem name='"Rosa dei Frati" riviera del Garda Bresciano rosato DOC 2024' producer="Az. Agr. Ca' dei Frati – Veneto" price="23" alcohol="12.5" />
                    <WineItem name='"Cerasuolo" colline pescaresi rosato 2023' producer="Az. Agr. Ciavolich – Abruzzo" desc="(montepulciano)" price="25" alcohol="13" />
                    <WineItem name="Etna Rosato DOC 2024" producer="Az. Agr. Tornatore – Sicilia" desc="(Nerello Mascalese)" price="27" alcohol="12.5" />
                </WineSection>

                {/* Rossi */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Rossi</h3>
                    
                    <WineRegion region="Emilia Romagna">
                        <WineItem name='Burson "etichetta blu" IGT 2023' producer="Az. Agr. Longanesi (Bagnacavallo)" desc="(uve Longanesi)" price="19" alcohol="13" />
                        <WineItem name='Burson "etichetta nera" IGT 2018' producer="Az. Agr. Longanesi (Bagnacavallo)" desc="(uve Longanesi)" price="26" alcohol="15" />
                        <WineItem name='"Petali di viola" Romagna sangiovese DOC 2023' producer="Az. Agr. La Merlotta" price="20" alcohol="13.5" />
                        <WineItem name='"Tridente" sangiovese superiore riserva DOC 2021' producer="Az. Agr. La Merlotta" desc="(non filtrato)" price="43" alcohol="15" />
                        <WineItem name='"Petrignone" sangiovese di Romagna superiore DOC 2022' producer="Az. Agr. Tre Monti" price="26" alcohol="14" />
                        <WineItem name='"Sono" sangiovese superiore DOC 2023' producer="Az. Agr. Tre Monti" desc="(no solfiti)" price="20" alcohol="13.5" />
                        <WineItem name='"Tre Rocche" sangiovese di Romagna superiore DOC 2023' producer="Fattoria Nicolucci" price="23" alcohol="14" />
                        <WineItem name='"Aulente rosso" sangiovese di Romagna IGT 2022' producer="Soc. Agr. S. Patrignano" price="18" alcohol="13" />
                        <WineItem name='"Torre di Ceparano" sangiovese di Romagna superiore riserva DOC 2019' producer="Fattoria Zerbina" price="25" alcohol="14" />
                        <WineItem name='"Pietramora" sangiovese superiore riserva DOC 2017' producer="Fattoria Zerbina" price="44" alcohol="14.5" />
                        <WineItem name='"Limbecca" sangiovese superiore DOC 2021' producer="Az. Agr. Francesconi Paolo" desc="(non filtrato)" price="22" alcohol="13.5" />
                        <WineItem name='"Leggiolo" sangiovese superiore DOC 2021' producer="Tenuta Calonga" price="22" alcohol="14.5" />
                        <WineItem name='"Michelangiolo" sangiovese superiore riserva DOC 2019' producer="Tenuta Calonga" price="39" alcohol="15" />
                        <WineItem name='"7" sangiovese superiore riserva DOC 2007' producer="Tenuta Calonga" price="64" alcohol="15" />
                        <WineItem name='"Never walk alone" sangiovese superiore biologico DOC 2023' producer="Az. Agr. Leone Conti" price="22" alcohol="13.5" />
                        <WineItem name='"Le betulle" sangiovese superiore DOC 2021' producer="Az. Agr. Leone Conti" price="25" alcohol="14.5" />
                        <WineItem name='"Lillybeth" vino rosso biologico vegano 2021' producer="Az. Agr. Drei Dona'" desc="(sangiovese, cabernet sauvignon, cabernet franc)" price="22" alcohol="13.5" />
                        <WineItem name='"Montepirolo" cabernet sauvignon DOC 2020' producer="Soc. Agr. San Patrignano" price="29" alcohol="14.5" />
                        <WineItem name='"Marzieno" IGT 2019' producer="Fattoria Zerbina" desc="(cabernet sauvignon, merlot, syrah)" price="44" alcohol="14.5" />
                        <WineItem name='"Pis & Lov" Ravenna rosso biologico IGT 2022' producer="Soc. Agr. Leone Conti" desc="(merlot, syrah)" price="26" alcohol="14" />
                        <WineItem name='"Arcolaio" Centesimino Ravenna IGT 2021' producer="Soc. Agr. Leone Conti" price="38" alcohol="14" />
                        <WineItem name='"Murales 2" IGT 2022' producer="Az. Agr. Leone Conti" desc="(Pinot nero, negrettino)" price="30" alcohol="13.5" />
                        <WineItem name='"Grifaia" cabernet sauvignon riserva DOC 2022' producer="Az. Agr. La Merlotta" price="22" alcohol="14" />
                    </WineRegion>

                    <WineRegion region="Piemonte">
                        <WineItem name='"Prunotto" barolo DOCG 2019' producer="Az. Agr. Prunotto" price="72" alcohol="13.5" />
                        <WineItem name="Nebbiolo langhe DOC 2023" producer="Az. Agr. Alessandria" price="35" alcohol="15" />
                        <WineItem name={`"Bricco delle olive" barbera d'Alba superiore DOC 2021`} producer="Az. Vinicola Palladino" price="30" alcohol="14.5" />
                    </WineRegion>

                    <WineRegion region="Friuli Venezia Giulia">
                        <WineItem name="Cabernet sauvignon Collio DOC 2020" producer="Az. Agr. Muzic" price="26" alcohol="13.5" />
                        <WineItem name="Merlot Friuli Isonzo DOC DOC 2022" producer="Az. Agr. Muzic" price="26" alcohol="13.5" />
                    </WineRegion>

                    <WineRegion region="Trentino Alto Adige">
                        <WineItem name="Pinot nero IGT 2023" producer="Az. Agr. Pojer e Sandri" price="29" alcohol="12.5" />
                        <WineItem name="Pinot nero DOC 2023" producer="Az. Agr. San Michele Appiano" price="27" alcohol="13.5" />
                        <WineItem name="Pinot nero DOC 2023" producer="Az. Agr. Abbazia di Novacella" price="28" alcohol="13" />
                        <WineItem name="Pinot nero DOC 2022" producer="Az. Agr. Alois Lageder" price="29" alcohol="11.5" />
                        <WineItem name="Lagrein Alto Adige DOC 2024" producer="Az. Agr. Abbazia di Novacella" price="26" alcohol="13" />
                        <WineItem name="Lagrein Alto Adige DOC 2021" producer="Az. Agr. Alois Lageder" price="25" alcohol="11.5" />
                        <WineItem name="Teroldego rotaliano DOP 2022" producer="Az. Agr. Endrizzi" price="24" alcohol="12.5" />
                    </WineRegion>

                    <WineRegion region="Veneto">
                        <WineItem name={`"Palazzo della Torre" ripasso valpolicella IGT 2019`} producer="Az. Agr. Allegrini" price="30" alcohol="13.5" />
                        <WineItem name="Valpolicella ripasso classico superiore DOC 2019" producer="Az. Agr. Clementi" price="35" alcohol="14.5" />
                        <WineItem name="Valpolicella ripasso classico superiore DOC 2019" producer="Cantina Villa Rinaldi" price="45" alcohol="14" />
                    </WineRegion>

                    <WineRegion region="Liguria">
                        <WineItem name='"Circus" Liguria di Levante IGT 2023' producer="Cantine Lunae Bosoni" desc="(albarossa, alicante, massaretta)" price="22" alcohol="12.5" />
                        <WineItem name="Vermentino nero IGP 2022" producer="Cantine Lunae Bosoni" price="32" alcohol="13" />
                        <WineItem name="Ciliegiolo Liguria di Levante rosso IGT 2023" producer="Cantine Lunae Bosoni" price="30" alcohol="13" />
                    </WineRegion>

                    <WineRegion region="Toscana">
                        <WineItem name="Rosso di Montalcino DOC 2020" producer="Az. Agr Le Chiuse" price="33" alcohol="13.5" />
                        <WineItem name='"La Porta di Vertine" Chianti classico DOCG 2020' producer="Az Agr. Bertinga" price="27" alcohol="13.5" />
                    </WineRegion>

                    <WineRegion region="Abruzzo">
                        <WineItem name="Montepulciano d'Abruzzo DOP 2022" producer="Az. Agr. Ciavolich" price="22" alcohol="13.5" />
                        <WineItem name='"Marina Cvetic" montepulciano S. Martino rosso DOC 2019' producer="Az. Agr. Masciarelli" price="45" alcohol="14.5" />
                    </WineRegion>

                    <WineRegion region="Sicilia">
                        <WineItem name="Etna rosso DOC 2020" producer="Az. Agr. Tornatore" desc="(nerello mascalese, nerello cappuccio)" price="30" alcohol="14" />
                    </WineRegion>
                </div>

                {/* Mezzine */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Mezzine</h3>
                    
                    <WineRegion region="Bolle">
                        <WineItem name='"Grotta Fresca" chardonnay IGT' producer="Az. Agr. Le Rocche Malatestiane – E. Romagna" price="12" alcohol="12" />
                        <WineItem name='"Foss Marai" Valdobbiadene DOCG extra dry' producer="Az. Agr. Foss Marai – Veneto" price="15" alcohol="11" />
                        <WineItem name="Cuvee dei Frati metodo classico sboccatura 2024" producer="Soc. Agr. Ca' dei Frati – Veneto" desc="(lugana, chardonnay)" price="17" alcohol="13" />
                    </WineRegion>

                    <WineRegion region="Bianchi e Rosati">
                        <WineItem name='"Aulente Bianco" rubicone IGT 2023' producer="Soc. Agr. San Patrignano – E. Romagna" desc="(sauvignon blanc, chardonnay)" price="12" alcohol="12.5" />
                        <WineItem name='"Recit" roero arnais DOCG 2024' producer="Az. Agr. Monchiero Carbone – Piemonte" price="14" alcohol="13.5" />
                        <WineItem name="Gewurztraminer DOC 2023" producer="Az. Agr. San Michele Appiano – Trentino Alto Adige" price="15" alcohol="13.5" />
                        <WineItem name='"I Frati" lugana DOC 2024' producer="Az. Agr. Ca' dei Frati – Veneto" price="14" alcohol="13" />
                        <WineItem name='"Rosa dei Frati" riviera del Garda bresciano rosato DOC 2024' producer="Az. Agr. Ca' dei Frati – Veneto" price="14" alcohol="12.5" />
                        <WineItem name='"Le Vaglie" verdicchio dei castelli di Jesi DOC 2023' producer="Az. Agr. Antonucci – Marche" price="11" alcohol="13" />
                        <WineItem name='"Casal di Serra" verdicchio dei Castelli di Jesi superiore biologico DOC 2023' producer="Az. Agr. Umani Ronchi – Marche" price="12" alcohol="13" />
                        <WineItem name='"Anthilia" Sicilia DOC 2024' producer="Az. Agr. Donnafugata – Sicilia" desc="(uve catarratto)" price="14" alcohol="12.5" />
                    </WineRegion>

                    <WineRegion region="Vini Rossi">
                        <WineItem name='"Centurione" sangiovese superiore DOC 2023' producer="Az. Agr. Ferrucci – E. Romagna" price="14" alcohol="13.5" />
                        <WineItem name='"Aulente Rosso" sangiovese IGT 2021' producer="Soc. Agr. S.Patrignano – E. Romagna" price="12" alcohol="14" />
                        <WineItem name='"Leggiolo" sangiovese superiore DOC 2021' producer="Tenuta Calonga – E.Romagna" price="13" alcohol="14.5" />
                        <WineItem name='"Never walk alone" sangiovese superiore biologico DOC 2022' producer="Az. Agr. Leone Conti – E.Romagna" price="12" alcohol="13.5" />
                        <WineItem name="Merlot DOC 2022" producer="Az. Agr. Alois Lageder – Trentino Alto Adige" price="14" alcohol="12.5" />
                        <WineItem name="Lagrain DOC 2022" producer="Az. Agr. Alois Lageder – Trentino Alto Adige" price="14" alcohol="11.5" />
                        <WineItem name="Pinot nero IGT 2023" producer="Az. Agr. Pojer e Sandri – Trentino Alto Adige" price="18" alcohol="12.5" />
                        <WineItem name="Pinot nero DOC 2023" producer="Az. San Michele Appiano – Trentino Alto Adige" price="15" alcohol="13.5" />
                    </WineRegion>
                </div>

                {/* Vini da Dessert */}
                <WineSection title="Vini da Dessert">
                    <WineItem name='"Decimello"' producer="Az. Agr. Longanesi – E.Romagna (Bagnacavallo)" desc="(uve famoso) - 500 ml" price="20" alcohol="14" glassPrice="5" />
                    <WineItem name='"Anemo"' producer="Az. Agr. Longanesi – E.Romagna (Bagnacavallo)" desc="(uve Longanesi) - 500 ml" price="20" alcohol="14" glassPrice="5" />
                    <WineItem name='"Thea" bianco passito biologico IGP 2022' producer="Az. Agr. Tre Monti – E.Romagna" desc="500 ml" price="36" alcohol="12.5" glassPrice="6" />
                    <WineItem name='"Ombre di Luna" albana di Romagna passito DOCG 2022' producer="Az. Agr. La Merlotta – E.Romagna" desc="500 ml" price="30" alcohol="13" glassPrice="6" />
                    <WineItem name='"Scacco Matto" albana di Romagna passito DOCG' producer="Az. Agr. Zerbina – E.Romagna" desc="375 ml" price="55" alcohol="12.5" glassPrice="10" />
                    <WineItem name='"Lini 910" moscato spumante' producer="Az. Agr. Lini – E.Romagna" desc="750 ml" price="20" alcohol="6" />
                    <WineItem name='"Merlino" rosso fortificato' producer="Az. Agr. Pojer e Sandri – Trentino Alto Adige" desc="(Pinot nero e Brandy) - 500 ml" price="40" alcohol="19" glassPrice="7" />
                    <WineItem name='"Essenzia" bianco IGT' producer="Az. Agr. Pojer e Sandri – Trentino Alto Adige" desc="(uve tardive di sauvignon, chardonnay, riesling) - 375 ml" price="40" alcohol="9.5" glassPrice="7" />
                    <WineItem name='"Ben rye" passito di Pantelleria DOC' producer="Az. Agr. Donnafugata – Sicilia" desc="375 ml" price="50" alcohol="16" glassPrice="9" />
                    <WineItem name="Zibibbo igp Vino liquoroso" producer="Az. Agr. Martinez – Sicilia" desc="750 ml" price="20" alcohol="16" glassPrice="5" />
                </WineSection>

                {/* Birre Artigianali */}
                <WineSection title="Birre Artigianali di Romagna">
                    <div className="text-stone-400 mb-4 font-medium">Birrificio La Mata</div>
                    <WineItem name='"Myale"' desc="India pale ale ambrata, rotonda, fragrante - 330 ml" price="6" alcohol="6,2" />
                    <WineItem name="Bhee' mo" desc="Bianca alle more, rosata, fruttata, campagnola - 330 ml" price="6" alcohol="5" />
                    <WineItem name='"Piumetta"' desc="Birra bionda a bassa gradazione - 330 ml" price="6" alcohol="2,5" />
                    <WineItem name="Dora" desc="Birra bionda, aroma erbaceo e di frutta fresca - 500 ml" price="10" alcohol="5" />
                    <WineItem name="100 %" desc="Romagna ale, gusto fresco e dissetante - 500 ml" price="10" alcohol="5" />
                    <WineItem name="Slip" desc="Birra bionda gusto fresco e dissetante - 330 ml" price="6" alcohol="5" />
                    <WineItem name="Bhee'" desc="Birra ad alta fermentazione, bianca, aroma speziato e floreale - 330 ml" price="6" alcohol="4" />
                </WineSection>

            </div>
        </section>

        {/* --- ALLERGENI --- */}
        <section className="bg-stone-900/50 rounded-3xl p-8 border border-white/5 text-sm text-stone-400">
            <h3 className="text-white font-bold mb-4 text-lg">Tabella Allergeni</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <p>1: Cereali contenenti glutine</p>
                <p>2: Crostacei e prodotti a base di crostacei</p>
                <p>3: Uova e prodotti a base di uova</p>
                <p>4: Pesce e prodotti a base di pesce</p>
                <p>5: Arachidi e prodotti a base di arachidi</p>
                <p>6: Soia e prodotti a base di soia</p>
                <p>7: Latte e prodotti a base di latte (incluso lattosio)</p>
                <p>8: Frutta a guscio: mandorle, nocciole, noci ecc…</p>
                <p>9: Sedano e prodotti a base di sedano</p>
                <p>10: Senape e prodotti a base di senape</p>
                <p>11: Semi di sesamo e prodotti a base di semi di sesamo</p>
                <p>12: Anidride solforosa e solfiti in concentrazioni superiori a 10mg/kg o 10mg/litro</p>
                <p>13: Lupini e prodotti a base di lupini</p>
                <p>14: Molluschi e prodotti a base di molluschi</p>
            </div>
        </section>

      </div>
    </main>
  );
}

// Helper Components
function MenuItem({ name, desc, price, allergens, tag }: { name: string, desc?: string, price: string, allergens?: string, tag?: string }) {
    return (
        <li className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/5 pb-4">
            <div className="md:max-w-[80%]">
                <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-xl font-bold text-stone-200">{name}</h4>
                    {tag && <span className="text-xs font-bold bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded uppercase tracking-wider">{tag}</span>}
                </div>
                {desc && <p className="text-stone-400 text-sm mt-1">{desc}</p>}
                {allergens && <p className="text-stone-500 text-xs mt-1">Allergeni: {allergens}</p>}
            </div>
            <span className="text-orange-500 font-bold text-lg mt-2 md:mt-0">€{price}</span>
        </li>
    );
}

function WineSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> {title}
            </h3>
            <ul className="space-y-6">
                {children}
            </ul>
        </div>
    );
}

function WineRegion({ region, children }: { region: string, children: React.ReactNode }) {
    return (
        <div className="mb-8 pl-4 border-l-2 border-white/10">
            <h4 className="text-lg font-bold text-stone-300 mb-4 uppercase tracking-wider">{region}</h4>
            <ul className="space-y-6">
                {children}
            </ul>
        </div>
    );
}

function WineItem({ name, producer, desc, price, alcohol, glassPrice }: { name: string, producer?: string, desc?: string, price: string, alcohol?: string, glassPrice?: string }) {
    return (
        <li className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/5 pb-4">
            <div className="md:max-w-[80%]">
                <h4 className="text-lg font-bold text-stone-200">{name}</h4>
                {producer && <p className="text-stone-400 text-sm">{producer}</p>}
                {desc && <p className="text-stone-500 text-xs mt-0.5">{desc}</p>}
                {alcohol && <p className="text-stone-600 text-xs mt-0.5">Vol: {alcohol}%</p>}
            </div>
            <div className="text-right mt-2 md:mt-0">
                <span className="text-orange-500 font-bold text-lg block">€{price}</span>
                {glassPrice && <span className="text-stone-400 text-sm block">Calice: €{glassPrice}</span>}
            </div>
        </li>
    );
}
