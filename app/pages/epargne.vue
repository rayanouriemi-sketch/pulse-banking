<script setup lang="ts">
useHead({ title: 'Épargne — Pulse' })

const { data: goals, refresh } = await useFetch('/api/goals')
const name = ref('')
const target = ref<number | null>(null)
const error = ref('')

async function create() {
  error.value = ''
  try {
    await $fetch('/api/goals', { method: 'POST', body: { name: name.value, target: target.value } })
    name.value = ''
    target.value = null
    await refresh()
  }
  catch {
    error.value = 'Indiquez un nom et un montant cible.'
  }
}
</script>

<template>
  <main class="page">
    <header class="head"><div><h1>Épargne</h1><p class="mut">Mettez de côté pour ce qui compte.</p></div></header>
    <div class="goals">
      <article v-for="g in goals" :key="g.id" class="card">
        <h3>{{ g.name }} <span class="mut">{{ Math.round((g.saved / g.target) * 100) }} %</span></h3>
        <p class="big">{{ euro(g.saved) }} <span class="mut">/ {{ euro(g.target) }}</span></p>
        <div class="bar"><i :style="{ width: `${(g.saved / g.target) * 100}%` }" /></div>
      </article>
      <form class="card new" @submit.prevent="create">
        <h3>Nouvel objectif</h3>
        <input v-model="name" placeholder="Ex. Vacances d'été">
        <input v-model.number="target" type="number" min="1" placeholder="Montant cible (€)">
        <button class="btn">Créer l'objectif</button>
        <p v-if="error" class="neg">{{ error }}</p>
      </form>
    </div>
  </main>
</template>

<style scoped>
.goals { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.big { font-size: 28px; font-weight: 800; margin: 10px 0 6px; }
.new { display: grid; gap: 12px; align-content: start; border-style: dashed; }
</style>
