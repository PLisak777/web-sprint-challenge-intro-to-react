import React from 'react';
import styled from 'styled-components';

export default function CharCard(props) {

const Card = styled.div`
    background: #c1f762;
    color: black;
    width: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;
`

const CardHead = styled.h3`
    margin: 0;
    font-size: 1rem;
    font-weight: 300;
    background: #c1f762;
`

const CardImg = styled.div`
    width: 200px;
    height: 200px;
    object-fit: scale;
    flex-shrink: 2;
`

const CardContent = styled.div`
    font-size: .75rem;
    line-height: .5;
    background: #c1f762;
    font-weight: 200;
`

    return (
        <Card>
            <CardHead>Designation: {props.name}</CardHead>
            <CardImg><img className='card-img' src={props.image} alt='' /></CardImg>
            <CardContent>
                <p>Location: {props.location.name}</p>
                <p>Status: {props.status}</p>
            </CardContent>
        </Card>
    )
};