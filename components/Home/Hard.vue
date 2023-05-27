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
        <b-col
          v-for="option in options"
          :key="option.id"
          class="bg-skills m-2 d-flex justify-content-center align-items-center"
        >
          <a
            :class="{'collapsed': visible !== option.id}"
            :aria-expanded="visible === option.id ? 'true' : 'false'"
            :aria-controls="option.id"
            @click="toggleVisible(option.id)"
          >
            <img :src="option.image" :alt="option.alt" :class="option.class">
          </a>
        </b-col>
      </b-row>

      <b-row>
        <b-collapse v-for="option in options" :id="option.id" :key="option.id" v-model="visible">
          <b-card v-if="visible === option.id" class="bg-transparent border-0">
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
          content: 'HTML é uma linguagem de marcação usada para criar a estrutura e organizar o conteúdo de páginas web.'
        },
        {
          id: 'css',
          image: '/assets/img/skills/icon-css.svg',
          alt: 'Imagem CSS',
          content: 'CSS é uma linguagem de estilo que define a aparência e o layout dos elementos HTML em uma página.'
        },
        {
          id: 'javascript',
          image: '/assets/img/skills/icon-javascript.svg',
          alt: 'Imagem JavaScript',
          content: 'JavaScript é uma linguagem de programação que permite adicionar interatividade, comportamento e funcionalidades avançadas às páginas web.'
        },
        {
          id: 'sass',
          image: '/assets/img/skills/icon-sass.svg',
          alt: 'Imagem Sass',
          content: 'Sass é uma extensão do CSS que adiciona recursos como variáveis, mixins e aninhamento, facilitando a escrita e a manutenção do código CSS.'
        },
        {
          id: 'vue',
          image: '/assets/img/skills/icon-vue.svg',
          alt: 'Imagem Vue',
          content: 'Vue é um framework JavaScript progressivo usado para construir interfaces de usuário interativas e reativas.'
        },
        {
          id: 'nuxt',
          image: '/assets/img/skills/icon-nuxt.svg',
          alt: 'Imagem Nuxt',
          content: 'Nuxt é um framework Vue.js que oferece funcionalidades extras para criar aplicativos web poderosos, como renderização do lado do servidor (SSR) e geração estática de sites.'
        },
        {
          id: 'wordpress',
          image: '/assets/img/skills/icon-wordpress.svg',
          alt: 'Imagem WordPress',
          content: 'WordPress é um sistema de gerenciamento de conteúdo (CMS) popular que permite criar, gerenciar e publicar facilmente sites e blogs.'
        },
        {
          id: 'php',
          image: '/assets/img/skills/icon-php.svg',
          alt: 'Imagem PHP',
          content: 'PHP é uma linguagem de programação amplamente utilizada para desenvolvimento web do lado do servidor, permitindo a criação de sites dinâmicos e a interação com bancos de dados.'
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
