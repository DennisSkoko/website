<template lang="pug">
  div
    .jumbotron.grey.lighten-3.pa-4
      v-container
        h1 404 Not Found
        p.headline.
          I'm sorry but I couldn't found what you were looking for.
          #[router-link(:to='{ name: "about" }') Click here] to return to the home page.
</template>
