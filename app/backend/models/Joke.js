import { get, getPromise } from '../services/restBackend';

const baseUrl = 'http://api.icndb.com/jokes';


class Joke {

  constructor(data) {
    this.data = data;
  }

  get id() {
    return this.data.id;
  }

  get text() {
    return this.data.joke;
  }



  static random() {
    var deferred = getPromise();

    get(`${baseUrl}/random`).success(data => {
      deferred.resolve(new this(data.value));
    });

    return deferred.promise;
  }


}

export default Joke;