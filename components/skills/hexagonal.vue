<template>
  <div id="hexagonal">
    <div class="hexagonal">
      <section class="hexagon-gallery">
        <div
          v-for="language of languages"
          :key="language.name"
          class="hex-wrap"
        >
          <div class="hex">
            <img
              :src="require(`@/assets/images/languages/${language.image}`)"
              alt=""
            />
            <span>{{ language.name }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HexagonalComponent',
  data: () => ({
    languages: [
      {
        name: 'Node.js',
        image: 'node.png',
      },
      {
        name: 'Express',
        image: 'express.svg',
      },
      {
        name: 'React',
        image: 'react.png',
      },
      {
        name: 'Redux',
        image: 'redux.png',
      },
      {
        name: 'Vue',
        image: 'vue.png',
      },
      {
        name: 'Nuxt / VueX',
        image: 'nuxt.png',
      },
      {
        name: 'Sequelize',
        image: 'sequelize.png',
      },
      {
        name: 'PostgresQL',
        image: 'postgres.png',
      },
      {
        name: 'MongoDB',
        image: 'mongo.png',
      },
      {
        name: 'Redis',
        image: 'redis.png',
      },
      {
        name: 'MySQL',
        image: 'mysql.png',
      },
      {
        name: 'Python',
        image: 'python.png',
      },
      {
        name: 'Pandas',
        image: 'pandas.png',
      },
      {
        name: 'AWS & Heroku',
        image: 'heroku.png',
      },
    ],
  }),
}
</script>
