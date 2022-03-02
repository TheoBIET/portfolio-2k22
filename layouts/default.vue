<template>
  <div id="default">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    Navbar: () => import('../components/nav.vue'),
    Footer: () => import('../components/footer.vue'),
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.isDarkMode ? 'dark' : '', // Toggle Dark Mode
      },
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode ? 'dark' : true
    },
  },
}
</script>
