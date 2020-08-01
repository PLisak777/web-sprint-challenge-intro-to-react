import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard';
import styled from 'styled-components';

const Start = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default function Character() {
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

console.log(charData)

    return (
        <Start className='start'>
            {charData.map(item => <CharCard key={item.id} name={item.name} image={item.image} species={item.species} location={item.location} status={item.status} />)}
        </Start>
    )
}

