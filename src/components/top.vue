<template>
    <div class="hero-body">
        <section class="container ">
            <h1 class="title is-1">SPA-Page</h1>
            <h2 class="subtitle is-4">
                Vue.jsで作ったSPA
            </h2>
            <p class="has-text-centered">
                <a class="button is-medium is-info is-outlined">
                    Learn more
                </a>
            </p>
        </section>
    </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
