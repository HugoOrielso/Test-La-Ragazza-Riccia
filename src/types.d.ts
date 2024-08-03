export interface Question {
  id: number;
  question: string;
  explication?: string;
  answers: string[];
  userSelectedAnswer?: number;
}

export interface DefaultValueRecomendation {
  recommendation: RecommendationDos[];
}

interface Response {
  pattern: Pattern;
  recommendation: Recommendation;
}

export interface Recommendation {
  rutinas: string[];
  productos: Producto[];
}
export interface RecommendationDos {
  rutina: string;
  productos: Producto[];
}

export interface ObjectOfRecommendation{
  pattern: Pattern;
  recommendation: RecommendationDos[];
}

interface Producto {
  nombre: string;
  urlImage: string;
  precio: number;
  webSite: string;
}

interface Pattern {
  [key: number]: number;
}