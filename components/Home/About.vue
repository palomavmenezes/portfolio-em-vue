<template>
  <section id="about" class="second-section">
    <b-container>
      <b-row>
        <b-col md="6" class="d-flex justify-content-center align-items-center">
          <img src="/assets/img/about-banner.svg" alt="Imagem Banner Sobre mim" class="img-fluid">
        </b-col>
        <b-col md="6">
          <h3 class="text-color-primary" v-html="about" />
          <h2
            class="title-default"
            v-html="name"
          />
          <h6 class="subtitle-default" v-html="career" />

          <p
            class="mb-4 mt-4"
            v-html="textAbout"
          />

          <ul class="ml-auto list-inline">
            <li class="nav-item pr-3 list-inline-item">
              <a href="https://www.instagram.com/palomavmenezes" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/icon/icon_instagram.svg" alt="Instagram" class="img-fluid">
              </a>
            </li>
            <li class="nav-item pr-3 list-inline-item">
              <a href="https://www.linkedin.com/in/palomamenezes" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/icon/icon_linkedin.svg" alt="Linkedin" class="img-fluid">
              </a>
            </li>
            <li class="nav-item pr-3 list-inline-item">
              <a href="http://github.com/palomavmenezes" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/icon/icon_computer.svg" alt="Github" class="img-fluid">
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      about: 'Quem sou',
      name: 'Paloma Menezes',
      career: 'Front End Developer',
      textAbout: 'Desenvolvedora front end especializada em Wordpress e Vue.js/Nuxt. Crio interfaces web atraentes, funcionais e de alta qualidade, seguindo as melhores práticas de design e usabilidade. Tenho habilidades avançadas em HTML, CSS e JavaScript, e estou sempre atualizada com as últimas tendências tecnológicas. Procuro oportunidades desafiadoras para aplicar e criar interfaces excepcionais.'
    }
  }
}
</script>
