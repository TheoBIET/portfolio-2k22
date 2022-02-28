<template>
  <div id="navbar">
    <div class="navbar">
      <!-- Théo BIET squared LOGO -->
      <div class="navbar__logo">
        <div class="navbar__logo__row">
          <div class="navbar__logo__row__wrapper">
            <div class="navbar__logo__row__wrapper__letter">{{ name[0] }}</div>
            <div class="navbar__logo__row__wrapper__letter --hidden">
              {{ lastname[0] }}
            </div>
          </div>
          <div class="navbar__logo__row__wrapper">
            <div class="navbar__logo__row__wrapper__letter">{{ name[1] }}</div>
            <div class="navbar__logo__row__wrapper__letter --hidden --i">
              {{ lastname[1] }}
            </div>
          </div>
        </div>
        <div class="navbar__logo__row">
          <div class="navbar__logo__row__wrapper">
            <div class="navbar__logo__row__wrapper__letter">{{ name[2] }}</div>
            <div class="navbar__logo__row__wrapper__letter --hidden">
              {{ lastname[2] }}
            </div>
          </div>
          <div class="navbar__logo__row__wrapper">
            <div class="navbar__logo__row__wrapper__letter">{{ name[3] }}</div>
            <div class="navbar__logo__row__wrapper__letter --hidden">
              {{ lastname[3] }}
            </div>
          </div>
        </div>
      </div>
      <!-- Navigation -->
      <nav class="navbar__nav">
        <a class="navbar__nav__item" @click="scrollTo(home)">Home</a>
        <a class="navbar__nav__item" @click="scrollTo(about)">About</a>
        <a class="navbar__nav__item" @click="scrollTo(contact)">Contact</a>
        <a
          class="navbar__nav__item button little red"
          @click="scrollTo(contact)"
          >Me contacter</a
        >
      </nav>
      <!-- Dark mode & languages -->
      <div class="navbar__settings">
        <div class="navbar__settings__darkmode">
          <div v-if="!isDarkMode" class="navbar__settings__darkmode__icon" @click="toggleDarkMode">
            <i class="bx bx-moon"></i>
          </div>
          <div v-else class="navbar__settings__darkmode__icon animate__animated animate__jello" @click="toggleDarkMode">
            <i class="bx bx-sun"></i>
          </div>
        </div>
        <div class="navbar__settings__languages">
          <div class="navbar__settings__languages__icon">
            <i class="bx bx-flag" @click="changeLocale"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDefault',
  data: () => ({
    home: '#home',
    about: '#about',
    contact: '#contact',
    name: ['T', 'H', 'E', 'O'],
    lastname: ['B', 'I', 'E', 'T'],
  }),
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
  },
  methods: {
    scrollTo(id) {
      this.$router.push(id)
    },
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
    },
    changeLocale() {
      //
    },
  },
}
</script>
