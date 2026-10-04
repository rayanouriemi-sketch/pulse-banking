<script setup lang="ts">
useHead({ title: 'Transactions — Pulse' })

const q = ref('')
const type = ref<'all' | 'in' | 'out'>('all')
const { data: list } = await useFetch('/api/transactions', { query: { q, type } })
const total = computed(() => (list.value ?? []).reduce((s, t) => s + t.amount, 0))
</script>

<template>
  <main class="page">
    <header class="head"><div><h1>Transactions</h1><p class="mut">Septembre – octobre 2026</p></div></header>
    <div class="tools">
      <input v-model="q" placeholder="Rechercher un marchand ou une catégorie…">
      <select v-model="type">
        <option value="all">Toutes</option>
        <option value="in">Entrées</option>
        <option value="out">Sorties</option>
      </select>
    </div>
    <section class="card">
      <h3>{{ list?.length ?? 0 }} opérations <span :class="total < 0 ? 'neg' : 'pos'">{{ euro(total, true) }}</span></h3>
      <div v-for="t in list" :key="t.id" class="tx">
        <div class="ic">{{ t.icon }}</div>
        <div><b>{{ t.label }}</b><span>{{ shortDate(t.date) }} · {{ t.category }}</span></div>
        <div class="v" :class="t.amount < 0 ? 'neg' : 'pos'">{{ euro(t.amount, true) }}</div>
      </div>
      <p v-if="!list?.length" class="mut empty">Aucune opération ne correspond à votre recherche.</p>
    </section>
  </main>
</template>

<style scoped>
.tools { display: flex; gap: 12px; margin-bottom: 20px; }
.tools input { flex: 1; max-width: 420px; }
.empty { padding: 24px 0; text-align: center; }
</style>
