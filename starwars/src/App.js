import React, { useState, useEffect } from 'react';
import CharCard from './components/CharCard';
import axios from 'axios';
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

const Start = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const App = () => {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
          console.log(response)
          setCharData(response.data.results)
      })
      .catch((error) => {
          console.log(error)
      })
  }, [])
  
  return (
    <div className="App">
      <Container>
      <h1 className="Header">L-look at All the -urp, All the Characters Morty! Alllll the Characters...</h1>
          <Start className='start'>
              {charData.map(item => <CharCard key={item.id} name={item.name} image={item.image} species={item.species} location={item.location} status={item.status} />)}
          </Start>      
      </Container>
    </div>
  )
}

export default App;
