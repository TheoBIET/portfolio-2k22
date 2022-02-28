<template>
  <main id="landing">
    <div class="landing">
      <div class="landing__circle"></div>
      <h1 class="landing__hello">こんにちは、私はテオです。</h1>
      <h2 class="landing__function">Développeur Web Fullstack</h2>
      <div class="landing__field">
        <i class="bx bx-envelope icon little"></i>
        <input
          type="text"
          class="field__input"
          placeholder="Votre adresse email..."
        />
        <div class="button red little">
          <i class="bx bx-send"></i>
        </div>
      </div>
    </div>
    <Curve />
  </main>
</template>

<script>
import Curve from '@/components/curve.vue'

export default {
  name: 'LandingComponent',
  components: {
    Curve,
  },
}
</script>
