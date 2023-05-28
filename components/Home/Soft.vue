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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
          </svg>
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
