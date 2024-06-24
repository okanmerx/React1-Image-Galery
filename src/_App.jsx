import React from "react";

export default function App() {

  return (
    <>
      <h1 className="title">Hello React</h1>
      <p>This is a paragraph</p>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Eter yourname" id="name" />
      </>
  );
}

// return React.createElement('div', {}, 
//   React.createElement('h1', {className:'title'}, 'Hello React!'), 
//   React.createElement('p', null,'This is a paragraph') 
// )

