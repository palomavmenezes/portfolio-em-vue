<template>
  <header class="pt-2 fixed-top">
    <b-container>
      <b-navbar toggleable="lg" type="dark" class="container">
        <!-- Logo -->
        <b-navbar-brand href="#" class="d-flex align-items-center">
          <b-img src="/assets/img/icon/logo.svg" alt="Logo" class="img-fluid logo" />
          <b-navbar-toggle target="navbarNav" class="ml-auto" />
        </b-navbar-brand>

        <b-collapse id="navbarNav" is-nav>
          <b-navbar-nav class="ml-auto d-flex align-items-center">
            <!-- Links -->
            <b-nav-item
              v-for="(item, index) in items"
              :key="index"
              :href="item.hash"
              class="pr-2"
            >
              {{ item.title }}
            </b-nav-item>

            <b-nav-item>
              <b-img src="/assets/img/icon/icon-contrast.svg" alt="Logo" width="24px" />
            </b-nav-item>
            <b-nav-item>
              <b-img rounded="circle" src="/assets/img/icon/icon-pt-br.svg" alt="Logo" />
            </b-nav-item>
            <b-nav-item>
              <b-img rounded="circle" src="/assets/img/icon/icon-en-us.svg" alt="Logo" />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { hash: '#about', title: 'Quem Sou' },
        { hash: '#experience', title: 'Experiências' },
        { hash: '#portfolio', title: 'Portfolio' },
        { hash: '#soft-skills', title: 'Soft Skills' },
        { hash: '#hard-skills', title: 'Hard Skills' }
      ]
    }
  }
}

</script>
