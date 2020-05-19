import React, { useState, useEffect } from "react";

function App(props) {
  const [age, setAge] = useState(0);
  const [birthday, setBirthday] = useState(false);

  useEffect(() => {
    verifyBirthday(age, props.Age);
  });

  //verifyBirthday arrow function
  //Function to check the birthday of the user and called to setBirthday(true) if is it
  let verifyBirthday = (lifetimeAge, actualAge) => {
    const actualAgeInt = Number(actualAge);
    if (lifetimeAge === actualAgeInt) {
      setBirthday(true);
    }
  };

  //happyBirthday arrow function
  //Function to condition the render
  let happyBirthday = (birthday, name) => {
    const happyBirthdayStyle = {
      color: "red",
      weight: "bold",
    };

    if (birthday) {
      return <p style={happyBirthdayStyle}>Happy Birthday {name}!</p>;
    }
    return;
  };

  return (
    <div className="App">
      <h1>React with Hooks</h1>
      <h2>Welcome back {props.Name}!</h2>
      <p>Your lifetime {age} years old.</p>
      <p>You're actual age is {props.Age} years old!</p>

      {happyBirthday(birthday, props.Name)}
      <button onClick={() => setAge(age + 1)}>Click Me!</button>
    </div>
  );
}

export default App;
