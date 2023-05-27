<template>
  <section id="soft-skills" class="fourth-section">
    <b-container>
      <div class="mb-4">
        <h2 class="code" :title="title" v-html="title" /></h2>
      </div>

      <b-row>
        <b-col
          v-for="(skill, index) in skills"
          :key="index"
          md="4"
          class="mb-3"
        >
          <font-awesome-icon :icon="['fas', 'terminal']" />
          {{ skill.nome }}
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Soft Skills',
      skills: [
        {
          nome: 'Resolução de problemas'
        },
        {
          nome: 'Comprometimento com prazos'
        },
        {
          nome: 'Rápido aprendizado'
        },
        {
          nome: 'Trabalho em equipe'
        },
        {
          nome: 'Criatividade'
        },
        {
          nome: 'Resiliência emocional'
        },
        {
          nome: 'Recepção positiva à feedbacks'
        },
        {
          nome: 'Empatia'
        },
        {
          nome: 'Flexibilidade'
        },
        {
          nome: 'Comunicação eficaz'
        },
        {
          nome: 'Liderança e Treinamento'
        },
        {
          nome: 'Organização'
        }
      ]
    }
  },
  methods: {
    handleButtonClick () {
      // Lógica do clique no botão
    }
  }
}
</script>
