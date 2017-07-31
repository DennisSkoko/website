<template lang="pug">
  v-container
    v-layout(justify-center)
      v-flex(xs10, md6)
        v-alert(success, dismissible, v-model='alerts.success').
          The message has been successfuly sent. I will respond quickly as I can.
        v-alert(warning, dismissible, v-model='alerts.invalid').
          The values you have entered are invalid, please check your values and try again.
        v-alert(error, dismissible, v-model='alerts.error').
          I'm sorry but something happend when trying to send the message.
          Please try again or report the problem.
    v-layout(justify-center, v-if='!alerts.success')
      v-flex(xs12, md8)
        form.pa-3.mt-4(v-on:submit.prevent='submit()')
          .text-xs-center
            h3 Contact
          v-text-field(label='Email', v-model='form.email', required)

          v-text-field(
            label='Subject',
            counter, max='25',
            maxlength='25',
            v-model='form.subject',
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
            v-model='form.message',
            required
          )
          v-btn(block, outline, type='submit') Submit
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      alerts: {
        error: false,
        invalid: false,
        success: false
      },
      form: {
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    alert (status) {
      for (let key in alert) {
        this.alerts[key] = false
      }
      
      this.alerts[status] = true
    },
    submit () {
      axios.post('api/send-mail', this.form)
        .then(result => {
          this.alert('success')
        })
        .catch(err => {
          if (err.response.status === 422) {
            this.alert('invalid')
          } else {
            console.log(err)
            this.alert('error')
          }
        })
    }
  }
}
</script>

<style lang="stylus">
form
  border: 1px solid rgba(0, 0, 0, 0.2)
  border-radius: 5px

.input-group--multi-line textarea
  resize: none
</style>
