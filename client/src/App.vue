<template lang="pug">
  #app
    nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
      .container
        span.navbar-brand.mb-0.h1 Dennis Skoko
        button.navbar-toggler(data-toggle='collapse' data-target='#navbarNav')
          span.navbar-toggler-icon
        #navbarNav.collapse.navbar-collapse
          .mx-auto
          ul.navbar-nav
            router-link.nav-item(tag='li', v-for='(link, i) in links', :key='i', :to='link.to')
              a.nav-link {{ link.text }}

    router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      links: [
        { text: 'Welcome', to: { name: 'Welcome' } },
        { text: 'Portfolio', to: '/portfolio' },
        { text: 'Contact', to: '/contact' }
      ]
    }
  }
}
</script>

<style src="~/bootstrap/dist/css/bootstrap.css"></style>
