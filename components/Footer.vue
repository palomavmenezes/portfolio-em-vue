<template>
  <footer>
    <b-container>
      <b-col class="d-flex justify-content-between align-items-center">
        <p v-html="copyright" />
        <p v-html="poweredby" />
      </b-col>
    </b-container>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'Copyright © 2023 <span>Paloma Menezes</span>. Todos os direitos reservados.',
      poweredby: 'Desenvolvido por: <img src="favicon.svg" alt="Logo" width="50px">'
    }
  }
}
</script>
