<template>
  <div class="posts">
    <h1>Post Title: {{ post.title }}</h1>
    <p>
        Slug: {{ post.slug }}
    </p>
    <p>
        Content: {{ post.content }}
    </p>
    
  </div>
</template>

<script>
import axios from 'axios'


export default {
    props: ['id'],
    data() {
        return {
            post: {}
        }
    },
    setup(props) {
        console.log(props.id)
        const postId = props.id
    },
    mounted() {
        console.log(this.id);
        this.getPost()
    },
    methods: {
        getPost() {
            axios.get('http://127.0.0.1:8000/api/post/' + this.id)
                .then((response) => {
                    console.log(response.data.data)
                    this.post = response.data.data;
                })
                .catch(error => console.log(error))
        }
    }
}
</script>