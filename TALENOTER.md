# Talenoter – 62133 Supply Chain Management

Øvenoter til hvert eksamensspørgsmål (15 min). Genereret fra `notes/`. Tjek tal mod din udgave af Chopra & Meindl.

## Indhold

- 1.1 Zone of Strategic Fit (Figur 2-5) og implied uncertainty
- 1.2 Fordeling af implied uncertainty (Figur 2-6)
- 2.1 DuPont-modellen: fabrik i Kina i stedet for transport fra Europa
- 2.2 DuPont-modellen: dobbelt så meget safety inventory
- 2.3 Supply Chain Decision-Making Framework (Figur 3-1)
- 3.1 Manufacturer Storage with Direct Shipping vs. Distributor Storage with Last-Mile Delivery
- 3.2 Valg af det rette distributionsnetværk
- 3.3 Antal faciliteter: responstid, lageromkostninger og transportomkostninger
- 4.1 Figur 5-2: Framework for Network Design Decisions
- 4.2 Gravity Location Model (formel 5.5 og 5.6 i 7. udgave, 5.4 og 5.5 i 6. udgave)
- 4.3 Tre faktorer, der påvirker netværksdesign
- 4.4 Capacitated Plant Location Model
- 5.1 Locational Break-Even Analysis
- 5.2 Factor-Rating Method
- 5.3 Center-of-Gravity Method (Location Decisions)
- 6.1 Example 11-4: Products Ordered and Delivered Jointly
- 6.2 Example 11-5: Aggregation with Capacity Constraint
- 6.3 De to typer mængderabat og Example 11-7 (All-Unit Quantity Discounts)
- 6.4 Design af en mængderabat: Example 11-9 og 11-10
- 7.1 Example 12-3: Safety inventory for et ønsket cycle service level
- 7.2 CSL, fill rate og order fill rate samt continuous og periodic review
- 8.1 Cost of Overstocking og Cost of Understocking
- 8.2 Example 13-1: optimalt service level for sæsonvarer
- 9.1 Direct Shipment Network to Single Destination og Direct Shipping with Milk Runs (Example 14-1)
- 9.2 Stepping-Stone-metoden i transportmodellering
- 9.3 TL- og LTL-transport med Faulkswagon-casen som eksempel
- 10.1 Informationsdeling mod bullwhip-effekten
- 10.2 VMI og CRP mod bullwhip-effekten
- 11.1 Indtægtsstrømme i reverse supply chains (Larsen & Jacobsen 2016)
- 11.2 Cradle-to-Cradle-konceptet (Green Supply Chain Management)
- 11.3 Copymagics cirkulære forsyningskæde (Thierry et al. 1995)
- 11.4 Reverse logistics og de syv dødssynder (Green Supply Chain Management)
- 12.1 Faulkswagon: lokalisering af fabrikker med center-of-gravity
- 12.2 Faulkswagon: valg af DW-lokaliteter
- 12.3 Faulkswagon: transportomkostninger i forhold til produktionsomkostninger
- 12.4 Faulkswagon: refleksion over initialløsningen (sheet 1.10) og omkostningsreduktion

---

# 1.1 Zone of Strategic Fit (Figur 2-5) og implied uncertainty

> **Kernebudskab:** En virksomhed opnår *strategic fit*, når forsyningskædens **responsivitet** passer til den **implied uncertainty**, som kunderne og leverandørerne skaber. Jo mere usikkerhed kæden skal håndtere, jo mere responsiv skal den være. Er efterspørgslen forudsigelig, skal kæden i stedet fokusere på effektivitet.

**Tidsplan (15 min):** Åbning 0–2 · Implied uncertainty 2–6 · Responsivitetsspektret 6–9 · Figur 2-5 og zonen 9–13 · Eksempler og afrunding 13–15

## 1. Åbning: hvad er strategic fit? (ca. 2 min)
- **Competitive strategy** fastlægger, *hvilke kundebehov* virksomheden vil opfylde: pris, hastighed, variation og kvalitet.
- **Supply chain strategy** fastlægger, *hvordan* forsyningskæden opfylder dem: Skal den være effektiv eller responsiv?
- Strategic fit betyder, at de to strategier har **samme mål**. Ellers opstår der konflikter. Marketing lover måske hurtig levering af mange varianter, mens supply chain er bygget til lave omkostninger.
- Chopra og Meindl beskriver tre trin:
  1. Forstå kunden og usikkerheden i kæden.
  2. Forstå forsyningskædens evner.
  3. Opnå fit.

## 2. Trin 1: implied uncertainty (ca. 4 min)
- **Demand uncertainty** er usikkerheden i selve kundeefterspørgslen.
- **Implied demand uncertainty** er usikkerheden i *den del af efterspørgslen, som forsyningskæden skal opfylde, givet de kundebehov virksomheden har valgt at opfylde*.
  - Eksempel: Et firma lover levering samme dag og har hele sortimentet på lager. Et andet firma må bruge en uge. Den underliggende efterspørgsel er den samme, men det første firma møder større implied uncertainty.
- Følgende kundebehov **øger** implied uncertainty:
  - Større spredning i ordrestørrelse (store udsving)
  - Kortere responstid
  - Flere varianter (efterspørgslen spredes ud)
  - Flere salgskanaler
  - Hurtigere innovationstakt (nye produkter er svære at forudsige)
  - Højere service level
- **Supply uncertainty** tæller også med. Den kommer fra:
  - nedbrud
  - lavt udbytte (yield)
  - dårlig kvalitet
  - begrænset kapacitet
  - manglende fleksibel kapacitet
  - nye produktionsprocesser (tidligt i livscyklussen)
- Når implied uncertainty er **høj**, ser man typisk:
  - høj prognosefejl
  - høj risiko for stockouts og for overskudslager
  - store markdowns og høje marginer
- Spektret går fra *funktionelle produkter* som salt og benzin til *innovative produkter* som nye smartphones og mode.

## 3. Trin 2: responsivitetsspektret (ca. 3 min)
- **Responsivitet** er evnen til at:
  - reagere på store udsving i mængde
  - levere med kort lead time
  - håndtere mange varianter
  - bygge innovative produkter
  - give et højt service level
  - håndtere supply uncertainty
- **Effektivitet** er at levere til lave omkostninger.
- Der er et **trade-off**, fordi responsivitet koster penge.
- Spektret går fra **highly efficient**, fx et integreret stålværk med produktion i store batches, til **highly responsive**, fx 7-Eleven Japan, der skifter sortiment flere gange om dagen.

## 4. Trin 3: Figur 2-5 "Finding the Zone of Strategic Fit" (ca. 4 min)
**Tegn:**
- x-akse: "Implied uncertainty spectrum" fra *certain demand* til *uncertain demand*
- y-akse: "Responsiveness spectrum" fra *efficient* til *responsive*
- et diagonalt bånd fra nederst til venstre til øverst til højre. Det er **zonen af strategic fit**.

Gennemgå hjørnerne:
- **Nederst til venstre:** lav usikkerhed og effektiv kæde. Det er fit.
- **Øverst til højre:** høj usikkerhed og responsiv kæde. Det er også fit.
- **Øverst til venstre:** en responsiv kæde til forudsigelig efterspørgsel. Det giver unødigt høje omkostninger.
- **Nederst til højre:** en effektiv kæde til usikker efterspørgsel. Det giver stockouts, tabt salg og markdowns.

Pointer:
- **Det er ikke et mål i sig selv at være responsiv eller effektiv.** Målet er at *matche*. Walmart (effektiv) og Zara (responsiv) er begge succesfulde, fordi de ligger i zonen.
- Fit skal gælde **hele kæden og alle funktioner**: Produktudvikling, marketing, drift og økonomi skal arbejde mod samme mål.

## 5. Eksempler og afrunding (ca. 2 min)
- **Dell** solgte historisk build-to-order til kunder, der ville have tilpasning, og havde derfor en responsiv kæde. Da Dell senere solgte standard-PC'er gennem detailhandlen, skulle kæden være mere effektiv.
- Fit kan ændre sig over **produktets livscyklus**:
  - Tidligt: høj usikkerhed, høje marginer og tilgængelighed er vigtigst. Kæden skal være responsiv.
  - Modent produkt: lavere usikkerhed og prispres. Kæden skal være effektiv.
- **Afrunding:** Forstå først kunderne (implied uncertainty), forstå derefter kæden (responsivitet), og design så kæden, så punktet ligger i zonen.

## Typiske opfølgende spørgsmål
- **Hvad er forskellen på demand uncertainty og implied uncertainty?** Implied uncertainty afhænger af, *hvilken del* af efterspørgslen og hvilke kundekrav kæden skal opfylde. Strategien ændrer den, selv om markedet er det samme.
- **Kan en virksomhed have flere kæder?** Ja. *Tailored supply chains* bruges, når produkter eller kundesegmenter har forskellig usikkerhed. W.W. Grainger bruger fx lokale butikker til akutte køb og distributionscentre til planlagte køb.
- **Hvordan måler man implied uncertainty?** Med prognosefejl, variationskoefficient (σ/μ), andelen af markdowns og stockout-raten.
- **Hvordan hænger det sammen med Figur 2-6?** Implied uncertainty kan *fordeles* mellem leddene i kæden (se 1.2).

## Øv dig
- [ ] Tegn Figur 2-5 fra hukommelsen på 30 sekunder og forklar alle fire hjørner.
- [ ] Nævn 6 kundebehov og 5 kilder til supply uncertainty, der øger implied uncertainty.
- [ ] Giv ét eksempel på misfit i hvert af de to "forkerte" hjørner.

---

# 1.2 Fordeling af implied uncertainty (Figur 2-6)

> **Kernebudskab:** Strategic fit kræver ikke, at *alle* led i kæden er lige responsive. Den samlede implied uncertainty kan **fordeles** mellem leddene. Det led, der absorberer usikkerheden, skal være responsivt, så de andre led kan være effektive.

**Tidsplan (15 min):** Åbning og implied uncertainty 0–4 · Figur 2-6 med tre scenarier 4–10 · Eksempler 10–13 · Afrunding 13–15

## 1. Åbning: kort repetition af implied uncertainty (ca. 4 min)
- *Implied uncertainty* er usikkerheden i den del af efterspørgslen, som kæden skal opfylde, givet de kundebehov virksomheden har valgt at opfylde.
- Usikkerheden kommer fra to kilder:
  - **Kundekrav:** mængde, responstid, antal varianter, salgskanaler, innovation og service level.
  - **Supply uncertainty:** nedbrud, yield, kvalitet, kapacitet og nye processer.
- Fra Figur 2-5 ved vi: Jo højere implied uncertainty, jo mere responsiv skal kæden være.
- Spørgsmålet er så: **Hvem i kæden** skal være responsiv? Det handler Figur 2-6 om.

## 2. Figur 2-6 "Different Roles and Allocations of Implied Uncertainty for a Given Level of Responsiveness" (ca. 6 min)
**Tegn:** tre vandrette søjler, én pr. scenarie. Hver søjle er delt op i *Supplier – Manufacturer – Retailer*. Skravér det led, der er **responsivt**. De andre led er **effektive**. Kæden har samlet set samme responsivitet i alle tre scenarier.

- **Scenarie I: detailhandleren absorberer.** Detailhandleren holder et stort lager og tager usikkerheden. Producenten og leverandøren ser en jævn efterspørgsel og kan være **effektive**.
- **Scenarie II: producenten absorberer.** Detailhandleren holder lidt lager og sender usikkerheden videre. Producenten må være **fleksibel** med overskudskapacitet og hurtig omstilling. Leverandøren kan være effektiv.
- **Scenarie III: leverandøren absorberer.** Leverandøren holder komponentlager eller fleksibel kapacitet. Producenten kan køre effektivt med lean produktion.

Pointer:
- **Kunden oplever samme responsivitet**, selv om rollerne er fordelt forskelligt.
- Valget afhænger af, hvor det er **billigst** at absorbere usikkerheden:
  - Lager hos detailhandleren er dyrt, fordi det er spredt over mange butikker. Der er ingen aggregering.
  - Fleksibel kapacitet hos producenten kan være billigere, når der er mange varianter, fordi det kun sker ét sted (postponement).
- Usikkerhed kan absorberes på tre måder (**buffere**): med lager, med overskudskapacitet eller med tid (lead time).

## 3. Eksempler (ca. 3 min)
- **Dagligvarer, fx Netto:** Butikkerne har et lille lager og bliver genopfyldt dagligt fra et centrallager. Centrallageret absorberer usikkerheden og aggregerer den på tværs af butikkerne.
- **Mode, fx Zara:** Egne fabrikker i Spanien er responsive og producerer små serier hurtigt. Butikkerne holder lidt lager. Det svarer til scenarie II.
- **Dell build-to-order:** Producenten absorberer usikkerheden med hurtig samling. Komponentleverandørerne holder lager tæt på fabrikken i *vendor hubs*. Det er en blanding af scenarie II og III.
- **Bilindustrien:** Fabrikken kører jævnt og effektivt (JIT). Usikkerheden tages af forhandlerens lager eller af kundens ventetid.

## 4. Afrunding (ca. 2 min)
- Strategic fit skal ses for **hele kæden**, ikke for ét firma alene.
- Det led, der påtager sig usikkerheden, skal have *ressourcerne* til det: lager, kapacitet eller fleksibilitet. Det skal også *belønnes* for det, og det kræver koordinering og kontrakter (link til kap. 10).
- Hvis alle led forsøger at være effektive, går det galt. Resultatet bliver stockouts og bullwhip.

## Typiske opfølgende spørgsmål
- **Hvorfor ikke bare lade alle led være responsive?** Det er dyrt og overflødigt. Responsivitet ét sted i kæden kan give samme kundeservice.
- **Hvad har postponement med det at gøre?** Når differentieringen udskydes, skal kæden tidligt kun absorbere usikkerheden på aggregeret niveau, og det er lettere.
- **Hvilket led bør absorbere usikkerheden?** Det led, der kan gøre det billigst. Det er typisk dér, hvor der kan aggregeres, hvor der er fleksibel kapacitet, eller hvor lagerværdien er lav (fx komponenter).

## Øv dig
- [ ] Tegn de tre søjler og forklar dem på 2 minutter.
- [ ] Forklar, hvorfor *samme* responsivitet kan opnås på tre måder.
- [ ] Giv ét eksempel fra virkeligheden for hvert scenarie.

---

# 2.1 DuPont-modellen: fabrik i Kina i stedet for transport fra Europa

> **Kernebudskab:** ROA = **profit margin × asset turnover**. En fabrik i Kina sænker typisk COGS, så marginen stiger. Til gengæld øger den aktiverne (PP&E), og den ændrer både lager og transport. ROA stiger kun, hvis gevinsten på marginen er større end faldet i asset turnover.

**Tidsplan (15 min):** DuPont-modellen 0–5 · Forsyningskæden i modellen 5–8 · Kina-casen 8–13 · Afrunding 13–15

## 1. DuPont-modellen (ca. 5 min)
**Tegn:** et træ.

$$ROE = \frac{Net\ income}{Equity} = ROA \times Financial\ leverage$$
$$ROA = \frac{Net\ income}{Total\ assets} = \underbrace{\frac{Net\ income}{Sales}}_{profit\ margin} \times \underbrace{\frac{Sales}{Total\ assets}}_{asset\ turnover}$$

(Chopra & Meindl skriver tælleren som $EBIT\,(1-t)$, altså overskud før renter og efter skat. Uden gæld er det det samme som net income.)

- **Profit margin** kan brydes op i omkostningsandele:
  - COGS/Sales
  - SG&A/Sales
  - R&D/Sales
  - Supply chain-omkostninger som transport, lagerhold og faciliteter ligger både i COGS og SG&A.
- **Asset turnover** kan brydes op i:
  - Accounts receivable turnover (Sales/AR)
  - **Inventory turnover** (COGS/inventory)
  - **PP&E turnover** (Sales/PP&E)
- Chopra og Meindl bruger modellen i kap. 3, fordi den viser, at *supply chain påvirker begge faktorer*: omkostningerne (margin) og aktiverne (turnover).
- **Analogi:** ROA er renten på de penge, der er bundet i forretningen. Den kan øges på to måder: tjene mere pr. krones salg (margin) eller få mere salg ud af hver bundet krone (turnover).

## 2. Forsyningskæden i modellen (ca. 3 min)
| Driver | Påvirker |
|---|---|
| Facilities | PP&E (aktiver), produktionsomkostning (COGS) |
| Inventory | Lager (aktiver), lageromkostning (SG&A), salg (tilgængelighed) |
| Transportation | Transportomkostning (margin), pipeline-lager (aktiver) |
| Information, sourcing, pricing | Kan sænke omkostninger og lager på samme tid |

## 3. Casen: fabrik i Kina i stedet for transport fra Europa (ca. 5 min)
**Antagelse, sig den højt:** Virksomheden producerer i Europa og sender varerne til kunder i Asien. Den nye fabrik i Kina skal betjene det asiatiske marked. Hvis fabrikken i stedet skal levere tilbage til Europa, vender flere af effekterne. Se afrundingen.

**Effekter på marginen (Net income/Sales):**
- **Positive:**
  - Lavere **lønninger** og evt. lavere materialepriser i Kina, altså lavere COGS.
  - **Mindre transport** til de asiatiske kunder, fordi fabrikken ligger tæt på markedet. Kortere lead time giver også mindre pipeline-lager.
  - Mulige **skattefordele** og lavere told, fordi der ikke længere importeres fra EU. Skatteprocenten $t$ falder.
- **Negative:**
  - Opstartsomkostninger, kvalitetskontrol og koordinering/ledelse på afstand.
  - Valutarisiko (CNY/EUR) og politisk risiko.

**Effekter på asset turnover (Sales/Total assets):**
- **Negative:**
  - **En ny fabrik øger PP&E.** Total assets stiger, og PP&E turnover falder. Det er den største negative effekt. Den kan modvirkes, hvis den europæiske fabrik lukkes og sælges.
- **Positive:**
  - **Mindre pipeline-lager.** Varer, der sejler 4–6 uger fra Europa til Asien, binder kapital. Lokal produktion giver højere inventory turnover.
  - Mindre safety stock, fordi kortere lead time giver lavere $\sigma_L = \sqrt{L}\,\sigma_D$.
  - Salget kan stige på grund af kortere leveringstid og lokal tilstedeværelse.

**Talillustration (kan regnes i appens beregner):**
- **Før:** Sales 1000, COGS 600, SG&A inkl. transport 250, skat 25 %, assets 800.
  - Net income = (1000 − 600 − 250) × 0,75 = 112,5
  - Margin = 11,25 %, turnover = 1000/800 = 1,25
  - **ROA = 14,1 %**
- **Efter:** COGS falder til 520 (−80), transporten falder med 30, så SG&A = 220. PP&E stiger med 150, og lageret falder med 40. Assets = 910.
  - Net income = (1000 − 520 − 220) × 0,75 = 195
  - **ROA = 195/910 = 21,4 %**
- **Hvis lønbesparelsen kun er 20** (COGS = 580), bliver net income = 150 og **ROA = 16,5 %**. ROA stiger stadig, men langt mindre. Bliver besparelsen endnu mindre, eller kommer der ekstra omkostninger (kvalitet, ledelse), kan ROA falde, fordi aktiverne vokser mere end overskuddet. Prøv selv i appen.

## 4. Afrunding (ca. 2 min)
- DuPont gør beslutningen **kvantitativ**: Kan omkostningsgevinsten (margin) bære investeringen (assets)?
- Supply chain-beslutninger påvirker begge sider. Se derfor altid på *både* omkostninger og bundet kapital.
- Skal fabrikken i Kina *også* levere til Europa, sker det modsatte for de europæiske kunder: Pipeline-lager, safety stock og transport stiger. Det er en vigtig betingelse, som skal nævnes.

## Typiske opfølgende spørgsmål
- **Hvorfor se på ROA og ikke kun på omkostninger?** En investering kan sænke omkostningerne og alligevel binde så meget kapital, at afkastet falder.
- **Hvad er inventory turnover?** COGS divideret med gennemsnitligt lager. Høj turnover betyder, at der er bundet lidt kapital i lager.
- **Hvordan undgår man stigningen i PP&E?** Ved at outsource til en kinesisk kontraktproducent, fx Foxconn. Så falder aktiverne, men man mister noget kontrol.
- **Hvad er cash-to-cash cycle?** Lagerdage + debitordage (AR days) − kreditordage (AP days). Lokal produktion kan forkorte den.

## Øv dig
- [ ] Tegn DuPont-træet fra hukommelsen.
- [ ] Nævn mindst 3 positive og 3 negative effekter, både for marginen og for turnover.
- [ ] Regn talillustrationen igennem i appen og varier lønbesparelsen.

---

# 2.2 DuPont-modellen: dobbelt så meget safety inventory

> **Kernebudskab:** Når safety inventory fordobles, stiger **aktiverne**, så asset turnover falder. Samtidig stiger **lageromkostningerne**, så marginen falder. Til gengæld kommer der **færre stockouts**, altså mere salg og færre klager, og det trækker margin og turnover op igen. ROA stiger kun, hvis det ekstra salg og den sparede goodwill er større end omkostningen.

**Tidsplan (15 min):** DuPont-modellen 0–5 · Safety inventory og service 5–8 · Effekter på ROA 8–13 · Afrunding 13–15

## 1. DuPont-modellen (ca. 5 min)
$$ROA = \frac{Net\ income}{Sales}\times\frac{Sales}{Total\ assets}$$
- ROE = ROA × financial leverage.
- Marginen kan brydes op i COGS/Sales, SG&A/Sales osv.
- Turnover kan brydes op i inventory turnover, AR turnover og PP&E turnover.
- Supply chain påvirker begge led. Lager er et **aktiv** i balancen, og lageromkostninger er en **omkostning** i resultatopgørelsen.

## 2. Safety inventory og service (ca. 3 min)
- Safety inventory: $ss = F_S^{-1}(CSL)\cdot\sigma_L$, hvor $\sigma_L=\sqrt{L}\,\sigma_D$ (kap. 12).
- **Dobbelt ss giver ikke dobbelt service.** Udbyttet er **aftagende**:
  - Eksempel: z går fra 1,28 (CSL 90 %) til 2,56 (CSL ≈ 99,5 %).
  - Det første ekstra lager hjælper meget. Hver ny enhed hjælper mindre end den forrige.
- Gennemsnitligt lager = $Q/2 + ss$. Når ss fordobles, stiger lageret altså med ss, ikke med det dobbelte af hele lageret.

## 3. Effekter på ROA (ca. 5 min)
**Margin (NI/Sales):**
- **Negative:**
  - **Holding cost** = h × C × den ekstra ss. Den dækker kapitalomkostning, opbevaring, forsikring og ukurans (obsolescence).
  - Større risiko for nedskrivninger på ukurante varer, især når produkterne har kort levetid.
- **Positive:**
  - **Færre stockouts.** Fill rate stiger, så mindre salg går tabt.
  - **Færre klager.** Lavere omkostninger til kundeservice, hasteordrer og ekspresfragt. Bedre goodwill giver mere salg fremover.

**Asset turnover (Sales/Total assets):**
- **Negative:** **Lageret stiger.** Total assets stiger, og inventory turnover (COGS/inventory) falder.
- **Positive:** Salget stiger lidt, og det øger tælleren.

**Talillustration:**
- **Udgangspunkt:** Sales 1000, NI 100, assets 800, heraf lager 200 og safety stock 80. ROA = 12,5 %.
- **Fordoblet ss:** Lageret stiger med 80, så assets = 880. Holding cost er 25 % × 80 = 20.
  - Salget stiger 3 % og giver fx 12 i ekstra bidrag: NI = 100 − 20 + 12 = 92, og **ROA = 10,5 %**. ROA falder.
  - Salget stiger 8 % og giver 32 i ekstra bidrag: NI = 112, og ROA = 12,7 %. ROA stiger lidt.
- Svaret afhænger altså af **data**: Hvor meget salg koster en stockout reelt?

## 4. Alternativer og afrunding (ca. 2 min)
I stedet for at fordoble lageret *overalt* kan man sænke behovet for ss:
- Bedre prognoser, så $\sigma_D$ falder.
- Kortere lead time, så $L$ falder.
- **Aggregering** ved at centralisere lageret. Den samlede σ vokser kun med $\sqrt{n}$, ikke med $n$ (square-root law).
- **Differentieret service** (ABC-analyse): høj CSL på A-varer med stort salg og høj margin, lav CSL på C-varer.

Hovedpointe: DuPont viser trade-off'et mellem **responsivitet** (tilgængelighed) og **effektivitet** (bundet kapital).

## Typiske opfølgende spørgsmål
- **Hvorfor giver dobbelt ss ikke dobbelt service?** Normalfordelingens hale bliver tyndere. Hver ekstra standardafvigelse dækker en mindre sandsynlighed.
- **Hvad er forskellen på CSL og fill rate?** CSL er sandsynligheden for ingen stockout i en cyklus. Fill rate er andelen af efterspørgslen, der leveres fra lager (se 7.2).
- **Hvad er bedst for en dagligvarekæde?** Typisk en høj fill rate på basisvarer, fordi kunderne ellers skifter butik. Det afhænger af, hvad en stockout koster.

## Øv dig
- [ ] Forklar ROA-træet og placér "safety inventory" to steder i det.
- [ ] Forklar aftagende udbytte ved hjælp af z-værdier.
- [ ] Nævn 3 alternativer til at fordoble lageret.

---

# 2.3 Supply Chain Decision-Making Framework (Figur 3-1)

> **Kernebudskab:** Virksomhedens **competitive strategy** bestemmer **supply chain strategy**, altså balancen mellem effektivitet og responsivitet. Strategien realiseres gennem **seks drivers**: tre logistiske (facilities, inventory, transportation) og tre tværfunktionelle (information, sourcing, pricing).

**Tidsplan (15 min):** Figuren 0–3 · Logistiske drivers 3–9 · Tværfunktionelle drivers 9–13 · Afrunding 13–15

## 1. Figuren (ca. 3 min)
**Tegn oppefra og ned:**
```
Competitive strategy  →  Supply chain strategy
                            (efficiency ↔ responsiveness)
                                    ↓
                        Supply chain structure
   Logistical drivers:    Facilities · Inventory · Transportation
   Cross-functional:      Information · Sourcing · Pricing
```
- Strategien sætter målet. Strukturen og de seks drivers er de "knapper", ledelsen kan dreje på.
- Hver driver kan indstilles mod **effektivitet eller mod responsivitet**. Tilsammen skal de give strategic fit (link til kap. 2).

## 2. Logistiske drivers (ca. 6 min)
**Facilities** – hvor der produceres og lagres.
- **Beslutninger:**
  - Rolle: fleksibel eller dedikeret, produkt- eller markedsfokuseret.
  - Placering: centraliseret eller decentraliseret.
  - Kapacitet.
  - Lagermetode: SKU-lager, job lot-lager eller cross-docking.
- **Responsiv:** mange faciliteter tæt på kunden og ledig kapacitet. **Effektiv:** få store faciliteter med høj udnyttelse.
- **Metrics:** kapacitet, udnyttelse, produktionens cykeltid, theoretical flow time, product variety, setup time og downtime.

**Inventory** – råvarer, varer i arbejde (WIP) og færdigvarer.
- **Lagertyper:** *cycle inventory* (pga. ordrestørrelser), *safety inventory* (pga. usikkerhed) og *seasonal inventory* (pga. sæson).
- **Beslutning:** hvor stor *level of product availability* skal være.
- **Little's law:** $I = D \times T$, dvs. lager = flowrate × flow time.
- **Metrics:** cash-to-cash cycle time, gennemsnitligt lager, inventory turns, produkter med mere end X dages lager, fill rate, andel af tiden udsolgt og ukurant lager.

**Transportation**
- **Beslutninger:**
  - Netværksdesign: direkte levering, via DC eller milk runs.
  - Transportform: fly, lastbil (TL/LTL), tog, skib, intermodal eller pipeline.
  - Egen transport eller outsourcing.
- **Responsiv:** hurtig transportform og små forsendelser. **Effektiv:** langsom transportform og store forsendelser.
- **Metrics:** inbound- og outbound-omkostning, gennemsnitlig forsendelsesstørrelse og andel transporteret pr. transportform.

## 3. Tværfunktionelle drivers (ca. 4 min)
**Information** – limen, der binder de andre drivers sammen.
- **Beslutninger:**
  - push eller pull
  - koordinering og informationsdeling
  - prognoser og aggregeret planlægning
  - pricing og revenue management
- **Teknologi:** EDI, ERP og RFID.
- Mere og bedre information kan sænke både lager og omkostninger.
- **Metrics:** prognosehorisont, opdateringsfrekvens, prognosefejl og sæsonfaktorer.

**Sourcing** – hvem der udfører en aktivitet.
- **Beslutninger:** in-house eller outsourcing, valg af leverandør og indkøb (procurement).
- **Metrics:** days payable outstanding, gennemsnitlig indkøbspris, leveringskvalitet, leverandørens lead time og andel leveringer til tiden.

**Pricing** – hvad kunden betaler.
- **Beslutninger:**
  - pris og stordriftsfordele (fx mængderabatter)
  - everyday low pricing (EDLP) eller high-low
  - fast pris eller menu pricing
- Pricing påvirker *efterspørgslens mønster*. EDLP giver jævn efterspørgsel og dermed en mere effektiv kæde.
- **Metrics:** profit margin, days sales outstanding, gennemsnitlig salgspris og spændet i salgspriser.

## 4. Afrunding (ca. 2 min)
- Framework'et er en struktur til at **oversætte strategi til konkrete beslutninger**.
- **Eksempel – Walmart med strategien "lav pris":**
  - Facilities: store DC'er og cross-docking.
  - Inventory: lavt.
  - Transportation: egen flåde med fuld udnyttelse.
  - Information: Retail Link, hvor POS-data deles med leverandørerne.
  - Sourcing: stærk forhandlingsposition.
  - Pricing: EDLP.
- Hver beslutning er et trade-off mellem effektivitet og responsivitet. Alle drivers skal trække i **samme retning**.

## Typiske opfølgende spørgsmål
- **Hvorfor er information en tværfunktionel driver?** Den påvirker alle de andre drivers og kan forbedre både effektivitet og responsivitet på én gang.
- **Giv et eksempel på en driver, der bruges til responsivitet.** Amazon Prime: mange fulfilment centers tæt på kunderne og hurtig transport.
- **Hvordan hænger det sammen med DuPont?** Facilities og inventory ligger i aktiverne. Transport, sourcing og pricing påvirker marginen.

## Øv dig
- [ ] Tegn figuren og nævn alle seks drivers på 30 sekunder.
- [ ] For hver driver: nævn én beslutning, én metric og ét effektivt valg over for ét responsivt valg.
- [ ] Gennemgå én virksomhed (Walmart, Zara eller Amazon) med alle seks drivers.

---

# 3.1 Manufacturer Storage with Direct Shipping vs. Distributor Storage with Last-Mile Delivery

> **Kernebudskab:** De to designs ligger i hver sin ende af spektret.
> - **Manufacturer storage with direct shipping** (drop-shipping): lageret er centraliseret hos producenten, og varen sendes direkte til kunden med pakkefirma. Det giver lave lageromkostninger, men lang responstid og høj transportomkostning pr. enhed.
> - **Distributor storage with last-mile delivery:** lageret ligger hos en distributør tæt på kunden, og distributøren leverer selv helt hjem. Det giver hurtig levering og god kundeoplevelse, men højt lager og høje omkostninger til den sidste del af leveringen.

**Tidsplan (15 min):** Ramme 0–2 · Design 1 2–6 · Design 2 6–10 · Sammenligning 10–13 · Hvornår bruges hvad 13–15

## 1. Rammen (ca. 2 min)
- Kap. 4 beskriver **seks designmuligheder** for distributionsnetværk:
  1. Manufacturer storage with direct shipping
  2. ... with in-transit merge
  3. Distributor storage with carrier delivery
  4. Distributor storage with last-mile delivery
  5. Manufacturer/distributor storage with customer pickup
  6. Retail storage with customer pickup
- Designs vurderes på **kundeservice** og **omkostninger**:
  - Kundeservice: response time, product variety, product availability, customer experience, time to market, order visibility og returnability.
  - Omkostninger: inventory, transportation, facilities & handling og information.
- Valget kommer fra to beslutninger: *Skal varen leveres eller hentes?* og *Ligger lageret hos producent, distributør eller detail?*

## 2. Manufacturer storage with direct shipping (ca. 4 min)
**Tegn:** fabrik(ker) med lager → pile direkte til kunder. Informationen går fra kunden via detailhandleren til producenten. Varen går direkte fra producent til kunde.
- Detailhandleren tager ordren, men holder **intet lager**. Kaldes også *drop-shipping*. Eksempler: Dell (historisk), web-butikker der drop-shipper, og fx møbler.
- **Lager:** lavt, fordi det er **aggregeret ét sted** hos producenten. Fordelen er størst for varer med **lav efterspørgsel og høj værdi** og stor usikkerhed. Producenten kan også udskyde tilpasningen (**postponement**), fx build-to-order.
- **Transport:** høj omkostning pr. enhed, fordi hver ordre sendes som en lille pakke over lang afstand. Bestiller kunden flere varer fra forskellige producenter, kommer der flere pakker.
- **Faciliteter og håndtering:** lave, fordi der er få lagre. Men producenten skal kunne håndtere enkeltpakker og ikke kun paller.
- **Information:** kræver stærk informationsinfrastruktur mellem detail og producent.
- **Service:**
  - Responstid: lang (1–2 uger, mere ved stor afstand).
  - Product variety: meget stor.
  - Product availability: høj, takket være aggregering.
  - Customer experience: god (levering hjemme).
  - Time to market: hurtig, fordi produktet kan sælges, så snart det er produceret.
  - Order visibility: vanskelig, men vigtig.
  - Returns: dyre og vanskelige.

## 3. Distributor storage with last-mile delivery (ca. 4 min)
**Tegn:** fabrikker → distributør-/detaillagre tæt på kunderne → egne biler, der leverer til kundens dør.
- Distributøren eller detailhandleren leverer selv **helt til kunden** i stedet for at bruge et pakkefirma. Eksempler: Nemlig.com, Peapod, Amazon Fresh og dagligvarelevering.
- **Lager:** højere end ved design 1, fordi lageret ligger **tæt på kunden** i mange lokale lagre med mindre aggregering.
- **Transport:** **meget høj**. Last-mile-levering til private kunder er dyr, fordi der er små ordrer, kort tid hos hver kunde og mange stop. Tætbefolkede områder og store ordrer gør det billigere.
- **Faciliteter og håndtering:** høje, fordi der er mange lagre, og plukningen er på kundeniveau.
- **Service:**
  - Responstid: meget hurtig (samme dag eller næste dag).
  - Product variety: lavere end ved design 1.
  - Product availability: dyrere at sikre, fordi lageret er spredt.
  - Customer experience: meget god, kunden får varen til døren.
  - Order visibility: lettere.
  - Returns: lettere end ved design 1.
- Passer til **varer med høj efterspørgsel og hurtig omsætning**, og når kunderne vil betale for bekvemmelighed (fx tunge dagligvarer).

## 4. Sammenligning (ca. 3 min)
| | Manufacturer + direct shipping | Distributor + last mile |
|---|---|---|
| Response time | Lang | Meget kort |
| Product variety | Meget høj | Mindre |
| Inventory cost | Lav (aggregeret) | Høj |
| Transport cost | Høj pr. enhed | Meget høj (last mile) |
| Facility cost | Lav | Meget høj |
| Customer experience | God | Meget god |
| Returnability | Svær | Lettere |
| Egnet til | Lav efterspørgsel, høj værdi, mange varianter | Høj efterspørgsel, hurtig levering vigtig |

## 5. Afrunding (ca. 2 min)
- Valget afhænger af **produktets karakteristik** (værdi, efterspørgsel, varianter) og **kundens krav** (hastighed, bekvemmelighed).
- Mange virksomheder bruger **hybrider**. Amazon har fx lager i egne fulfilment centers til varer med høj omsætning og drop-shipper varer med lav omsætning fra producenten.
- Link til 3.3: Antallet af faciliteter driver trade-off'et mellem lager og transport.

## Typiske opfølgende spørgsmål
- **Hvorfor er lageret lavere ved direct shipping?** Aggregering: Usikkerheden på tværs af alle kunder udligner hinanden, så det samlede safety stock vokser som $\sqrt{n}$ og ikke som $n$.
- **Hvad er in-transit merge?** Pakker fra flere producenter samles hos transportøren tæt på kunden, så kunden modtager én samlet levering.
- **Hvornår bliver last mile billigere?** Ved høj befolkningstæthed, store ordrer og ruteoptimering.

## Øv dig
- [ ] Tegn begge netværk med vare- og informationsflow.
- [ ] Udfyld sammenligningstabellen fra hukommelsen.
- [ ] Giv to virksomhedseksempler på hvert design.

---

# 3.2 Valg af det rette distributionsnetværk

> **Kernebudskab:** Der findes ikke ét bedste netværk. Valget afhænger af **produktets karakteristika** og af **kundernes behov**. Hvert design vurderes på kundeservice-faktorer og omkostningsfaktorer, og designet skal passe til virksomhedens strategi (strategic fit). Ofte er et **hybridnetværk** det bedste.

**Tidsplan (15 min):** To grundvalg 0–3 · De seks designs kort 3–8 · Performance-tabellen 8–12 · Produkt- og kundematrix og hybrider 12–15

## 1. To grundvalg (ca. 3 min)
- **Delivered or picked up?** Skal varen leveres til kunden, eller skal kunden hente den?
- **Hvor holdes lageret?** Hos producenten, hos distributøren eller i detailbutikken (eller hos en mellemmand)?
- De to valg giver de seks designs fra Chopra og Meindl.

## 2. De seks designs (ca. 5 min)
1. **Manufacturer storage with direct shipping** (drop-shipping): centraliseret lager, langsom levering og dyr transport pr. enhed.
2. **Manufacturer storage with direct shipping and in-transit merge:** som 1, men transportøren samler leverancer fra flere kilder (fx en PC og en skærm) til én levering. Det kræver avanceret IT.
3. **Distributor storage with carrier delivery:** distributøren eller detailhandleren har lager i lagre og sender med pakkefirma (fx Amazon og W.W. Grainger). Lageret ligger tættere på kunden, så leveringen er hurtigere. Transportomkostningen er lavere end ved 1, men lageret er større.
4. **Distributor storage with last-mile delivery:** distributøren leverer selv til døren (dagligvarelevering). Det er meget hurtigt, men dyrt.
5. **Manufacturer/distributor storage with customer pickup:** kunden henter i et afhentningssted (fx 7-Eleven Japan, pakkeshops og click-and-collect). Transporten er billig, fordi den kan samles. Afhentningsstederne koster i håndtering.
6. **Retail storage with customer pickup:** den klassiske butik. Lageret er lokalt, levering er øjeblikkelig, men lageret er højt.

## 3. Performance-tabellen (ca. 4 min)
Gengiv de vigtigste rækker (1 = bedst, 6 = dårligst, cirka som Chopra og Meindls tabel):

| Faktor | Retail | Mfg direct | Mfg + merge | Dist carrier | Dist last mile | Pickup |
|---|---|---|---|---|---|---|
| Response time | 1 | 4 | 4 | 3 | 2 | 4 |
| Product variety | 4 | 1 | 1 | 2 | 3 | 1 |
| Product availability | 4 | 1 | 1 | 2 | 3 | 1 |
| Customer experience | 1–5 | 4 | 3 | 2 | 1 | 5 |
| Inventory | 4 | 1 | 1 | 2 | 3 | 1 |
| Transportation | 1 | 4 | 3 | 2 | 5 | 1 |
| Facility & handling | 6 | 1 | 2 | 3 | 4 | 5 |
| Information | 1 | 4 | 4 | 3 | 2 | 5 |

*(Tallene er gengivet ud fra hukommelsen. Tjek dem mod tabellen i din bog.)*
- Mønster: Jo **tættere lageret er på kunden**, jo hurtigere er leveringen, men lager- og facilitetsomkostningerne stiger. Jo mere **centraliseret** lageret er, jo større variation og lavere lager, men dyrere transport og langsommere levering.

## 4. Matrix for produkt og kunde, og hybrider (ca. 3 min)
Chopra og Meindl har en tabel, der viser, hvilke designs passer til hvilke produkt- og kundetyper:
- **Høj efterspørgsel, standardvare** (fx mælk): retail storage er bedst. Last mile kan bruges, hvis kunderne vil betale.
- **Lav efterspørgsel, høj værdi, mange varianter** (fx specialkomponenter, avancerede PC'er): manufacturer storage med direct shipping og evt. in-transit merge.
- **Mellemvarer:** distributor storage med carrier delivery.
- **Kunden vil gerne betale for hurtighed:** last mile. **Priskunden:** customer pickup.
- **Hybrider:**
  - Varer med høj omsætning lagerføres tæt på kunden.
  - Varer med lav omsætning lagerføres centralt eller drop-shippes.
  - Eksempler: Amazon, Grainger og IKEA (butik og online med levering).

## 5. Afrunding
- Fremgangsmåde:
  1. Segmentér produkter og kunder.
  2. Vurdér hvert design på service og omkostninger.
  3. Vælg det design, der giver strategic fit for det segment.
  4. Saml det hele i et hybridnetværk.
- Netværket bør revideres, når produktet bevæger sig gennem livscyklussen, eller når kundernes forventninger ændrer sig (fx e-handel).

## Typiske opfølgende spørgsmål
- **Hvorfor vælger Amazon et hybridnetværk?** Bestsellere ligger i mange FC'er tæt på kunden, så de kan leveres hurtigt. Long-tail-varer ligger centralt eller hos leverandøren, fordi det sparer lager.
- **Hvad betyder product availability her?** Sandsynligheden for, at varen er på lager. Den er lettere at sikre, når lageret er aggregeret.
- **Hvorfor er customer pickup billigt i transport?** Varerne transporteres samlet til et afhentningssted, og kunden står selv for den sidste del af turen.

## Øv dig
- [ ] Nævn de seks designs og de to grundvalg.
- [ ] Forklar mønstret "tæt på kunden vs. centraliseret" uden tabellen.
- [ ] Vælg et design til: IKEA-sofa, mælk, reservedel til flymotor og bog.

---

# 3.3 Antal faciliteter: responstid, lageromkostninger og transportomkostninger

> **Kernebudskab:** Flere faciliteter giver **kortere responstid**, men **højere lageromkostninger** (mindre aggregering) og **højere facility costs**. Transportomkostningen falder først, fordi outbound-turen til kunden bliver kortere, men stiger igen, når inbound-forsendelserne bliver for små. Den **samlede logistikomkostning er U-formet**, og det optimale antal faciliteter ligger i bunden af U'et, givet det ønskede service level.

**Tidsplan (15 min):** Ramme 0–2 · Responstid 2–4 · Lager 4–8 · Transport 8–11 · Facility og total 11–13 · Afrunding 13–15

## 1. Ramme (ca. 2 min)
- Hvor mange faciliteter skal virksomheden have, og hvor? Det er en af de vigtigste netværksbeslutninger (kap. 4).
- **Tegn to figurer:**
  - (a) Responstid som funktion af antal faciliteter.
  - (b) Omkostninger som funktion af antal faciliteter med kurverne inventory, transportation, facilities og total.

## 2. Responstid (ca. 2 min)
- Flere faciliteter betyder, at kunden er tættere på et lager, så **responstiden falder**.
- Effekten er **aftagende**. Fra 1 til 5 lagre er gevinsten stor. Fra 50 til 55 er den lille.
- Eksempel: Amazon har mange fulfilment centers for at kunne levere samme dag.

## 3. Lageromkostninger (ca. 4 min)
- Flere faciliteter betyder, at lageret splittes op, og **lageret stiger**.
- Årsagen er tabt **aggregering** (risk pooling). Safety stock afhænger af $\sigma$, og når efterspørgslen er uafhængig, gælder:
$$\sigma_{samlet} = \sqrt{n}\,\sigma_{\text{pr. område}}$$
  Ét centralt lager kræver altså mindre total safety stock end $n$ decentrale.
- **Square-root law:** Samlet safety inventory ∝ $\sqrt{n}$. Går man fra 1 til 4 lagre, fordobles safety stock.
- Cycle inventory påvirkes også, fordi der er flere lagre, der hver bestiller sine egne lots.
- Lageret stiger altså, men med **aftagende hastighed**.

## 4. Transportomkostninger (ca. 3 min)
- Del transporten op i to:
  - **Inbound** (fra producent til lager): Typisk store forsendelser (TL), billige pr. enhed. Flere lagre betyder **mindre forsendelser pr. lager**, så inbound-omkostningen *stiger*.
  - **Outbound** (fra lager til kunde): Typisk små forsendelser (LTL eller pakker), dyre pr. enhed og km. Flere lagre betyder **kortere afstand** til kunden, så outbound-omkostningen *falder*.
- Så længe outbound falder mere end inbound stiger, er det en fordel med flere lagre. Når **inbound-forsendelserne bliver så små, at stordriftsfordelene forsvinder**, begynder den samlede transportomkostning at stige.
- Derfor er transportkurven også **U-formet** (eller faldende og derefter flad/stigende).

## 5. Facility costs og den samlede kurve (ca. 2 min)
- **Facility costs** (husleje, drift, personale) stiger med antallet af faciliteter, omtrent lineært.
- **Total logistics cost = inventory + transportation + facility.** Den er U-formet.
- **Det optimale antal faciliteter** minimerer de samlede omkostninger. Alternativt vælger man det *mindste antal, der opfylder kravet til responstid*. Kræver kunderne meget kort responstid, må virksomheden vælge flere faciliteter, end omkostningsminimum tilsiger.
- **Tegn:** U-kurven og markér minimum.

## 6. Afrunding (ca. 2 min)
- Trade-off'et er **responsivitet over for effektivitet** (link til strategic fit).
- Hvis kunderne kræver kort responstid, ender man til højre for minimum. Ellers vælger man minimum.
- **Hybrider** kan bryde trade-off'et:
  - Varer med høj omsætning holdes lokalt, varer med lav omsætning centralt.
  - Lokale *cross-docks* uden lager giver korte ture uden at splitte lageret op.

## Typiske opfølgende spørgsmål
- **Hvorfor stiger lageret ikke lineært?** Square-root law. Hvert nyt lager tilføjer mindre usikkerhed end det forrige, så kurven flader ud.
- **Hvornår er centralisering mindst værdifuld?** Når efterspørgslen i områderne er **positivt korreleret**, når variationskoefficienten er lav, eller når produktværdien er lav.
- **Hvad er forskellen på inbound og outbound?** Inbound er transporten ind i lagrene (store forsendelser). Outbound er transporten ud til kunderne (små forsendelser, ofte dyrere pr. enhed).

## Øv dig
- [ ] Tegn de to figurer og forklar hver kurve på 1 minut.
- [ ] Forklar square-root law med et taleksempel: 1 lager med ss 100 → 4 lagre har ss 200.
- [ ] Brug appens graf: flyt antallet af faciliteter og forklar, hvad der sker med hver kurve.

---

# 4.1 Figur 5-2: Framework for Network Design Decisions

> **Kernebudskab:** Netværksdesign besluttes i **fire faser**, fra det overordnede til det konkrete:
> 1. Definér supply chain-strategien og -strukturen.
> 2. Definér den regionale facilitetskonfiguration.
> 3. Vælg ønskværdige potentielle lokaliteter.
> 4. Vælg de endelige lokaliteter.
>
> Hver fase har sine egne inputs: strategi, risici, omkostninger og infrastruktur.

**Tidsplan (15 min):** Hvorfor netværksdesign er vigtigt 0–2 · Fase I 2–5 · Fase II 5–9 · Fase III 9–11 · Fase IV 11–13 · Afrunding 13–15

## 1. Hvorfor er netværksdesign vigtigt? (ca. 2 min)
- Beslutninger om faciliteter handler om **rolle, placering, kapacitet og markedsallokering**. De er langsigtede og dyre at ændre, fx en fabrik med 20–30 års levetid.
- De bestemmer omkostningsniveau og responsivitet i mange år og er derfor en *strategisk* beslutning.
- **Tegn figuren:** fire kasser oppefra og ned med inputs på siderne.

## 2. Fase I: Define a Supply Chain Strategy/Design (ca. 3 min)
- **Mål:** Hvilken konfiguration skal netværket overordnet have? Hvor mange stadier, og skal hvert stadie være in-house eller outsourcet?
- **Inputs:**
  - *Competitive strategy*: lav pris eller responsivitet?
  - *Internal constraints*: kapital, vækststrategi, eksisterende netværk.
  - *Production technologies*: omkostninger, stordriftsfordele, behov for support.
  - *Global competition*: konkurrenternes strategi og lokalisering.
- **Eksempel:** Skal virksomheden have få store fabrikker eller mange lokale, og skal produktionen være i egen regi eller hos kontraktproducenter?

## 3. Fase II: Define the Regional Facility Configuration (ca. 4 min)
- **Mål:** Vælg **regioner** for faciliteterne, deres omtrentlige rolle og kapacitet.
- **Inputs:**
  - *Regional demand*: størrelse, vækst, homogenitet, lokale krav.
  - *Tariffs and tax incentives* (told og skatteincitamenter).
  - *Political, exchange rate and demand risk* (politisk risiko, valutarisiko og efterspørgselsrisiko).
  - *Competitive environment* (konkurrencesituationen).
  - *Production technology*: stordriftsfordele og omkostninger, der afgør, om produktionen skal være central eller lokal.
- **Værktøj:** Prognose for efterspørgslen pr. region og en optimeringsmodel (se 4.4, Capacitated Plant Location).

## 4. Fase III: Select a Set of Desirable Potential Sites (ca. 2 min)
- **Mål:** Inden for hver valgt region udpeges et **antal mulige lokaliteter**.
- **Inputs:**
  - *Hard infrastructure*: leverandører, transport (havne, motorveje, lufthavne), kommunikation, forsyning og lagerfaciliteter.
  - *Soft infrastructure*: kvalificeret arbejdskraft, arbejdsstyrkens omsætning (turnover) og lokalsamfundets holdning til virksomheden.
- **Værktøj:** Factor rating (5.2) og gravity model (4.2).

## 5. Fase IV: Location Choices (ca. 2 min)
- **Mål:** Vælg den **præcise lokalitet** og kapacitetsallokering for hver facilitet.
- **Inputs:**
  - *Production methods*: kvalitet, behov.
  - *Factor costs*: løn, materialer, husleje.
  - *Logistics costs*: transport, lager, koordinering.
- **Værktøj:** Optimeringsmodeller (capacitated plant location), locational break-even (5.1) og center of gravity (5.3).

## 6. Afrunding (ca. 2 min)
- Fremgangsmåden er en **tragt**: strategi → region → potentielle lokaliteter → konkret lokalitet.
- Modellerne fra kapitel 5 hører til hver sin fase:
  - Gravity model: til at finde et område (fase III).
  - Capacitated plant location: til regioner og lokaliteter (fase II og IV).
- Usikkerhed om valuta, efterspørgsel og politik bør inddrages via scenarier og fleksibilitet (kap. 6).

## Typiske opfølgende spørgsmål
- **Hvorfor ikke bare vælge den billigste lokalitet?** Beslutningen skal passe til strategien. Responsivitet, risiko og infrastruktur kan veje tungere end lave omkostninger.
- **Hvilke modeller bruges i hvilken fase?** Se ovenfor: CPL i fase II/IV, gravity og factor rating i fase III, break-even og center of gravity i fase IV.
- **Hvad er forskellen på hard og soft infrastructure?** Hard er fysiske ting som vej, havn og strøm. Soft er mennesker og samfund: arbejdskraft, kompetencer og lokalsamfundets holdning.

## Øv dig
- [ ] Tegn de fire faser med mindst tre inputs til hver.
- [ ] Giv et eksempel, der følger en virksomhed gennem alle fire faser (fx en bilfabrik til Europa).
- [ ] Placér modellerne gravity, CPL, factor rating og break-even i faserne.

---

# 4.2 Gravity Location Model (formel 5.5 og 5.6 i 7. udgave, 5.4 og 5.5 i 6. udgave)

> **Kernebudskab:** Gravity-modellen finder den placering af én facilitet, der minimerer **summen af afstand × mængde × transportrate** til alle leverandører og markeder. Optimum findes **iterativt**, fordi afstanden selv afhænger af placeringen.

**Tidsplan (15 min):** Formål og antagelser 0–3 · Formel 5.5 3–6 · Formel 5.6 og iteration 6–10 · Eksempel 10–13 · Begrænsninger 13–15

## 1. Formål og antagelser (ca. 3 min)
- Bruges i **fase III** af netværksdesign (Figur 5-2) til at finde et *geografisk område*, hvor faciliteten bør placeres.
- **Antagelser:**
  - Markeder og leverandører er punkter med koordinater $(x_n, y_n)$.
  - Transportomkostningen stiger **lineært med afstanden** og mængden.
  - Afstanden er **lige linje (euklidisk)**, i praksis justeret med en faktor for vejnettet.
  - Én facilitet uden kapacitetsgrænse.
- **Notation:**
  - $x_n, y_n$ = koordinater for markeds- eller leverandørpunkt $n$
  - $F_n$ = transportomkostning pr. ton-mil (eller pr. enhed og km) mellem faciliteten og punkt $n$
  - $D_n$ = mængden, der transporteres mellem faciliteten og punkt $n$

## 2. Formel 5.5: afstand og samlet omkostning (ca. 3 min)
Afstanden fra faciliteten $(x, y)$ til punkt $n$:
$$d_n=\sqrt{(x-x_n)^2+(y-y_n)^2}$$
Den samlede transportomkostning er det, vi vil **minimere**:
$$TC=\sum_{n=1}^{k} d_n D_n F_n$$
*(I 7. udgave er afstanden formel 5.5 og TC skrevet lige over den. Tjek nummereringen i din udgave.)*

## 3. Formel 5.6: den optimale placering (ca. 4 min)
Sæt de partielle afledte $\partial TC/\partial x = 0$ og $\partial TC/\partial y=0$:
$$x=\frac{\sum_n \frac{D_nF_nx_n}{d_n}}{\sum_n \frac{D_nF_n}{d_n}},\qquad y=\frac{\sum_n \frac{D_nF_ny_n}{d_n}}{\sum_n \frac{D_nF_n}{d_n}}$$
- Problemet er, at $d_n$ står på højre side og selv afhænger af $(x,y)$. Ligningerne løses derfor **iterativt**:
  1. Vælg en startplacering. Ofte bruges det vægtede gennemsnit $x_0 = \sum D_nF_nx_n / \sum D_nF_n$.
  2. Beregn $d_n$ for alle punkter.
  3. Beregn nye $(x, y)$ med formel 5.6.
  4. Hvis placeringen næsten ikke ændrer sig, eller TC ikke falder, så stop. Ellers gå tilbage til trin 2.
- **Intuition:** Hvert punkt "trækker" i faciliteten med vægten $D_nF_n / d_n$. Tunge og dyre punkter trækker hårdest, som tyngdekraft. Deraf navnet.
- I Excel løses det med **Solver** (minimér TC ved at ændre x og y).

## 4. Eksempel: Steel Appliances (ca. 3 min)
Kilder (F ≈ 0,85–0,95) og markeder (F = 1,5):

| Punkt | x | y | D (ton) | F |
|---|---|---|---|---|
| Buffalo (supply) | 700 | 1200 | 500 | 0,90 |
| Memphis (supply) | 250 | 600 | 300 | 0,95 |
| St. Louis (supply) | 225 | 825 | 700 | 0,85 |
| Atlanta | 600 | 500 | 225 | 1,50 |
| Boston | 1050 | 1200 | 150 | 1,50 |
| Jacksonville | 800 | 300 | 250 | 1,50 |
| Philadelphia | 925 | 975 | 175 | 1,50 |
| New York | 1000 | 1080 | 300 | 1,50 |

- Startpunkt (vægtet gennemsnit): (655, 837) med TC ≈ 1.268.000.
- Efter iteration: **(681, 882)** med TC ≈ **1.265.000**.
- *(Tallene stammer fra bogens eksempel. Appen genberegner dem. Tjek koordinaterne mod din udgave.)*
- Markederne har højere $F$, fordi de modtager mindre forsendelser (LTL), mens kilderne leverer i fulde læs (TL). Derfor trækker markederne relativt mere i faciliteten.

## 5. Begrænsninger (ca. 2 min)
- Afstand i **lige linje** er ikke den virkelige vej. Den rigtige afstand kan fx være ≈ 1,2 × den lige linje.
- Transportomkostningen er i virkeligheden **ikke lineær**: Der er faste omkostninger og stordriftsfordele.
- Modellen ser kun på **transport**. Løn, skat, infrastruktur og arealpriser er ikke med. Det fundne punkt kan ligge i en sø eller et naturområde.
- Kun én facilitet. Mange faciliteter kræver en udvidet model eller MIP.
- **Konklusion:** Modellen er god til at finde et *område*, og derefter bruges kvalitative metoder og omkostningsmodeller.

## Typiske opfølgende spørgsmål
- **Hvad er forskellen på gravity-modellen og center of gravity (5.3)?** Center of gravity er *kun* det vægtede gennemsnit: $x = \sum x_nQ_n/\sum Q_n$. Det minimerer ikke den rigtige afstand. Gravity-modellen vægter også med $1/d_n$ og iterer, så den minimerer reel afstand × mængde × rate.
- **Hvorfor iteration?** Fordi $d_n$ afhænger af $(x,y)$. Ligningerne har ingen lukket løsning.
- **Hvad betyder et højt $F_n$?** Dyr transport til det punkt, så faciliteten trækkes tættere på.

## Øv dig
- [ ] Skriv formel 5.5 og 5.6 fra hukommelsen.
- [ ] Forklar iterationen i 4 trin.
- [ ] Brug appens kort: flyt et marked eller øg dets D og se faciliteten flytte sig.

---

# 4.3 Tre faktorer, der påvirker netværksdesign

> **Kernebudskab:** Kapitel 5 nævner mange faktorer:
> - strategiske
> - teknologiske
> - makroøkonomiske
> - politiske
> - infrastruktur
> - konkurrence
> - kundens responstid og lokal tilstedeværelse
> - logistik- og facility costs
>
> Vælg **tre**, og vis med eksempler, hvordan de ændrer, *hvor* og *hvor mange* faciliteter virksomheden bør have. Jeg anbefaler **strategiske**, **makroøkonomiske** og **teknologiske** faktorer, fordi de er nemme at give eksempler på. Herunder er der også stof til de andre.

**Tidsplan (15 min):** Introduktion 0–2 · Faktor 1 2–6 · Faktor 2 6–10 · Faktor 3 10–13 · Afrunding og kort om de andre 13–15

## 1. Introduktion (ca. 2 min)
- Netværksbeslutninger er langsigtede og dyre at ændre. Derfor skal mange faktorer inddrages.
- Faktorerne bruges som inputs i Figur 5-2 (se 4.1).

## 2. Strategiske faktorer (ca. 4 min)
- Konkurrencestrategien bestemmer netværket:
  - **Lavomkostningsstrategi:** faciliteterne placeres der, hvor det er billigst, ofte få store fabrikker i lavlønsområder.
  - **Responsiv strategi:** faciliteterne placeres tæt på markedet, også selvom det koster mere. *Eksempel:* Zara producerer modetøj i Spanien og Portugal tæt på det europæiske marked. Basisvarer produceres i Asien.
- **Globale netværk** kan give faciliteterne forskellige roller (Kasra Ferdows' klassifikation):
  - **Offshore:** lave omkostninger og eksport.
  - **Source:** også produktudvikling.
  - **Server:** betjener det lokale marked, pga. told og skat.
  - **Contributor:** server med egen udvikling.
  - **Outpost:** til at hente viden og kompetencer.
  - **Lead:** leder innovation for hele netværket.
- Pointe: Det handler ikke kun om omkostninger, men om **rolle**.

## 3. Makroøkonomiske faktorer (ca. 4 min)
- **Told og skatteincitamenter:**
  - Høj importtold får virksomheder til at producere lokalt i markedet (market-focused facilities).
  - Frihandelsområder som EU og USMCA gør det muligt at samle produktionen få steder.
  - Skattelettelser og frihandelszoner tiltrækker faciliteter.
- **Valuta- og efterspørgselsrisiko:**
  - Valutakurser kan ændre omkostningerne kraftigt. Et eksempel er Toyota og den stærke yen.
  - Svaret er **fleksibilitet**: produktion i flere valutaområder og overskudskapacitet, så produktionen kan flyttes (natural hedge).
- **Fragt- og brændstofomkostninger:** Høje oliepriser gør det mere attraktivt at producere tæt på markedet (near-shoring).

## 4. Teknologiske faktorer (ca. 3 min)
- **Stordriftsfordele i produktionen:**
  - Er de store (fx chipfabrikker til milliarder), giver få centrale fabrikker mening.
  - Er de små (fx aftapning af læskedrikke), placeres fabrikkerne lokalt, fordi produktet er tungt og billigt at producere.
- **Fleksibel teknologi:** Kan én fabrik lave mange varianter, kan produktionen centraliseres. Ellers skal der flere dedikerede fabrikker til.
- **Eksempel:** Coca-Cola har lokale tappeanlæg, men koncentratet produceres centralt.

## 5. Kort om de andre faktorer (brug dem, hvis tiden tillader)
- **Politiske:** stabilitet, retssikkerhed og ejendomsret. Ustabile lande bliver fravalgt eller får en risikopræmie.
- **Infrastruktur:** havne, motorveje, lufthavne, el og arbejdskraft. Det er afgørende i fase III.
- **Konkurrence:** *positive externalities*, dvs. at virksomheder klumper sig sammen, fx bilindustrien i Detroit og Silicon Valley. *Locating to split the market*, dvs. placering i forhold til konkurrenterne (Hotelling).
- **Kundens responstid og lokal tilstedeværelse:** Kræver kunderne hurtig levering, kræves der flere faciliteter (fx convenience stores).
- **Logistik- og facility costs:**
  - Totalomkostningen er U-formet i antallet af faciliteter (se 3.3).
  - *Weight-losing* processer (fx stål og papir) placeres tæt på råvarerne.
  - *Weight-gaining* processer (fx tapning af drikkevarer) placeres tæt på markedet.

## 6. Afrunding
- Faktorerne trækker ofte i **hver sin retning**. Lave lønninger trækker mod Asien, mens kravet om responstid trækker mod Europa. Netværksdesign er at **afveje** dem, ofte med en optimeringsmodel (CPL) og scenarieanalyser.

## Typiske opfølgende spørgsmål
- **Hvad er en natural hedge?** Når omkostninger og indtægter ligger i samme valuta, fordi der produceres i det marked, man sælger til. Så påvirker valutakursen ikke marginen så meget.
- **Hvorfor klumper virksomheder sig sammen?** Fordi de deler leverandører, arbejdskraft og infrastruktur (positive eksternaliteter).
- **Hvad er weight-losing og weight-gaining?** Om produktet bliver lettere eller tungere gennem processen. Det afgør, om fabrikken skal ligge ved råvarerne eller ved markedet.

## Øv dig
- [ ] Vælg dine tre faktorer, og find to eksempler til hver.
- [ ] Forklar told og valutarisiko med et tal: Hvis euroen stiger 20 %, hvad sker der så med omkostningerne ved en fabrik i Tyskland?
- [ ] Øv dig i at forklare, hvordan faktorerne kan trække i hver sin retning.

---

# 4.4 Capacitated Plant Location Model

> **Kernebudskab:** CPL-modellen er et **mixed integer program (MIP)**, der på én gang bestemmer:
> 1. **hvilke fabrikker der åbnes** (binære variable)
> 2. **hvordan efterspørgslen fordeles** mellem fabrikker og markeder (kontinuerte variable)
>
> Den minimerer **faste omkostninger + variable produktions- og transportomkostninger** under kapacitetsbegrænsninger.

**Tidsplan (15 min):** Formål 0–2 · Notation og variable 2–5 · Målfunktion og begrænsninger 5–10 · Eksempel 10–13 · Udvidelser og afrunding 13–15

## 1. Formål (ca. 2 min)
- Bruges i **fase II** (regioner) og **fase IV** (konkrete lokaliteter) i Figur 5-2.
- Spørgsmål, modellen besvarer: *Hvilke potentielle fabrikker skal vi åbne, og hvilke markeder skal hver fabrik forsyne?*
- Den adresserer trade-off'et mellem **faste omkostninger** (få fabrikker er billigst) og **transportomkostninger** (mange fabrikker tæt på kunderne er billigst).

## 2. Notation (ca. 3 min)
- $n$ = antal potentielle fabrikslokaliteter, $m$ = antal markeder
- $D_j$ = årlig efterspørgsel i marked $j$
- $K_i$ = kapacitet for fabrik $i$
- $f_i$ = årlig fast omkostning ved at holde fabrik $i$ åben
- $c_{ij}$ = omkostning ved at producere og sende én enhed fra fabrik $i$ til marked $j$ (produktion + lager + transport)
- **Beslutningsvariable:**
  - $y_i = 1$, hvis fabrik $i$ åbnes, ellers $0$ (binær)
  - $x_{ij}$ = mængde sendt fra fabrik $i$ til marked $j$ ($\geq 0$)

## 3. Modellen (ca. 5 min)
**Minimér:**
$$\sum_{i=1}^{n} f_i y_i + \sum_{i=1}^{n}\sum_{j=1}^{m} c_{ij}x_{ij}$$
**under betingelserne:**
$$\sum_{i=1}^{n} x_{ij} = D_j \quad \forall j \qquad \text{(al efterspørgsel dækkes)}$$
$$\sum_{j=1}^{m} x_{ij} \le K_i\,y_i \quad \forall i \qquad \text{(kapacitet, kun hvis fabrikken er åben)}$$
$$y_i \in \{0,1\},\qquad x_{ij}\ge 0$$
- **Pointen med $K_i y_i$:** Er fabrikken lukket ($y_i=0$), kan den ikke producere. Er den åben, kan den producere op til $K_i$. Det kobler den faste omkostning sammen med muligheden for at bruge fabrikken.
- Løses i **Excel Solver** (eller med en anden MIP-solver) med branch-and-bound. Binære variable gør modellen sværere at løse end et almindeligt LP.
- Varianter:
  - *Single sourcing*: hvert marked skal forsynes af præcis én fabrik ($x_{ij}$ skrives som andel, og en ekstra binær variabel tilføjes).
  - Grænse for antal fabrikker, fx $\sum y_i \le k$.

## 4. Eksempel: SunOil (ca. 3 min)
- SunOil, en petrokemisk virksomhed, overvejer fabrikker i 5 regioner: Nordamerika, Sydamerika, Europa, Afrika og Asien.
  - Hver region kan få en *lav-kapacitets-* (fx 10 mio. enheder) eller en *høj-kapacitets*-fabrik (20 mio.) med hver sin faste omkostning.
  - Variable omkostninger $c_{ij}$ omfatter produktion, transport og told.
- Løsningen åbner fabrikker i få regioner og lader dem forsyne flere markeder. Det viser trade-off'et mellem faste omkostninger og transport/told.
- *(Find tallene i bogens Tabel 5-4. Forklar strukturen frem for at huske tallene.)*

## 5. Udvidelser og afrunding (ca. 2 min)
- **Udvidelser:**
  - Flere led i kæden: leverandør → fabrik → lager → marked (gælder fx Faulkswagon-casen).
  - Toldsatser og skat.
  - **Usikkerhed:** valuta og efterspørgsel (kap. 6), der analyseres med scenarier og beslutningstræer.
  - Fleksibilitet.
- **Fordel:** Én model fanger *både* placering og allokering, og den giver præcise omkostningstal.
- **Begrænsning:** Den er deterministisk og afhænger af gode data. Kvalitative faktorer som politik og infrastruktur skal vurderes separat.

## Typiske opfølgende spørgsmål
- **Hvorfor er $y_i$ binær?** Fordi man ikke kan åbne halvdelen af en fabrik. Den faste omkostning betales fuldt, hvis fabrikken åbnes.
- **Hvad sker der, hvis den samlede kapacitet er mindre end efterspørgslen?** Så er der ingen løsning (infeasible). Man skal tilføje mulige fabrikker eller tillade lost sales med en straf.
- **Hvordan adskiller den sig fra transportproblemet (9.2)?** Transportproblemet har faste fabrikker og kun $x_{ij}$. CPL har også $y_i$ og faste omkostninger.

## Øv dig
- [ ] Skriv modellen fra hukommelsen: målfunktion og to begrænsninger.
- [ ] Forklar hvorfor $K_i y_i$ og ikke bare $K_i$.
- [ ] Løs det lille eksempel i appen: slå fabrikker til og fra og se omkostningen.

---

# 5.1 Locational Break-Even Analysis

> **Kernebudskab:** Locational break-even sammenligner lokaliteter ud fra **faste og variable omkostninger**. Hver lokalitet har en lineær omkostningskurve $TC = F + v \cdot Q$. Det **forventede volumen** afgør, hvilken lokalitet der er billigst, og **skæringspunkterne** viser, i hvilke volumenintervaller hver lokalitet er bedst.

**Tidsplan (15 min):** Metoden 0–4 · Eksempel 4–10 · Grafen og skæringspunkter 10–13 · Begrænsninger 13–15

## 1. Metoden: tre trin (ca. 4 min)
(Heizer & Render, "Location Decisions")
1. Bestem de **faste** ($F$) og de **variable omkostninger pr. enhed** ($v$) for hver lokalitet.
2. **Tegn totalomkostningskurverne** $TC_i = F_i + v_i Q$ for alle lokaliteter i samme graf: omkostninger på y-aksen og volumen på x-aksen.
3. Vælg den lokalitet, der har **lavest totalomkostning ved det forventede volumen**.

- Faste omkostninger: grund, bygning, maskiner, skat og forsikring.
- Variable omkostninger: løn, materialer, energi, transport pr. enhed.
- Er salgsprisen den samme overalt, maksimerer den billigste lokalitet også profitten: profit = $pQ - TC$.

## 2. Eksempel: Akron, Bowling Green og Chicago (ca. 6 min)
En producent af karburatorer overvejer tre byer. Salgsprisen er \$120 pr. stk., og det forventede volumen er 2.000 stk./år.

| By | Faste omk. | Variable omk./stk. |
|---|---|---|
| Akron | \$30.000 | \$75 |
| Bowling Green | \$60.000 | \$45 |
| Chicago | \$110.000 | \$25 |

Totalomkostninger ved Q = 2.000:
- Akron: 30.000 + 75·2.000 = **\$180.000**
- Bowling Green: 60.000 + 45·2.000 = **\$150.000** ← billigst
- Chicago: 110.000 + 25·2.000 = **\$160.000**

Profit i Bowling Green: 120·2.000 − 150.000 = **\$90.000**.

**Skæringspunkter:** Sæt $TC_A = TC_B$ og løs for $Q$.
- Akron = Bowling Green: $30.000 + 75Q = 60.000 + 45Q$ ⇒ $Q = 1.000$
- Bowling Green = Chicago: $60.000 + 45Q = 110.000 + 25Q$ ⇒ $Q = 2.500$

**Konklusion:**
- Q < 1.000: **Akron** er billigst.
- 1.000 < Q < 2.500: **Bowling Green** er billigst.
- Q > 2.500: **Chicago** er billigst.

## 3. Grafen og intuitionen (ca. 3 min)
**Tegn:** tre rette linjer. Akron starter lavt og stiger stejlt. Chicago starter højt og stiger fladt. Den nederste "kant" af linjerne er den billigste lokalitet for hvert volumen.
- **Intuition:** Høje faste omkostninger kan betale sig, hvis volumen er stort nok, fordi besparelsen pr. enhed så kan dække den faste omkostning. Det er det samme princip som ved et abonnement med høj fast pris og lav pris pr. enhed.
- Svaret er derfor **følsomt over for prognosen**. Hvis volumen kan stige over 2.500 om få år, bør Chicago overvejes.

## 4. Begrænsninger (ca. 2 min)
- Antager **lineære omkostninger**, dvs. ingen stordriftsfordele eller trinvise investeringer.
- Antager **ét produkt og én facilitet**.
- Medtager kun **kvantitative** faktorer. Kvalitative faktorer (arbejdskraft, livskvalitet, politisk stabilitet) må vurderes med **factor rating** (5.2).
- Ser ikke på **transportomkostninger til flere markeder**. Til det bruges center of gravity (5.3) eller transportmodellen (9.2).
- Usikkerhed i volumen gør skæringspunkterne vigtigere end selve punktestimatet. Det kan være en fordel at vælge en lokalitet, der er robust over et interval.

## Typiske opfølgende spørgsmål
- **Hvorfor er salgsprisen ligegyldig for valget?** Når prisen er den samme alle steder, giver laveste omkostning også højeste profit. Prisen betyder kun noget for, om projektet overhovedet er rentabelt.
- **Hvordan beregner man skæringspunktet?** $Q^* = \dfrac{F_2 - F_1}{v_1 - v_2}$.
- **Hvad hvis den variable omkostning er usikker (fx løn)?** Lav en følsomhedsanalyse: Hvor meget skal $v$ ændre sig, før en anden by vinder?

## Øv dig
- [ ] Regn eksemplet igennem på papir på 3 minutter.
- [ ] Tegn grafen med skæringspunkterne 1.000 og 2.500.
- [ ] Brug appen: ændr Chicagos faste omkostninger og se, hvordan intervallerne flytter sig.

---

# 5.2 Factor-Rating Method

> **Kernebudskab:** Factor rating gør **kvalitative faktorer målbare**. Man vælger relevante faktorer, giver hver en **vægt**, giver hver lokalitet en **score** på hver faktor og beregner en **vægtet sum**. Lokaliteten med den højeste score vælges, men resultatet bør altid suppleres med kvantitative omkostningsanalyser.

**Tidsplan (15 min):** Hvorfor 0–2 · De seks trin 2–6 · Eksempel 6–11 · Fordele og ulemper 11–15

## 1. Hvorfor? (ca. 2 min)
- Mange lokaliseringsfaktorer kan ikke måles i kroner. Det gælder fx arbejdskraftens kvalitet, politisk stabilitet, livskvalitet, lokalsamfundets holdning og uddannelsesniveau.
- Factor rating gør det muligt at **sammenligne** dem systematisk og gennemsigtigt.
- Bruges især i **fase III** (potentielle lokaliteter) i Figur 5-2.

## 2. De seks trin (ca. 4 min)
(Heizer & Render)
1. Lav en liste over relevante **nøglefaktorer** (key success factors).
2. Giv hver faktor en **vægt**, der afspejler dens relative betydning. Vægtene summerer til 1.
3. Lav en **skala** for hver faktor, fx 1–10 eller 1–100.
4. Lad ledelsen eller et team **score** hver lokalitet på hver faktor.
5. **Gang** score med vægt og **summér** for hver lokalitet.
6. **Anbefal** lokaliteten med den højeste samlede score, og tag også højde for kvantitative analyser.

$$Score_{lokalitet} = \sum_{i} w_i \cdot s_i$$

## 3. Eksempel: Five Flags over Florida, Frankrig eller Danmark (ca. 5 min)
En amerikansk forlystelsesparkkæde vil åbne en park i Europa.

| Faktor | Vægt | Frankrig | Danmark | Frankrig vægtet | Danmark vægtet |
|---|---|---|---|---|---|
| Arbejdskraft (tilgængelighed og holdning) | 0,25 | 70 | 60 | 17,50 | 15,00 |
| Antal personer pr. bil | 0,05 | 50 | 60 | 2,50 | 3,00 |
| Indkomst pr. indbygger | 0,10 | 85 | 80 | 8,50 | 8,00 |
| Skattestruktur | 0,39 | 75 | 70 | 29,25 | 27,30 |
| Uddannelse og sundhed | 0,21 | 60 | 70 | 12,60 | 14,70 |
| **I alt** | **1,00** | | | **70,35** | **68,00** |

→ **Frankrig** anbefales, men forskellen er lille (70,35 mod 68,00).
- **Følsomhed:** Hvis vægten på uddannelse og sundhed hæves fra 0,21 til 0,30, og skattevægten sænkes tilsvarende til 0,30, får Frankrig 69,0 og Danmark 68,0. Går man videre til 0,40 og 0,20, får Frankrig 67,5 og Danmark 68,0, og **Danmark vinder**. Resultatet er altså **følsomt over for vægtene**.

## 4. Fordele og ulemper (ca. 4 min)
**Fordele:**
- Enkel, gennemsigtig og let at kommunikere.
- Inddrager **kvalitative** faktorer, som andre modeller ignorerer.
- Tvinger ledelsen til at blive enige om, hvad der er vigtigt.

**Ulemper:**
- **Subjektiv:** Både vægte og scores bygger på vurderinger og kan være biased. Resultatet kan manipuleres ved at justere vægtene.
- Faktorerne kan **overlappe** (fx indkomst og uddannelse), så noget tælles dobbelt.
- Den **lineære sum** tillader, at en meget dårlig score på én faktor opvejes af gode scores på andre. Hvis noget er et krav ("must have"), bør det være en minimumsgrænse og ikke bare en vægt.
- Den giver ikke **omkostninger** i kroner. Derfor bør den kombineres med break-even (5.1), center of gravity (5.3) eller CPL (4.4).

**Forbedringer:**
- Lav en følsomhedsanalyse på vægtene.
- Brug et team til at give scores.
- Brug minimumskrav, så lokaliteter, der ikke opfylder dem, sorteres fra.
- Mere avancerede metoder som AHP findes også.

## Typiske opfølgende spørgsmål
- **Hvorfor skal vægtene summere til 1?** For at de samlede scores kan sammenlignes på samme skala. Det er en normalisering.
- **Hvordan sikrer man objektivitet?** Med flere bedømmere, data som grundlag for scores (fx lønstatistik) og følsomhedsanalyse.
- **Kan metoden bruges til andet end lokalisering?** Ja, fx til valg af leverandør (sourcing).

## Øv dig
- [ ] Forklar de seks trin på 1 minut.
- [ ] Regn eksemplet igennem, og prøv at ændre vægtene i appen, så Danmark vinder.
- [ ] Nævn 3 ulemper og et forslag til at mindske hver af dem.

---

# 5.3 Center-of-Gravity Method (Location Decisions)

> **Kernebudskab:** Center-of-gravity-metoden finder placeringen af **ét distributionscenter**, så transporten til flere destinationer (butikker, markeder) bliver lav. Placeringen er det **mængdevægtede gennemsnit af koordinaterne**:
> $$C_x=\frac{\sum_i d_{ix}Q_i}{\sum_i Q_i},\qquad C_y=\frac{\sum_i d_{iy}Q_i}{\sum_i Q_i}$$

**Tidsplan (15 min):** Formål og antagelser 0–3 · Metoden 3–6 · Eksempel 6–11 · Begrænsninger og sammenligning med gravity-modellen 11–15

## 1. Formål og antagelser (ca. 3 min)
- En matematisk metode til at placere **ét distributionscenter**, så **distributionsomkostningerne** bliver lave.
- **Antagelser:**
  - Transportomkostningen er **proportional med afstand og mængde**.
  - Mængden sendes i **samme størrelse forsendelser** til alle destinationer, så omkostningen pr. enhed og km er den samme overalt.
  - Placeringerne ligger i et **koordinatsystem** (på et kort).

## 2. Metoden (ca. 3 min)
1. Læg et **koordinatsystem** over kortet. Udgangspunktet er vilkårligt. Det er de relative afstande, der tæller.
2. Aflæs koordinaterne $(d_{ix}, d_{iy})$ for hver destination $i$.
3. Find mængden $Q_i$, der skal sendes til hver destination (fx antal containere pr. måned).
4. Beregn $C_x$ og $C_y$ med formlerne ovenfor.
5. Find det **nærmeste realistiske sted** (vej, industriområde) tæt på $(C_x, C_y)$.

**Intuition:** Forestil dig en plade med lodder, der vejer $Q_i$, placeret ved hver by. Centeret er det punkt, hvor pladen balancerer. Store byer trækker centeret mod sig.

## 3. Eksempel: Quain's Discount Department Stores (ca. 5 min)
Fire butikker i Chicago, Pittsburgh, New York og Atlanta skal forsynes fra ét nyt lager.

| Butik | x | y | Containere/måned Q |
|---|---|---|---|
| Chicago | 30 | 120 | 2.000 |
| Pittsburgh | 90 | 110 | 1.000 |
| New York | 130 | 130 | 1.000 |
| Atlanta | 60 | 40 | 2.000 |

$$C_x=\frac{30\cdot2000+90\cdot1000+130\cdot1000+60\cdot2000}{6000}=\frac{400.000}{6.000}=66{,}7$$
$$C_y=\frac{120\cdot2000+110\cdot1000+130\cdot1000+40\cdot2000}{6000}=\frac{560.000}{6.000}=93{,}3$$
→ Lageret placeres ved cirka **(66,7; 93,3)**, som i bogen ligger tæt på **Columbus, Ohio**.
- Chicago og Atlanta har den største mængde, og det trækker centeret mod vest og syd i forhold til en almindelig gennemsnitsplacering. Den ville være (77,5; 100).

## 4. Begrænsninger og sammenligning med gravity-modellen (ca. 4 min)
**Begrænsninger:**
- Den vægtede gennemsnitsplacering **minimerer ikke** den samlede afstand × mængde i lige linje. Den minimerer summen af **kvadrerede** afstande. Det sande optimum findes med Weiszfeld-iteration, som er gravity-modellen (4.2).
- Bruger **afstand i lige linje**. Veje, bjerge og vand ignoreres.
- Ignorerer **inbound-transport** fra fabrikkerne, med mindre de tages med som punkter.
- Antager **samme transportrate** til alle destinationer. Gravity-modellen har en særskilt rate $F_n$ for hvert punkt.
- Ser kun på transport. Løn, grundpriser, infrastruktur og skat er ikke med. Derfor kombineres den med factor rating.

**Center of gravity vs. gravity-modellen (Chopra):**

| | Center of gravity | Gravity location model |
|---|---|---|
| Formel | $\sum x_iQ_i/\sum Q_i$ | $\sum \frac{D_nF_nx_n}{d_n} / \sum \frac{D_nF_n}{d_n}$ |
| Rate | Samme for alle | $F_n$ forskellig |
| Løsning | Direkte | Iterativ |
| Minimerer | Kvadreret afstand (tilnærmelse) | Reel afstand × mængde × rate |

- Center of gravity er ofte **startpunktet** for gravity-modellens iteration.

## Typiske opfølgende spørgsmål
- **Hvorfor er resultatet kun en tilnærmelse?** Det vægtede gennemsnit minimerer den kvadrerede afstand, ikke den reelle. Men det er et godt og simpelt udgangspunkt.
- **Hvordan bruges den i Faulkswagon-casen?** Til at placere fabrikker eller lagre ud fra efterspørgslen (se 12.1).
- **Hvad gør man, hvis centeret ligger midt i en sø?** Man vælger den nærmeste realistiske lokalitet, og man kan sammenligne flere kandidater med TC-formlen.

## Øv dig
- [ ] Regn Quain-eksemplet på papir.
- [ ] Forklar forskellen på center of gravity og gravity-modellen i 3 punkter.
- [ ] I appen: øg New Yorks Q og se centeret flytte sig.

---

# 6.1 Example 11-4: Products Ordered and Delivered Jointly

> **Kernebudskab:** Når flere produkter **bestilles og leveres sammen** på samme lastbil, deles den faste transportomkostning. Den samlede bestillingsfrekvens findes med én fælles EOQ-formel. Resultatet er **lavere samlede omkostninger** end ved separate bestillinger, men lageret af de små produkter bliver mindre end nødvendigt. Det løses i Example 11-6 med *tailored aggregation*.

**Tidsplan (15 min):** Cycle inventory og EOQ 0–3 · Opsætning (Ex 11-3) 3–6 · Joint ordering (Ex 11-4) 6–11 · Sammenligning og tailored aggregation 11–15

## 1. Cycle inventory og EOQ (ca. 3 min)
- **Cycle inventory** opstår, fordi vi bestiller i lots $Q$, der er større end det, der bruges med det samme. Gennemsnitligt cycle inventory = $Q/2$.
- **Trade-off:**
  - Store lots giver få bestillinger og dermed lav bestillingsomkostning $\frac{D}{Q}S$.
  - Men store lots giver også højt lager og dermed høj lageromkostning $\frac{Q}{2}hC$.
$$Q^*=\sqrt{\frac{2DS}{hC}},\qquad n^*=\frac{D}{Q^*}$$
- **Nøglepointe:** Den faste bestillingsomkostning $S$ (især transport) er den vigtigste driver. Hvis $S$ deles mellem flere produkter, kan man bestille oftere og holde et mindre lager.

## 2. Opsætning: Best Buy og tre computermodeller (ca. 3 min)
| Model | Årlig efterspørgsel D | Pris C |
|---|---|---|
| Litepro | 12.000 | \$500 |
| Medpro | 1.200 | \$500 |
| Heavypro | 120 | \$500 |

- Fast transportomkostning pr. levering: $S = \$4.000$.
- Produktspecifik omkostning pr. model i ordren: $s = \$1.000$.
- Holding cost $h = 20\,\%$.

**Ex 11-3, separate ordrer:** Hver model bestilles alene, så $S + s = \$5.000$ pr. ordre.
- Litepro: $Q=\sqrt{2\cdot12000\cdot5000/100}=1.095$, $n = 11{,}0$/år, årlig omk. ≈ \$109.544
- Medpro: $Q = 346$, $n = 3{,}5$/år, omk. ≈ \$34.641
- Heavypro: $Q = 110$, $n = 1{,}1$/år, omk. ≈ \$10.954
- **I alt ≈ \$155.140**

## 3. Ex 11-4, joint ordering: alle tre modeller på hver lastbil (ca. 5 min)
- Samlet fast omkostning pr. ordre:
$$S^* = S + s_L + s_M + s_H = 4.000+3\cdot1.000 = \$7.000$$
- Optimal fælles bestillingsfrekvens:
$$n^*=\sqrt{\frac{\sum_i D_i h C_i}{2S^*}}=\sqrt{\frac{(12.000+1.200+120)\cdot0{,}2\cdot500}{2\cdot7.000}}=\sqrt{95{,}14}=9{,}75 \text{ ordrer/år}$$
- Lotstørrelser $Q_i = D_i/n^*$:
  - Litepro: 12.000/9,75 = **1.230**
  - Medpro: **123**
  - Heavypro: **12,3**
- Årlig omkostning:
  - Bestilling: $9{,}75 \cdot 7.000 = \$68.250$
  - Lager: $\frac{1230+123+12{,}3}{2}\cdot 100 = \$68.250$ (ved optimum er de to lige store)
  - **I alt ≈ \$136.500**, altså en besparelse på ≈ \$18.600 (**ca. 12 %**)

**Udledning (kort):** Totalomkostningen er $TC(n)=nS^*+\sum_i \frac{D_i}{2n}hC_i$. Sæt den afledte lig 0: $S^* = \sum D_ihC_i/(2n^2)$, og isolér $n$.

## 4. Sammenligning og afrunding (ca. 4 min)
| | Separat | Joint |
|---|---|---|
| Ordrer/år (L, M, H) | 11,0 / 3,5 / 1,1 | 9,75 for alle |
| Q Heavypro | 110 | 12,3 |
| Total omk. | \$155.140 | ≈ \$136.500 |

- **Gevinst:** Den faste transportomkostning deles, så den samlede omkostning falder.
- **Problem:** Det lille produkt (Heavypro) bestilles nu 9,75 gange om året i stedet for 1,1, og hver gang koster det \$1.000 ekstra ($s_H$). Det er dyrt i forhold til dets lille efterspørgsel.
- **Løsning, tailored aggregation (Ex 11-6):** Det mest solgte produkt kommer med på hver ordre. De andre kommer med på hver *k*-te ordre. Fx Litepro hver gang, Medpro hver 2. og Heavypro hver 5. Det giver yderligere besparelse (bogen: ≈ \$130.000).
- **I praksis:** Samlede leverancer fra én leverandør (fx milk runs), eller produkter fra flere leverandører samlet på én lastbil. Link til kap. 14.

## Typiske opfølgende spørgsmål
- **Hvorfor er bestillings- og lageromkostningerne lige store ved optimum?** Ved EOQ-optimum er den marginale besparelse ved færre ordrer lig med den marginale lageromkostning. Det er altid sådan i EOQ-modellen.
- **Hvornår er joint ordering ikke en god idé?** Når produktspecifikke omkostninger $s_i$ er store i forhold til $S$, eller når produkterne har meget forskellig efterspørgsel. Så er tailored aggregation bedre.
- **Hvad er forskellen på 11-4 og 11-5?** 11-5 tilføjer en **kapacitetsbegrænsning** på lastbilen (se 6.2).

## Øv dig
- [ ] Skriv $n^*$-formlen og regn 9,75 ud.
- [ ] Forklar tallene i sammenligningstabellen.
- [ ] Forklar, hvorfor tailored aggregation er bedre for Heavypro.

---

# 6.2 Example 11-5: Aggregation with Capacity Constraint

> **Kernebudskab:** Når flere leverandørers ordrer samles på én lastbil, giver joint ordering-formlen den optimale frekvens. Men hvis den **samlede last overstiger lastbilens kapacitet**, er kapaciteten bindende. Så skal der bestilles **oftere med fulde lastbiler**, og det bliver dyrere end den ubegrænsede løsning.

**Tidsplan (15 min):** Kort om EOQ og aggregering 0–3 · Opsætning 3–5 · Ubegrænset løsning 5–9 · Kapacitetsbegrænset løsning 9–13 · Afrunding 13–15

## 1. Kort om EOQ og aggregering (ca. 3 min)
- EOQ: $Q^*=\sqrt{2DS/hC}$. Den faste omkostning $S$ driver lotstørrelsen.
- **Aggregering:** Ordrer til flere leverandører samles på én lastbil, der stopper hos hver af dem (en *milk run* for inbound-transport). Den faste lastbilomkostning deles.
- Formlen for joint ordering (fra 11-4): $n^*=\sqrt{\sum_i D_ihC_i/2S^*}$.

## 2. Opsætning: W.W. Grainger (ca. 2 min)
*(Tallene er gengivet ud fra hukommelsen. Tjek dem mod din bog.)*
- W.W. Grainger køber fra **4 leverandører** i samme område.
- Hver leverandør: efterspørgsel 10.000 enheder/måned, dvs. **D = 120.000/år**.
- Pris $C = \$50$, holding cost $h = 20\,\%$, altså $hC = \$10$ pr. enhed pr. år.
- Fast omkostning: **\$400 pr. lastbil** og **\$100 pr. stop** (leverandør).
- Lastbilens kapacitet: **2.500 enheder**.

## 3. Ubegrænset løsning (ca. 4 min)
- Med alle fire leverandører på hver tur er $S^* = 400 + 4\cdot100 = \$800$.
$$n^*=\sqrt{\frac{4\cdot120.000\cdot10}{2\cdot800}}=\sqrt{3.000}=54{,}8 \text{ ture/år}$$
- Lot pr. leverandør: $Q = 120.000/54{,}8 = 2.191$.
- **Samlet last pr. tur:** $4 \cdot 2.191 = 8.764$ enheder. Det er **langt over kapaciteten på 2.500**. Løsningen kan altså ikke gennemføres.

## 4. Kapacitetsbegrænset løsning (ca. 4 min)
- Hver lastbil kan højst have 2.500 enheder, altså **625 pr. leverandør**.
- Antal ture: $n = \frac{4\cdot 120.000}{2.500} = 192$ ture/år, eller ca. hver 2. dag.
- Årlige omkostninger:
  - Bestilling og transport: $192 \cdot 800 = \$153.600$
  - Lager: $4 \cdot \frac{625}{2}\cdot 10 = \$12.500$
  - **I alt: \$166.100**
- **Fortolkning:**
  - Den ubegrænsede løsning ville koste ca. \$87.600: $2\cdot\sqrt{3.000}\cdot 800$.
  - Kapaciteten tvinger os til at bestille oftere end optimalt. Lageret er meget lavt, men vi betaler meget i transport.
  - **Reglen:** Når kapaciteten er bindende, sendes **fulde lastbiler**. Den optimale frekvens er det, kapaciteten tillader: $n = \sum D_i / K$.
- **Sammenlign med separate lastbiler (vigtig refleksion):** Hver leverandør får sin egen lastbil til $400+100 = \$500$ pr. tur. EOQ = $\sqrt{2\cdot120.000\cdot500/10}=3.464$, hvilket også er over kapaciteten, så der sendes fulde biler med 2.500 enheder.
  - 48 ture/år × \$500 × 4 leverandører = \$96.000
  - Lager: $4 \cdot \frac{2.500}{2}\cdot 10 = \$50.000$
  - **I alt \$146.000**, altså *billigere* end den aggregerede løsning på \$166.100.
  - **Hvorfor?** Når lastbilen alligevel er fuld, giver aggregering ingen stordriftsfordel. Den tilføjer bare ekstra stop: \$800 pr. 2.500 enheder (0,32 \$/enhed) mod \$500 pr. 2.500 enheder (0,20 \$/enhed).
  - **Konklusion:** Aggregering betaler sig, når den enkelte leverandørs lot er **lille i forhold til lastbilens kapacitet**. *(Bogens egne tal kan afvige. Tjek dem, men logikken er den samme.)*

## 5. Afrunding (ca. 2 min)
- Aggregering sænker den faste omkostning pr. leverandør. Men når lastbilen er fuld, forsvinder fordelen ved at samle flere leverandører, og man skal i stedet sende flere fulde biler.
- **I praksis:**
  - Brug større lastbiler eller andre transportformer.
  - Sammensæt ruterne, så færre leverandører kommer med på hver tur.
  - Sænk den faste omkostning pr. tur, fx med cross-docking eller tredjepartslogistik (3PL).
- Link til kap. 14: TL vs. LTL og milk runs.

## Typiske opfølgende spørgsmål
- **Hvordan ved man, om kapaciteten er bindende?** Beregn den ubegrænsede løsning og sammenlign den samlede last $\sum Q_i$ med kapaciteten $K$.
- **Hvorfor bliver det dyrere med kapacitetsgrænsen?** Fordi vi er tvunget væk fra optimum, sådan er det altid med en bindende begrænsning.
- **Hvad er en milk run?** En tur, hvor én lastbil henter hos (eller leverer til) flere steder på samme rute.

## Øv dig
- [ ] Regn $n^*$ og den samlede last på papir.
- [ ] Forklar, hvorfor $n = 192$ og hvordan \$166.100 fremkommer.
- [ ] Prøv i appen: hvilken lastbilkapacitet gør, at begrænsningen ikke længere er bindende?

---

# 6.3 De to typer mængderabat og Example 11-7 (All-Unit Quantity Discounts)

> **Kernebudskab:** Der er to typer mængderabat:
> - **All-unit discount:** Den lavere pris gælder *alle* enheder i ordren, når ordren overstiger et brudpunkt.
> - **Marginal unit discount:** Den lavere pris gælder kun de *enheder ud over* brudpunktet.
>
> All-unit discounts giver et stærkt incitament til at bestille præcis ved brudpunktet. Det øger cycle inventory, og effekten mærkes i hele kæden.

**Tidsplan (15 min):** Hvorfor rabatter 0–2 · De to typer 2–5 · Procedure for all-unit 5–8 · Ex 11-7 8–12 · Marginal unit og afrunding 12–15

## 1. Hvorfor mængderabatter? (ca. 2 min)
- Leverandøren tilbyder rabatter for at:
  - **koordinere kæden**, så den samlede profit øges og double marginalization undgås
  - udnytte **stordriftsfordele**, fx hvis leverandøren har høje faste omkostninger pr. ordre
  - **prisdiskriminere** mellem køberne
- Rabatter kan være **lot-size baserede** (pr. ordre) eller **volume baserede** (samlet køb over en periode, fx et år). Det er emnet i 6.4.

## 2. De to typer (ca. 3 min)
**Tegn:** prisen pr. enhed og den samlede ordreværdi som funktion af Q.
- **All-unit:** Prisen er $C_i$ for *alle* enheder, hvis $q_i \le Q < q_{i+1}$. Den samlede ordreværdi *falder i et spring* ved hvert brudpunkt. Der kan altså være situationer, hvor det er billigere at købe mere.
- **Marginal unit (incremental):** Prisen $C_i$ gælder kun de enheder mellem $q_i$ og $q_{i+1}$. Den samlede ordreværdi er en kontinuert, knækket linje. Der er ingen spring.
  - Ordreværdi ved $Q$: $V_i + (Q-q_i)C_i$, hvor $V_i = \sum_{k<i} C_k(q_{k+1}-q_k)$.

## 3. Procedure for all-unit (ca. 3 min)
For hvert prisinterval $i$:
1. Beregn $Q_i = \sqrt{\dfrac{2DS}{hC_i}}$.
2. Placér $Q_i$ i forhold til intervallet $[q_i, q_{i+1})$:
   - (a) Hvis $q_i \le Q_i < q_{i+1}$: brug $Q_i$.
   - (b) Hvis $Q_i < q_i$: hæv til brudpunktet, $Q_i = q_i$.
   - (c) Hvis $Q_i \ge q_{i+1}$: spring over. Et lavere prisinterval vil altid være bedre.
3. Beregn den samlede årlige omkostning for hver kandidat:
$$TC_i=\frac{D}{Q_i}S+\frac{Q_i}{2}hC_i+DC_i$$
4. Vælg kandidaten med den laveste $TC$.

**Bemærk:** $DC_i$ (købsomkostningen) skal med nu, fordi prisen afhænger af $Q$. Det er den store forskel fra almindelig EOQ.

## 4. Example 11-7: Drugs Online (vitaminer) (ca. 4 min)
- Efterspørgsel 10.000 flasker/måned, dvs. $D = 120.000$/år.
- $S = \$100$ pr. ordre, $h = 20\,\%$.
- Priser: \$3,00 for 0–4.999 flasker · \$2,96 for 5.000–9.999 · \$2,92 for 10.000 og derover.

| i | Pris | $Q_i$ (EOQ) | Status | Q brugt | TC/år |
|---|---|---|---|---|---|
| 0 | 3,00 | 6.325 | ≥ 5.000 → spring over (c) | – | – |
| 1 | 2,96 | 6.367 | i interval (a) | 6.367 | \$358.969 |
| 2 | 2,92 | 6.411 | < 10.000 → hæv (b) | 10.000 | **\$354.520** |

Udregning for $i = 2$: $\frac{120.000}{10.000}\cdot100 + \frac{10.000}{2}\cdot0{,}2\cdot2{,}92 + 120.000\cdot2{,}92 = 1.200 + 2.920 + 350.400 = 354.520$.

→ **Optimum: bestil 10.000 flasker** til \$2,92.
- **Pointe:** Uden rabat ville EOQ være cirka 6.325. Rabatten får køberen til at bestille **58 % mere**, og cycle inventory stiger fra ~3.162 til 5.000 flasker. Det bliver *kæden* ikke nødvendigvis bedre af. Se 6.4.

## 5. Marginal unit-rabat og afrunding (ca. 3 min)
- Ved **marginal unit**-rabat med samme brudpunkter (Ex 11-8) er:
$$Q_i=\sqrt{\frac{2D(S+V_i-q_iC_i)}{hC_i}}$$
  - For Drugs Online giver det optimum ved $Q \approx 16.961$ med TC ≈ \$360.365.
  - Ordren bliver *endnu større*, fordi den gennemsnitlige pris kun falder langsomt.
- **Kæden som helhed:** Store lots giver høj cycle inventory og bullwhip-lignende udsving i ordrerne. Rabatter bør derfor være **designet til at koordinere kæden** (6.4), ikke bare til at øge mængden.

## Typiske opfølgende spørgsmål
- **Hvorfor spring over (c)?** Hvis EOQ ved en højere pris ligger over intervallets øvre grænse, kan vi købe den mængde til en lavere pris. Det lavere prisinterval vil altid være billigere.
- **Hvorfor medtages $DC$?** Fordi prisen afhænger af ordrestørrelsen. Uden rabat er $DC$ konstant og påvirker ikke beslutningen.
- **Hvilken rabattype er bedst for køberen?** All-unit giver typisk den laveste købspris. Men begge typer øger lotstørrelsen og cycle inventory.

## Øv dig
- [ ] Forklar forskellen på de to typer med en graf.
- [ ] Gennemgå de fire trin og regn alle tre rækker i tabellen.
- [ ] Brug appen: ændr $S$ og se, hvornår optimum flytter fra 10.000 til 6.367.

---

# 6.4 Design af en mængderabat: Example 11-9 og 11-10

> **Kernebudskab:** En velfungerende rabat **koordinerer kæden**. Den får køberen til at træffe den beslutning, der maksimerer *kædens* samlede profit, og ikke kun sin egen. Hvilken rabat der virker, afhænger af produktet:
> - **Commodity-produkter** (fast markedspris): Brug en **lot-size baseret** rabat. Den sænker de samlede ordre- og lageromkostninger (Ex 11-9).
> - **Produkter med markedsmagt** (efterspørgslen afhænger af prisen): Brug en **volume-baseret** rabat eller en **two-part tariff**. Den fjerner double marginalization (Ex 11-10).

**Tidsplan (15 min):** Problemet 0–2 · Ex 11-9 2–8 · Ex 11-10 8–13 · Afrunding 13–15

## 1. Problemet (ca. 2 min)
- Når køber og leverandør hver optimerer for sig selv, opnås der **ikke** kædens optimum. Det kaldes en manglende koordinering.
- **To situationer:**
  1. **Commodity** (fx mælk eller vitaminer med fast markedspris): Kunden bestemmer kun *lotstørrelsen*. Problemet er, at køberen ikke tager hensyn til leverandørens faste omkostning pr. ordre.
  2. **Markedsmagt** (efterspørgslen falder, når prisen stiger): Begge parter lægger en margin på. Kunden møder en for høj pris, og der sælges for lidt. Det kaldes **double marginalization**.

## 2. Example 11-9: lot-size baseret rabat for et commodity-produkt (ca. 6 min)
- Drugs Online (detailhandel): $D = 120.000$/år, $S_R = \$100$, $h = 20\,\%$, indkøbspris \$3, så $h_R = \$0{,}60$.
- Producenten: fast omkostning \$250 pr. ordre ($S_M$), produktionsomkostning \$2, så $h_M = 0{,}2\cdot2 = \$0{,}40$.

**Ukoordineret:** Detailhandleren vælger sin egen EOQ.
- $Q_R=\sqrt{2\cdot120.000\cdot100/0{,}6}=6.325$
- Detailhandlerens omkostning: \$3.795 · Producentens: $\frac{120.000}{6.325}\cdot250+\frac{6.325}{2}\cdot0{,}4 = \$6.008$
- **Kæden i alt: \$9.803**

**Koordineret:** Brug hele kædens omkostninger.
$$Q^*=\sqrt{\frac{2D(S_R+S_M)}{h_R+h_M}}=\sqrt{\frac{2\cdot120.000\cdot350}{1{,}0}}=9.165$$
- Detailhandleren: \$4.059 (en stigning på \$264) · Producenten: \$5.106 (et fald på \$902)
- **Kæden i alt: \$9.165**, en besparelse på **\$638**

**Rabatten:** Producenten skal kompensere detailhandleren med mindst \$264/år, dvs. $264/120.000 = \$0{,}0022$ pr. flaske.
- **All-unit rabat:** \$3,00 for ordrer under 9.165, **\$2,9978** for ordrer på 9.165 eller mere.
- Så vælger detailhandleren selv $Q = 9.165$. Kæden sparer \$638, og den gevinst kan deles.

**Pointe:** Lot-size rabatter er rationelle, når *leverandøren har høje faste omkostninger pr. ordre*. Hvis leverandøren i stedet kan sænke $S_M$ (fx med kortere omstillingstider), er rabatten mindre nødvendig.

## 3. Example 11-10: volume-baseret rabat ved markedsmagt (ca. 5 min)
- Efterspørgslen: $D = 360.000 - 60.000p$.
- Producenten har en produktionsomkostning på $c = \$2$ og sælger til detailhandleren til prisen $C_R$.

**Sekventiel prisfastsættelse (ukoordineret):**
- Detailhandleren maksimerer $(p - C_R)(360.000-60.000p)$, hvilket giver $p = 3 + C_R/2$.
- Producenten forudser det og maksimerer $(C_R-2)\cdot D$, hvilket giver **$C_R = \$4$**.
- Så bliver **$p = \$5$**, $D = 60.000$.
- Profit: detailhandleren \$60.000 + producenten \$120.000 = **\$180.000**.

**Koordineret (som én virksomhed):**
- Maksimér $(p-2)(360.000-60.000p)$, hvilket giver **$p = \$4$**, $D = 120.000$.
- Kædens profit = **\$240.000**, altså +\$60.000.

**Problemet er double marginalization:** Begge parter lægger en margin på, så slutprisen bliver for høj og salget for lavt.

**To løsninger:**
1. **Two-part tariff:** Producenten sælger til marginalomkostning, $C_R = \$2$, og opkræver et fast gebyr på \$180.000. Detailhandleren vælger så $p = \$4$ og tjener 240.000 − 180.000 = \$60.000.
2. **Volume-baseret rabat:** \$4 pr. enhed, hvis der købes under 120.000/år, og **\$3,50**, hvis der købes 120.000 eller mere. Detailhandleren vælger $p = 4$ og sælger 120.000. Detailhandleren tjener $(4-3{,}5)\cdot120.000 = \$60.000$, og producenten tjener $(3{,}5-2)\cdot120.000 = \$180.000$.

I begge tilfælde **stiger kædens profit fra 180.000 til 240.000**. Gevinsten går her til producenten, men den kan deles anderledes.

## 4. Afrunding (ca. 2 min)
- **Commodity** → lot-size rabat, som sænker ordre- og lageromkostninger.
- **Markedsmagt** → volume-rabat eller two-part tariff, som fjerner double marginalization.
- **Ulempe ved lot-size rabatter:** De øger lotstørrelser og lager og bidrager til **bullwhip** (kap. 10). Volume-baserede rabatter over en *længere periode* (fx et år) er bedre end lot-size rabatter, fordi de ikke presser køberen til store enkeltordrer. Ved periodeskift kan der dog opstå en "hockey stick"-effekt, hvor køberne skynder sig at nå tærsklen.

## Typiske opfølgende spørgsmål
- **Hvorfor sænker producenten prisen til \$2 i en two-part tariff?** Så marginalomkostningen for detailhandleren svarer til kædens marginalomkostning. Detailhandleren vælger da kædens optimale pris.
- **Hvad er double marginalization?** Når to uafhængige led begge lægger en markup på, bliver slutprisen højere end den pris, der maksimerer kædens profit.
- **Hvorfor kun en så lille rabat i 11-9?** Detailhandlerens ekstra omkostninger ved at øge $Q$ er små (\$264), så det er nok at dække dem.

## Øv dig
- [ ] Regn 11-9: $Q_R$, $Q^*$, omkostninger og rabatten \$2,9978.
- [ ] Udled $p = 3 + C_R/2$ og $C_R = 4$ på papir.
- [ ] Forklar de to løsninger i 11-10, og hvorfor begge giver \$240.000.

---

# 7.1 Example 12-3: Safety inventory for et ønsket cycle service level

> **Kernebudskab:** Safety inventory beskytter mod **usikkerhed i efterspørgslen i lead time**. For et ønsket CSL findes den som $ss = F_S^{-1}(CSL)\cdot\sigma_L$, hvor $\sigma_L = \sqrt{L}\,\sigma_D$. Genbestillingspunktet er ROP = $D_L + ss$.

**Tidsplan (15 min):** Hvorfor safety inventory 0–3 · Begreber og formler 3–7 · Ex 12-3 7–11 · Følsomhed og afrunding 11–15

## 1. Hvorfor safety inventory? (ca. 3 min)
- Efterspørgslen er usikker. Hvis vi kun havde lager til den *forventede* efterspørgsel i lead time, ville vi løbe tør i halvdelen af cyklerne (CSL = 50 %).
- **Safety inventory** er ekstra lager, der dækker efterspørgsel *over* den forventede.
- **Trade-off:** Mere ss giver højere tilgængelighed, men koster mere i lageromkostninger (link til 2.2).

## 2. Begreber og formler (ca. 4 min)
- **Continuous review:** Lageret overvåges hele tiden. Når det når **ROP**, bestilles en fast mængde $Q$.
- **Cycle service level (CSL):** Sandsynligheden for, at der *ikke* opstår en stockout i en genopfyldningscyklus.
- Efterspørgsel pr. periode: $D \sim N(\mu=D, \sigma_D)$, lead time $L$ perioder (uafhængig efterspørgsel fra periode til periode):
$$D_L = D\cdot L,\qquad \sigma_L = \sqrt{L}\,\sigma_D$$
$$ss = F_S^{-1}(CSL)\cdot\sigma_L = \text{NORMSINV}(CSL)\cdot\sigma_L$$
$$ROP = D_L + ss$$
- **Hvorfor $\sqrt{L}$?** Varianser lægges sammen, standardafvigelser gør ikke. Over $L$ uafhængige uger er variansen $L\sigma_D^2$.
- Omvendt (Ex 12-1): Givet ss kan CSL beregnes som $CSL = F(ROP, D_L, \sigma_L) = \text{NORMDIST}(ROP, D_L, \sigma_L, 1)$.

## 3. Example 12-3 (ca. 4 min)
- Ugentlig efterspørgsel efter Lego hos Walmart: $D = 2.500$, $\sigma_D = 500$.
- Lead time: $L = 2$ uger. Continuous review. **Ønsket CSL = 90 %**.

Beregning:
- $D_L = 2.500 \cdot 2 = 5.000$
- $\sigma_L = \sqrt{2}\cdot 500 = 707$
- $F_S^{-1}(0{,}90) = 1{,}28$
- $ss = 1{,}28 \cdot 707 = $ **906 enheder**
- $ROP = 5.000 + 906 = $ **5.906 enheder**

**Fortolkning:**
- Når lageret når 5.906, bestilles der.
- I 9 ud af 10 cyklusser når vi at få varer, inden lageret løber tør.
- Gennemsnitligt lager = $Q/2 + ss$. Med fx $Q = 10.000$ er det 5.000 + 906 = 5.906.

## 4. Følsomhed og afrunding (ca. 4 min)
| CSL | z | ss |
|---|---|---|
| 90 % | 1,28 | 906 |
| 95 % | 1,64 | 1.163 |
| 99 % | 2,33 | 1.645 |

- Fra 90 % til 99 % CSL **stiger ss med 82 %**. Det viser det aftagende udbytte.
- **ss falder, hvis:**
  - **Lead time** reduceres. Fra 2 til 1 uge falder $\sigma_L$ med 29 %, fordi den går fra $\sqrt2$ til 1.
  - **Usikkerheden** reduceres med bedre prognoser.
  - Efterspørgslen **aggregeres** (square-root law).
- **Usikker lead time:** Hvis $L$ selv varierer med $s_L$, gælder $\sigma_L=\sqrt{L\sigma_D^2 + D^2s_L^2}$. Usikkerhed i lead time kan dominere.
- **Afrunding:** Safety inventory er en *bevidst* beslutning om service, og den skal ses sammen med omkostningen ved stockouts.

## Typiske opfølgende spørgsmål
- **Hvad er forskellen på CSL og fill rate?** CSL er andelen af cyklusser uden stockout. Fill rate er andelen af efterspørgslen, der opfyldes fra lager (se 7.2). Fill rate er typisk meget højere end CSL.
- **Påvirker Q safety inventory?** Ikke ved et givet CSL. Men ved en given fill rate betyder et større $Q$ færre cyklusser, så der skal mindre ss til.
- **Hvorfor er efterspørgslen normalfordelt?** Det er en antagelse. Den passer bedst, når efterspørgslen er stor og summen af mange uafhængige kunder.

## Øv dig
- [ ] Regn 12-3 på papir på 2 minutter.
- [ ] Forklar, hvorfor $\sigma_L = \sqrt{L}\sigma_D$ og ikke $L\sigma_D$.
- [ ] Brug appen: hvad sker der med ss, hvis L falder fra 2 til 1 uge?

---

# 7.2 CSL, fill rate og order fill rate samt continuous og periodic review

> **Kernebudskab:** Produkttilgængelighed måles på tre måder:
> - **Cycle service level (CSL):** Hvor stor en andel af cyklusserne har ingen stockout?
> - **Product fill rate:** Hvor stor en andel af efterspørgslen opfyldes fra lager?
> - **Order fill rate:** Hvor stor en andel af ordrerne opfyldes helt fra lager?
>
> Safety inventory beregnes forskelligt alt efter om lageret styres med **continuous review** (ROP og fast Q) eller **periodic review** (fast interval T og order-up-to level). Den største forskel er, at periodic review skal beskytte i **T + L** perioder i stedet for kun L.

**Tidsplan (15 min):** Tre mål for service 0–6 · Continuous review 6–10 · Periodic review 10–13 · Sammenligning 13–15

## 1. Tre mål for service (ca. 6 min)
**Cycle Service Level (CSL)**
- Andelen af genopfyldningscyklusser, der ender **uden stockout**.
- $CSL = P(\text{efterspørgsel i lead time} \le ROP)$.
- Eksempel: CSL = 90 % betyder, at der er stockout i 1 ud af 10 cyklusser. Det siger ikke, *hvor mange* enheder der mangler.

**Product fill rate (fr)**
- Andelen af **produktefterspørgslen**, der opfyldes fra lager.
$$fr = 1 - \frac{ESC}{Q},\qquad ESC = -ss\left[1-F_S\!\left(\tfrac{ss}{\sigma_L}\right)\right]+\sigma_L f_S\!\left(\tfrac{ss}{\sigma_L}\right)$$
- ESC (expected shortage per cycle) er det forventede antal enheder, der mangler pr. cyklus.
- Eksempel (Ex 12-2): $Q = 10.000$, $ss = 1.000$, $\sigma_L = 707$ giver CSL ≈ 92 %, ESC ≈ 25, og **fr ≈ 99,75 %**.
- **Fill rate er typisk meget højere end CSL.** Selv i cyklusser med stockout mangler der kun få enheder sidst i cyklussen.

**Order fill rate**
- Andelen af **ordrer**, der opfyldes helt fra lager. Det er relevant, når en ordre indeholder flere produkter. Ordren er kun fuldt opfyldt, hvis *alle* varer er på lager.
- Order fill rate ≤ product fill rate. Med uafhængige produkter er order fill rate ≈ produktet af de enkelte fill rates. Hvis en kunde fx køber 3 varer, hver med fr = 98 %, er order fill rate ≈ 94 %.

## 2. Continuous review (ca. 4 min)
- Lageret overvåges hele tiden. Når **inventory position** (lager + bestilt − restordrer) når **ROP**, bestilles **Q** (typisk EOQ).
- Usikkerheden skal dækkes i **lead time L**:
$$ss = F_S^{-1}(CSL)\cdot\sqrt{L}\,\sigma_D,\qquad ROP = D_L + ss$$
- **Tegn:** savtakket lagerkurve. Q kommer hver gang ROP rammes, så tidspunktet varierer, men mængden er fast.
- Fordele: lavere safety inventory og passer til A-varer. Ulempe: kræver løbende overvågning (IT-systemer, POS-data).

## 3. Periodic review (ca. 3 min)
- Lageret tjekkes med **fast interval T**. Der bestilles så meget, at lageret når **order-up-to level (OUL)**.
- Usikkerheden skal dækkes i **T + L**, fordi der ikke bestilles igen før om T perioder, og ordren tager L at nå frem:
$$ss = F_S^{-1}(CSL)\cdot\sqrt{T+L}\,\sigma_D,\qquad OUL = D_{T+L}+ss$$
- **Eksempel:** $D = 2.500$, $\sigma_D = 500$, $L = 2$, $T = 4$ uger, CSL = 90 %:
  - $\sigma_{T+L}=\sqrt6\cdot500=1.225$
  - $ss = 1{,}28\cdot1.225=$ **1.570**
  - $OUL = 15.000+1.570=16.570$
  - Sammenlign med continuous review: ss = 906.
- **Tegn:** lagerkurve, hvor tiden mellem ordrer er fast, mens mængden varierer.
- Fordele: let at administrere, og flere varer kan samles i én ordre til samme leverandør. Det passer til B- og C-varer.

## 4. Sammenligning og afrunding (ca. 2 min)
| | Continuous | Periodic |
|---|---|---|
| Hvad er fast? | Q (mængde) | T (tid) |
| Hvad varierer? | Tid mellem ordrer | Ordremængde |
| Beskyttelsesperiode | L | T + L |
| Safety inventory | Lavere | Højere |
| Administration | Kræver overvågning | Enkel, nem at samle ordrer |

- Valget afhænger af værdien af varen (ABC-analyse) og omkostningen ved at overvåge lageret.
- Det rigtige servicemål afhænger af situationen. B2B-kunder med store ordrer går op i order fill rate. Detailhandlen går op i fill rate.

## Typiske opfølgende spørgsmål
- **Hvorfor er fill rate højere end CSL?** CSL tæller enhver stockout som et "nederlag". Fill rate tæller, hvor *meget* der mangler, og stockouts sker typisk kun i slutningen af en cyklus.
- **Hvorfor $T+L$?** Den næste mulighed for at bestille er om $T$ perioder, og så tager det yderligere $L$ perioder at få varerne.
- **Hvordan påvirker $Q$ fill rate?** Større $Q$ betyder færre cyklusser pr. år og færre chancer for stockout, så fill rate bliver højere for den samme ss.

## Øv dig
- [ ] Definér de tre servicemål med ét eksempel hver.
- [ ] Skriv de to ss-formler og forklar forskellen ($L$ vs. $T+L$).
- [ ] Brug appen: sammenlign ss for continuous og periodic review ved samme CSL.

---

# 8.1 Cost of Overstocking og Cost of Understocking

> **Kernebudskab:** Når et produkt kun kan sælges i én periode (sæsonvarer, mode, aviser), skal man vælge en bestillingsmængde *før* efterspørgslen kendes. Valget handler om at balancere to omkostninger:
> - **$C_o$ (overstocking):** tabet pr. enhed, der *ikke* bliver solgt.
> - **$C_u$ (understocking):** den tabte margin pr. enhed, man *kunne* have solgt.
>
> Det optimale service level er $CSL^* = \dfrac{C_u}{C_u+C_o}$.

**Tidsplan (15 min):** Hvornår relevant 0–2 · Definitioner 2–6 · Marginalanalysen 6–10 · Eksempler og påvirkning 10–15

## 1. Hvornår er det relevant? (ca. 2 min)
- **Single-period** beslutninger: Der er én chance for at bestille før sæsonen. Eksempler er skiparkaer, julevarer, modetøj, aviser og madvarer med kort holdbarhed. Modellen kaldes "newsvendor"-problemet.
- Overskudsvarer sælges til en lav **salvage value** (restværdi) efter sæsonen.
- Skal man bestille for meget eller for lidt? Det afhænger af, hvad det *koster* at tage fejl i hver retning.

## 2. Definitioner (ca. 4 min)
- $p$ = salgspris, $c$ = indkøbspris/kostpris, $s$ = salvage value (restværdi pr. usolgt enhed).
- **Cost of overstocking:**
$$C_o = c - s$$
  Tabet på hver usolgt enhed: vi betalte $c$ og får kun $s$ tilbage.
- **Cost of understocking:**
$$C_u = p - c$$
  Den mistede fortjeneste på hver efterspurgt enhed, vi ikke havde.
- **Udvidelser:**
  - $C_u$ kan omfatte **goodwill-tab**, fx at kunden ikke vender tilbage.
  - $C_o$ kan omfatte **lager- og bortskaffelsesomkostninger**.
  - Er der mulighed for *backorder*, falder $C_u$.

## 3. Marginalanalysen (ca. 4 min)
- Overvej at bestille **én enhed mere** ud over $O$:
  - Med sandsynlighed $P(D > O) = 1 - F(O)$ bliver den solgt, og vi tjener $C_u$.
  - Med sandsynlighed $P(D \le O) = F(O)$ bliver den ikke solgt, og vi taber $C_o$.
- Forventet gevinst ved den ekstra enhed: $(1-F(O))C_u - F(O)C_o$.
- Bestil, så længe det er positivt. Optimum er, når det er lig 0:
$$F(O^*) = CSL^* = \frac{C_u}{C_u+C_o}$$
- For normalfordelt efterspørgsel: $O^* = F^{-1}(CSL^*, \mu, \sigma) = \mu + z\sigma$.
- **Intuition:**
  - Høj margin (stor $C_u$) betyder, at vi bestiller meget og accepterer risikoen for overskud.
  - Lav restværdi (stor $C_o$) betyder, at vi bestiller forsigtigt.
  - Er $C_u = C_o$, er $CSL^* = 50\,\%$, og vi bestiller præcis den forventede efterspørgsel.

## 4. Eksempler og hvordan man påvirker dem (ca. 5 min)
- **Høj margin, lav restværdi:** Modetøj med $p = 100$, $c = 30$, $s = 10$ giver $C_u = 70$, $C_o = 20$ og CSL* = 78 %.
- **Lav margin, høj risiko:** Brød med $p = 20$, $c = 15$, $s = 0$ giver $C_u = 5$, $C_o = 15$ og CSL* = 25 %, så der bestilles under det forventede.
- **Ex 13-1** (se 8.2): Parkaer med $C_u = 150$ og $C_o = 20$ giver CSL* = 88 %.

**Hvordan kan kæden forbedre resultatet?**
- **Øge restværdien** (lavere $C_o$): sælge overskud i outlets, i andre lande eller tilbage til leverandøren via **buyback-kontrakter**.
- **Reducere usikkerheden** (lavere σ): bedre prognoser, *quick response* (bestille flere gange i sæsonen), postponement, tailored sourcing.
- **Kontrakter** (kap. 10): buyback og revenue sharing kan få detailhandleren til at bestille mere, tættere på kædens optimum.

## Typiske opfølgende spørgsmål
- **Hvorfor bestiller man ikke bare den forventede efterspørgsel?** Fordi de to fejl koster forskelligt. Hvis det er meget dyrere at gå glip af salg, skal vi bestille mere end det forventede.
- **Hvad sker der, hvis $s > c$?** Så er der ingen risiko ved at overbestille, og man bør bestille uendeligt meget. Det er ikke realistisk.
- **Hvordan hænger det sammen med safety inventory?** Begge handler om at balancere tilgængelighed og omkostninger. Her er CSL **beregnet ud fra omkostningerne** og ikke givet på forhånd.

## Øv dig
- [ ] Definér $C_o$ og $C_u$ og forklar marginalanalysen på 2 minutter.
- [ ] Udled $CSL^* = C_u/(C_u+C_o)$ på papir.
- [ ] Nævn 3 måder at sænke $C_o$ eller usikkerheden på.

---

# 8.2 Example 13-1: optimalt service level for sæsonvarer

> **Kernebudskab:** For en sæsonvare beregnes det optimale cycle service level ud fra **cost of understocking** og **cost of overstocking**: $CSL^* = C_u/(C_u+C_o)$. For L.L. Beans parkaer giver det CSL* ≈ **88 %**, og den optimale ordremængde er **O* ≈ 468**. Det er mere end middelefterspørgslen på 350, fordi det er meget dyrere at gå glip af et salg end at have en parka i overskud.

**Tidsplan (15 min):** Problemet 0–3 · Teori 3–7 · Beregning 7–12 · Fortolkning og følsomhed 12–15

## 1. Problemet (ca. 3 min)
- L.L. Bean (postordre- og detailvirksomhed) skal bestille parkaer til vintersæsonen. Der er **kun én bestilling** pga. lang lead time fra leverandøren.
- Data (cirka som i bogen, efterspørgslen i hundreder):
  - Salgspris $p = \$250$
  - Kostpris $c = \$100$
  - Usolgte parkaer sælges på udsalg efter sæsonen til $s = \$80$
  - Efterspørgslen er normalfordelt med $\mu = 350$ og $\sigma = 100$
- **Spørgsmål:** Hvor mange skal der bestilles?

## 2. Teori (ca. 4 min)
- **Cost of understocking:** $C_u = p - c$. Det er den mistede fortjeneste.
- **Cost of overstocking:** $C_o = c - s$. Det er tabet på en usolgt enhed.
- Marginalanalyse: Bestil én enhed mere, så længe den forventede gevinst er positiv, dvs. $P(D > O)C_u > P(D \le O)C_o$.
- Optimum:
$$CSL^* = P(D \le O^*) = \frac{C_u}{C_u+C_o}$$
$$O^* = F^{-1}(CSL^*,\mu,\sigma) = \mu + z^*\sigma$$

## 3. Beregning (ca. 5 min)
- $C_u = 250 - 100 = \$150$
- $C_o = 100 - 80 = \$20$
$$CSL^* = \frac{150}{150 + 20} = 0{,}882$$
- $z^* = F_S^{-1}(0{,}882) \approx 1{,}18$ (i Excel: `NORMSINV(0.882)`)
$$O^* = 350 + 1{,}18\cdot100 \approx 468$$
- **L.L. Bean bør bestille ca. 468 parkaer** (i bogens enheder), dvs. 118 mere end middelefterspørgslen.
- Excel: `NORMINV(0.882, 350, 100)` = 468.

**Fortolkning:**
- I 88 % af tilfældene er der nok parkaer til hele sæsonen.
- Det betaler sig at acceptere en risiko for overskud, fordi hver ekstra parka kun koster \$20 at have tilovers, men giver \$150, hvis den bliver solgt.

## 4. Følsomhed og afrunding (ca. 3 min)
| Restværdi s | $C_o$ | CSL* | O* |
|---|---|---|---|
| \$80 | 20 | 0,88 | 468 |
| \$50 | 50 | 0,75 | 417 |
| \$0 | 100 | 0,60 | 375 |

- Lavere restværdi giver højere $C_o$, så der bestilles mindre.
- Højere usikkerhed (σ) betyder, at der bestilles *mere* end middel, når CSL* > 50 %, og *mindre*, når CSL* < 50 %.
- **Hvordan kan L.L. Bean gøre det bedre?**
  - Bedre prognoser med lavere σ.
  - Flere bestillinger i sæsonen (quick response).
  - Højere restværdi gennem outlets eller buyback fra leverandøren.

*(Spørgsmålet beder dig om ikke at beregne expected profit. Hvis censor spørger, så nævn, at forventet profit kan beregnes, og at den er maksimal ved O*.)*

## Typiske opfølgende spørgsmål
- **Hvorfor 468 og ikke 350?** Fordi $C_u \gg C_o$. Det er langt dyrere at løbe tør end at have parkaer tilovers.
- **Hvad hvis efterspørgslen ikke er normalfordelt?** Brug den empiriske fordeling og find den mængde, hvor den kumulative sandsynlighed er 0,882.
- **Hvad er forskellen mellem CSL her og i kap. 12?** I kap. 12 er CSL et *givet* mål. Her er det *beregnet* som det økonomisk optimale.

## Øv dig
- [ ] Regn hele eksemplet på 2 minutter.
- [ ] Forklar, hvorfor $C_u/(C_u+C_o)$ giver optimum.
- [ ] Brug appen: ændr restværdien og se O* falde.

---

# 9.1 Direct Shipment Network to Single Destination og Direct Shipping with Milk Runs (Example 14-1)

> **Kernebudskab:** Ved **direkte forsendelse** sendes varerne direkte fra hver leverandør til hver modtager. Det er enkelt, og der er ingen mellemlagre. Men hvis ordrerne er små, kører lastbilerne halvtomme, eller de skal vente, til der er nok til et fuldt læs (stor cycle inventory). **Milk runs** løser det ved at lade én lastbil hente hos flere leverandører eller levere til flere modtagere på samme tur. Det sænker transportomkostningerne for små forsendelser.

**Tidsplan (15 min):** Ramme 0–2 · Direct shipment 2–6 · Milk runs 6–9 · Example 14-1 9–13 · Afrunding 13–15

## 1. Ramme (ca. 2 min)
- Kap. 14 beskriver flere designs for transportnetværk:
  1. Direct shipment network to single destination
  2. Direct shipping with milk runs
  3. All shipments via intermediate DC (lager eller cross-dock)
  4. Shipping via DC using milk runs
  5. Tailored network
- **Afvejningen:** transportomkostninger, lageromkostninger (cycle inventory), håndtering og responstid.

## 2. Direct shipment network to single destination (ca. 4 min)
**Tegn:** leverandører til venstre og butikker til højre. Hver leverandør har en pil direkte til hver butik.
- **Fordele:**
  - Ingen mellemlagre, så ingen omkostninger til håndtering.
  - Kort transit, fordi hver forsendelse går direkte.
  - Simpel koordinering, fordi hver forsendelse er uafhængig af de andre.
- **Ulemper:**
  - Hver forsendelse skal betale sin egen **faste omkostning**.
  - Er butikkens efterspørgsel fra hver leverandør lille, er der to dårlige muligheder:
    - (a) **Fulde lastbiler (TL)**, men sjældent. Det giver **meget cycle inventory**.
    - (b) **Halvtomme lastbiler eller LTL/pakke**. Det giver **høj transportomkostning pr. enhed**.
- **Passer bedst**, når hver butik er stor nok til at fylde en lastbil fra hver leverandør (stor efterspørgsel pr. leverandør-butik-par). Eksempel: store supermarkeder, der modtager hele læs fra store leverandører.

## 3. Direct shipping with milk runs (ca. 3 min)
**Tegn:** én lastbil kører en rute: leverandør A → B → C → butik (inbound milk run). Eller: fra én leverandør → butik 1 → 2 → 3 (outbound milk run).
- **Milk run:** én lastbil henter hos *flere leverandører* til én modtager eller leverer fra én leverandør til *flere modtagere*.
- **Fordele:**
  - Lastbilen bliver fyldt, selv om hver forsendelse er lille. Der er færre faste omkostninger pr. enhed og mindre cycle inventory.
  - Mindre lager, fordi der kan leveres oftere.
- **Ulemper:**
  - Mere koordinering og ruteplanlægning.
  - Ekstra omkostning pr. stop.
  - Længere rute.
- **Eksempler:**
  - Toyota bruger inbound milk runs fra lokale leverandører til samlefabrikkerne.
  - Seven-Eleven Japan leverer fra DC'er til mange butikker på én rute.

## 4. Example 14-1 (ca. 4 min)
*(Det præcise eksempel og tallene skal tjekkes i din udgave. Herunder er et taleksempel med samme logik, som du kan gennemgå.)*
- **Situation:** En detailhandler har **4 butikker**, som hver modtager **1.000 enheder/uge** fra **én leverandør**. Varen koster \$100, og holding cost er 25 %/år, dvs. \$0,48 pr. enhed pr. uge. Lastbilen kan rumme 4.000 enheder og koster **\$1.000 pr. tur + \$100 pr. stop**.
- **Direct shipment med fulde lastbiler:** Hver butik får 4.000 enheder hver 4. uge.
  - Pr. butik: 1 tur pr. 4 uger til \$1.100, altså \$275 pr. uge.
  - Gennemsnitligt cycle inventory 2.000 enheder, altså \$960 pr. uge.
  - **Pr. uge for 4 butikker ≈ \$4.940.**
- **Milk run:** Én lastbil besøger alle 4 butikker hver uge med 1.000 til hver.
  - Transport \$1.000 + 4 × \$100 = \$1.400 pr. uge.
  - Cycle inventory 500 pr. butik: 4 × 500 × 0,48 = \$960 pr. uge.
  - **I alt ≈ \$2.360 pr. uge.**
- **Pointe:** Milk run giver hyppigere levering med samme fyldte lastbil. Det betyder lavere lager og lavere omkostninger i alt, især når hver butik har lav efterspørgsel.

## 5. Afrunding (ca. 2 min)
- **Direct shipment** er bedst, når der er **store forsendelser pr. par**.
- **Milk runs** er bedst, når forsendelserne er **små**, og når leverandører/butikker ligger **tæt på hinanden**.
- Ved mange leverandører og butikker kan det være bedre med et **DC eller cross-dock**, hvor varerne samles og fordeles.
- Den overordnede afvejning er **transport vs. lager vs. koordinering**.

## Typiske opfølgende spørgsmål
- **Hvorfor giver direct shipment ofte stort cycle inventory?** Hvis man vil fylde lastbilen, skal man bestille store mængder sjældent. Cycle inventory = Q/2.
- **Hvad er forskellen på inbound og outbound milk runs?** Inbound: én lastbil henter hos flere leverandører. Outbound: én lastbil leverer til flere modtagere.
- **Hvornår er cross-docking bedre?** Når der er mange leverandører og mange butikker. Varerne samles i fulde lastbiler ind til cross-docket og fordeles derfra i fulde lastbiler ud til butikkerne.

## Øv dig
- [ ] Tegn de to netværk med pile.
- [ ] Forklar de to dårlige muligheder ved direct shipment med små ordrer.
- [ ] Regn taleksemplet igennem og forklar forskellen.

---

# 9.2 Stepping-Stone-metoden i transportmodellering

> **Kernebudskab:** Transportproblemet handler om at fordele varer fra **fabrikker med kapacitet** til **lagre med efterspørgsel** så billigt som muligt. Stepping-stone-metoden starter med en **mulig løsning** (fx fra northwest corner) og tester hver tom celle med en **lukket sti**. Hvis en tom celle har et negativt **improvement index**, flyttes der varer til den. Det gentages, til ingen tom celle kan forbedre løsningen.

**Tidsplan (15 min):** Transportproblemet 0–3 · Startløsning 3–5 · Stepping-stone 5–9 · Eksempel 9–13 · Specialtilfælde og afrunding 13–15

## 1. Transportproblemet (ca. 3 min)
- $m$ kilder med udbud $s_i$, $n$ destinationer med efterspørgsel $d_j$ og omkostning $c_{ij}$ pr. enhed.
- **Minimér** $\sum_i\sum_j c_{ij}x_{ij}$, så $\sum_j x_{ij} = s_i$ og $\sum_i x_{ij} = d_j$.
- Hvis udbud ≠ efterspørgsel, tilføjes en **dummy**-række eller -kolonne med omkostning 0.
- Det er en LP-model, der fx kan løses i Solver. Stepping-stone er en manuel procedure.

## 2. Startløsning: northwest corner rule (ca. 2 min)
- Start i øverste venstre celle. Allokér så meget som muligt: $\min(s_i, d_j)$.
- Gå til højre, hvis rækken stadig har udbud tilbage, ellers nedad. Fortsæt, til alt er fordelt.
- Ignorerer omkostningerne, så løsningen er sjældent god.
- Alternativ: **intuitive lowest-cost**, hvor man starter i den billigste celle.

## 3. Stepping-stone-proceduren (ca. 4 min)
1. **Vælg en tom celle.**
2. **Find en lukket sti:** Start i den tomme celle og gå kun vandret og lodret. "Spring" kun mellem **optagne** celler, og vend tilbage til startcellen.
3. Sæt skiftevis **+** og **−** på hjørnerne af stien. Den tomme celle får +.
4. **Improvement index** = summen af omkostninger med + minus summen af omkostninger med −. Det svarer til, hvad det koster at flytte *én enhed* ind i den tomme celle.
5. Gentag for alle tomme celler.
6. Hvis **alle indeks ≥ 0**, er løsningen **optimal**.
7. Ellers: Vælg cellen med det **mest negative** indeks. Find den **mindste mængde i en −-celle** på stien. Læg den mængde til i +-cellerne og træk den fra i −-cellerne. Start forfra fra trin 1.

## 4. Eksempel: Arizona Plumbing (Heizer & Render) (ca. 4 min)
| fra \ til | Albuquerque | Boston | Cleveland | Udbud |
|---|---|---|---|---|
| Des Moines | 5 | 4 | 3 | 100 |
| Evansville | 8 | 4 | 3 | 300 |
| Fort Lauderdale | 9 | 7 | 5 | 300 |
| Efterspørgsel | 300 | 200 | 200 | 700 |

**Northwest corner:** DA = 100, EA = 200, EB = 100, FB = 100, FC = 200. **Omkostning = \$4.200**.

**Iteration 1 (indeks):**
- DB: +4 −5 +8 −4 = **+3**
- DC: +3 −5 +8 −4 +7 −5 = **+4**
- EC: +3 −4 +7 −5 = **+1**
- FA: +9 −7 +4 −8 = **−2** ← forbedring

Stien for FA er FA(+) → FB(−) → EB(+) → EA(−). Mindste −-mængde er min(100, 200) = 100. Flyt 100 enheder.
→ DA 100, EA 100, EB 200, FA 100, FC 200. **Omkostning = \$4.000**.

**Iteration 2:** EC: +3 −8 +9 −5 = **−1**. Stien EC(+) → EA(−) → FA(+) → FC(−). Flyt 100.
→ DA 100, EB 200, EC 100, FA 200, FC 100. **Omkostning = \$3.900**.

**Iteration 3:** Alle indeks er ≥ 0 (DB = +2, DC = +2, EA = +1, FB = +1). **Optimal løsning: \$3.900**.

## 5. Specialtilfælde og afrunding (ca. 2 min)
- **Degeneration:** En løsning skal have **m + n − 1** optagne celler. Ellers kan man ikke finde stier for alle tomme celler. Løsning: Sæt et lille "0" i en tom celle og behandl den som optaget.
- **Ubalance:** Tilføj en dummy-kilde eller -destination.
- **Flere optimale løsninger:** Hvis et indeks er 0, findes der en alternativ løsning med samme omkostning.
- **I praksis:** LP-solvere bruges, men stepping-stone viser *logikken*. Improvement index er en form for **reduceret omkostning** (som skyggepriser i LP).

## Typiske opfølgende spørgsmål
- **Hvorfor skal stien vende om ved optagne celler?** For at hver række og kolonne stadig balancerer. Hver + har en − i samme række eller kolonne.
- **Hvad betyder et improvement index på −2?** At flytte én enhed ind i cellen sparer \$2.
- **Hvordan hænger det sammen med Faulkswagon?** Casen fordeler biler fra fabrikker til lagre og markeder. Det er netop et transportproblem.

## Øv dig
- [ ] Gennemgå de syv trin.
- [ ] Regn iteration 1 i hånden.
- [ ] Brug appen: Klik dig gennem alle iterationer.

---

# 9.3 TL- og LTL-transport med Faulkswagon-casen som eksempel

> **Kernebudskab:**
> - **TL (truckload):** Man betaler for hele lastbilen, uanset hvor fuld den er. Der er en høj fast pris pr. tur og en lav pris pr. enhed, *når bilen er fuld*.
> - **LTL (less-than-truckload):** Man betaler pr. vægt eller enhed, og godset konsolideres med andres gods via terminaler. Prisen pr. enhed er højere, men der er ingen omkostning ved tomrum.
>
> TL er billigst til store, regelmæssige forsendelser. LTL er billigst til små forsendelser. Valget påvirker både transportomkostningen og cycle inventory.

**Tidsplan (15 min):** Transportformer 0–2 · TL 2–5 · LTL 5–8 · Sammenligning 8–10 · Faulkswagon 10–14 · Afrunding 14–15

## 1. Transportformer (ca. 2 min)
- Vej, sø, jernbane, luft, pipeline og intermodal. Lastbiltransport opdeles i **TL** og **LTL**.
- Valget afhænger af forsendelsesstørrelse, afstand, hastighed og værdi.

## 2. Truckload (TL) (ca. 3 min)
- Kunden lejer **hele lastbilen** fra A til B.
- **Pris:** fast pr. tur (afhænger af afstanden), *ikke* af mængden. Stordriftsfordelen er altså stor: Prisen pr. enhed falder lineært, indtil bilen er fuld.
- **Fordele:**
  - Lav omkostning pr. enhed ved fuld last.
  - Hurtig og direkte transport uden omlastning.
  - Mindre risiko for skader.
- **Ulemper:**
  - Kræver store forsendelser, hvilket giver stort cycle inventory.
  - Halvtomme biler er dyre.
  - **Tomkørsel på returturen** (empty backhaul) gør, at TL-firmaer prissætter efter balancen i trafikken.
- **Nøgleudfordringer:** udnyttelse, tomkørsel og konsistent service.

## 3. Less-than-truckload (LTL) (ca. 3 min)
- Små forsendelser (typisk 70–7.000 kg) fra flere kunder **konsolideres** i samme lastbil. Netværket er **hub-and-spoke**: afhentning → terminal → linehaul → terminal → levering.
- **Pris:** pr. vægtenhed (cwt) og afhængig af afstand og vareklasse. Der er mængderabatter ved større forsendelser.
- **Fordele:**
  - Betaler kun for den plads, man bruger.
  - Passer til små, hyppige forsendelser, hvilket giver lavt cycle inventory.
- **Ulemper:**
  - Højere pris pr. enhed.
  - **Langsommere** og mindre pålidelig levering pga. omlastning ved terminaler.
  - Større risiko for skader.
- **Nøgleudfordringer:** placering af terminaler, ruteplanlægning og konsolidering.

## 4. Sammenligning og break-even (ca. 2 min)
**Tegn:** omkostning som funktion af forsendelsesstørrelse.
- **TL** er en vandret linje (fast pris pr. bil).
- **LTL** er en stigende linje.
- Skæringspunktet er break-even: Over det er TL billigst.
- **Trade-off ved valg af lotstørrelse:**
  - TL: få, store forsendelser med lav transportomkostning, men højt cycle inventory.
  - LTL: små, hyppige forsendelser med høj transportomkostning, men lavt lager.
  - Totalomkostning = transport + lager. Det minder om EOQ, hvor TL-prisen svarer til en fast ordreomkostning.

## 5. Faulkswagon-casen (ca. 4 min)
*(Casen er kursusspecifik, og jeg har ikke haft filen. Erstat de generelle punkter med casens konkrete tal, fx fragtrater, lastbilkapacitet og afstande fra Excel-arket.)*
- I Faulkswagon-casen skal **færdige biler** (eller komponenter) transporteres fra **fabrikker** via **distributionslagre (DW)** til **markeder/forhandlere**.
- **Inbound** (fabrik → DW): Store, regelmæssige mængder, typisk **TL** (biltransportere) eller tog. Lav omkostning pr. bil.
- **Outbound** (DW → forhandlere): Mindre forsendelser til mange forhandlere, ofte **LTL**-lignende eller med milk runs. Højere omkostning pr. bil pr. km.
- **Det betyder for netværket:**
  - Fordi outbound er dyrere pr. enhed og km end inbound, bør lagrene ligge **tæt på markederne**. Inbound kan godt være længere, fordi den er billig i TL.
  - Det er derfor, at DW-lokaliseringen (12.2) og forholdet mellem transport- og produktionsomkostninger (12.3) hænger sammen med TL/LTL.
- **Øv:** Find i Excel-filen raten for TL og for LTL (pr. bil/km), og beregn, hvor mange biler der skal til, for at TL bliver billigere.

## 6. Afrunding (ca. 1 min)
- TL og LTL er to forskellige omkostningsstrukturer: fast vs. variabel.
- Valget afhænger af forsendelsesstørrelsen og påvirker lager, netværksdesign og placering af lagre.

## Typiske opfølgende spørgsmål
- **Hvorfor er LTL langsommere?** Fordi godset omlastes på terminaler og konsolideres med andres gods.
- **Hvordan kan man få TL-priser på små mængder?** Ved at konsolidere: milk runs, cross-docking, aggregering af flere produkter eller leverandører (se 6.1 og 9.1), eller ved at bruge en 3PL.
- **Hvad er empty backhaul?** Tom returkørsel. Det gør TL dyrere i retninger med ubalance i trafikken.

## Øv dig
- [ ] Forklar forskellen på TL og LTL i omkostningsstruktur, netværk, hastighed og egnethed.
- [ ] Tegn grafen med break-even.
- [ ] **Indsæt Faulkswagon-tallene** her, når du har kigget i Excel-filen.

---

# 10.1 Informationsdeling mod bullwhip-effekten

> **Kernebudskab:** Bullwhip-effekten er, at **variationen i ordrerne vokser**, jo længere op i kæden man kommer. Den skyldes især, at hvert led laver sin prognose ud fra **ordrerne fra leddet under** og ikke ud fra den reelle kundeefterspørgsel. Når **POS-data og prognoser deles**, planlægger alle led ud fra samme information, og forstærkningen falder markant.

**Tidsplan (15 min):** Bullwhip 0–3 · Årsager 3–7 · Informationsdeling 7–12 · Afrunding 12–15

## 1. Hvad er bullwhip-effekten? (ca. 3 min)
- **Tegn:** fire kurver for forbruger → detail → grossist → producent → leverandør, hvor amplituden stiger for hvert led.
- Eksempler:
  - **Procter & Gamble og Pampers:** Babyer bruger bleer jævnt, men ordrerne til P&G svingede kraftigt.
  - **Beer Game:** Spillere skaber store udsving, selv om efterspørgslen kun ændrer sig én gang.
  - **Barilla:** Pastaordrer svingede langt mere end salget i butikkerne.
- **Konsekvenser:**
  - Højere produktions- og lageromkostninger.
  - Længere lead time.
  - Højere transportomkostninger.
  - Dårligere tilgængelighed.
  - Dårligere forhold mellem leddene.
- Det er tegn på en manglende **koordinering** (kap. 10).

## 2. Årsager (ca. 4 min)
Chopra og Meindl grupperer årsagerne i **fem typer hindringer**:
1. **Incentive obstacles:** Lokale mål, fx at sælgerne belønnes for sell-in og ikke for sell-through.
2. **Information processing obstacles:**
   - Prognoser bygger på **ordrer og ikke på faktisk efterspørgsel**. Hvert led "lægger lidt ekstra" på.
   - Information deles ikke.
3. **Operational obstacles:**
   - Store lots (order batching).
   - Lange lead times, som forstærker effekten.
   - **Rationing and shortage gaming:** Når varen er knap, bestiller kunderne mere, end de har brug for.
4. **Pricing obstacles:** Mængderabatter og kampagner skaber *forward buying*.
5. **Behavioral obstacles:** Hvert led reagerer lokalt og overreagerer. Man lærer ikke af fejl og bebrejder hinanden.

(Lee et al. 1997: demand signal processing, order batching, price fluctuations og rationing/shortage gaming.)

## 3. Hvordan informationsdeling reducerer bullwhip (ca. 5 min)
- **Kernen:** Hvis alle led ser den **reelle slutkundeefterspørgsel** (POS-data), kan de lave prognoser ud fra den. De behøver ikke at gætte ud fra forvrængede ordrer.
- **Konkrete tiltag:**
  1. **Deling af POS-data:**
     - Eksempler: Walmart Retail Link (leverandører ser butikkernes salg), P&G og Walmart.
     - Effekten: Leverandørens prognose bliver *ikke* påvirket af detailhandlerens ordrebatching og sikkerhedsmargener.
  2. **Fælles prognose og planlægning (CPFR, Collaborative Planning, Forecasting and Replenishment):**
     - Parterne aftaler én fælles prognose, deler kampagneplaner og koordinerer genopfyldningen.
     - **Undtagelser** (store afvigelser) håndteres i fællesskab.
  3. **Én enkelt aktør styrer genopfyldning** (VMI, se 10.2), så ét prognoseled fjernes.
  4. **Teknologi:** EDI, internet og RFID gør informationen hurtigere og mere præcis.
- **Hvorfor virker det?**
  - Med delt information **kan hvert led ikke længere forstærke signalet**, fordi de bruger den samme kilde.
  - Lead time for information falder, og man ser ændringer hurtigere.
- **Teoretisk:** Chen et al. viser, at variansforstærkningen stiger med lead time og falder med længden af prognosevinduet. Med informationsdeling vokser forstærkningen **lineært** og ikke multiplikativt over leddene.

## 4. Afrunding og begrænsninger (ca. 3 min)
- Informationsdeling *alene* fjerner ikke bullwhip. Den skal kombineres med:
  - **Operationelle tiltag:** mindre lots, kortere lead time og rationering baseret på tidligere salg (ikke på ordrer).
  - **Pricing:** EDLP i stedet for kampagner.
  - **Incitamenter:** Belønning baseret på sell-through.
  - **Tillid** og fælles mål.
- **Barrierer:**
  - Manglende tillid ("de bruger vores data imod os").
  - Forskellige IT-systemer.
  - Omkostninger ved implementering.

## Typiske opfølgende spørgsmål
- **Hvorfor vokser variationen op gennem kæden?** Hvert led opdaterer sin prognose og sin safety stock ud fra ordrerne, så små ændringer forstærkes. Batching og lead times forstærker yderligere.
- **Hvad er CPFR?** En proces, hvor detail og leverandør planlægger salg, prognoser og genopfyldning i fællesskab.
- **Kan bullwhip ske uden informationsforvrængning?** Ja, pga. batching, prisudsving og rationering. Derfor kræver det flere tiltag.

## Øv dig
- [ ] Tegn bullwhip-figuren og forklar P&G-eksemplet.
- [ ] Nævn de fem typer hindringer.
- [ ] Brug appens simulator: slå informationsdeling til og fra og sammenlign variansen.

---

# 10.2 VMI og CRP mod bullwhip-effekten

> **Kernebudskab:** **Continuous Replenishment Programs (CRP)** og **Vendor-Managed Inventory (VMI)** flytter genopfyldningsbeslutningen *op* i kæden, til leverandøren eller grossisten. Leverandøren genopfylder ud fra **faktiske salg eller lagerdata** og ikke ud fra detailhandlerens ordrer. Det fjerner ét prognoseled og forvrængningen fra ordrebatching, og bullwhip-effekten bliver mindre.

**Tidsplan (15 min):** Bullwhip kort 0–3 · CRP 3–7 · VMI 7–11 · Fordele, risici og eksempler 11–15

## 1. Bullwhip kort (ca. 3 min)
- Variationen i ordrerne vokser op gennem kæden (se 10.1).
- **Årsager:**
  - Prognoser bygget på ordrer.
  - Order batching.
  - Lange lead times.
  - Prisudsving.
  - Rationing/shortage gaming.
- **Én af løsningerne:** Lad én aktør styre genopfyldningen ud fra den reelle efterspørgsel. Det gør CRP og VMI.

## 2. Continuous Replenishment Program (CRP) (ca. 4 min)
- Leverandøren/grossisten **genopfylder løbende** detailhandlerens lager ud fra **POS-data** eller **lagerudtræk fra detailhandlerens DC**, typisk via EDI.
- Genopfyldningen sker i små mængder og ofte (fx dagligt). Det er ikke store kampagneordrer.
- **Hvem ejer lageret?** Ofte stadig detailhandleren.
- **Hvorfor reducerer det bullwhip?**
  - **Prognosen er baseret på faktisk forbrug** og ikke på ordrer. Detailhandlerens forstærkning fjernes.
  - **Mindre batches og hyppige leverancer** udjævner ordrestrømmen.
  - Detailhandleren laver ikke selv forward buying eller ordrer for at "spille" systemet.
- **Eksempler:** Campbell Soup (et af de første CRP-programmer) og grossister i dagligvarebranchen.

## 3. Vendor-Managed Inventory (VMI) (ca. 4 min)
- **Leverandøren styrer og har ansvaret for detailhandlerens lager.** Leverandøren bestemmer, *hvornår* og *hvor meget* der genopfyldes, ofte inden for aftalte grænser (min/max eller service level).
- **Ejerskab:** Lageret kan være ejet af detailhandleren, eller det kan være **consignment**, hvor leverandøren ejer det, indtil det sælges.
- **Hvorfor reducerer det bullwhip?**
  - **Ét led planlægger i stedet for to.** Der er ét prognoseled mindre, og det fjerner forstærkningen mellem detail og leverandør.
  - Leverandøren ser **POS-data**, ikke forvrængede ordrer.
  - Leverandøren kan **koordinere** genopfyldningen af flere kunder og sin egen produktion. Det udjævner produktionen.
- **Eksempler:**
  - **Walmart og P&G:** P&G styrer lager af Pampers og andre varer i Walmarts DC'er.
  - **Barilla:** Indførte JITD (Just-In-Time Distribution), hvor Barilla selv bestemte leverancerne til distributørerne.
  - Kmart og Fred Meyer har også brugt VMI.

## 4. Fordele, risici og eksempler (ca. 4 min)
**Fordele:**
- Mindre bullwhip, lavere lager og bedre tilgængelighed.
- Leverandøren kan planlægge produktionen bedre.
- Detailhandleren sparer administration af indkøb.

**Risici og udfordringer:**
- **Incitamenter:** Leverandøren kan fristes til at *overfylde* lageret, især hvis detailhandleren ejer det. Løsning: consignment, KPI'er og service level-aftaler.
- **Konkurrerende produkter:** Leverandøren tager ikke hensyn til, at et konkurrerende produkt kan substituere. Detailhandleren mister noget af overblikket over kategorien.
- **Tillid og IT:** Kræver datadeling og fælles systemer (EDI, internet).
- **Kmart** droppede efter sigende VMI med flere leverandører, fordi resultaterne skuffede.

**Forskel på CRP og VMI:**

| | CRP | VMI |
|---|---|---|
| Hvem beslutter? | Leverandøren genopfylder ud fra aftalte regler | Leverandøren styrer lageret med fuldt ansvar |
| Ejerskab | Typisk detailhandleren | Detail eller leverandør (consignment) |
| Datagrundlag | POS eller lagerudtræk | POS + lagerstatus |
| Koordinering | Løbende genopfyldning | Fuld genopfyldning og lagerstyring |

## Typiske opfølgende spørgsmål
- **Hvorfor fjerner VMI et prognoseled?** Fordi detailhandleren ikke længere laver sin egen prognose og bestilling. Leverandøren planlægger direkte ud fra slutkundens efterspørgsel.
- **Hvordan undgår man, at leverandøren fylder lageret op?** Consignment (leverandøren betaler for lageret) og performance-mål for lageret.
- **Hvordan hænger det sammen med informationsdeling?** VMI og CRP *forudsætter* informationsdeling og går et skridt videre ved at flytte beslutningen.

## Øv dig
- [ ] Forklar CRP og VMI med ét eksempel hver.
- [ ] Forklar de tre mekanismer, der reducerer bullwhip.
- [ ] Nævn to risici ved VMI og en løsning til hver.

---

# 11.1 Indtægtsstrømme i reverse supply chains (Larsen & Jacobsen 2016)

> **Kernebudskab:** Reverse supply chains, dvs. returnering og genvinding af produkter, ses ofte kun som en **omkostning**. Larsen og Jacobsen (2016) viser, at de også kan skabe **indtægter**. Det sker både direkte, ved salg af genvundne produkter, dele og materialer, og indirekte, ved sparede omkostninger, kundeloyalitet og nye forretningsmodeller.

*(Jeg har ikke haft artiklen. Strukturen herunder følger de typiske kategorier i litteraturen og artiklens hovedpointer. **Tjek mod artiklen, og brug dens egne navne for indtægtsstrømmene.**)*

**Tidsplan (15 min):** Reverse supply chains 0–3 · Typer af returstrømme 3–5 · Indtægtsstrømme 5–12 · Forudsætninger og afrunding 12–15

## 1. Hvad er en reverse supply chain? (ca. 3 min)
- Varestrømmen går *fra kunden tilbage* gennem kæden. Den består typisk af:
  1. indsamling
  2. inspektion og sortering
  3. disposition (genbrug, reparation, renovering, genfremstilling, materialegenvinding eller bortskaffelse)
  4. redistribution og salg
- **Hvorfor er det vigtigt?**
  - Lovkrav, fx WEEE og producentansvar.
  - Bæredygtighed og cirkulær økonomi.
  - Kundeforventninger.
  - **Profit.**
- Mange virksomheder har den holdning, at returer er en ren omkostning. Artiklen udfordrer det.

## 2. Typer af returstrømme (ca. 2 min)
- **Commercial returns:** fejlkøb, fortrydelsesret (e-handel).
- **Warranty/service returns:** reklamationer og reparationer.
- **End-of-use/end-of-lease:** produkter, der kommer retur efter brug eller leasing.
- **End-of-life:** produkter, der er færdige med deres levetid.
- **Overskudslager og produktionsrester.**

## 3. Indtægtsstrømme (ca. 7 min)
Typiske kategorier, som artiklen diskuterer:
1. **Gensalg af returnerede produkter.** Ubrugte eller let brugte varer sælges igen som nye, som "open box" eller med rabat. Det gælder især commercial returns.
2. **Salg af renoverede eller genfremstillede produkter (refurbished/remanufactured).** Produkter repareres eller genopbygges og sælges igen, ofte på et andet marked eller i et andet segment, og typisk med god margin. Eksempler er kopimaskiner (Copymagic, se 11.3), mobiltelefoner og computere.
3. **Høst af reservedele (cannibalization/parts harvesting).** Funktionsdygtige komponenter tages ud og bruges som reservedele i service eller i produktionen. Det sparer indkøb af nye dele.
4. **Salg af materialer (recycling).** Metaller, plast og andre materialer sælges til genvinding.
5. **Sparede omkostninger** (indirekte indtægt):
   - mindre affald og lavere bortskaffelsesomkostninger
   - færre indkøb af nye materialer
   - undgåede bøder eller afgifter
6. **Service- og forretningsmodeller:**
   - **Leasing og product-service systems**, hvor virksomheden beholder ejerskabet og genbruger produktet flere gange.
   - Gebyrer for returnering eller håndtering.
   - Serviceaftaler.
7. **Markedsmæssige gevinster:**
   - Kundeloyalitet og et grønt image.
   - Adgang til nye segmenter, fx prisbevidste kunder til refurbished varer.
   - Data om produktfejl, som giver input til design og kvalitet.

**Tegn:** en cirkel. Den fremadrettede kæde går fra leverandør via producent til kunde, og returkæden går tilbage. Ved hvert genvindingsniveau (genbrug → reparation → genfremstilling → dele → materialer) er der en indtægtsstrøm.

## 4. Forudsætninger og afrunding (ca. 3 min)
- For at indtægterne kan realiseres, skal flere ting være på plads:
  - **Indsamling og kontrol med returerne:** mængde, timing og kvalitet. Returer er usikre.
  - **Design for genvinding:** modulært design, så produkterne er lette at adskille.
  - **Hurtig behandling.** Produkter mister værdi med tiden, især elektronik. Det er "time value of returns".
  - **Markeder for genvundne produkter**, og undgå kannibalisering af salget af nye produkter.
  - **Måling:** Virksomheder har ofte ikke styr på, hvad returerne koster, og hvad de kan give.
- **Konklusion:** Reverse supply chains kan skifte fra at være en **cost center** til at være en **profit center**, men det kræver en bevidst strategi.

## Typiske opfølgende spørgsmål
- **Hvorfor taber returnerede produkter værdi over tid?** Teknologien forældes, og prisen på nye varer falder. Derfor er hurtig behandling vigtig.
- **Hvad er forskellen på refurbishing og remanufacturing?** Refurbishing bringer produktet op til en bestemt kvalitet. Remanufacturing bringer det op til "som ny"-standard med fuld adskillelse og nye dele (se 11.3).
- **Hvorfor gør virksomheder det ikke allerede?** Usikkerhed, manglende data, fokus på kerneforretningen og risiko for at kannibalisere salget af nye varer.

## Øv dig
- [ ] Nævn mindst 6 indtægtsstrømme med ét eksempel hver.
- [ ] Forklar forudsætningerne for, at reverse supply chains kan blive profitable.
- [ ] **Sammenlign med artiklen** og tilpas listen til dens begreber.

---

# 11.2 Cradle-to-Cradle-konceptet (Green Supply Chain Management)

> **Kernebudskab:** Cradle-to-Cradle (C2C), formuleret af McDonough og Braungart (2002), erstatter den lineære "**cradle-to-grave**"-model (tag, lav, smid væk) med lukkede kredsløb, hvor **affald = næring**. Produkter designes, så alle materialer enten kan vende sikkert tilbage til naturen (det **biologiske kredsløb**) eller genbruges i fuld kvalitet i industrien (det **tekniske kredsløb**). Målet er **eco-effectiveness** (gøre det rigtige), ikke kun **eco-efficiency** (gøre det mindre forkert).

*(Jeg har ikke haft kapitlet. Herunder er standardindholdet om C2C. Tjek, om kapitlet fremhæver bestemte eksempler eller begreber.)*

**Tidsplan (15 min):** Fra cradle-to-grave 0–3 · Tre principper 3–7 · To kredsløb 7–10 · Eco-efficiency vs. eco-effectiveness 10–12 · Supply chain og kritik 12–15

## 1. Fra cradle-to-grave til cradle-to-cradle (ca. 3 min)
- **Cradle-to-grave:** Råvarer udvindes, produkter fremstilles, bruges og ender som affald (deponi eller forbrænding). Det er lineært.
- **Cradle-to-cradle:** Produktet er fra starten designet til at blive til et **nyt produkt eller næring** efter brug. Kæden bliver cirkulær.
- **Downcycling vs. upcycling:**
  - Traditionel genanvendelse er ofte **downcycling**: Materialet mister kvalitet, fx når plast bliver til parkbænke, og ender til sidst som affald alligevel.
  - C2C sigter mod **upcycling** eller i det mindste genanvendelse i fuld kvalitet.

## 2. Tre principper (ca. 4 min)
1. **Waste equals food (affald = næring):** Der findes ikke affald. Alt output er input til et andet kredsløb, som i naturen.
2. **Use current solar income (brug vedvarende energi):** Sol, vind og vand i stedet for fossile brændsler.
3. **Celebrate diversity (respektér mangfoldighed):** Design, der tilpasses lokale forhold, kultur og økosystemer. Ingen "one size fits all".

## 3. To kredsløb (ca. 3 min)
**Tegn:** to cirkler ved siden af hinanden.
- **Biologisk kredsløb (biological nutrients):** Materialer, der er **bionedbrydelige og ugiftige**, fx naturfibre og emballage, der kan komposteres. De vender tilbage til jorden og bliver næring for nye planter.
- **Teknisk kredsløb (technical nutrients):** Materialer som metaller og visse polymerer, der **ikke må ende i naturen**. De cirkulerer i et lukket industrielt kredsløb og genbruges i samme kvalitet.
- **Monstrous hybrids:** Produkter, hvor biologiske og tekniske materialer er blandet, så de ikke kan adskilles (fx kompositmaterialer). De skal undgås. Design for adskillelse er nøglen.
- Et relateret begreb er **product-service systems** (fx leasing af tæpper hos Interface eller Desso), hvor producenten beholder ejerskabet til de tekniske materialer og tager dem tilbage.

## 4. Eco-efficiency vs. eco-effectiveness (ca. 2 min)
- **Eco-efficiency:** "Be less bad." Reducér, genbrug og genanvend. Det gør skaden mindre, men skaden er der stadig, og den lineære model bremses kun.
- **Eco-effectiveness:** "Be good." Design produkter, der har en **positiv** effekt, så materialerne cirkulerer uden at gå tabt.
- **Analogi:** At køre langsommere i den forkerte retning (efficiency) i stedet for at vende om (effectiveness).

## 5. Betydning for supply chain og kritik (ca. 3 min)
**Supply chain-implikationer:**
- **Design:** Materialevalg, design for adskillelse og fjernelse af giftige stoffer (samarbejde med leverandører om materialedata).
- **Reverse logistics:** Systemer til indsamling og tilbagetagning (se 11.4).
- **Leverandørrelationer:** Krav og certificering (Cradle to Cradle Certified™ vurderer materialesundhed, genbrug, vedvarende energi, vand og social retfærdighed).
- **Forretningsmodeller:** Leasing og serviceaftaler, så producenten beholder materialerne.

**Kritik:**
- Svært at gennemføre helt. Mange produkter er komplekse.
- Tekniske kredsløb kræver energi og infrastruktur.
- Certificeringen er dyr.
- Kan kritiseres for at være "optimistisk", da den ikke fokuserer på *mindre forbrug*.

## Typiske opfølgende spørgsmål
- **Hvad er forskellen på C2C og genanvendelse?** Genanvendelse er ofte downcycling. C2C designer produkterne fra starten, så materialerne bevarer deres kvalitet i kredsløbet.
- **Hvordan hænger C2C sammen med cirkulær økonomi?** C2C er en af inspirationskilderne (sammen med fx Ellen MacArthur Foundations "butterfly diagram", der også har to kredsløb).
- **Giv et eksempel.** Desso/Interface-tæpper, Herman Miller-stole og Shaw Industries' tæppefliser.

## Øv dig
- [ ] Forklar de tre principper og de to kredsløb.
- [ ] Forklar eco-efficiency vs. eco-effectiveness med en analogi.
- [ ] Giv ét eksempel og én kritik.

---

# 11.3 Copymagics cirkulære forsyningskæde (Thierry et al. 1995)

> **Kernebudskab:** Thierry, Salomon, van Nunen og van Wassenhove (1995, "Strategic Issues in Product Recovery Management", *California Management Review*) bruger **Copymagic**, en europæisk producent af kopimaskiner (et pseudonym), som case. Copymagic tager brugte kopimaskiner tilbage, især fra **leasingaftaler**, og bruger flere **recovery-muligheder**:
> - **remanufacturing** af hele maskiner
> - **genbrug af moduler og dele**
> - **materialegenvinding**
>
> Det lukker kredsløbet og gør product recovery til en profitabel forretning, ikke bare en lovpligtig omkostning.

*(Jeg har ikke haft artiklen. Detaljerne er gengivet fra hukommelsen. **Tjek tal og navne mod artiklen.**)*

**Tidsplan (15 min):** Baggrund 0–3 · Recovery-muligheder 3–7 · Copymagics kæde 7–12 · Udfordringer og læring 12–15

## 1. Baggrund (ca. 3 min)
- Artiklen handler om **product recovery management (PRM)**: håndtering af produkter, komponenter og materialer, som producenten er ansvarlig for efter brug.
- **Drivers:**
  - Miljølovgivning, især i Tyskland og Holland i 1990'erne (tilbagetagningspligt).
  - Kundernes miljøbevidsthed.
  - Økonomisk potentiale.
- Copymagic producerer og **leaser** kopimaskiner i Europa. Leasing betyder, at maskinerne vender tilbage til virksomheden, og det gør genvinding naturligt.

## 2. Recovery-mulighederne i artiklen (ca. 4 min)
Thierry et al. definerer en række muligheder efter hvor meget produktet adskilles:
1. **Direct reuse/resale:** Produktet genbruges eller sælges uden behandling.
2. **Repair:** Produktet repareres til fungerende stand. Kvaliteten er lavere end ny.
3. **Refurbishing:** Produktet bringes op til en bestemt kvalitet. Moduler inspiceres og udskiftes, og teknologien kan opgraderes.
4. **Remanufacturing:** Produktet **adskilles helt**, alle dele inspiceres, og slidte eller forældede dele udskiftes. Produktet får "**som ny**"-kvalitet med samme garanti som nye.
5. **Cannibalization:** Brugbare dele tages ud til reservedele eller til remanufacturing.
6. **Recycling:** Materialerne genvindes, og produkternes identitet forsvinder.
7. **Disposal:** Deponi eller forbrænding.

**Tegn:** et figurdiagram med den fremadrettede kæde (råvarer → dele → moduler → produkt → kunde) og returpile på hvert niveau: produkt (reuse/repair), modul (refurbishing/remanufacturing), dele (cannibalization) og materialer (recycling).

## 3. Copymagics kæde (ca. 5 min)
- **Indsamling:** Maskinerne kommer tilbage, især efter leasing, men også ved handel med nye maskiner (trade-in). Det giver Copymagic **kontrol over timing og mængde** af returerne.
- **Inspektion og sortering:** Maskinerne vurderes for at afgøre den bedste recovery-mulighed:
  - Nyere maskiner i god stand: **remanufacturing** til hele maskiner, der sælges eller leases igen som "remanufactured" med samme garanti, ofte til lavere pris eller på andre markeder.
  - Ældre maskiner: **cannibalization** til moduler og dele, som bruges i remanufacturing og som reservedele.
  - Resten: **recycling** af materialer (metal og plast), og en lille rest går til **disposal**.
- **Integration med produktionen:** Remanufacturing sker i tæt samspil med produktionen af nye maskiner, og genbrugte dele indgår i samme flow.
- **Design:** Copymagic designer nye maskiner, så de er **lette at adskille, modulære og med standardiserede dele**. Det øger genvindingsværdien (design for recovery).
- **Resultat:** Product recovery blev en **profitabel** del af forretningen. Der er lavere materialeomkostninger, nye indtægter fra remanufactured maskiner, og lovkrav bliver overholdt.

## 4. Udfordringer og læring (ca. 3 min)
- **Usikkerhed om returerne:** mængde, timing og kvalitet. Leasing reducerer usikkerheden.
- **Balance mellem udbud og efterspørgsel** af genvundne produkter og dele.
- **Kannibalisering** af salget af nye maskiner. Løsning: andre markeder eller segmenter.
- **Information:** Det er nødvendigt at kende produkternes historik og sammensætning.
- **Teknologisk forældelse** kan gøre genvinding mindre attraktiv.
- **Læring:** PRM skal være en **strategisk** beslutning, der er integreret med design, produktion, marketing og logistik. Det er ikke kun en affaldsfunktion.

## Typiske opfølgende spørgsmål
- **Hvorfor er leasing en fordel for Copymagic?** Virksomheden beholder ejerskabet og får maskinerne tilbage på et kendt tidspunkt. Det gør returstrømmen forudsigelig.
- **Hvad er forskellen på refurbishing og remanufacturing?** Refurbishing bringer produktet op til en bestemt kvalitet. Remanufacturing giver fuld adskillelse og "som ny"-kvalitet.
- **Hvordan hænger det sammen med C2C?** Copymagic lukker det tekniske kredsløb og designer for adskillelse. Det er et eksempel på cirkulær økonomi i praksis.

## Øv dig
- [ ] Nævn de syv recovery-muligheder i rækkefølge.
- [ ] Tegn Copymagics kæde med returpile.
- [ ] Forklar 3 udfordringer og hvordan Copymagic håndterer dem.

---

# 11.4 Reverse logistics og de syv dødssynder (Green Supply Chain Management)

> **Kernebudskab:** **Reverse logistics** er processen med at planlægge, implementere og styre strømmen af varer, materialer og information **fra forbrugspunktet tilbage**, for at genvinde værdi eller bortskaffe korrekt (Rogers & Tibben-Lembke). De "**syv dødssynder**" beskriver de typiske fejl, virksomheder begår, så returerne bliver dyre i stedet for værdiskabende.

*(Jeg har ikke haft kapitlet. Listen over de syv synder herunder bygger på den udbredte version, der stammer fra Gooley (2003) og Reverse Logistics Executive Council. **Tjek den præcise formulering i kapitlet.**)*

**Tidsplan (15 min):** Definition 0–3 · Aktiviteter og årsager 3–7 · De syv dødssynder 7–13 · Afrunding 13–15

## 1. Definition og betydning (ca. 3 min)
- **Reverse logistics:** Varestrømmen går den modsatte vej, fra kunde → detail → producent → genvinding/bortskaffelse.
- **Omfang:** I e-handel kan returraterne for tøj være 20–40 %. Returer udgør en stor omkostning.
- **Hvorfor det er vigtigt:**
  - omkostninger
  - kundetilfredshed
  - miljø (green SCM)
  - lovgivning (WEEE, emballagedirektiver)
  - genvinding af værdi

## 2. Aktiviteter og årsager til returer (ca. 4 min)
- **Årsager til returer:**
  - kundereturer (fortrydelse, forkert størrelse)
  - defekte produkter og reklamationer
  - end-of-lease eller end-of-life
  - overskudslager og ukurante varer
  - emballage og paller, der skal genbruges
  - tilbagekaldelser (recalls)
- **Aktiviteter (proces):**
  1. **Gatekeeping:** Afvis returer, der ikke skal accepteres, så tidligt som muligt.
  2. **Indsamling.**
  3. **Sortering og inspektion.**
  4. **Disposition:** gensalg, renovering, genfremstilling, genbrug af dele, genanvendelse eller bortskaffelse (se 11.3).
  5. **Redistribution.**
- **Netværk:** centraliserede returcentre (CRC) eller decentral behandling.
- **Tegn:** den fremadrettede kæde og en returkæde under den, med gatekeeping og CRC.

## 3. De syv dødssynder i reverse logistics (ca. 6 min)
1. **Ikke at se reverse logistics som et konkurrencevåben.** Returer behandles som en nødvendig omkostning, og man overser værdi og kundeservice. *Løsning:* Gør returer til en del af strategien (fx lette returer som salgsargument).
2. **At tro, at returstyringen slutter, når varen er modtaget.** Varen bliver liggende uden disposition, mister værdi, og der er ingen opfølgning. *Løsning:* Hurtig disposition og analyse af årsager.
3. **At reverse logistics er en "forældreløs" funktion (orphan).** Ingen har ansvaret, ingen budget, og prioriteten er lav. *Løsning:* Tydeligt ejerskab og KPI'er.
4. **Manglende eller dårlige informationssystemer.** Man ved ikke, hvad der kommer retur, hvorfor, hvad det koster, og hvor det er. *Løsning:* IT-systemer, RMA-numre (Return Merchandise Authorization) og sporing.
5. **Langsom behandling og lange cyklustider.** Produkter (især elektronik og mode) **mister værdi hurtigt**, og returer er ofte lavt prioriteret. *Løsning:* Hurtige processer og "time is money".
6. **Mangel på gatekeeping.** Uberettigede returer slipper ind og behandles unødvendigt. *Løsning:* Kontrol ved indgangen, regler og RMA.
7. **At blande returer med den fremadrettede logistik / ikke at bruge specialister.** Returer behandles i de samme processer og faciliteter som det fremadrettede flow og forstyrrer det. Der er ingen ekspertise. *Løsning:* Separate processer eller centrale returcentre, eller outsourcing til en 3PL med ekspertise i reverse logistics.

*(Nogle kilder formulerer synderne lidt anderledes, fx "at undervurdere omkostningerne" eller "at bruge reverse logistics kun til at overholde lovkrav". Hold dig til kapitlets version.)*

## 4. Afrunding (ca. 2 min)
- Reverse logistics kan gå fra cost center til **værdiskabende**:
  - lavere omkostninger
  - indtægter fra genvinding (11.1)
  - kundeloyalitet
  - miljøgevinst
- **Kobling til de andre emner:**
  - C2C (11.2) giver designprincipperne.
  - Copymagic (11.3) er et eksempel.
  - Larsen og Jacobsen (11.1) beskriver indtægterne.

## Typiske opfølgende spørgsmål
- **Hvad er gatekeeping?** At screene returer ved indgangen, så kun berettigede returer kommer ind i systemet. Det sparer håndtering.
- **Hvorfor er hastighed afgørende?** Produkternes værdi falder over tid, især for produkter med kort livscyklus.
- **Hvordan adskiller reverse logistics sig fra den fremadrettede logistik?** Større usikkerhed i mængde, timing og kvalitet, mange oprindelsespunkter og få destinationer. Produkterne er ikke standardiserede, og prisen er ofte uklar.

## Øv dig
- [ ] Giv definitionen og forklar procesens trin.
- [ ] Nævn de syv synder med en løsning til hver.
- [ ] **Tjek listen mod kapitlet.**

---

# 12.1 Faulkswagon: lokalisering af fabrikker med center-of-gravity

> **Kernebudskab:** I Faulkswagon-casen placeres fabrikkerne med **center-of-gravity-metoden**. Hver fabrik placeres i det **mængdevægtede tyngdepunkt** af de markeder (eller lagre), den skal forsyne: $C_x=\sum x_iQ_i/\sum Q_i$, $C_y=\sum y_iQ_i/\sum Q_i$. Resultatet er et *udgangspunkt*, der efterfølgende justeres efter realistiske lokaliteter, omkostninger og kvalitative faktorer.

> ⚠️ **Casen er kursusspecifik, og jeg har ikke haft materialet.** Strukturen og metoden herunder er korrekte, men du skal **selv indsætte casens tal** (koordinater, mængder, antal fabrikker og markeder) fra Excel-filen. Brug appens center-of-gravity-beregner til at regne dem igennem.

**Tidsplan (15 min):** Casens setup 0–3 · Metoden 3–6 · Udregning med casens tal 6–11 · Kritik og justeringer 11–15

## 1. Casens setup (ca. 3 min)
Udfyld fra casen:
- Hvilket produkt (biler), og hvilke **markeder** (lande/regioner med koordinater)?
- **Efterspørgsel** pr. marked (biler/år).
- **Antal fabrikker**, der skal placeres: ___.
- Hvilke markeder hører til hvilken fabrik? Det kan være givet i casen, eller man kan gruppere markederne geografisk (clustering) først.
- Kæden: **fabrik → distribution warehouse (DW) → marked/forhandler**.

## 2. Metoden (ca. 3 min)
1. Læg et **koordinatsystem** over kortet over Europa (eller brug længde- og breddegrader).
2. For hver fabrik: Tag de markeder (eller DW'er), den forsyner, med koordinater $(x_i, y_i)$ og mængde $Q_i$.
3. Beregn
$$C_x=\frac{\sum_i x_iQ_i}{\sum_i Q_i},\qquad C_y=\frac{\sum_i y_iQ_i}{\sum_i Q_i}$$
4. Find den nærmeste realistiske by eller industriområde.
5. (Evt.) Beregn den samlede transportomkostning $\sum d_iQ_iF_i$ for den fundne placering og sammenlign med alternativer.

**Intuition:** Store markeder (fx Tyskland og Frankrig) "trækker" fabrikken mod sig.

## 3. Udregning med casens tal (ca. 5 min)
**Skabelon (indsæt casens tal):**

| Marked | x | y | Q (biler/år) | x·Q | y·Q |
|---|---|---|---|---|---|
| ... | | | | | |
| **Sum** | | | $\sum Q$ = | $\sum xQ$ = | $\sum yQ$ = |

→ Fabrik 1: $C_x$ = ___, $C_y$ = ___, nærmeste by: ___.

Gentag for de andre fabrikker.

**Gennemgang ved eksamen:**
- Vis tabellen.
- Forklar, hvorfor placeringen trækkes mod de største markeder.
- Sammenlign med alternativet (fx eksisterende fabrikker).

## 4. Kritik og justeringer (ca. 4 min)
- Center of gravity **minimerer ikke** reel afstand × mængde. Den minimerer kvadreret afstand. For en mere præcis løsning kan man bruge **gravity-modellen med iteration** (4.2), Weiszfeld, eller Solver.
- **Inbound-transport** (komponenter fra leverandører til fabrikken) indgår ikke, medmindre leverandørerne tages med som punkter. Det kan ændre placeringen.
- **Ens transportrate** antages. Men inbound er ofte TL (billigt) og outbound mere LTL-agtigt (dyrt) (se 9.3). Hvis raterne vægtes, flytter fabrikken sig mod det dyre led.
- **Ignorerer produktionsomkostninger:** Lønnen i fx Østeuropa er lavere end i Vesteuropa. Det kan opveje højere transport (se 12.3).
- **Kvalitative faktorer:** arbejdskraft, infrastruktur, politisk stabilitet og skat. Supplér med factor rating (5.2).
- **Antallet af fabrikker:** Center of gravity giver placering, *givet* antal og tildeling af markeder. Antallet selv afgøres af faste omkostninger og stordriftsfordele, og det kan undersøges med en CPL-model (4.4).

## Typiske opfølgende spørgsmål
- **Hvorfor bruger casen center of gravity og ikke en optimeringsmodel?** Den er simpel, gennemsigtig og giver et godt startpunkt. Den kan forfines bagefter.
- **Hvad sker der, hvis efterspørgslen i et marked stiger?** Fabrikken flytter sig mod det marked, proportionalt med andelen af den samlede mængde.
- **Hvordan ville du forbedre modellen?** Inkludér transportrater og inbound, og iterér med gravity-modellen. Kombinér med produktionsomkostninger og kvalitative faktorer.

## Øv dig
- [ ] **Udfyld tabellen med casens tal** og regn i appen.
- [ ] Forklar metoden i 5 trin.
- [ ] Nævn 4 begrænsninger og hvordan de kan afhjælpes.

---

# 12.2 Faulkswagon: valg af DW-lokaliteter

> **Kernebudskab:** Distributionslagrene (DW) placeres, så de samlede **logistikomkostninger** (inbound fra fabrik, outbound til marked og lager-/facility costs) minimeres, givet kravet til **responstid**. Fordi outbound typisk er dyrere pr. enhed og km end inbound, trækkes DW'erne **mod markederne**. Antallet af DW'er er et trade-off mellem transport, lager og faste omkostninger.

> ⚠️ **Casen er kursusspecifik, og jeg har ikke haft materialet.** Tjek i casebeskrivelsen og Excel-filen præcis, *hvordan* DW-lokaliteterne udvælges, fx fra en liste af kandidater, med center of gravity pr. region eller med en dækningsafstand. Indsæt casens tal og metoden herunder.

**Tidsplan (15 min):** DW'ens rolle 0–3 · Faktorer 3–7 · Metode i casen 7–12 · Refleksion 12–15

## 1. DW'ens rolle (ca. 3 min)
- DW'en er mellemleddet mellem **fabrik og forhandlere/markeder**. Den:
  - modtager store forsendelser (TL) fra fabrikken
  - holder lager tæt på kunderne
  - leverer mindre forsendelser videre
- Den gør det muligt at udnytte **stordriftsfordele på inbound** og samtidig give **kort responstid outbound**.
- Link til kap. 4: "distributor storage with carrier delivery" og til kap. 14: "shipping via intermediate DC".

## 2. Faktorer ved valg af DW (ca. 4 min)
- **Transportomkostninger:**
  - Inbound (fabrik → DW), billig pr. enhed i TL.
  - Outbound (DW → marked), dyrere.
  - Placering tæt på markederne sænker outbound.
- **Responstid / service:** maksimal leveringstid eller afstand til forhandlerne.
- **Lageromkostninger:** Flere DW'er giver mindre aggregering og mere safety stock (square-root law, se 3.3).
- **Faste omkostninger:** husleje, personale og IT pr. DW.
- **Infrastruktur:** motorvej, jernbane og havn.
- **Toldgrænser og skat** (hvis der indgår lande uden for EU).

## 3. Metode i casen (ca. 5 min)
Typisk tilgang (tilpas til casen):
1. **Gruppér markederne** i regioner, så hver DW har et område.
2. **Find en kandidatplacering** for hver DW med **center of gravity** af markederne i regionen (vægtet med efterspørgsel). Eventuelt kan placeringen vægtes med outbound-transportrater.
3. **Vælg den nærmeste realistiske by** med god infrastruktur.
4. **Tildel markeder** til den nærmeste DW, eller den billigste ud fra afstand × rate.
5. **Beregn de samlede omkostninger** (inbound + outbound + DW-omkostninger), og sammenlign alternativer med flere eller færre DW'er.

**Skabelon (indsæt casens data):**

| DW | Region / markeder | $C_x$ | $C_y$ | By | Mængde |
|---|---|---|---|---|---|
| DW1 | | | | | |
| DW2 | | | | | |

- Eventuelt: Hvis kandidaterne er givet, vælg dem med en **CPL-model** (4.4) eller en **transportmodel** (9.2).

## 4. Refleksion (ca. 3 min)
- **Flere DW'er:**
  - kortere outbound og bedre service
  - mere lager og flere faste omkostninger
  - mindre inbound-mængde pr. DW
- **Færre DW'er:** omvendt.
- Den optimale løsning ligger i bunden af den U-formede totalomkostningskurve (3.3).
- **Robusthed:** Hvad sker der, hvis efterspørgslen flytter sig, fx hvis Østeuropa vokser? Kan DW'en betjene flere markeder?
- **Kombination med fabriksplacering:** Fabrikker og DW'er bør ideelt set optimeres *sammen*, fordi inbound til DW afhænger af, hvor fabrikkerne ligger.

## Typiske opfølgende spørgsmål
- **Hvorfor ikke bare sende direkte fra fabrik til forhandler?** Forhandlerne bestiller små mængder. Direkte levering ville give LTL-priser eller store lagre hos forhandlerne (se 9.1).
- **Hvordan påvirker antallet af DW'er lageret?** Square-root law: Fra 1 til 4 DW'er fordobles safety stock.
- **Hvorfor trækkes DW'er mod markederne?** Fordi outbound er dyrere pr. enhed og km end inbound.

## Øv dig
- [ ] **Find og indsæt casens DW-metode og tal.**
- [ ] Forklar trade-off'et ved antallet af DW'er.
- [ ] Forklar sammenhængen mellem TL inbound og LTL outbound.

---

# 12.3 Faulkswagon: transportomkostninger i forhold til produktionsomkostninger

> **Kernebudskab:** For en bil er **produktionsomkostningen meget større end transportomkostningen pr. enhed**. Transport udgør typisk kun få procent af bilens værdi. Det betyder:
> - Valg af lokalitet bestemmes mere af **produktionsomkostninger** (løn, stordriftsfordele, kapacitet) end af transport.
> - **Lager er dyrt**, fordi værdien pr. enhed er høj. Det betaler sig at have hurtig transport og lavt lager.
>
> I modsætning hertil gælder for tunge produkter med lav værdi (cement, øl), at transporten dominerer, og produktionen skal ligge tæt på markedet.

> ⚠️ **Indsæt casens tal:** produktionsomkostning pr. bil på hver fabrik, transportrate pr. bil/km og typiske afstande. Beregn transportens andel af den samlede omkostning.

**Tidsplan (15 min):** Omkostningsstruktur 0–3 · Casens tal 3–7 · Konsekvenser for netværket 7–12 · Afrunding 12–15

## 1. Omkostningsstrukturen i en bilkæde (ca. 3 min)
- **Total landed cost** pr. bil = produktion + inbound-transport (komponenter) + outbound-transport (bil til DW og marked) + lager + told/skat.
- **Value density** (værdi pr. kg eller m³): Biler har høj værdi pr. enhed, så transport er en relativt lille andel.
- **Sammenligning:**
  - Cement: transport > 30 % af værdien. Produktion lokalt.
  - Bil: transport ≈ 2–5 % af værdien. Produktionen kan centraliseres.
  - Elektronik og medicin: transport < 1 %. Kan sendes med fly.

## 2. Casens tal (ca. 4 min)
**Skabelon:**

| Fabrik | Prod.omk./bil | Gns. transport/bil | Transportandel |
|---|---|---|---|
| ... | | | |

- Beregn: $\text{Transportandel} = \dfrac{\text{transport}}{\text{produktion}+\text{transport}}$.
- **Følsomhed:** Hvor stor skal lønforskellen mellem to fabrikker være, før den opvejer den ekstra transport? Hvis transporten fx er €300 dyrere pr. bil fra Østeuropa til Vesteuropa, men produktionen er €1.500 billigere, er Østeuropa bedre.

## 3. Konsekvenser for netværket (ca. 5 min)
1. **Fabriksplacering:** Fordi produktionsomkostningerne dominerer, kan det betale sig at placere fabrikkerne i **lavomkostningsområder**, selv om de ligger længere fra markederne. Center of gravity (12.1) kan derfor give en for snæver løsning, hvis den kun ser på transport.
2. **Centralisering af produktionen:** **Stordriftsfordele** i bilproduktion er store (faste omkostninger til fabrikker og robotter). Få, store fabrikker er bedre end mange små, også selvom transporten bliver længere.
3. **Lager er dyrt:** Holding cost pr. bil (fx 20 % af €20.000 = €4.000/år) er stor i forhold til transportomkostningen. Det betaler sig at:
   - holde **lavt lager** med hurtig transport og hyppige leverancer
   - centralisere lagrene (aggregering)
   - bruge build-to-order, hvor det er muligt
4. **Transportvalg:** Med høj produktværdi kan dyrere, hurtigere transport betale sig, fordi lageret i pipelinen falder (pipeline-lager = $D \cdot T$).
5. **DW-placering:** DW'erne placeres efter *outbound-omkostninger og service*, men det samlede netværk styres af produktionen.

## 4. Afrunding (ca. 3 min)
- Det er en **total cost**-tankegang. Man skal se på alle omkostninger samlet og ikke kun på transport.
- I casen betyder det, at forbedringer ofte findes i **produktionsallokeringen**: Hvilken fabrik laver hvor meget? Det skal ske under hensyn til kapacitet (CPL-modellen, 4.4).
- Transportomkostninger er stadig vigtige for *DW*-netværket og for at undgå unødvendige omveje.

## Typiske opfølgende spørgsmål
- **Hvad er value density, og hvorfor er det vigtigt?** Værdi pr. vægt eller volumen. Høj value density betyder, at transporten er en lille andel af omkostningen, så produktionen kan centraliseres.
- **Hvorfor er lager dyrt for biler?** Den høje værdi pr. enhed giver høj kapitalomkostning. Dertil kommer forældelse, fordi modeller skifter.
- **Hvornår ville transport dominere?** Ved tunge produkter med lav værdi eller ved meget lange afstande, fx interkontinentalt med fly.

## Øv dig
- [ ] **Indsæt casens tal** og beregn transportandelen.
- [ ] Forklar value density med 3 produkteksempler.
- [ ] Forklar, hvorfor dette gør produktionsplacering vigtigere end transport.

---

# 12.4 Faulkswagon: refleksion over initialløsningen (sheet 1.10) og omkostningsreduktion

> **Kernebudskab:** Initialløsningen er et *udgangspunkt*, typisk baseret på simple regler (center of gravity, nærmeste DW eller fast fordeling). Omkostningerne kan reduceres ved at:
> 1. **optimere fordelingen** af produktion og transport (transportmodel eller LP)
> 2. **ændre antallet og placeringen** af fabrikker og DW'er (CPL)
> 3. **konsolidere transporten** (TL, milk runs)
> 4. **reducere lager** (aggregering, kortere lead time)
> 5. **udnytte lavere produktionsomkostninger** og stordriftsfordele.

> ⚠️ **Åbn sheet 1.10 i Excel-filen og indsæt:** samlede omkostninger fordelt på produktion, transport inbound/outbound og lager/DW. Find de største omkostningsposter. Det er dér, du skal fokusere din refleksion.

**Tidsplan (15 min):** Initialløsningen 0–3 · Omkostningsfordeling 3–6 · Forbedringsmuligheder 6–13 · Afrunding 13–15

## 1. Initialløsningen (ca. 3 min)
Beskriv (fra sheet 1.10):
- Antal og placering af fabrikker: ___
- Antal og placering af DW'er: ___
- Hvordan markederne er tildelt DW'er, og DW'er tildelt fabrikker: ___
- Samlede omkostninger: ___

## 2. Omkostningsfordeling (ca. 3 min)
**Skabelon:**

| Post | Beløb | Andel |
|---|---|---|
| Produktion | | |
| Inbound-transport (fabrik → DW) | | |
| Outbound-transport (DW → marked) | | |
| DW / lager | | |
| **I alt** | | 100 % |

- **Nøglespørgsmål:** Hvor ligger de største omkostninger? Er der fabrikker, der kører med lav udnyttelse? Er der lange transporter?

## 3. Forbedringsmuligheder (ca. 7 min)
**a) Optimer allokeringen (transportmodel / LP)**
- Initialløsningen fordeler ofte ud fra nærhed. Med en **transportmodel** (stepping-stone eller Solver, 9.2) fordeles produktionen fra fabrikkerne med lavest *samlet* omkostning (produktion + transport) under hensyn til kapacitet.
- Tjek om fabrikker med lavere produktionsomkostninger kan producere mere (12.3).

**b) Ændr netværksstrukturen (CPL)**
- **Luk en fabrik eller en DW** med lav udnyttelse og høje faste omkostninger. Brug CPL-modellen (4.4) med binære variable.
- **Flyt DW'erne** tættere på markederne med center of gravity eller gravity-modellen (5.3, 4.2). Det sænker den dyre outbound.

**c) Konsolidér transporten**
- Brug **TL** frem for LTL ved at samle forsendelser (9.3).
- Brug **milk runs** til flere forhandlere på samme rute (9.1).
- Overvej **tog eller skib** til lange inbound-ruter.

**d) Reducer lager**
- **Aggregering** i færre DW'er (square-root law).
- **Kortere lead time** og hyppigere leverancer giver mindre safety stock.
- **Informationsdeling og VMI** med forhandlerne mindsker bullwhip (10.1–10.2).

**e) Andet**
- **Postponement:** Tilpas bilerne (fx udstyr) sent i kæden, så der er færre varianter på lager.
- **Build-to-order** for kunder med specialønsker.
- **Forhandling af transportpriser** og brug af en 3PL.

**For hvert forslag:** Nævn trade-off'et. Færre DW'er giver mindre lager og lavere faste omkostninger, men længere outbound og ringere service.

## 4. Afrunding (ca. 2 min)
- Initialløsningen er *mulig*, men ikke *optimal*. Største gevinster typisk:
  1. allokering af produktion
  2. antal og placering af DW'er
  3. transportkonsolidering
- **Konklusion:** Brug en **samlet optimeringsmodel** for hele netværket (fabrik → DW → marked) med faste og variable omkostninger. Supplér med **kvalitative** vurderinger og **følsomhedsanalyse** (efterspørgsel, valuta, lønninger).

## Typiske opfølgende spørgsmål
- **Hvorfor er initialløsningen ikke optimal?** Den bygger på simple regler og ikke på en samlet minimering af omkostninger under kapacitetsbegrænsninger.
- **Hvad er den største gevinst?** *Indsæt fra din analyse.* Typisk produktionsallokering, fordi produktionsomkostningerne dominerer (12.3).
- **Hvilke risici er der ved at lukke en fabrik?** Mindre fleksibilitet, valutarisiko og tab af nærhed til markeder. Dertil kommer politiske og sociale omkostninger.

## Øv dig
- [ ] **Åbn sheet 1.10** og udfyld omkostningstabellen.
- [ ] Vælg dine tre bedste forslag og forbered et trade-off til hvert.
- [ ] Øv at forklare forslagene på 7 minutter.
