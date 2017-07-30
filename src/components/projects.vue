<template lang="pug">
  v-container
    v-layout(wrap)
      v-flex(xs12, md6, v-for='project in projects', :key='project.id')
        v-card.my-3
          v-card-media
            v-carousel(:left-control-icon='false', :right-control-icon='false')
              v-carousel-item(
                v-for='img in project.images',
                :key='img',
                :src='"img/projects/" + project.id + "/" + img'
              )
          v-card-title.pa-3
            div
              h4.mb-0 {{ project.title }}
              .tags(v-if='project.tags')
                v-chip.ma-1(v-for='tag in project.tags.split(",")', :key='tag', small, outline) {{ tag }}
          v-card-text.pa-3
            p.mb-0 {{ project.description }}
          v-card-actions
            v-btn(flat, block, :href='project.website', target='_blank', primary) Go to project
</template>

<script>
import projects from '../../res/projects.json'

export default {
  data () {
    return {
      projects: projects
    }
  }
}
</script>

<style lang="stylus">
.carousel
  height: 300px
</style>
