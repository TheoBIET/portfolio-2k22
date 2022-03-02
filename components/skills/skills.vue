<template>
  <div id="skills" class="skills">
    <h3 class="skills-title">Compétences</h3>
    <Hexagonal />
    <div class="skills-separator"></div>
    <div class="skills-card">
      <div v-for="w of works" :key="w.name" class="card">
        <div class="image">
          <i :class="w.icon"></i>
        </div>
        <div>
          <h3>{{ w.name }}</h3>
          <p class="content">
            {{ w.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsComponent',
  components: {
    Hexagonal: () => import('./hexagonal.vue'),
  },
  data: () => ({
    works: [
      {
        name: 'Développement Frontend',
        icon: 'fas fa-code',
        description: 'Développement d\'applications web frontend, intégration et développement de composants, gestion des états et du store de l\'application grâce à un maitrise de différents frameworks.',
      },
      {
        name: 'API & Backend',
        icon: 'fas fa-globe-europe',
      },
      {
        name: 'Database & Data Science',
        icon: 'fas fa-database',
      },
    ],
  }),
}
</script>

<style lang="scss"></style>
