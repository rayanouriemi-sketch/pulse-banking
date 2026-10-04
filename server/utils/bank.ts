export type Transaction = { id: number, label: string, category: string, icon: string, date: string, amount: number }
export type Goal = { id: number, name: string, saved: number, target: number }

export const transactions: Transaction[] = [
  { id: 1, label: 'Café Lomi', category: 'Restaurants', icon: '☕', date: '2026-10-01', amount: -4.2 },
  { id: 2, label: 'Salaire', category: 'Revenus', icon: '💼', date: '2026-09-30', amount: 2340 },
  { id: 3, label: 'Marché Bio', category: 'Courses', icon: '🛒', date: '2026-09-28', amount: -36.8 },
  { id: 4, label: 'Abonnement musique', category: 'Abonnements', icon: '🎧', date: '2026-09-27', amount: -10.99 },
  { id: 5, label: 'Navigo', category: 'Transport', icon: '🚇', date: '2026-09-26', amount: -86.4 },
  { id: 6, label: 'Remboursement Léa', category: 'Revenus', icon: '🤝', date: '2026-09-25', amount: 24 },
  { id: 7, label: 'Librairie du Centre', category: 'Loisirs', icon: '📚', date: '2026-09-24', amount: -18.5 },
  { id: 8, label: 'Pizzeria Bella', category: 'Restaurants', icon: '🍕', date: '2026-09-22', amount: -27.9 },
  { id: 9, label: 'Supermarché', category: 'Courses', icon: '🛒', date: '2026-09-21', amount: -64.15 },
  { id: 10, label: 'Cinéma', category: 'Loisirs', icon: '🎬', date: '2026-09-19', amount: -11.5 },
]

export const goals: Goal[] = [
  { id: 1, name: 'Voyage à Lisbonne', saved: 820, target: 1200 },
  { id: 2, name: 'Nouveau laptop', saved: 1150, target: 1800 },
  { id: 3, name: 'Fonds d\'urgence', saved: 3000, target: 5000 },
]
