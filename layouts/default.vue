<template>
  <Navbar />
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    Navbar: () => import('../components/nav.vue'),
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
