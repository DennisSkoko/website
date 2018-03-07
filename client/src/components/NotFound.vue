<template lang="pug">
  .not-found
    .jumbotron.jumbotron-fluid
      .container
        h1.display-1 Not Found!
        p.lead.
          I'm sorry but I couldn't find what you were looking for.
          #[router-link(:to='{ name: "Welcome" }') Click here] to return back to the home page.
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
