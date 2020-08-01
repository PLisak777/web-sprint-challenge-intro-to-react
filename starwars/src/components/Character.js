
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard'

export default function Character() {
const [charData, setCharData] = useState([]);


useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        console.log(response)
        setCharData(response.results)
    })
    .catch((error) => {
        console.log(error)
    })
}, [])

console.log(charData)

    return (
        <div>
            {/* {charData.map(data => <CharCard key={data.id} name={data.name} />)} */}
        </div>
    )
}

