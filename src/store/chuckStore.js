import ChuckServices from '../sevices/ChuckService.js'

export const chuckStore = {
    state:{
        joke: '',
        category: []
    },

        actions: {
            async getNewJoke({commit},category){
                try{
                    const response =await ChuckServices.getRandomJoke(category)
                    commit('JOKE', response)
    
                }catch(error) {
                    console.log(error);

                }
            }
        },

        mutations:{
            JOKE(state,joke){
                state.joke = joke
            },
            JOKES_CATEGORIES(state,category){
                state.categories = category
            }
        },
        getters: {
            randomJoke: state => state.joke,
            categories: state => state.category
        },
}