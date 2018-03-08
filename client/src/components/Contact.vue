<template lang="pug">
  .contact
    .container: .row.justify-content-center
      .mt-5.col-12.col-md-8.col-lg-6(v-on:submit.prevent='submit')
        .progress.mb-3(v-if='loading')
          .w-100.progress-bar.progress-bar-striped.progress-bar-animated

        .alert.alert-success(v-if='success')
          button.close(v-on:click='success = false')
            span(aria-hidden='true') &times;
          h4.alert-heading Message sent
          p.mb-0.
            Your message was successfully sent.

        .alert.alert-warning(v-if='invalid')
          button.close(v-on:click='invalid = false')
            span(aria-hidden='true') &times;
          h4.alert-heading Invalid data
          p.mb-0.
            The values you have given are invalid.
            Please check your values and try again.

        .alert.alert-danger(v-if='error')
          button.close(v-on:click='error = false')
            span(aria-hidden='true') &times;
          h4.alert-heading Failed to fetch data!
          p.mb-0.
            I'm sorry but I failed to send the data to the server.

        form
          h1.text-center Contact
          .form-group
            input.form-control(
              placeholder='Email address',
              type='email',
              name='email',
              v-model='form.email',
              v-validate='"required|email"',
              :class='{ "is-invalid": errors.has("email") }'
            )
            p.mb-0.text-danger(v-if='errors.has("email")').
              {{ errors.first('email') }}

          .form-group
            input.form-control(
              placeholder='Subject',
              name='subject',
              v-model='form.subject',
              v-validate='"required|min:5|max:30"',
              :class='{ "is-invalid": errors.has("subject") }'
            )
            p.mb-0.text-danger(v-if='errors.has("subject")').
              {{ errors.first('subject') }}

          .form-group
            textarea.form-control(
              placeholder='Message',
              name='message',
              v-model='form.message',
              v-validate='"required|min:10|max:150"',
              :class='{ "is-invalid": errors.has("message") }'
            )
            p.mb-0.text-danger(v-if='errors.has("message")').
              {{ errors.first('message') }}

            button.mt-3.btn.btn-block.btn-outline-dark(type='submit') Send
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      loading: false,
      success: false,
      invalid: false,
      error: false,
      form: {
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll().then(valid => {
        if (!valid) return

        this.loading = true
        this.success = false
        this.invalid = false
        this.error = false
        axios.post('/api/send-mail', this.form)
          .then(() => {
            this.success = true
          })
          .catch(err => {
            if (err.response.status === 422) {
              this.invalid = true
            } else {
              this.error = true
            }
          })
          .then(() => {
            this.loading = false
          })
      })
    }
  }
}
</script>

<style>
textarea {
  min-height: 100px;
  max-height: 450px;
}
</style>
