export default defineEventHandler(() => {
  const week = [42, 68, 35, 90, 55, 74, 28]
  return {
    owner: 'Camille',
    balance: 12480.52,
    weekSpending: week.map((v, i) => ({ day: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i], amount: v * 2 })),
    recent: transactions.slice(0, 4),
  }
})
