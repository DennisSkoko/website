<template lang="pug">
  v-container
    v-layout(justify-center)
      v-flex(xs12, md8)
        form.grey.lighten-4.pa-3.mt-4.elevation-3(v-on:submit.prevent='submit()')
          .text-xs-center
            h3 Contact
          v-text-field(label='Email', v-model='email', required)

          v-text-field(
            label='Subject',
            counter, max='25',
            maxlength='25',
            v-model='subject',
            required
          )

          v-text-field(
            label='Message',
            hint='Supports markdown',
            textarea,
            multi-line,
            counter,
            max='250',
            maxlength='250'
            v-model='message',
            required
          )
          v-btn(block, outline, type='submit') Submit
</template>

<script>
export default {
  data () {
    return {
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    submit () {
      console.log('Submitted')
    }
  }
}
</script>

<style lang="stylus">
.input-group--multi-line textarea
  resize: none
</style>
