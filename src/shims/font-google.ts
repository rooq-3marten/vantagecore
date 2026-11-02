export interface FontOptions {
  subsets?: string[];
  weight?: string[];
  display?: string;
}

export function Inter(_options?: FontOptions): { className: string } {
  return { className: 'font-sans' };
}
