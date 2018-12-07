import ChuckServices from '../sevices/ChuckService.js'

export const chuckStore = {
    state:{
        joke: '',
    },

        actions: {
            async joke({commit}){
                try{
                    const response =await ChuckServices.getRandomJoke()
                    commit('JOKE', response)
                }catch(error) {
                    console.log(error);

                }
            }
        },

        mutations:{
            JOKE(state,joke){
                state.joke = joke
            }
        },
        getters: {
            randomJoke: state => state.joke,
        },
}