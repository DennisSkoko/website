<template lang="pug">
  .projects
    .jumbotron.jumbotron-fluid: .container
      h1.display-1 Projects
      p.lead.mb-0.
        The projects listed here are my projects that stands out. If you wish
        to view all of my work then you can take a look at my Github page.

    .container: .row(v-if='projects.length')
      .col-12.col-md-6.col-xl-4(v-for='project in projects')
        .card: .card-body
          h2.mb-3.text-center.card-title {{ project.title }}
          .tags.mb-3
            span.mx-1.py-1.px-2.border.tag.text-muted(v-for='tag in project.tags') {{ tag }}
          p {{ project.description }}
          a.btn.btn-outline-dark.btn-block.btn-sm(:href='project.link', target='_blank') View
</template>

<script>
import projects from '@/storage/projects'

export default {
  name: 'Projects',
  data () {
    return { projects }
  }
}
</script>

<style scoped>
.tags span {
  border-radius: 10px;
}
</style>
