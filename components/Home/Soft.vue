<template>
  <section class="fourth-section">
    <b-container>
      <div class="mb-4">
        <h2 class="code" :title="title" v-html="title" />
      </div>

      <b-row>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Resolução de problemas
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Comprometimento com prazos
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Rápido aprendizado
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Trabalho em equipe
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Criatividade
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Resiliência emocional
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Recepção positiva à feedbacks
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Empatia
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Flexibilidade
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Comunicação eficaz
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Liderança e Treinamento
        </b-col>
        <b-col md="4" class="mb-3">
          <font-awesome-icon icon="terminal" />
          Organização
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Soft Skills'
    }
  },
  methods: {
    handleButtonClick () {
      // Lógica do clique no botão
    }
  }
}
</script>
