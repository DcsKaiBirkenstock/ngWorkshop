import Joke from '../models/Joke';


class RandomJokeController {
  constructor() {
    this.loadJoke();
  }

  loadJoke() {
    Joke.random().then(joke => {
      this.joke = joke;
    });
  }
}


export default RandomJokeController;