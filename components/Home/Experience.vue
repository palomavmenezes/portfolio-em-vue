<template>
  <section id="experience" class="third-section">
    <b-container>
      <h2 class="code" :title="title" v-html="title" />

      <div>
        <b-card class="bg-transparent border-none">
          <b-tabs pills vertical>
            <b-tab
              v-for="(experience, index) in experiences"
              :key="index"
              :title="experience.company"
              :class="{ active: experience.company }"
            >
              <b-card-header class="bg-transparent p-0">
                <div class="d-flex justify-content-between align-items-center">
                  <h6 v-html="experience.company" />
                  <h6 v-html="experience.date" />
                </div>

                <div>
                  <p
                    class="m-0"
                    v-html="experience.role"
                  />
                </div>
              </b-card-header>
              <b-card-body class="m-0">
                <p
                  class="mt-3"
                  v-html="experience.description"
                />
              </b-card-body>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Experiência',
      experiences: [
        {
          company: 'Usabit',
          date: 'Janeiro 2022 - até o momento',
          role: 'Front End Developer',
          description: 'Nos últimos anos, atuei como desenvolvedora em projetos utilizando a metodologia Scrum para a Ânima Educação. Fui responsável pelo desenvolvimento front-end de portais e plataformas utilizando HTML5, SCSS, JavaScript e Vue/Nuxt. Trabalhei com designs criados no Figma/Adobe XD, garantindo a fidelidade visual do produto final. Utilizei o GitLab para o versionamento de projetos, facilitando o trabalho em equipe e a colaboração. Minhas habilidades incluem SCSS, Vue.js, Nuxt, GitLab, JavaScript, HTML5, Bootstrap e SASS. Estou empenhada nesse projeto desde janeiro de 2022, contribuindo para o sucesso da Ânima Educação.'
        },
        {
          company: 'R&D Marketing Digital (2020)',
          date: 'Setembro 2020 - Janeiro 2022',
          role: 'Coordenadora TI',
          description: 'Como Coordenador de Projetos de TI, acumulei uma vasta experiência na gestão de equipes, liderando e motivando colaboradores em diferentes projetos. Durante reuniões de briefing, fui responsável por captar as necessidades dos clientes e alinhar com a equipe para garantir o sucesso dos projetos. Desenvolvi habilidades avançadas na criação de sites utilizando Wordpress, principalmente com os page builders Elementor e WP Bakery. Além disso, liderei a gestão de projetos, implementando fluxos de trabalho eficientes para otimizar o tempo e os recursos. Também fui responsável pelo treinamento da equipe e pela apresentação de projetos aos clientes, comunicando de forma clara e persuasiva os resultados alcançados.'
        },
        {
          company: 'Nova Data',
          date: 'Setembro 2019 - Setembro 2020',
          role: 'Front End Developer',
          description: 'Como desenvolvedor de temas para WordPress, fui responsável por transformar protótipos de PSD, Adobe XD e Figma em temas funcionais. Utilizei habilidades em HTML5, CSS3, Bootstrap, JavaScript, jQuery e PHP para criar designs atraentes e responsivos. Também me envolvi no monitoramento contínuo de sites, realizando correções de bugs e garantindo a sua estabilidade. Gerenciei e mantive hospedagem VPS, garantindo o desempenho adequado dos sites. Além disso, conduzi migrações de sites para garantir a transição suave dos projetos. Minhas habilidades incluem desenvolvimento de temas para WordPress, CSS, JavaScript, HTML5 e PHP.'
        },
        {
          company: 'R&D Marketing (2019)',
          date: 'Março 2019 - Setembro 2019',
          role: 'Wordpress Developer',
          description: 'Como desenvolvedora, tive a oportunidade de criar sites incríveis utilizando Page Builders como Elementor e Visual Composer. Além disso, fui responsável pelo gerenciamento de hospedagens, garantindo a disponibilidade e desempenho dos sites. Participava ativamente de reuniões de Briefing, compreendendo as necessidades dos clientes e alinhando as expectativas. Sempre me dediquei à resolução de bugs em sites, buscando soluções eficientes para garantir a melhor experiência do usuário. Minhas habilidades incluem o domínio de Page Builders, gerenciamento de hospedagens, reuniões de Briefing e resolução de bugs em sites.'
        },
        {
          company: 'Raça Pura Pet',
          date: 'Março 2018 - Abril 2019',
          role: 'Web Designer',
          description: 'Como profissional de Marketing, minha experiência incluiu a responsabilidade por toda a parte de Marketing da empresa. Eu era encarregada da criação de peças de embalagens, desenvolvimento e envio de e-mails marketing (newsletters), gerenciamento de redes sociais e anúncios no Facebook e Google (AdWords). Além disso, desempenhava a manutenção e administração do site da empresa e atendia ao público por meio de diversas plataformas de mídias digitais, incluindo Facebook, Instagram, e-mails e chat online direto do site. Também era responsável pelo cadastro e tratamento de fotos no sistema de produtos da empresa (Syscom), realização de fotografia publicitária dos produtos e criação de peças publicitárias impressas em diversos formatos e tipos. Trabalhava em estreita colaboração com a diretoria, buscando constantemente maneiras de melhorar e trazendo ideias para aumentar a rentabilidade da empresa.'
        },
        {
          company: 'Cliquei Network',
          date: 'Outubro 2016 - Janeiro 2018',
          role: 'Web Designer',
          description: 'Trabalhei na Cliquei Network desenvolvendo sites utilizando Page Builders como Elementor e Visual Composer. Além disso, fui responsável pelo gerenciamento de hospedagens, garantindo a disponibilidade e desempenho dos sites. Participei ativamente de reuniões de Briefing, compreendendo as necessidades dos clientes e alinhando as expectativas para o desenvolvimento dos projetos. Fazia o suporte de bugs em sites e buscava soluções eficientes. Assegurando a qualidade e funcionalidade dos mesmos.'
        }
      ]
    }
  }
}
</script>
