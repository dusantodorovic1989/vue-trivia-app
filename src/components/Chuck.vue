<template>
     <div class="container">
        <div>
        <!-- <img class="chuck-image" src="https://pics.me.me/chuck-norri-17239471.png"> -->
        <form @submit.prevent="getNewJoke(categoryy)">
        <input type="text" v-model="categoryy">
        <button type="submit" class="btn btn-primary">Get New Joke</button>
        </form>
      <h2>{{ joke.value }}</h2>
      <a :href="joke.sourceUrl" class="btn btn-info">See source</a>
        
        </div>
        
    </div>
</template>

<script>
import ChuckService from '../sevices/ChuckService'
import { mapGetters, mapActions } from "vuex"
export default {
    // created() {
    //     ChuckService.getRandomJoke()
    //     .then(response => {
    //         console.log(response)
    //     }).catch(error => {
    //         console.log(error.response);
            
    //     }) 
    // }
    data(){
        return {
            categoryy:""
        }
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            // console.log('sdfsdf')
            vm.$store.dispatch('getNewJoke');
        })
    },
    methods:{
       
        ...mapActions(['getNewJoke'])
    },

    computed: {
        ...mapGetters({
      joke: "randomJoke",
      category: "category"
    })
        
        
    }
    

    

}
</script>

<style>

</style>

