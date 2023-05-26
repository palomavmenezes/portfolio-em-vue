<template>
  <header>
    <b-container>
      <b-navbar toggleable="lg" type="dark">
        <!-- Logo -->
        <b-navbar-brand href="#" class="d-flex align-items-center">
          <b-img src="/assets/img/icon/logo.svg" alt="Logo" class="img-fluid logo" />
          <b-navbar-toggle target="navbarNav" class="ml-auto" />
        </b-navbar-brand>

        <b-collapse id="navbarNav" is-nav>
          <b-navbar-nav class="ml-auto d-flex align-items-center">
            <!-- Links -->
            <b-nav-item href="#" class="pr-2">
              Quem Sou
            </b-nav-item>
            <b-nav-item href="#" class="pr-2">
              Experiências
            </b-nav-item>
            <b-nav-item href="#" class="pr-2">
              Portfolio
            </b-nav-item>
            <b-nav-item href="#" class="pr-2">
              Soft Skills
            </b-nav-item>
            <b-nav-item href="#" class="pr-2">
              Hard Skills
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
