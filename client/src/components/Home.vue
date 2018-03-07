<template lang="pug">
  .home
    .jumbotron.jumbotron-fluid
      .container
        h1.display-1 Welcome!
        p.lead.
          Hi there, in here you can find basic information about me and a way to
          contact me. If you want to see what I'm working on at home you can
          head over to Github. If you want more information on my education and
          experience then take a look at my LinkedIn page.

        p.mb-0
          a.mx-1.btn.btn-outline-dark.btn-lg(href='https://github.com/DennisSkoko', target='_blank') Github
          a.mx-1.btn.btn-outline-dark.btn-lg(href='https://www.linkedin.com/in/dennis-skoko-a99418128/', target='_blank') LinkedIn
          router-link.mx-1.btn.btn-outline-dark.btn-lg(to='/portfolio') Portfolio
</template>

<script>
export default {
  name: 'Home'
}
</script>
