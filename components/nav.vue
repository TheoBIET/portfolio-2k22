<template>
  <div id="navbar" class="navbar">
    <div class="navbar__logo"></div>
    <nav class="navbar__nav">
      <a class="navbar__nav__item" @click="scrollTo(home)">Home</a>
      <a class="navbar__nav__item" @click="scrollTo(about)">About</a>
      <a class="navbar__nav__item" @click="scrollTo(contact)">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarDefault',
  data: () => ({
    home: '#home',
    about: '#about',
    contact: '#contact',
  }),
  methods: {
    scrollTo(id) {
      this.$router.push(id)
    },
  },
}
</script>
