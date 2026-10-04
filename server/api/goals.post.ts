export default defineEventHandler(async (event) => {
  const body = await readBody<{ name?: string, target?: number }>(event)
  const name = String(body?.name ?? '').trim()
  const target = Number(body?.target)
  if (!name || !(target > 0)) throw createError({ statusCode: 400, statusMessage: 'Nom et montant cible requis' })
  const goal = { id: Date.now(), name, saved: 0, target }
  goals.push(goal)
  return goal
})
