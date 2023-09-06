<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
          posts: {}
      }
  },
  mounted() {
      this.fetchPosts()
  },
  methods: {
      fetchPosts() {
          axios.get('http://127.0.0.1:8000/api/posts')
              .then((response) => {
                  console.log(response.data.data)
                  this.posts = response.data.data;
              })
              .catch(error => console.log(error))
      }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
