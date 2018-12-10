import axios from 'axios'

class Trivia {
    constructor(){
        axios.defaults.baseURl = 'http:/jservice.io/api/'
    }
    getRandomTrivia(){
        return axios.get('random',{params:{count:30}})
    }
}

const triviaService = new Trivia();

export default triviaService;