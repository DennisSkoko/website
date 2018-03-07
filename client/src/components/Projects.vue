<template lang="pug">
  .projects
    .jumbotron.jumbotron-fluid
      .container
        h1.display-1 Projects
        p.lead.mb-0.
          The projects listed here are my projects that stands out. If you wish
          to view all of my work then you can take a look at my Github page.

    .container
      .progress.mb-3(v-if='loading')
        .w-100.progress-bar.progress-bar-striped.progress-bar-animated

      .alert.alert-danger(v-if='error')
        button.close(v-on:click='error = false')
          span(aria-hidden='true') &times;
        h4.alert-heading Failed to fetch data!
        p.mb-0.
          I'm sorry but I failed to fetch the data from the server.

      .row(v-if='projects.length')
        .col-12.col-md-6.col-xl-4(v-for='project in projects')
          .card: .card-body
            h2.mb-3.text-center.card-title {{ project.title }}
            .tags.mb-3
              span.mx-1.py-1.px-2.border.tag.text-muted(v-for='tag in project.tags') {{ tag }}
            p {{ project.description }}
            a.btn.btn-outline-dark.btn-block.btn-sm(:href='project.link', target='_blank') View
</template>

<script>
import http from 'axios'

export default {
  name: 'Projects',
  data () {
    return {
      loading: true,
      error: false,
      projects: []
    }
  },
  created () {
    http.get('/api/projects')
      .then(res => res.data)
      .then(projects => {
        this.projects = projects
      })
      .catch(err => {
        this.error = true
        console.error(err)
      })
      .then(() => {
        this.loading = false
      })
  }
}
</script>

<style scoped>
.tags span {
  border-radius: 10px;
}
</style>
