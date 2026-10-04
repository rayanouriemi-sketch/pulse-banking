<script setup lang="ts">
const { data: account } = await useFetch('/api/account')
const { data: goals } = await useFetch('/api/goals')
const max = computed(() => Math.max(...(account.value?.weekSpending.map(d => d.amount) ?? [1])))
const hovered = ref(3)
</script>

<template>
  <main v-if="account" class="page grid">
    <header class="head full">
      <div><h1>Bonjour, {{ account.owner }} 👋</h1><p class="mut">Voici l'état de vos finances aujourd'hui.</p></div>
      <div class="avatar" />
    </header>

    <section class="card balance">
      <p>Solde total</p>
      <div class="amount">{{ euro(account.balance) }}</div>
      <div class="row"><button>↗ Envoyer</button><button>↙ Recevoir</button><button>＋ Recharger</button></div>
    </section>

    <section class="card">
      <h3>Objectifs d'épargne <NuxtLink to="/epargne" class="mut">Gérer</NuxtLink></h3>
      <div v-for="g in goals" :key="g.id" class="goal">
        <div class="mut">{{ g.name }} · {{ euro(g.saved) }} / {{ euro(g.target) }}</div>
        <div class="bar"><i :style="{ width: `${(g.saved / g.target) * 100}%` }" /></div>
      </div>
    </section>

    <section class="card">
      <h3>Dépenses de la semaine <span class="mut">{{ account.weekSpending[hovered]?.day }} · {{ euro(account.weekSpending[hovered]?.amount ?? 0) }}</span></h3>
      <div class="chart">
        <div v-for="(d, i) in account.weekSpending" :key="d.day" :class="{ hi: i === hovered }" :style="{ height: `${(d.amount / max) * 100}%` }" @mouseenter="hovered = i" />
      </div>
      <div class="days"><span v-for="d in account.weekSpending" :key="d.day">{{ d.day }}</span></div>
    </section>

    <section class="card">
      <h3>Transactions récentes <NuxtLink to="/transactions" class="mut">Tout voir</NuxtLink></h3>
      <div v-for="t in account.recent" :key="t.id" class="tx">
        <div class="ic">{{ t.icon }}</div>
        <div><b>{{ t.label }}</b><span>{{ shortDate(t.date) }} · {{ t.category }}</span></div>
        <div class="v" :class="t.amount < 0 ? 'neg' : 'pos'">{{ euro(t.amount, true) }}</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.grid { display: grid; gap: 24px; grid-template-columns: 1.4fr 1fr; align-content: start; }
.full { grid-column: 1 / -1; margin: 0; }
.avatar { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, #ffb86b, #ff6b81); }
.balance { background: linear-gradient(135deg, #7c5cff, #4f46e5 60%, #22d3a6); border: 0; position: relative; overflow: hidden; }
.balance::after { content: ''; position: absolute; right: -60px; top: -60px; width: 220px; height: 220px; border-radius: 50%; background: rgba(255, 255, 255, .12); }
.balance p { opacity: .8; font-weight: 600; }
.amount { font-size: 44px; font-weight: 800; margin: 10px 0 18px; letter-spacing: -1px; }
.row { display: flex; gap: 10px; position: relative; z-index: 1; }
.row button { font: inherit; font-weight: 700; font-size: 14px; border: 0; border-radius: 14px; padding: 12px 18px; cursor: pointer; background: rgba(255, 255, 255, .18); color: #fff; transition: transform .2s, background .2s; }
.row button:hover { transform: translateY(-2px); background: rgba(255, 255, 255, .28); }
.goal { margin-top: 14px; }
.chart { display: flex; align-items: flex-end; gap: 10px; height: 150px; margin-top: 18px; }
.chart div { flex: 1; border-radius: 8px 8px 4px 4px; background: var(--line); transition: background .2s; cursor: pointer; }
.chart div.hi { background: var(--acc); }
.days { display: flex; gap: 10px; margin-top: 8px; }
.days span { flex: 1; text-align: center; font-size: 12px; color: var(--mut); }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
