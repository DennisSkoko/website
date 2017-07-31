<template lang="pug">
  v-app
    nav
      v-toolbar.primary(dark)
        v-toolbar-side-icon.hidden-sm-and-up(@click='navActive = !navActive')
        v-toolbar-title Dennis Skoko
        v-spacer
        v-toolbar-items.hidden-xs-only
          v-btn(:to='{ name: "about" }', flat, exact) About
          v-btn(:to='{ name: "projects" }', flat, exact) Projects
          v-btn(:to='{ name: "contact" }', flat, exact) Contact
      v-navigation-drawer(v-model='navActive', temporary)
        v-toolbar.primary(dark)
          v-toolbar-title Dennis Skoko
          v-spacer
          v-btn(icon, @click='navActive = !navActive')
            v-icon close
        v-list
          v-list-tile(:to='{ name: "about" }', active-class='primary--text', exact) About
          v-list-tile(:to='{ name: "projects" }', active-class='primary--text', exact) Projects
          v-list-tile(:to='{ name: "contact" }', active-class='primary--text', exact) Contact
    router-view
    v-container
      footer.pa-3
        v-divider.mb-2
        .text-xs-center &copy; {{ new Date().getFullYear() }} Dennis Skoko
</template>

<script>
export default {
  data () {
    return {
      navActive: false
    }
  }
}
</script>

<style lang="stylus">
@require '../../node_modules/vuetify/src/stylus/settings/_colors.styl'

$theme = {
  primary: $cyan.darken-2
  accent: $cyan.accent-2
  secondary: $grey.darken-3
  info: $blue.base
  warning: $amber.base
  error: $red.accent-2
  success: $green.base
}

$grid-breakpoints = {
  xs: 0
  sm: 600px
  md: 1024px
  lg: 1024px
  xl: 1024px
}

@require '../../node_modules/vuetify/src/stylus/main.styl'

html
  overflow-y: auto
</style>
