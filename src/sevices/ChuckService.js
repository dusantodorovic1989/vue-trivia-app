//import chucknorris from('chucknorris-io')

const Chuck  = require('chucknorris-io'),
      client = new Chuck();

class ChuckService {
    getRandomJoke(){
        return client.getRandomJoke();
    }
}
const chuck = new ChuckService();

export default chuck