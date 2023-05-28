<template>
  <section class="first-section">
    <b-container>
      <b-row class="invert-columns">
        <b-col md="6">
          <h2
            class="title-default mb-4"
            v-html="title"
          />

          <h5
            class="subtitle-default mb-4"
            v-html="text"
          />

          <b-button href="#portfolio" variant="primary">
            {{ textButton }}
          </b-button>
        </b-col>
        <b-col md="6" class="d-flex justify-content-center align-items-center">
          <img src="/assets/img/html-banner.svg" alt="Imagem Banner" class="img-fluid">
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Ajudando empresas a construírem <span>produtos digitais</span> de forma moderna e de alta qualidade',
      text: 'Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.',
      textButton: 'Portfolio'
    }
  },
  methods: {
    handleButtonClick () {
      // Lógica do clique no botão
    }
  }
}
</script>
