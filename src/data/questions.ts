export interface QuizItem {
  q: string;
  options: string[];
  answer: number;
  why: string;
}
export interface Question {
  id: string; // "1.1"
  file: string; // "01-1"
  topic: number;
  title: string;
  exam: string; // original wording
  intuition: string; // markdown
  widgets: string[];
  quiz: QuizItem[];
  caseSpecific?: boolean;
}

export const TOPICS: Record<number, string> = {
  1: 'Strategic fit',
  2: 'Drivers og metrics',
  3: 'Distributionsnetværk',
  4: 'Netværksdesign',
  5: 'Lokaliseringsbeslutninger',
  6: 'Cycle inventory',
  7: 'Safety inventory',
  8: 'Produkttilgængelighed',
  9: 'Transport',
  10: 'Koordinering',
  11: 'Bæredygtighed og cirkulære kæder',
  12: 'Faulkswagon-casen',
};

const q = (
  id: string,
  title: string,
  exam: string,
  intuition: string,
  widgets: string[],
  quiz: QuizItem[],
  caseSpecific = false,
): Question => {
  const [t, n] = id.split('.');
  return { id, file: `${t.padStart(2, '0')}-${n}`, topic: Number(t), title, exam, intuition, widgets, quiz, caseSpecific };
};

export const QUESTIONS: Question[] = [
  q(
    '1.1',
    'Zone of Strategic Fit',
    'Explain Figure 2-5 "Finding the Zone of Strategic Fit". Include an explanation of Implied Uncertainty.',
    'Tænk på forsyningskæden som et **køretøj**, og på markedet som **terrænet**. En sportsvogn (effektiv kæde) er perfekt på en lige motorvej (forudsigelig efterspørgsel), men håbløs i bjergene. En terrængående bil (responsiv kæde) kan klare bjergene, men er dyr at køre på motorvejen. *Strategic fit* betyder at vælge det køretøj, der passer til terrænet. *Implied uncertainty* er, hvor "bjergrigt" terrænet bliver, når man tager kundernes krav med, fx levering samme dag eller 100 varianter.',
    ['strategicFit'],
    [
      {
        q: 'Hvad er implied demand uncertainty?',
        options: [
          'Variansen i den samlede markedsefterspørgsel',
          'Usikkerheden i den del af efterspørgslen, kæden skal opfylde, givet de kundebehov virksomheden har valgt at opfylde',
          'Usikkerheden i leverandørernes leveringstider',
          'Prognosefejlen i den aggregerede plan',
        ],
        answer: 1,
        why: 'Implied uncertainty afhænger af de valgte kundebehov (responstid, varianter, service) og ikke kun af markedet.',
      },
      {
        q: 'En virksomhed med en meget effektiv kæde sælger innovative modeprodukter. Hvor i Figur 2-5 ligger den?',
        options: ['I zonen', 'Over zonen (for responsiv)', 'Under zonen (for effektiv i forhold til usikkerheden)', 'Det kan ikke afgøres'],
        answer: 2,
        why: 'Høj implied uncertainty kræver høj responsivitet. En effektiv kæde ligger under/til højre for zonen og får stockouts og markdowns.',
      },
      {
        q: 'Hvilket kundebehov ØGER implied uncertainty?',
        options: ['Længere accepteret responstid', 'Færre varianter', 'Flere salgskanaler', 'Lavere service level'],
        answer: 2,
        why: 'Flere kanaler spreder efterspørgslen og gør den sværere at forudsige. De andre mindsker usikkerheden.',
      },
    ],
  ),
  q(
    '1.2',
    'Fordeling af implied uncertainty',
    'Explain Figure 2-6 "Different Roles and Allocations…". Include an explanation of Implied Uncertainty.',
    'Forestil dig et **stafetløb**, hvor ét af tre løbere skal løbe op ad en bakke. Holdet når i mål på samme tid, uanset hvem der tager bakken, men den løber, der tager den, skal være stærk. På samme måde kan **detailhandler, producent eller leverandør** "tage bakken", altså absorbere usikkerheden med lager eller fleksibel kapacitet. Så kan de andre led være effektive.',
    ['allocation'],
    [
      {
        q: 'Hvad viser Figur 2-6?',
        options: [
          'At alle led i kæden skal være lige responsive',
          'At samme samlede responsivitet kan opnås ved at lade forskellige led absorbere usikkerheden',
          'At usikkerheden altid skal ligge hos leverandøren',
          'At implied uncertainty stiger op gennem kæden',
        ],
        answer: 1,
        why: 'Figuren viser forskellige fordelinger af den samme implied uncertainty mellem leddene.',
      },
      {
        q: 'Hvis detailhandleren holder et stort lager, hvad kan producenten så være?',
        options: ['Responsiv', 'Effektiv', 'Fleksibel med overskudskapacitet', 'Ingen effekt'],
        answer: 1,
        why: 'Detailhandlerens lager absorberer usikkerheden, så producenten ser en jævn efterspørgsel og kan være effektiv.',
      },
      {
        q: 'Hvilke tre "buffere" kan absorbere usikkerhed?',
        options: ['Pris, reklame og rabat', 'Lager, kapacitet og tid', 'Information, sourcing og pricing', 'TL, LTL og pakke'],
        answer: 1,
        why: 'Usikkerhed absorberes med lager, overskudskapacitet eller tid (lead time/ventetid).',
      },
    ],
  ),
  q(
    '2.1',
    'DuPont: fabrik i Kina',
    'Explain the DuPont Model. Include an explanation of how ROA is influenced by establishing a factory in China to replace transport from Europe.',
    'ROA er **renten på de penge, der er bundet i forretningen**. Du kan forbedre den på to måder: tjene mere pr. krones salg (**margin**) eller få flere salgskroner ud af hver krone, du har bundet (**asset turnover**). En fabrik i Kina er som at købe et billigere, men dyrt anlæg: Marginen stiger (lavere løn, kortere transport), men du binder flere penge (PP&E). Spørgsmålet er, hvad der vinder.',
    ['dupontChina'],
    [
      {
        q: 'ROA kan skrives som',
        options: ['ROE × leverage', 'Profit margin × asset turnover', 'Sales / equity', 'COGS / inventory'],
        answer: 1,
        why: 'ROA = (NI/Sales) × (Sales/Assets).',
      },
      {
        q: 'Hvilken effekt af en ny fabrik i Kina er typisk NEGATIV for ROA?',
        options: ['Lavere lønomkostninger', 'Mindre pipeline-lager', 'Mere PP&E (flere aktiver)', 'Kortere lead time til asiatiske kunder'],
        answer: 2,
        why: 'Ny fabrik øger total assets, så asset turnover falder.',
      },
      {
        q: 'Hvorfor falder safety stock, når produktionen flyttes tæt på markedet?',
        options: ['Fordi σ_D stiger', 'Fordi kortere lead time giver lavere σ_L = √L·σ_D', 'Fordi CSL falder', 'Fordi Q stiger'],
        answer: 1,
        why: 'σ_L afhænger af √L. Kortere lead time giver mindre usikkerhed og mindre ss.',
      },
    ],
  ),
  q(
    '2.2',
    'DuPont: dobbelt safety inventory',
    'Explain the DuPont Model. Include an explanation of how ROA is influenced by doubling safety inventories to reduce empty shelves and complaints.',
    'Safety inventory er som **en paraply**. Jo større den er, jo mindre våd bliver du. Men den er tung at bære, og du bliver aldrig 100 % tør. At fordoble lageret er at bære en dobbelt så stor paraply: Du bliver lidt tørrere (færre stockouts), men den koster meget (bundet kapital og holding cost). DuPont viser, om det ekstra salg kan betale for "vægten".',
    ['dupontSafety', 'serviceCurve'],
    [
      {
        q: 'Hvad sker der med inventory turnover, når safety inventory fordobles?',
        options: ['Den stiger', 'Den falder', 'Uændret', 'Den bliver negativ'],
        answer: 1,
        why: 'Inventory turnover = COGS/lager. Mere lager giver lavere turnover.',
      },
      {
        q: 'Hvorfor giver dobbelt safety stock ikke dobbelt service?',
        options: ['Fordi Q er fast', 'Fordi normalfordelingens hale bliver tyndere, så udbyttet er aftagende', 'Fordi lead time stiger', 'Fordi fill rate falder'],
        answer: 1,
        why: 'Fra z = 1,28 (90 %) til 2,56 (≈ 99,5 %). Hver ekstra σ dækker mindre sandsynlighed.',
      },
      {
        q: 'Hvad er et alternativ til at fordoble lageret?',
        options: ['Længere lead time', 'Decentralisering af lagre', 'Bedre prognoser og aggregering', 'Større ordrer'],
        answer: 2,
        why: 'Lavere σ (prognoser) og aggregering (square-root law) giver samme service med mindre lager.',
      },
    ],
  ),
  q(
    '2.3',
    'Supply Chain Decision-Making Framework',
    'Explain Figure 3-1 "Supply Chain Decision Making Framework".',
    'Tænk på et **lydmixerbord**. Den konkurrencestrategi, du vælger, er "musikgenren". Supply chain-strategien er "lydbilledet" (effektiv eller responsiv). De **seks drivers** er knapperne på mixerpultet: facilities, inventory, transportation, information, sourcing og pricing. Hver knap kan drejes mod "effektiv" eller "responsiv", og alle knapper skal passe til samme genre.',
    ['drivers'],
    [
      {
        q: 'Hvilke er de tre logistiske drivers?',
        options: ['Information, sourcing, pricing', 'Facilities, inventory, transportation', 'Facilities, information, pricing', 'Inventory, sourcing, transportation'],
        answer: 1,
        why: 'Logistiske: facilities, inventory, transportation. Tværfunktionelle: information, sourcing, pricing.',
      },
      {
        q: 'Little\'s law siger',
        options: ['I = D × T', 'Q = √(2DS/H)', 'ROA = PM × AT', 'ss = z·σ_L'],
        answer: 0,
        why: 'Lager = flowrate × flow time.',
      },
      {
        q: 'Hvordan kan pricing gøre kæden mere effektiv?',
        options: ['High-low kampagner', 'EDLP, der giver jævnere efterspørgsel', 'Menu pricing', 'Højere priser'],
        answer: 1,
        why: 'Everyday low pricing udjævner efterspørgslen og mindsker bullwhip.',
      },
    ],
  ),
  q(
    '3.1',
    'Manufacturer storage + direct shipping vs. distributor + last mile',
    'Explain the differences between "Manufacturer Storage with Direct Shipping" and "Distributor Storage with Last-Mile Delivery".',
    'To ekstremer: **Direct shipping** er som at bestille fra et stort centrallager i et andet land. Der er alt i sortimentet og lavt lager i alt, men du venter længe, og hver pakke er dyr. **Last mile** er som at få dagligvarer leveret af supermarkedet om aftenen. Det er lynhurtigt og bekvemt, men butikken skal have lager tæt på dig og selv køre ud med små ordrer.',
    ['networkDesigns'],
    [
      {
        q: 'Hvorfor er lageret lavt ved manufacturer storage with direct shipping?',
        options: ['Fordi transporten er hurtig', 'Fordi lageret er aggregeret ét sted', 'Fordi der er mange lagre', 'Fordi kunden henter selv'],
        answer: 1,
        why: 'Aggregering: Usikkerheden udligner sig, når alt lager ligger samlet.',
      },
      {
        q: 'Hvilket design har den højeste transportomkostning pr. enhed?',
        options: ['Retail storage med customer pickup', 'Distributor storage med last-mile delivery', 'Manufacturer storage med pickup', 'Alle er ens'],
        answer: 1,
        why: 'Last mile til private kunder med små ordrer og mange stop er dyrest.',
      },
      {
        q: 'Hvilke produkter passer bedst til direct shipping?',
        options: ['Høj efterspørgsel, lav værdi', 'Lav efterspørgsel, høj værdi, mange varianter', 'Friske fødevarer', 'Tunge byggematerialer'],
        answer: 1,
        why: 'Centralt lager er bedst, når varerne er dyre og efterspørgslen usikker.',
      },
    ],
  ),
  q(
    '3.2',
    'Valg af distributionsnetværk',
    'Explain how to select the appropriate network design option.',
    'Valg af netværk er som at **vælge transportmiddel til en rejse**. Der er ikke ét bedste. Det afhænger af, *hvad* du transporterer (produktets værdi, efterspørgsel og varianter) og *hvad kunden vil betale for* (hastighed og bekvemmelighed). De fleste store virksomheder bruger en **hybrid**: bestsellere tæt på kunden og long-tail-varer centralt.',
    ['networkDesigns'],
    [
      {
        q: 'Hvilke to grundvalg giver de seks designs?',
        options: [
          'TL eller LTL, og land eller by',
          'Leveres eller hentes, og lager hos producent, distributør eller detail',
          'Make eller buy, og push eller pull',
          'Centralt eller decentralt, og hurtig eller langsom',
        ],
        answer: 1,
        why: 'Delivered vs. picked up, og hvor lageret ligger.',
      },
      {
        q: 'Hvad sker der generelt, når lageret flyttes tættere på kunden?',
        options: ['Lavere lager og langsommere levering', 'Hurtigere levering og højere lager/facility costs', 'Lavere transport og lavere lager', 'Mindre variation og lavere service'],
        answer: 1,
        why: 'Tæt på kunden giver hurtig levering, men mindre aggregering og flere faciliteter.',
      },
      {
        q: 'Hvad er en hybrid netværksstrategi?',
        options: ['At bruge både TL og LTL', 'Forskellige designs til forskellige produkt- og kundesegmenter', 'At outsource halvdelen', 'At have to fabrikker'],
        answer: 1,
        why: 'Fx Amazon: Bestsellere ligger i lokale FC\'er, long tail centralt eller drop-shippes.',
      },
    ],
  ),
  q(
    '3.3',
    'Antal faciliteter',
    'Explain how the number of facilities impacts response time, inventory costs, and transportation costs.',
    'Tænk på **brandstationer**. Flere stationer betyder, at brandbilen er hurtigere fremme (responstid), men hver station skal have udstyr (lager og faste omkostninger). For lager gælder **square-root law**: Fire lagre kræver kun dobbelt så meget safety stock som ét, fordi √4 = 2. Transport falder først (kortere tur til kunden) og stiger igen, når forsendelserne ind til hvert lager bliver for små.',
    ['facilities'],
    [
      {
        q: 'Hvordan udvikler den samlede logistikomkostning sig med antallet af faciliteter?',
        options: ['Lineært stigende', 'U-formet', 'Faldende', 'Konstant'],
        answer: 1,
        why: 'Lager og facility costs stiger, transport falder først og stiger så. Summen er U-formet.',
      },
      {
        q: 'Ifølge square-root law, hvad sker der med safety stock fra 1 til 9 lagre?',
        options: ['×9', '×3', '×1', '×81'],
        answer: 1,
        why: '√9 = 3.',
      },
      {
        q: 'Hvorfor stiger inbound-transportomkostningen med flere lagre?',
        options: ['Længere afstand', 'Mindre forsendelser pr. lager, så stordriftsfordelene mistes', 'Højere told', 'Flere kunder'],
        answer: 1,
        why: 'Hvert lager får mindre TL-forsendelser, og til sidst må man bruge LTL.',
      },
    ],
  ),
  q(
    '4.1',
    'Framework for network design (Figur 5-2)',
    'Figure 5-2 – Framework for Network Design Decisions.',
    'Netværksdesign er som at **købe et hus**: Fase I svarer til at beslutte, hvilken slags liv du vil leve (strategi). Fase II er, hvilken by/region du vil bo i. Fase III er, hvilke kvarterer der er værd at kigge på. Fase IV er, hvilket konkret hus du køber. På hvert trin bruger du forskellige informationer og værktøjer.',
    ['framework'],
    [
      {
        q: 'Hvad er fase II i Figur 5-2?',
        options: ['Supply chain-strategi', 'Regional facility configuration', 'Desirable sites', 'Location choices'],
        answer: 1,
        why: 'Fase II: Vælg regioner, roller og omtrentlig kapacitet.',
      },
      {
        q: 'Hvilket input hører til fase III?',
        options: ['Competitive strategy', 'Told og valutarisiko', 'Hard og soft infrastructure', 'Factor costs'],
        answer: 2,
        why: 'Fase III vurderer infrastruktur for at finde potentielle lokaliteter.',
      },
      {
        q: 'Hvilken model passer til fase IV?',
        options: ['Zone of strategic fit', 'Capacitated plant location', 'Bullwhip', 'Newsvendor'],
        answer: 1,
        why: 'CPL bruges til at vælge konkrete lokaliteter og allokere kapacitet.',
      },
    ],
  ),
  q(
    '4.2',
    'Gravity location model',
    'Gravity Model in Chapter 5. Include formulas 5.5 and 5.6 (5.4 and 5.5 in the 6th edition of the textbook).',
    'Forestil dig, at hver kunde og leverandør er forbundet til faciliteten med en **elastik**, og stramheden er mængde × transportrate. Faciliteten "glider" hen, hvor trækket balancerer. Det er **tyngdepunktet**. Fordi trækket afhænger af afstanden (som igen afhænger af, hvor faciliteten står), må man finde punktet **trin for trin** (iteration).',
    ['gravity'],
    [
      {
        q: 'Hvad minimerer gravity-modellen?',
        options: ['Σ d_n', 'Σ d_n·D_n·F_n', 'Σ D_n', 'max d_n'],
        answer: 1,
        why: 'TC = Σ afstand × mængde × rate.',
      },
      {
        q: 'Hvorfor løses formel 5.6 iterativt?',
        options: ['Fordi der er mange punkter', 'Fordi d_n på højre side afhænger af (x, y)', 'Fordi F_n er ukendt', 'Fordi Excel kræver det'],
        answer: 1,
        why: 'Afstanden afhænger af den placering, vi søger.',
      },
      {
        q: 'Hvad sker der, hvis F_n for et marked stiger?',
        options: ['Faciliteten trækkes væk fra markedet', 'Faciliteten trækkes mod markedet', 'Ingen effekt', 'TC falder'],
        answer: 1,
        why: 'Højere vægt D_nF_n giver stærkere træk.',
      },
    ],
  ),
  q(
    '4.3',
    'Faktorer i netværksdesign',
    'Summarize three of the factors influencing network design decisions (choose freely among the factors described in Chapter 5).',
    'Faktorerne er som **kræfter, der trækker i en placering**. Lave lønninger trækker mod Asien, kundernes krav om responstid trækker mod markedet, told trækker mod produktion i hvert marked, og stordriftsfordele trækker mod få store fabrikker. Netværksdesign er at finde balancen mellem kræfterne.',
    ['factorCards'],
    [
      {
        q: 'Hvad er en "server factory" (Ferdows)?',
        options: ['Fabrik med lave omkostninger til eksport', 'Fabrik, der betjener det lokale marked pga. told/skat', 'Fabrik, der leder innovation', 'Fabrik, der henter viden'],
        answer: 1,
        why: 'Server: lokal produktion til lokalt marked.',
      },
      {
        q: 'Hvad betyder positive externalities i lokaliseringsvalg?',
        options: ['At virksomheder får gavn af at ligge tæt på hinanden', 'At der er lave skatter', 'At der er god infrastruktur', 'At der er lave lønninger'],
        answer: 0,
        why: 'Klynger deler leverandører, arbejdskraft og viden.',
      },
      {
        q: 'Store stordriftsfordele i produktionen trækker mod...',
        options: ['Mange små lokale fabrikker', 'Få store centrale fabrikker', 'Ingen effekt', 'Outsourcing'],
        answer: 1,
        why: 'Høje faste omkostninger fordeles bedst på stor volumen.',
      },
    ],
  ),
  q(
    '4.4',
    'Capacitated plant location model',
    'Explain the Capacitated Plant Location Model.',
    'CPL er som at **planlægge, hvilke af dine butikker der skal holde åbent**. Hver åben butik koster en fast husleje ($f_i$) og kan betjene et begrænset antal kunder ($K_i$). Kunderne skal betjenes billigst muligt ($c_{ij}$). Modellen vælger på én gang, *hvilke* der holder åbent (ja/nej-beslutning) og *hvem* der betjener *hvem*.',
    ['cpl'],
    [
      {
        q: 'Hvorfor står der K_i·y_i i kapacitetsbegrænsningen?',
        options: ['For at gøre modellen lineær', 'Så en lukket fabrik (y_i = 0) ikke kan producere', 'For at undgå negative værdier', 'Fordi K_i er ukendt'],
        answer: 1,
        why: 'Det kobler kapacitet med beslutningen om at åbne.',
      },
      {
        q: 'Hvilken type model er CPL?',
        options: ['Ren LP', 'Mixed integer program (MIP)', 'Ikke-lineær', 'Simulation'],
        answer: 1,
        why: 'Binære y_i og kontinuerte x_ij.',
      },
      {
        q: 'Hvad er trade-off\'et i CPL?',
        options: ['Lager vs. service', 'Faste omkostninger vs. variable transport- og produktionsomkostninger', 'Pris vs. kvalitet', 'TL vs. LTL'],
        answer: 1,
        why: 'Få fabrikker giver lave faste omkostninger. Mange fabrikker giver kortere transport.',
      },
    ],
  ),
  q(
    '5.1',
    'Locational break-even',
    'Explain the Locational Break-Even method.',
    'Som at vælge **mobilabonnement**: Et dyrt abonnement (høj fast pris) med billige minutter (lav variabel omkostning) betaler sig kun, hvis du ringer meget. Lokaliteter har på samme måde forskellige faste og variable omkostninger, og det **forventede volumen** afgør, hvilken der er billigst. Skæringspunkterne viser, hvor valget skifter.',
    ['breakEven'],
    [
      {
        q: 'Ved Q = 2.000 i Akron/Bowling Green/Chicago-eksemplet er den billigste lokalitet...',
        options: ['Akron', 'Bowling Green', 'Chicago', 'Lige dyre'],
        answer: 1,
        why: '150.000 < 160.000 < 180.000.',
      },
      {
        q: 'Skæringspunktet mellem to lokaliteter er',
        options: ['(F₁+F₂)/(v₁+v₂)', '(F₂−F₁)/(v₁−v₂)', 'F₁/v₁', 'v₁·F₂'],
        answer: 1,
        why: 'Sæt F₁+v₁Q = F₂+v₂Q og løs for Q.',
      },
      {
        q: 'En stor begrænsning ved metoden er',
        options: ['Den kræver en solver', 'Den medtager ikke kvalitative faktorer', 'Den virker kun for to lokaliteter', 'Den ignorerer faste omkostninger'],
        answer: 1,
        why: 'Kvalitative faktorer kræver fx factor rating.',
      },
    ],
  ),
  q(
    '5.2',
    'Factor-rating method',
    'Explain the Factor Rating method.',
    'Factor rating er som at **vælge en lejlighed med en pointtabel**: Beliggenhed tæller 40 %, pris 30 %, størrelse 20 % og altan 10 %. Hver lejlighed får point på hver ting, og den med højest vægtet sum vinder. Det gør "bløde" ting sammenlignelige, men resultatet afhænger meget af de vægte, du vælger.',
    ['factorRating'],
    [
      {
        q: 'Hvad skal vægtene summere til?',
        options: ['100 point', '1 (100 %)', 'Antallet af faktorer', 'Det er ligegyldigt'],
        answer: 1,
        why: 'Normalisering gør scorerne sammenlignelige.',
      },
      {
        q: 'Hvad er den største svaghed ved factor rating?',
        options: ['Den er for kompleks', 'Den er subjektiv, og vægte kan manipuleres', 'Den kræver data om transport', 'Den kan kun bruges til fabrikker'],
        answer: 1,
        why: 'Både vægte og scorer er vurderinger. Lav en følsomhedsanalyse.',
      },
      {
        q: 'I Five Flags-eksemplet vinder Frankrig med 70,35 mod 68,00. Hvad bør man gøre?',
        options: ['Vælge Frankrig uden videre', 'Lave en følsomhedsanalyse, da forskellen er lille', 'Vælge Danmark', 'Droppe projektet'],
        answer: 1,
        why: 'En lille forskel betyder, at vægtene kan vende resultatet.',
      },
    ],
  ),
  q(
    '5.3',
    'Center-of-gravity method',
    'Explain the Center-of-Gravity model from the "Location Decisions" chapter, located in the folder "Readings in addition to the textbook".',
    'Læg et kort på en **plade** og stil lodder på hver by, lige så tunge som mængden, der skal sendes dertil. Det punkt, hvor pladen balancerer på en finger, er **tyngdepunktet**. Store byer trækker punktet mod sig. Det er en hurtig og simpel tilnærmelse, men ikke det præcise optimum.',
    ['cog'],
    [
      {
        q: 'Formlen for C_x er',
        options: ['Σx_i / n', 'Σx_iQ_i / ΣQ_i', 'Σx_iQ_i / d_i', 'max(x_i)'],
        answer: 1,
        why: 'Mængdevægtet gennemsnit.',
      },
      {
        q: 'I Quain-eksemplet bliver lageret placeret ved cirka',
        options: ['(77,5; 100)', '(66,7; 93,3)', '(60; 40)', '(130; 130)'],
        answer: 1,
        why: '400.000/6.000 og 560.000/6.000.',
      },
      {
        q: 'Hvad er forskellen på center of gravity og gravity-modellen?',
        options: ['Ingen', 'Gravity-modellen vægter også med 1/d_n og transportrater og itererer', 'Center of gravity bruger Solver', 'Gravity-modellen kan kun bruges til fabrikker'],
        answer: 1,
        why: 'Center of gravity er ofte startpunktet for gravity-modellens iteration.',
      },
    ],
  ),
  q(
    '6.1',
    'Ex 11-4: Joint ordering',
    'Explain Example 11-4 "Products Ordered and Delivered Jointly".',
    'Som at **dele en taxa**: Tre personer, der skal samme vej, deler den faste pris og får hver en billigere tur. Best Buy lader tre computermodeller dele lastbilen (4.000 dollar), så det samlede antal bestillinger og omkostningerne falder. Men den mindst solgte model "kører med" langt oftere, end den har brug for, og det løser tailored aggregation.',
    ['jointOrdering'],
    [
      {
        q: 'Hvad er S* i Ex 11-4?',
        options: ['$4.000', '$5.000', '$7.000', '$12.000'],
        answer: 2,
        why: 'S + s_L + s_M + s_H = 4.000 + 3·1.000.',
      },
      {
        q: 'Ved joint ordering bliver n* ≈',
        options: ['3,5', '9,75', '11,0', '54,8'],
        answer: 1,
        why: '√(13.320·100 / 14.000) = 9,75.',
      },
      {
        q: 'Hvad er ulempen ved fuld joint ordering?',
        options: ['Højere samlede omkostninger', 'Små produkter bestilles for ofte og betaler s_i hver gang', 'Lastbilen er for lille', 'Der kræves mere safety stock'],
        answer: 1,
        why: 'Tailored aggregation lader små produkter komme med på hver k-te ordre.',
      },
    ],
  ),
  q(
    '6.2',
    'Ex 11-5: Aggregering med kapacitetsbegrænsning',
    'Explain Example 11-5 "Aggregation with Capacity Constraint".',
    'At dele en taxa er smart, men kun hvis **alle kan være i bilen**. Hvis bagagen fylder mere, end bilen kan rumme, må I tage flere ture. Når den optimale samlede last overstiger lastbilens kapacitet, skal man sende fulde lastbiler oftere. Og hvis bilen alligevel er fuld, giver det at samle flere leverandører kun ekstra stop.',
    ['capacityAgg'],
    [
      {
        q: 'Hvordan ved man, om kapaciteten er bindende?',
        options: ['Hvis n* > 52', 'Hvis den samlede last ΣQ_i overstiger lastbilens kapacitet', 'Hvis S* > S', 'Hvis h > 20 %'],
        answer: 1,
        why: 'Sammenlign den ubegrænsede samlede last med kapaciteten.',
      },
      {
        q: 'Når kapaciteten er bindende, bliver frekvensen',
        options: ['n = ΣD_i / K', 'n = √(ΣDhC/2S)', 'n = 1', 'n = K/D'],
        answer: 0,
        why: 'Fulde lastbiler: Samlet årlig mængde divideret med kapacitet.',
      },
      {
        q: 'Hvornår giver aggregering på samme lastbil størst gevinst?',
        options: ['Når hver leverandørs lot er lille i forhold til lastbilens kapacitet', 'Når lastbilen altid er fuld', 'Når stop-omkostningen er høj', 'Når der kun er én leverandør'],
        answer: 0,
        why: 'Så deles den faste omkostning uden at kapaciteten binder.',
      },
    ],
  ),
  q(
    '6.3',
    'Mængderabatter og Ex 11-7',
    'Explain the two types of quantity discounts. Include Example 11-7 "All-Unit Quantity Discounts".',
    '**All-unit** er som "køb 10 eller flere, så koster *alle* 25 kr." Pludselig kan 10 stk. være billigere end 9 stk. **Marginal unit** er som en trinvis skat: Kun stykkerne *over* 10 får den lavere pris. All-unit giver et stærkt skub mod at bestille præcis ved brudpunktet, og det øger lageret.',
    ['discount'],
    [
      {
        q: 'Hvad sker der i Ex 11-7 ved prisen $3,00?',
        options: ['EOQ bruges', 'EOQ (6.325) ligger over intervallet, så intervallet springes over', 'Q hæves til 5.000', 'Q sænkes til 0'],
        answer: 1,
        why: 'Hvis EOQ ≥ næste brudpunkt, er en lavere pris altid bedre.',
      },
      {
        q: 'Optimum i Ex 11-7 er',
        options: ['6.325 til $3,00', '6.367 til $2,96', '10.000 til $2,92', '16.961 til $2,92'],
        answer: 2,
        why: 'TC = $354.520 er lavest.',
      },
      {
        q: 'Hvorfor skal købsomkostningen D·C med i TC ved rabatter?',
        options: ['Den skal altid med', 'Fordi prisen afhænger af Q', 'Fordi h afhænger af D', 'Det skal den ikke'],
        answer: 1,
        why: 'Uden rabat er D·C konstant og påvirker ikke valget.',
      },
    ],
  ),
  q(
    '6.4',
    'Design af mængderabatter (Ex 11-9 og 11-10)',
    'Explain how to design a suitable quantity discount. Include Example 11-9 and Example 11-10 in your explanation.',
    'En god rabat er som et **fælles budget i et bofællesskab**: Hvis én beboers valg koster de andre penge, kan man betale beboeren for at vælge det, der er bedst for alle. I 11-9 betaler producenten detailhandleren en lille rabat for at bestille større lots (lavere samlede ordreomkostninger). I 11-10 fjerner rabatten **double marginalization**, hvor begge led lægger en margin på, så prisen bliver for høj.',
    ['coordination'],
    [
      {
        q: 'Hvad er den koordinerede lotstørrelse i Ex 11-9?',
        options: ['6.325', '9.165', '11.832', '10.000'],
        answer: 1,
        why: '√(2·120.000·350 / 1,0).',
      },
      {
        q: 'I Ex 11-10, hvad er detailprisen uden koordinering?',
        options: ['$3', '$4', '$5', '$6'],
        answer: 2,
        why: 'Producenten sætter C_R = 4, og detail sætter p = 3 + 4/2 = 5.',
      },
      {
        q: 'Hvilken rabat passer til et produkt med markedsmagt?',
        options: ['Lot-size baseret', 'Volume-baseret eller two-part tariff', 'Ingen rabat', 'All-unit pr. ordre'],
        answer: 1,
        why: 'Den fjerner double marginalization uden at øge lotstørrelsen.',
      },
    ],
  ),
  q(
    '7.1',
    'Ex 12-3: Safety inventory for ønsket CSL',
    'Explain Example 12-3 "Evaluating Safety Inventory Given a Desired Cycle Service Level".',
    'Safety inventory er **bufferen i din madpakke**: Du ved, at du typisk spiser 2 stykker, men nogle dage er du sulten. Hvor meget ekstra du pakker, afhænger af, hvor sjældent du vil gå sulten (CSL), og hvor meget din sult svinger (σ). Svinger sulten over flere dage (lead time), vokser usikkerheden med **√dage**, ikke med antal dage.',
    ['safetyStock'],
    [
      {
        q: 'σ_L i Ex 12-3 er',
        options: ['500', '707', '1.000', '250'],
        answer: 1,
        why: '√2 · 500 = 707.',
      },
      {
        q: 'Safety inventory ved CSL = 90 % er cirka',
        options: ['500', '707', '906', '1.645'],
        answer: 2,
        why: '1,28 · 707 = 906.',
      },
      {
        q: 'Hvad er ROP?',
        options: ['ss', 'D_L + ss', 'Q + ss', 'Q/2 + ss'],
        answer: 1,
        why: 'Forventet efterspørgsel i lead time plus safety stock: 5.906.',
      },
    ],
  ),
  q(
    '7.2',
    'CSL, fill rate og review-politikker',
    'Explain Cycle Service Level, Fill Rate, and Order Fill Rate, and the two replenishment policies: continuous and periodic review.',
    'Tre måder at måle, om **hylden var fyldt**: CSL svarer til "hvor mange uger løb vi *aldrig* tør?". Fill rate svarer til "hvor stor en andel af kunderne fik varen?". Order fill rate svarer til "hvor mange *indkøbskurve* var helt komplette?". **Continuous review** er som at tanke bilen, når lampen lyser (fast mængde, varierende tid). **Periodic review** er som at tanke hver søndag (fast tid, varierende mængde), og det kræver en større buffer.',
    ['review', 'fillRate'],
    [
      {
        q: 'Hvorfor er fill rate typisk højere end CSL?',
        options: ['Fordi de måler det samme', 'Fordi stockouts typisk kun rammer få enheder sidst i cyklussen', 'Fordi Q er større end ss', 'Fordi CSL inkluderer backorders'],
        answer: 1,
        why: 'CSL tæller enhver stockout som "fejl". Fill rate tæller andelen af enheder.',
      },
      {
        q: 'Ved periodic review beskytter safety stock over',
        options: ['L', 'T', 'T + L', 'T·L'],
        answer: 2,
        why: 'Næste bestilling sker først efter T, og så tager det L.',
      },
      {
        q: 'En kunde køber 3 varer, hver med fill rate 98 %. Order fill rate er cirka',
        options: ['98 %', '94 %', '99 %', '90 %'],
        answer: 1,
        why: '0,98³ ≈ 0,94 (ved uafhængighed).',
      },
    ],
  ),
  q(
    '8.1',
    'Cost of overstocking og understocking',
    'Explain the two terms Cost of Overstocking and Cost of Understocking.',
    'Du skal bage **boller til en fest** og ved ikke præcist, hvor mange der kommer. En bolle for meget koster dig ingredienserne minus det, du kan få for resterne (C_o). En bolle for lidt koster dig fortjenesten på en sulten gæst (C_u). Hvis en sur gæst er meget værre end en bolle i skraldespanden, bager du mange flere end forventet: **CSL* = C_u/(C_u + C_o)**.',
    ['newsvendor'],
    [
      {
        q: 'Cost of overstocking er',
        options: ['p − c', 'c − s', 'p − s', 'c'],
        answer: 1,
        why: 'Tabet pr. usolgt enhed: Indkøbspris minus restværdi.',
      },
      {
        q: 'Hvis C_u = C_o, er det optimale CSL',
        options: ['0 %', '50 %', '88 %', '100 %'],
        answer: 1,
        why: 'Så bestilles den forventede efterspørgsel (medianen).',
      },
      {
        q: 'Hvordan kan en buyback-kontrakt påvirke C_o?',
        options: ['Øge den', 'Sænke den, fordi restværdien stiger', 'Ingen effekt', 'Gøre den negativ altid'],
        answer: 1,
        why: 'Leverandøren tager usolgte varer tilbage, så detailhandleren taber mindre.',
      },
    ],
  ),
  q(
    '8.2',
    'Ex 13-1: Optimalt service level for sæsonvarer',
    'Explain Example 13-1 "Evaluating the Optimal Service Level for Seasonal Items" (do not include the expected profits calculation).',
    'L.L. Bean tjener 150 dollar på en solgt parka, men taber kun 20 dollar på en usolgt. Det er som et væddemål, hvor du vinder 150 og taber 20. Du skal være villig til at satse, selv når oddsene er imod dig! Derfor bestiller de **468** parkaer, selv om de i gennemsnit kun sælger 350.',
    ['newsvendor'],
    [
      {
        q: 'CSL* for parkaerne er',
        options: ['0,50', '0,75', '0,88', '0,95'],
        answer: 2,
        why: '150/(150+20) = 0,882.',
      },
      {
        q: 'O* ≈',
        options: ['350', '418', '468', '550'],
        answer: 2,
        why: '350 + 1,18·100.',
      },
      {
        q: 'Hvis restværdien falder til $0, hvad sker der med O*?',
        options: ['Stiger', 'Falder', 'Uændret', 'Bliver 0'],
        answer: 1,
        why: 'C_o = 100, CSL* = 0,6 og O* ≈ 375.',
      },
    ],
  ),
  q(
    '9.1',
    'Direct shipment og milk runs (Ex 14-1)',
    'Explain "Direct Shipment Network to Single Destination" and "Direct Shipping with Milk Runs". Include Example 14-1.',
    'Direkte forsendelse er som at **køre hver af dine børn til hver sin fritidsaktivitet** i hver sin bil: enkelt og hurtigt, men dyrt og med mange halvtomme biler. En **milk run** er samkørsel: én bil henter eller afleverer flere på samme tur. Bilen bliver fyldt, og du kan køre oftere, så der skal mindre på lager hvert sted.',
    ['milkRun'],
    [
      {
        q: 'Hvad er en milk run?',
        options: ['Fuld TL direkte fra A til B', 'Én lastbil henter hos flere leverandører eller leverer til flere modtagere på samme tur', 'Transport af mejeriprodukter', 'Cross-docking'],
        answer: 1,
        why: 'Konsolidering af små forsendelser på en rute.',
      },
      {
        q: 'Hvornår er direct shipment bedst?',
        options: ['Når hver modtager kan fylde en lastbil fra hver leverandør', 'Når forsendelserne er små', 'Når der er mange leverandører tæt på hinanden', 'Altid'],
        answer: 0,
        why: 'Store forsendelser pr. par udnytter TL uden ekstra lager.',
      },
      {
        q: 'Hvorfor sænker milk runs cycle inventory?',
        options: ['Fordi der leveres sjældnere', 'Fordi hver modtager kan få mindre mængder oftere med en fyldt lastbil', 'Fordi lastbilen er større', 'Fordi ss falder'],
        answer: 1,
        why: 'Hyppig levering giver mindre Q og mindre Q/2.',
      },
    ],
  ),
  q(
    '9.2',
    'Stepping-stone-metoden',
    'The Stepping Stone procedure in transport modelling.',
    'Stepping-stone er som at **flytte rundt på møbler for at finde den bedste indretning**: Du prøver en ændring ad gangen. Hvis du flytter én enhed ind i en tom "celle", skal du også flytte rundt på andre for at holde balancen (stien). Hvis det samlet sparer penge (negativt indeks), gør du det. Når ingen flytning hjælper, er du færdig.',
    ['steppingStone'],
    [
      {
        q: 'Hvad er improvement index?',
        options: ['Den samlede omkostning', 'Ændringen i omkostning ved at flytte én enhed ind i en tom celle', 'Antallet af optagne celler', 'Kapaciteten'],
        answer: 1,
        why: 'Sum af + omkostninger minus sum af − omkostninger på den lukkede sti.',
      },
      {
        q: 'Hvornår er løsningen optimal?',
        options: ['Når alle indeks er ≥ 0', 'Når alle indeks er ≤ 0', 'Efter 3 iterationer', 'Når alle celler er optaget'],
        answer: 0,
        why: 'Ingen flytning kan sænke omkostningen.',
      },
      {
        q: 'Hvor mange optagne celler kræves for at undgå degeneration?',
        options: ['m · n', 'm + n', 'm + n − 1', 'm − n'],
        answer: 2,
        why: 'Ellers kan der ikke findes stier for alle tomme celler.',
      },
    ],
  ),
  q(
    '9.3',
    'TL vs. LTL (Faulkswagon)',
    'Explain TL and LTL transport. Include the Faulkswagon case as an example.',
    '**TL** er som at **leje en hel bus**: Samme pris, uanset om du har 5 eller 50 passagerer. Det er billigt pr. person, når bussen er fuld. **LTL** er som at **tage en almindelig bus**: Du betaler pr. person og deler med andre, men turen tager længere med skift ved terminaler. Store, regelmæssige mængder hører til TL, små mængder hører til LTL.',
    ['tlLtl'],
    [
      {
        q: 'Hvordan prissættes TL?',
        options: ['Pr. kg', 'Pr. lastbil og tur, uafhængigt af mængden', 'Pr. pakke', 'Pr. time'],
        answer: 1,
        why: 'Fast pris pr. bil, så omkostningen pr. enhed falder med fyldningsgraden.',
      },
      {
        q: 'Hvorfor er LTL langsommere?',
        options: ['Lavere hastighed', 'Omlastning ved terminaler (hub-and-spoke)', 'Længere afstand', 'Mindre lastbiler'],
        answer: 1,
        why: 'Gods konsolideres og omlastes.',
      },
      {
        q: 'Hvis outbound er dyrere pr. enhed og km end inbound, skal lagrene ligge...',
        options: ['Tæt på fabrikkerne', 'Tæt på markederne', 'Midt imellem', 'Det er ligegyldigt'],
        answer: 1,
        why: 'Så bliver den dyre del af turen kort.',
      },
    ],
  ),
  q(
    '10.1',
    'Informationsdeling og bullwhip',
    'Explain how information sharing can reduce the bullwhip effect.',
    'Bullwhip er som **"hviskeleg"**: Hver person giver beskeden videre med lidt ekstra, og til sidst er den helt forvrænget. Hvis *alle* i stedet kan læse den oprindelige besked (POS-data), forsvinder forvrængningen. Hvert led i kæden forudsiger fra kundernes reelle køb i stedet for at gætte ud fra ordrerne fra leddet nedenunder.',
    ['bullwhip'],
    [
      {
        q: 'Hvad er bullwhip-effekten?',
        options: ['At efterspørgslen falder op gennem kæden', 'At variationen i ordrer stiger op gennem kæden', 'At priserne stiger', 'At lead time falder'],
        answer: 1,
        why: 'Ordrerne svinger mere, jo længere op man kommer.',
      },
      {
        q: 'Hvordan reducerer deling af POS-data bullwhip?',
        options: ['Ved at øge lotstørrelser', 'Ved at alle led prognosticerer ud fra reel slutkundeefterspørgsel', 'Ved at forlænge lead time', 'Ved at hæve priserne'],
        answer: 1,
        why: 'Ordreforvrængningen indgår ikke i prognosen.',
      },
      {
        q: 'Hvad står CPFR for?',
        options: ['Continuous Production For Retail', 'Collaborative Planning, Forecasting and Replenishment', 'Cost Per Freight Rate', 'Central Planning For Retailers'],
        answer: 1,
        why: 'Fælles planlægning, prognose og genopfyldning.',
      },
    ],
  ),
  q(
    '10.2',
    'VMI og CRP',
    'Explain how VMI and CRP can reduce the bullwhip effect.',
    'VMI er som at **lade mælkemanden selv kigge i dit køleskab** og fylde op. Du skal ikke bestille (og overbestille), og han ser direkte, hvad du bruger. Ét led i "hviskelegen" forsvinder, så forvrængningen bliver mindre.',
    ['bullwhip'],
    [
      {
        q: 'Hvem bestemmer genopfyldningen ved VMI?',
        options: ['Detailhandleren', 'Leverandøren', 'Slutkunden', 'En 3PL'],
        answer: 1,
        why: 'Leverandøren styrer kundens lager.',
      },
      {
        q: 'Hvorfor reducerer VMI bullwhip?',
        options: ['Ét prognoseled fjernes, og leverandøren ser POS-data', 'Lotstørrelserne øges', 'Priserne fastfryses', 'Lead time forlænges'],
        answer: 0,
        why: 'Færre led, der forstærker signalet.',
      },
      {
        q: 'Hvad er en risiko ved VMI?',
        options: ['Leverandøren kan overfylde lageret, hvis detailhandleren ejer det', 'For lavt lager altid', 'Ingen datadeling', 'Højere prognosefejl'],
        answer: 0,
        why: 'Løsning: consignment og KPI\'er.',
      },
    ],
  ),
  q(
    '11.1',
    'Indtægtsstrømme i reverse supply chains',
    'Explain the potential revenue streams in reverse supply chains (Larsen and Jacobsen 2016 paper).',
    'Tænk på en **pantflaske**: Det, der ligner affald, har værdi, hvis man har et system til at samle den ind. Returnerede produkter kan sælges igen, genfremstilles, høstes for dele eller genvindes som materialer. Hertil kommer sparede omkostninger og loyale kunder. Reverse supply chains kan gå fra at være en udgift til at være en indtægt.',
    ['recovery'],
    [
      {
        q: 'Hvilken er IKKE en direkte indtægtsstrøm fra returer?',
        options: ['Salg af remanufactured produkter', 'Salg af genvundne materialer', 'Højere told på import', 'Høst af reservedele'],
        answer: 2,
        why: 'Told er ikke en indtægt fra reverse supply chains.',
      },
      {
        q: 'Hvorfor er hurtig behandling af returer vigtig?',
        options: ['Lovkrav', 'Produkterne taber værdi over tid', 'Lavere transport', 'Højere CSL'],
        answer: 1,
        why: 'Især elektronik og mode forældes hurtigt.',
      },
      {
        q: 'Hvad er en forudsætning for indtægter fra returer?',
        options: ['Ingen indsamling', 'Kontrol over returstrømmen og design for genvinding', 'Høje priser på nye produkter', 'Lavt lager'],
        answer: 1,
        why: 'Mængde, timing og kvalitet skal kunne styres.',
      },
    ],
  ),
  q(
    '11.2',
    'Cradle-to-Cradle',
    'Explain the Cradle-to-Cradle concept (in the Green Supply Chain Management chapter).',
    'I naturen findes der **ikke affald**: Et æbletræs blade bliver til jord, som giver næring til nye træer. C2C designer produkter på samme måde. Enten kan materialerne komposteres (biologisk kredsløb), eller de kan genbruges i samme kvalitet igen og igen (teknisk kredsløb). Målet er ikke at være "mindre dårlig", men at være "god".',
    ['c2c'],
    [
      {
        q: 'Hvad betyder "waste equals food"?',
        options: ['Affald skal brændes', 'Alt output skal være input (næring) til et andet kredsløb', 'Mad skal genbruges', 'Affald er billigt'],
        answer: 1,
        why: 'Det første C2C-princip.',
      },
      {
        q: 'Hvad er forskellen på eco-efficiency og eco-effectiveness?',
        options: ['Ingen', '"Mindre dårlig" vs. "god"', 'Pris vs. kvalitet', 'Lokal vs. global'],
        answer: 1,
        why: 'C2C kritiserer, at eco-efficiency kun bremser den lineære model.',
      },
      {
        q: 'Hvad er en "monstrous hybrid"?',
        options: ['Et produkt, hvor biologiske og tekniske materialer ikke kan adskilles', 'En hybridbil', 'En dobbelt supply chain', 'Et genfremstillet produkt'],
        answer: 0,
        why: 'Den kan hverken komposteres eller genbruges.',
      },
    ],
  ),
  q(
    '11.3',
    'Copymagic (Thierry et al.)',
    'Explain Copymagic\'s circular supply chain (in the Thierry et al. paper).',
    'Copymagic **leaser** kopimaskiner. Det er som et biludlejningsfirma, der får bilerne tilbage, når lejeaftalen udløber. Fordi de *ved*, at maskinerne kommer tilbage, kan de planlægge: De bedste genfremstilles til "som ny", ældre maskiner skilles ad for dele, og resten genvindes som materialer.',
    ['recovery'],
    [
      {
        q: 'Hvad er remanufacturing ifølge Thierry et al.?',
        options: ['Reparation til fungerende stand', 'Fuld adskillelse og "som ny"-kvalitet', 'Genvinding af materialer', 'Direkte gensalg'],
        answer: 1,
        why: 'Samme kvalitet og garanti som nye.',
      },
      {
        q: 'Hvorfor er leasing en fordel for Copymagic?',
        options: ['Højere priser', 'Forudsigelig returstrøm (timing og mængde)', 'Lavere skat', 'Færre kunder'],
        answer: 1,
        why: 'Det reducerer usikkerheden ved returer.',
      },
      {
        q: 'Hvad er cannibalization?',
        options: ['At nye produkter æder salget fra de gamle', 'At udtage brugbare dele fra returnerede produkter', 'At genvinde metal', 'At bortskaffe affald'],
        answer: 1,
        why: 'Dele genbruges til reservedele eller remanufacturing.',
      },
    ],
  ),
  q(
    '11.4',
    'Reverse logistics og de syv dødssynder',
    'Explain reverse logistics, including the seven deadly sins (in the Green Supply Chain Management chapter).',
    'Reverse logistics er **"baglæns logistik"**, altså varer der kommer tilbage fra kunderne. De syv dødssynder er de klassiske fejl, fx at returer får lov at samle støv på lageret, at ingen har ansvaret, eller at man ikke ved, hvad der kommer retur. Fejlene gør returer dyre i stedet for værdifulde.',
    ['sins'],
    [
      {
        q: 'Hvad er gatekeeping?',
        options: ['Sikkerhed på lageret', 'Screening af returer ved indgangen', 'Toldkontrol', 'Kvalitetskontrol af nye varer'],
        answer: 1,
        why: 'Uberettigede returer afvises tidligt.',
      },
      {
        q: 'Hvorfor er langsom behandling af returer en synd?',
        options: ['Fordi produkterne taber værdi', 'Fordi det er ulovligt', 'Fordi det øger salget', 'Fordi det sænker CSL'],
        answer: 0,
        why: 'Time is money, især for produkter med kort livscyklus.',
      },
      {
        q: 'Hvordan adskiller reverse logistics sig fra fremadrettet logistik?',
        options: ['Større usikkerhed i mængde, timing og kvalitet', 'Færre oprindelsespunkter', 'Mere standardiserede produkter', 'Lavere omkostninger'],
        answer: 0,
        why: 'Mange oprindelsespunkter og varierende kvalitet.',
      },
    ],
  ),
  q(
    '12.1',
    'Faulkswagon: fabrikker med center of gravity',
    'Explain how factories are located using the Center-of-Gravity model found in the chapter "Location Decisions" in the folder "Readings in addition to the textbook".',
    'Brug tyngdepunktet fra 5.3 på casens markeder: Hver fabrik placeres der, hvor efterspørgslen fra de markeder, den betjener, "balancerer". **Indsæt casens koordinater og mængder i beregneren** herunder (dine tal gemmes i browseren).',
    ['cogCase'],
    [
      {
        q: 'Hvad bestemmer, hvor fabrikken trækkes hen?',
        options: ['Antallet af markeder', 'Markedernes mængde Q_i', 'Afstand til havnen', 'Lønniveauet'],
        answer: 1,
        why: 'Det mængdevægtede gennemsnit trækkes mod store markeder.',
      },
      {
        q: 'Hvilken omkostning ignorerer center of gravity?',
        options: ['Transport', 'Produktionsomkostninger', 'Mængde', 'Afstand'],
        answer: 1,
        why: 'Løn og produktionsomkostninger er ikke med. Se 12.3.',
      },
      {
        q: 'Hvordan kan placeringen forfines?',
        options: ['Med gravity-modellen (iteration med rater)', 'Med newsvendor', 'Med bullwhip', 'Med EOQ'],
        answer: 0,
        why: 'Gravity-modellen minimerer den reelle afstand × mængde × rate.',
      },
    ],
    true,
  ),
  q(
    '12.2',
    'Faulkswagon: valg af DW-lokaliteter',
    'Explain how DW locations are selected.',
    'DW\'erne er "mellemstationerne" mellem fabrik og forhandler. Fordi turen ud til forhandlerne er den dyreste (små forsendelser), placeres DW\'erne **tæt på markederne**. Beregneren herunder grupperer markeder i *k* regioner og finder tyngdepunktet for hver, som et udgangspunkt for DW-placering.',
    ['multiCog', 'facilities'],
    [
      {
        q: 'Hvorfor trækkes DW\'er mod markederne?',
        options: ['Fordi inbound er dyrest', 'Fordi outbound er dyrere pr. enhed og km', 'Fordi lageret er billigere', 'Fordi told'],
        answer: 1,
        why: 'Den dyre del af turen skal være kort.',
      },
      {
        q: 'Hvad sker der med safety stock, hvis antallet af DW\'er stiger fra 1 til 4?',
        options: ['×4', '×2', 'Uændret', '÷2'],
        answer: 1,
        why: 'Square-root law: √4 = 2.',
      },
      {
        q: 'Hvorfor er en DW bedre end direkte levering fra fabrik til forhandler?',
        options: ['Den er altid billigere', 'TL inbound og korte outbound-ture med lavt lager hos forhandlerne', 'Kortere afstand i alt', 'Mindre IT'],
        answer: 1,
        why: 'Konsolidering inbound og responsivitet outbound.',
      },
    ],
    true,
  ),
  q(
    '12.3',
    'Faulkswagon: transport vs. produktion',
    'Explain how transport costs relate to production costs in the Faulkswagon supply chain.',
    'En bil er som en **dyr bog i en tynd kuvert**: Portoen er lille i forhold til bogens værdi. Når transporten kun er få procent af værdien, afgør **produktionsomkostningerne** placeringen, og lager er dyrt, fordi hver enhed binder mange penge. Brug beregneren til at indsætte casens tal.',
    ['valueDensity'],
    [
      {
        q: 'Hvad er value density?',
        options: ['Værdi pr. vægt eller volumen', 'Antal enheder pr. lastbil', 'Pris pr. km', 'Lagerværdi pr. år'],
        answer: 0,
        why: 'Høj value density betyder, at transport er en lille andel af omkostningen.',
      },
      {
        q: 'Hvad betyder høj value density for netværket?',
        options: ['Produktion tæt på markedet', 'Centraliseret produktion og fokus på lavt lager', 'Mange små fabrikker', 'Langsom transport'],
        answer: 1,
        why: 'Transport er billig i forhold til værdien, lager er dyrt.',
      },
      {
        q: 'For hvilket produkt dominerer transport typisk?',
        options: ['Biler', 'Cement', 'Smartphones', 'Medicin'],
        answer: 1,
        why: 'Tungt og billigt.',
      },
    ],
    true,
  ),
  q(
    '12.4',
    'Faulkswagon: refleksion over initialløsningen',
    'See the initial solution of the Faulkswagon case (sheet 1.10 in the Excel file). Reflect on how Faulkswagon can reduce the costs of its supply chain.',
    'Initialløsningen er et **første udkast**. Find de største omkostningsposter (indsæt dem herunder fra sheet 1.10), og brug værktøjerne fra kurset på dem: transportmodel til allokering, CPL til antal faciliteter, konsolidering til transport og aggregering til lager.',
    ['costBreakdown'],
    [
      {
        q: 'Hvilket værktøj optimerer fordelingen af produktion fra fabrikker til lagre?',
        options: ['Factor rating', 'Transportmodellen (LP/stepping-stone)', 'Newsvendor', 'DuPont'],
        answer: 1,
        why: 'Den minimerer omkostningerne under kapacitet og efterspørgsel.',
      },
      {
        q: 'Hvad er trade-off\'et ved at lukke et DW?',
        options: ['Mindre lager og lavere faste omkostninger vs. længere outbound og ringere service', 'Ingen', 'Højere produktion', 'Lavere transport'],
        answer: 0,
        why: 'Det er den U-formede kurve fra 3.3.',
      },
      {
        q: 'Hvorfor er produktionsallokering ofte den største gevinst?',
        options: ['Fordi produktionsomkostningerne dominerer de samlede omkostninger', 'Fordi transport er gratis', 'Fordi lager ikke koster noget', 'Fordi der kun er én fabrik'],
        answer: 0,
        why: 'Se 12.3 om value density.',
      },
    ],
    true,
  ),
];

export const byId = (id: string) => QUESTIONS.find((x) => x.id === id);
