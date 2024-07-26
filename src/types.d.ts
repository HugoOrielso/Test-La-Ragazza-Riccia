export interface Question {
  id: number;
  question: string;
  answers: string[];
  userSelectedAnswer?: number;
}



interface Response {
  pattern: Pattern;
  recommendation: Recommendation;
}

interface Recommendation {
  rutinas: string[];
  productos: Producto[];
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