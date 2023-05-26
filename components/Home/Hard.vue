<template>
  <section class="fifth-section">
    <b-container>
      <div class="mb-4">
        <h2 class="code" :title="title" v-html="title" />
        <h6 class="mt-1">
          *Clique no card para ler*
        </h6>
      </div>

      <b-row>
        <b-col v-for="option in options" :key="option.id">
          <a
            :class="{'collapsed': visible !== option.id}"
            :aria-expanded="visible === option.id ? 'true' : 'false'"
            :aria-controls="option.id"
            @click="toggleVisible(option.id)"
          >
            <img :src="option.image" :alt="option.alt">
          </a>
        </b-col>
      </b-row>

      <b-row>
        <b-collapse v-for="option in options" :id="option.id" :key="option.id" v-model="visible">
          <b-card v-if="visible === option.id">
            {{ option.content }}
          </b-card>
        </b-collapse>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hard Skills',
      visible: null,
      options: [
        {
          id: 'html',
          image: '/assets/img/skills/icon-html.svg',
          alt: 'Imagem HTML',
          content: 'Esse é do HTML'
        },
        {
          id: 'css',
          image: '/assets/img/skills/icon-css.svg',
          alt: 'Imagem CSS',
          content: 'Esse é do CSS'
        },
        {
          id: 'javascript',
          image: '/assets/img/skills/icon-javascript.svg',
          alt: 'Imagem JavaScript',
          content: 'Esse é do JavaScript'
        },
        {
          id: 'sass',
          image: '/assets/img/skills/icon-sass.svg',
          alt: 'Imagem Sass',
          content: 'Esse é do Sass'
        },
        {
          id: 'vue',
          image: '/assets/img/skills/icon-vue.svg',
          alt: 'Imagem Vue',
          content: 'Esse é do Vue'
        },
        {
          id: 'nuxt',
          image: '/assets/img/skills/icon-nuxt.svg',
          alt: 'Imagem Nuxt',
          content: 'Esse é do Nuxt'
        },
        {
          id: 'wordpress',
          image: '/assets/img/skills/icon-wordpress.svg',
          alt: 'Imagem WordPress',
          content: 'Esse é do WordPress'
        },
        {
          id: 'php',
          image: '/assets/img/skills/icon-php.svg',
          alt: 'Imagem PHP',
          content: 'Esse é do PHP'
        }
      ]
    }
  },
  methods: {
    toggleVisible (optionId) {
      this.visible = this.visible === optionId ? null : optionId
    }
  }
}
</script>
