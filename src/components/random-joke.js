import { useState, useEffect } from 'react';

const RandomJoke = () => {
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => setJoke(data.value));
    }, []);

    return ( 
        <div className="random-joke">
            <p>Chuck Norris Joke: { joke }</p>
        </div>
     );
}
 
export default RandomJoke;