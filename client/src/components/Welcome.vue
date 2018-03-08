<template lang="pug">
  .home
    .jumbotron.jumbotron-fluid: .container
      h1.display-1 Welcome!
      p.lead.
        Hi there, in here you can find basic information about me and a way to
        contact me. If you want to see what I'm working on at home you can
        head over to Github. If you want more information on my education and
        experience then take a look at my LinkedIn page.

      p.mb-0
        a.mx-1.btn.btn-outline-dark.btn-lg(href='https://github.com/DennisSkoko', target='_blank') Github
        a.mx-1.btn.btn-outline-dark.btn-lg(href='https://www.linkedin.com/in/dennis-skoko-a99418128/', target='_blank') LinkedIn
        router-link.mx-1.btn.btn-outline-dark.btn-lg(to='/portfolio') Projects

    .container: .row.justify-content-center
      article.col-12.col-md-8.col-lg-6
        header
          h2 About
          p.
            I live in Karlskrona, Sweden and I'm a student at the university of
            #[a(href='https://www.bth.se/eng/', target='_blank') Blekinge Institute of Technology]
            where I study web programming. I like to spend time doing some personal projects,
            or doing some projects for people that I know. Other than that I usually hangout with friends.

          p.
            I mainly focus on web development. My passion is back-end where
            I create API with Node.js or PHP but since I work alone,
            I've been doing front-end as well. I love using Vue but I worked
            on a big project alone with Angular where I got to learn a lot with front-end frameworks.

          p.
            Since I'm not a good designer, I usually use design frameworks
            like Vuetify, Anuglar Material and Bootstrap.

          p.
            I'm also experienced with Java, C++ and Python but I only develop
            in these languages when I have to (e.g. Work, Projects or School).
            I usually don't develop in these languages during my spare time.
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
