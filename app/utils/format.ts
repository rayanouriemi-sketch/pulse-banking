export const euro = (n: number, signed = false) =>
  (signed && n > 0 ? '+' : '') + n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })

export const shortDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
