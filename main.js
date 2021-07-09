// Current issue: need to generate a random movie, and have it available globally to use for the functions


// Need to take the array of movies -> take a random movie from that 
// Assign random movie to a variable 
// Then, you can extract the properties from the movie, like "title", "explanation", and "hint"
class RandomMovieGenerator{

    generateRandomMovie() {

        const movies = [
            {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
            {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
            {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
            {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
            {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
            {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
            {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
            {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
            {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
            {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
            {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
        ]
        
        const random = movies[Math.floor(Math.random() * movies.length)]; 
        console.log(random);

        return random
    }
}


class UI {

    constructor() {
        const movie = new RandomMovieGenerator(); 
        this.random = movie.generateRandomMovie();

        this.movieDescription = document.getElementById('movie-description')
        this.guessInput = document.getElementById('guess-input');
        this.submitButton = document.getElementById('submit-button');
        this.hintButton = document.getElementById('hint-button');
        this.hintOutput = document.getElementById('hint-output');

        this.successAlert = document.getElementById('success-alert'); 
        this.failAlert = document.getElementById('fail-alert');
        
        this.showDescription()
        this.initEventListeners()
    }


    initEventListeners() {
        this.submitButton.addEventListener('click', () => this.onSubmitButtonClick());
        this.hintButton.addEventListener('click', () => this.onHintButtonClick());
    }

    showDescription() {
        const random = this.random
        const explanation = random["explanation"]
        this.movieDescription.innerHTML = "Movie description: " + explanation;
        
    }


    onSubmitButtonClick() {
        // TODO: figure this out 
        

        const random = this.random

        console.log(random)
        const guess = this.guessInput.value;

        if (this.guessInput.value == random["title"]) {
            this.showSuccessAlert(guess, random);
        } else {
            this.showFailAlert(guess, random);
        }
    }

    onHintButtonClick() {
        // TODO: figure this out 

        const random = this.random 
        console.log(random)
        const hint = random["hint"]
        this.hintOutput.innerHTML = 'The hint is: ' + hint;

    }

    showSuccessAlert(guess, random) {
        this.successAlert.classList.remove('hide');
        this.failAlert.classList.add('hide');

        this.successAlert.innerHTML = 'You guessed: ' + guess + '.  The answer is: ' + random["title"];
    }

    showFailAlert(guess, random) {
        // debugger
        this.successAlert.classList.add('hide');
        this.failAlert.classList.remove('hide');

        this.failAlert.innerHTML = 'You guessed: ' + guess + '.  The answer is: ' + random["title"];

    }
}


const ui = new UI(); 


   