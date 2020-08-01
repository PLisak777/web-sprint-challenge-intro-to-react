import React from 'react';
import Character from './Character';
import styled from 'styled-components';

export default function CharCard(props) {

const Card = styled.div`
    background: #99f3eb;
    color: black;
    width: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;
`

const CardHead = styled.h3`
    margin: 0;
    font-size: 1rem;
    background: lightgrey;
`

const CardImg = styled.div`
    width: 200px;
    height: 200px;
    object-fit: scale;
    flex-shrink: 2;
`

const CardContent = styled.div`
    font-size: 1rem;
    line-height: 1;
    background: lightgrey;
`

    return (
        <Card>
            <CardHead>Name: {props.name} </CardHead>
            <CardImg><img className='card-img' src={props.image} alt='' /></CardImg>
            <CardContent>
                <p>Species: {props.species}</p>
                <p>Location: {props.location.name}</p>
                <p>Status: {props.status}</p>
            </CardContent>
        </Card>
    )
};