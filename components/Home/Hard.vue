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
          content: 'HTML é a linguagem fundamental para a criação de páginas web. Com ela, podemos estruturar o conteúdo, definir cabeçalhos, parágrafos, links, imagens e criar formulários.'
        },
        {
          id: 'css',
          image: '/assets/img/skills/icon-css.svg',
          alt: 'Imagem CSS',
          content: 'CSS permite estilizar elementos HTML, definindo cores, fontes, tamanhos, posicionamento e animações. Podemos criar layouts responsivos, personalizar botões e criar efeitos visuais.'
        },
        {
          id: 'javascript',
          image: '/assets/img/skills/icon-javascript.svg',
          alt: 'Imagem JavaScript',
          content: 'Com JavaScript, podemos adicionar interatividade às páginas, manipular elementos HTML, realizar validações de formulários, criar efeitos de rolagem, exibir pop-ups e consumir APIs externas. '
        },
        {
          id: 'sass',
          image: '/assets/img/skills/icon-sass.svg',
          alt: 'Imagem Sass',
          content: 'Sass é uma extensão do CSS que oferece recursos avançados como variáveis, mixins (reutilização de estilos) e aninhamento de seletores. Facilita a escrita e a manutenção de estilos em projetos maiores.'
        },
        {
          id: 'vue',
          image: '/assets/img/skills/icon-vue.svg',
          alt: 'Imagem Vue',
          content: 'Vue é um framework JavaScript que permite construir interfaces de usuário interativas, com componentes reutilizáveis e reativos. Ele facilita a manipulação do DOM, criação de rotas, gerenciamento de estado e integração com outras bibliotecas.'
        },
        {
          id: 'nuxt',
          image: '/assets/img/skills/icon-nuxt.svg',
          alt: 'Imagem Nuxt',
          content: 'Nuxt é um framework Vue que adiciona recursos como renderização do lado do servidor (SSR) e geração estática de sites. Isso melhora o desempenho, o SEO e permite a criação de aplicativos web complexos.'
        },
        {
          id: 'wordpress',
          image: '/assets/img/skills/icon-wordpress.svg',
          alt: 'Imagem WordPress',
          content: 'ordpress é um CMS popular que permite criar sites e blogs com facilidade, sem a necessidade de conhecimentos avançados em programação. É possível personalizar temas, adicionar plugins e gerenciar conteúdo de forma intuitiva.'
        },
        {
          id: 'php',
          image: '/assets/img/skills/icon-php.svg',
          alt: 'Imagem PHP',
          content: 'PHP é uma linguagem de programação usada para desenvolvimento web do lado do servidor. Com ela, é possível criar sites dinâmicos, interagir com bancos de dados, autenticar usuários, manipular arquivos e processar formulários.'
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
