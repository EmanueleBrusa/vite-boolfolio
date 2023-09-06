<template>
  <div class="posts">
    <h1>This is a post page</h1>
<div class="container">
        <div class="row">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="bg-primary text-white" scope="col">
                                <h2 class="fw-bold">Id</h2>
                            </th>
                            <th class="bg-primary text-white" scope="col">
                                <h2 class="fw-bold">Title</h2>
                            </th>
                            <th class="bg-primary text-white" scope="col">
                                <h2 class="fw-bold">Slug</h2>
                            </th>
                            <th class="bg-primary text-white" scope="col">
                                <h2 class="fw-bold">Type</h2>
                            </th>
                            <th class="bg-primary text-white" scope="col">
                                <h2 class="fw-bold">Azioni</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="post in posts">

                            <th class="bg-primary-subtle fw-bold" scope="row">{{ post.id }}</th>
                            <td class="bg-primary-subtle fw-bold">
                              <router-link 
                                :to="{
                                  name: 'postShow',
                                  params: {
                                    id: post.id
                                  }
                                }"
                              >{{ post.title }}</router-link>
                            </td>
                            <td class="bg-primary-subtle fw-bold">{{ post.slug }}</td>
                            <td class="bg-primary-subtle fw-bold">{{ post.type }}</td>
                            <td class="bg-primary-subtle fw-bold">

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',
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