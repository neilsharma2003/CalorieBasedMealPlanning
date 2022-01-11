import React, { useState, useEffect } from 'react';
import './App.css';
import MealList from "./MealList";
import { Navbar, Container } from 'react-bootstrap';

function App() {
  const [quote, setQuotes] = useState('');
  const [author, setAuthor] = useState('');
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  useEffect(() => {
    let url = `http://api.quotable.io/random`;
    fetch(url)
      .then(res => res.json())
      .then(quote => {
        setQuotes(quote.content);
        setAuthor(quote.author);
        console.log(quote);
      }
      )
  }, []);

  function getMealData() {
    fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=8d473af42f0c4a6f84a6a228086afb0a&timeFrame=day&targetCalories=${calories}`)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data)
      })
      .catch(() => {
        console.log("error");
      })
  }
  function handleChange(event) {
    setCalories(event.target.value);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="header" href="#home"><h1 className='header-main'>Calorie Based Meal Planning</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <div className='quote'>
        <h2 className='quote-text'>"{quote}"</h2>
        <div className='author'><h3>-{author}</h3></div>
      </div> <br />
      <div><h2 className='blurb'>It is important to remember that regular exercise is only half of the equation to getting the body of your dreams. Consistent diet is crucial whether you are trying to gain muscle or lose fat.</h2></div>

      <section className="control">
        <input
          type="number"
          placeholder="Input Calories"
          onChange={handleChange} />
      </section>
      <button onClick={getMealData}> Get Daily Meal Plan </button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  )
}

export default App;
