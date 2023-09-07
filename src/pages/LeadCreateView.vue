<template>
  <div>
    <flash-message message="Message sent!" :show="show" />
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="name">Name</label>
            <input type="name" v-model="name" />
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" v-model="email" />
        </div>

        <button @click="submit">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import FlashMessage from '../components/FlashMessage.vue'


export default {
  components: { FlashMessage },
    data() {
        return {
            show: false,
            email: '',
            name: '',
        }
    },
    methods: {
        handleSubmit() {

            axios.post('http://127.0.0.1:8000/api/leads/store', 
            {
                'name': this.name,
                'email': this.email
            })
            .then((response) => {
                this.show = true;
                setTimeout(() => {
                    this.show = false;
                }, 3000);
            })
            .catch(error => console.log(error))
            
        }
    }
}
</script>