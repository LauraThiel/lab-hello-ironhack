import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div>
      <img src={"/images/ironhack-logo.svg"} />
    </div>
  );
}

function Content2(props) {
  return (
    <div>
      <img src={"/images/icon2.png"} />
      <h1>Components</h1>
      <p> Build encapsulated components that manage their state.</p>
    </div>
  );
}

function Content3(props) {
  return (
    <div>
      <img src={"/images/icon3.png"} />
      <h1>Single-Way</h1>
      <p> A set of immutable values are passed to the component's.</p>
    </div>
  );
}

function Content4(props) {
  return (
    <div>
      <img src={"/images/icon4.png"} />
      <h1>JSX</h1>
      <p> Statically-typed, designed to run on modern browsers.</p>
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <img src={props.image} />
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card image="/images/icon1.png">
        <h1>Declarative</h1>
        <p> React makes it painless to create interactive UIs.</p>
      </Card>
      <Content2 />
      <Content3 />
      <Content4 />
    </div>
  );
}

export default App;
