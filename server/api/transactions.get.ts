export default defineEventHandler((event) => {
  const { q = '', type = 'all' } = getQuery(event) as { q?: string, type?: 'all' | 'in' | 'out' }
  const search = q.toLowerCase()
  return transactions.filter(t =>
    (type === 'all' || (type === 'in' ? t.amount > 0 : t.amount < 0))
    && (!search || t.label.toLowerCase().includes(search) || t.category.toLowerCase().includes(search)),
  )
})
