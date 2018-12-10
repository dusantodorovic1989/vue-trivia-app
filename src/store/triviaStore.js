import Trivia from '../services/TriviaService'

const triviaStore = {
    state: {
        randomTrivia: []
    },
    actions: {
        async getRandomTrivia({ commit }) {
            console.log('afasfasfs');            
            try {
                commit('SET_TRIVIA', await Trivia.getRandomTrivia())
            } catch (error) {
                error
            }
        }
    },
    mutations: {
        SET_TRIVIA(state, trivia) {
            state.randomTrivia = trivia
        }
 },
    getters: {
      randomTrivia: state => state.randomTrivia
  }
 }
 export default triviaStore;