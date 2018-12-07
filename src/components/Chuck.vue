<template>
     <div class="alert alert-info" role="alert">
        {{ randJoke }}
    </div>
</template>

<script>
import ChuckService from '../sevices/ChuckService'
export default {
    // created() {
    //     ChuckService.getRandomJoke()
    //     .then(response => {
    //         console.log(response)
    //     }).catch(error => {
    //         console.log(error.response);
            
    //     }) 
    // }

      beforeRouteEnter(to, from, next) {
        next(vm => {
            // console.log('sdfsdf')
            vm.$store.dispatch('joke');
        })
    },

    computed: {
        //preko computed propertija smo dovukli getter iz ChuckStore.js i ispisali smo njegov value
        //i onda ispisujemo ovaj computed properti
        randJoke() {
            return this.$store.getters.randomJoke.value;
        }
    },

}
</script>

<style>

</style>

