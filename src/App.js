import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

function App(props) {
//Holds the list of pets
let [petList, setPetList] = React.useState([]);

//Adding react
function About(props) {
    let navigate = useNavigate();
    function handleButton(event) {
        navigate("/", {replace: false } );
    }
    return (
        <div>
        <h1>Welcome to Little Horror's Pet Shop</h1>
        <p>Our petshop specializes in pet baths, claw painting and claw clipping!
            Sign up your pet for our services today! (ﾉ´ з `)ノ	
        </p>
        </div>
    )
}

function Navbar(props) {
    return (
      <div className="nav">
        <Link to="/about">About</Link>
      </div>
    );
  } 


//holds the form info currently being modified.
let [petName, setPetName] = useState("");
let [petBreed, setPetBreed] = useState("");
let [petAge, setPetAge] = useState(0);

function handleNameInput(event) {
    setPetName(event.target.value);
}

function handleBreedInput(event) {
    setPetBreed(event.target.value);
}

function handleAgeInput(event) {
    setPetAge(event.target.value);
}

function handleClick() {
    let petObject = {
        name: petName,
        breed: petBreed,
        age: petAge
    };
    setPetList( [...petList, petObject] ); //copies PetList and adds Pet Object to it
    setPetName( "" );
    setPetBreed( "" );
    setPetAge( 0 );
}
  let petElementArray = petList.map((animal, index) => {
      return (
          <div key = {index}>
              <div>Name: {animal.name}</div>
              <div>Breed: {animal.breed}</div>
              <div>Age: {animal.age}</div>
          </div>
      )
  });
  return (
      <div>
          <Router>
              <div>
              <Navbar/>
                  <hr/>
                  <Routes>
                      <Route path ="/about" element={<About/>}/>
                  </Routes>
              </div>
          </Router>
          <h4>Pet Store Animal List</h4>
          {petElementArray}
          <input value={petName} onChange={handleNameInput} placeholder="Pet Name"/>
          <input value={petBreed} onChange={handleBreedInput} placeholder="Pet Breed"/>
          <input value={petAge} onChange={handleAgeInput} placeholder="Pet Age"/>
          <button onClick={handleClick}>Add Animal</button>
          </div>
          
      
  );
  
}

export default App;
