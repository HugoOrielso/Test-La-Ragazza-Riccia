export interface Question {
  id: number;
  question: string;
  explication?: string;
  answers: string[];
  userSelectedAnswer?: number;
}

interface Response {
  pattern: Pattern;
  recommendation: Recommendation;
}

export interface Recommendation {
  rutina: string;
  consejo?: string;
  productos: Producto[];
}

export interface PatternAndRecomendation{
  pattern: Pattern;
  recommendation: RecommendationDos[];
}

interface Producto {
  nombre: string;
  urlImage: string;
  precio: number;
  webSite: string;
  descripcion?: string
}

interface Pattern {
  [key: number]: number;
}