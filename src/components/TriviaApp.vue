<template>
    <div class="container">
            {{trivia}}
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    created(){
        this.getRandomTrivia()
    },
    methods:{
        ...mapActions(['getRandomTrivia'])
    },
    computed:{
        ...mapGetters({
            travia:'randomTrivia'
        })
    }
}
</script>
