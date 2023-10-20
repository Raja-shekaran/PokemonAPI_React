import React from 'react';

import "./Content.css";

import { Card } from 'antd';

function Content(props) {

    const capitalizeFirstLetter = (string) =>
    {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
            <div>
            { props.pokemonFlag &&
                <Card className='cont'
                    cover={
                        <img
                            src={props.pokemonData.Img}
                        />}
                        title={<h1>
                            {capitalizeFirstLetter(props.pokemonData.Name)}
                        </h1>
                        }>
                        <li>Type: {capitalizeFirstLetter(props.pokemonData.Type)}</li>
                        <li>Hp: {props.pokemonData.Hp}</li>
                        <li>Attack: {props.pokemonData.Attack}</li>
                        <li>Defence: {props.pokemonData.Defence}</li>
                </Card>
            }
            </div>
    );
}

export default Content