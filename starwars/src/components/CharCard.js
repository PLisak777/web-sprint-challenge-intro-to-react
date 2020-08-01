import React, { useState } from 'react';
import Character from './Character';
import styled from 'styled-components';

export default function CharCard(props) {
// const [charData, setCharData] = props;

const CardHead = styled.div`
display: flex;
flex-direction: column;
height: 150px;
width: 100%;
flex: 1;
`

    return (
    <CardHead>Name: {props.name} </CardHead>
    )
};