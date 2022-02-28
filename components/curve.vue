<template>
  <div v-if="!isDarkMode" id="curve">
    <img src="@/assets/images/curve.svg" alt="" />
    <img src="@/assets/images/curve.svg" alt="" />
    <img src="@/assets/images/curve.svg" alt="" />
    <img src="@/assets/images/curve.svg" alt="" />
    <img src="@/assets/images/curve.svg" alt="" />
  </div>
  <div v-else id="curve">
    <img src="@/assets/images/curve-dark.svg" alt="" />
    <img src="@/assets/images/curve-dark.svg" alt="" />
    <img src="@/assets/images/curve-dark.svg" alt="" />
    <img src="@/assets/images/curve-dark.svg" alt="" />
    <img src="@/assets/images/curve-dark.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CurveComponent',
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode
    },
  },
}
</script>
