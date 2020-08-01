import React from 'react';
import Character from './components/Character'
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
background: transparent;
width: 100%;
max-width: 1200px;
margin: 20px auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
color: white;
box-shadow: 0px 1px 6px -2px grey;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Container>
      <h1 className="Header"><Character /></h1>
      </Container>
    </div>
  )
}

export default App;
