import type { ComponentType } from 'react';
import { Allocation, Drivers, DuPontChina, DuPontSafety, Facilities, NetworkDesigns, ServiceCurve, StrategicFit } from './strategy';
import { BreakEven, Cog, CogCase, Cpl, FactorRating, Gravity, MultiCog } from './location';
import { CapacityAgg, Coordination, Discount, FillRate, JointOrdering, Newsvendor, Review, SafetyStock } from './inventory';
import { Bullwhip, MilkRun, SteppingStone, TlLtl } from './transport';
import { C2C, CostBreakdown, FactorCards, Framework, Recovery, Sins, ValueDensity } from './concepts';

export const WIDGETS: Record<string, { title: string; C: ComponentType }> = {
  strategicFit: { title: 'Find din plads i Figur 2-5', C: StrategicFit },
  allocation: { title: 'Hvem absorberer usikkerheden? (Figur 2-6)', C: Allocation },
  dupontChina: { title: 'DuPont-beregner: fabrik i Kina', C: DuPontChina },
  dupontSafety: { title: 'DuPont-beregner: dobbelt safety stock', C: DuPontSafety },
  serviceCurve: { title: 'Aftagende udbytte af safety stock', C: ServiceCurve },
  drivers: { title: 'De seks drivers: effektiv eller responsiv', C: Drivers },
  networkDesigns: { title: 'Vælg distributionsnetværk', C: NetworkDesigns },
  facilities: { title: 'Antal faciliteter vs. omkostninger og responstid', C: Facilities },
  framework: { title: 'De fire faser i Figur 5-2', C: Framework },
  gravity: { title: 'Gravity-modellen trin for trin', C: Gravity },
  factorCards: { title: 'Faktorer: flashcards', C: FactorCards },
  cpl: { title: 'Capacitated plant location: åbn og luk fabrikker', C: Cpl },
  breakEven: { title: 'Locational break-even', C: BreakEven },
  factorRating: { title: 'Factor rating (Five Flags over Florida)', C: FactorRating },
  cog: { title: 'Center of gravity (Quain)', C: Cog },
  cogCase: { title: 'Center of gravity med Faulkswagon-data', C: CogCase },
  multiCog: { title: 'DW-regioner: center of gravity for k lagre', C: MultiCog },
  jointOrdering: { title: 'Separat vs. joint ordering (Ex 11-3/11-4)', C: JointOrdering },
  capacityAgg: { title: 'Aggregering med kapacitet (Ex 11-5)', C: CapacityAgg },
  discount: { title: 'Mængderabatter (Ex 11-7/11-8)', C: Discount },
  coordination: { title: 'Design af rabatter (Ex 11-9/11-10)', C: Coordination },
  safetyStock: { title: 'Safety stock og ROP (Ex 12-3)', C: SafetyStock },
  review: { title: 'Continuous vs. periodic review', C: Review },
  fillRate: { title: 'CSL, fill rate og order fill rate', C: FillRate },
  newsvendor: { title: 'C_o, C_u og optimal ordre (Ex 13-1)', C: Newsvendor },
  milkRun: { title: 'Direct shipment vs. milk run', C: MilkRun },
  steppingStone: { title: 'Stepping-stone (Arizona Plumbing)', C: SteppingStone },
  tlLtl: { title: 'TL vs. LTL', C: TlLtl },
  bullwhip: { title: 'Bullwhip-simulator', C: Bullwhip },
  recovery: { title: 'Recovery-hierarkiet og indtægtsstrømme', C: Recovery },
  c2c: { title: 'Cradle-to-Cradle: to kredsløb', C: C2C },
  sins: { title: 'De syv dødssynder: flashcards', C: Sins },
  valueDensity: { title: 'Transport vs. produktion pr. bil', C: ValueDensity },
  costBreakdown: { title: 'Omkostningsfordeling i sheet 1.10', C: CostBreakdown },
};
