<template lang="pug">
  main
    div
      .jumbotron.grey.darken-3.pa-4
        v-container
          h1.white--text Welcome
          p.headline.
            Hi, my name is Dennis Skoko and this is my website where I show will off all
            of my skills. You can view my work at LinkedIn, Github or at the projects page.
          div
            v-btn(outline, href='https://github.com/DennisSkoko', target='_blank') Github
            v-btn(outline, href='https://www.linkedin.com/in/dennis-skoko-a99418128/', target='_blank') LinkedIn
            v-btn(outline, :to='{ name: "projects" }') Projects
      v-container
        v-layout(justify-center)
          v-flex(sm6)
            article
              header
                h4.white--text About
              p.
                I live in Karlskrona, Sweden and I'm a student at the university of
                #[a(href='https://www.bth.se/eng/', target='_blank') Blekinge Institute of Technology]
                where I study web programming. I like to spend time doing some personal projects,
                or doing some projects for people that I know. Other than that I usually hangout with friends.

              p.
                I mainly focus on web development. My passion is back-end where
                I create API with Node.js or PHP but since I work alone,
                I've been doing front-end as well. I love using Vue but I worked
                on a big project alone with Angular where I got to learn a lot with SPA frameworks.

              p.
                Since I'm not a good designer, I usually use design frameworks
                like Vuetify, Anuglar Material and Bootstrap.

              p.
                I'm also experienced with Java, C++ and Python but I only develop
                in these languages when I have to (e.g. Work, Projects or School).
                I usually don't develop in these languages during my spare time.
</template>
