
// DogFact Component
export const DogFact = ({ fact }) => {
  const cleanFact = fact;

  return (
    <div className="dog-fact">
      {cleanFact ? (
        <p>{cleanFact}</p>
      ) : (
        <p className="loading">🐶 Fetching a fun dog fact...</p>
      )}
    </div>
  );
};



// Hint: Extract the 'body' from 'attributes' of the 'fact' prop

// Hint: Render the 'cleanFact' if available, otherwise show a loading message

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />

// DogFact Component

