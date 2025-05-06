// Import required  hooks
import { DogFact } from "./components/DogFact";
import { useState, useEffect } from "react"
import "./styles.css";

export const App = () => {


  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState('')
  const [error, setError] = useState(null)

  // Hint: Define the API endpoint for fetching dog facts
  const getDogFact = () => {
    const endpoint = 'https://dogapi.dog/api/v2/facts';
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const fact = data.data[0].attributes.body;
        setDogFact(fact);
      })
      .catch(err => {
        setError('Failed to load dog fact.');
      });
  }
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    getDogFact();
  }, []);

  return (
    <div className="App">
      <h1>🐶 Dog Fact of the Day</h1>
      {error ? <p>{error}</p> : <DogFact fact={dogFact} />}
      <button className="refresh-btn" onClick={getDogFact}>
        🔁 Get New Fact
      </button>
    </div>
  );
};



// Run only once when the page loads


