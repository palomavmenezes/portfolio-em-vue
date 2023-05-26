<template>
  <footer class="mt-4">
    <b-container>
      <div class="text-center">
        <p v-html="copyright" />
        <!--  <p class="d-flex" v-html="poweredby" /> -->
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'Copyright © 2023 <span>Paloma Menezes</span>. Todos os direitos reservados.',
      poweredby: 'Desenvolvido por: <img src="favicon.svg" alt="Logo" width="40px" class="ml-2">'
    }
  }
}
</script>
