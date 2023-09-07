<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">Posts</router-link> | 
        <router-link to="/lead/create">Lead</router-link>
    </nav>
</template>

<script>
export default {
  name: 'HeaerComponent',
  props: {
    msg: String
  }
}
</script>