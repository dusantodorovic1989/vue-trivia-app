//import chucknorris from('chucknorris-io')

const Chuck  = require('chucknorris-io'),
      client = new Chuck();

class ChuckService {
    getRandomJoke(category){
        return client.getRandomJoke(category);
    }
}
const chuck = new ChuckService();

export default chuck