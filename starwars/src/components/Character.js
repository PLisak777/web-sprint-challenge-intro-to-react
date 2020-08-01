
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Character() {
const [charData, setCharData] = useState([]);

useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        console.log(response)
        // setCharData(response.results)
    })
    .catch((error) => {
        console.log(error)
    })
}, [])





    return (
<div></div>
    )
}

