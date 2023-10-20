import React from 'react';

import { useState } from 'react';

import "./SearchModule.css";

import Content from '../Content/Content';

import Axios from 'axios';

import { Input, Button } from 'antd';

function SearchModule() {

    const [pokemonName, setPokemonName] = useState('');

    const [pokemonFlag, setPokemonFalg] = useState(false);

    const [pokemonData, setPokemonData] = useState({ Name: "", Type: "", Img: "", Hp: "", Attack: "", Defence: "" });

    const searchPokemon = () => {

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {

            console.log(res);

            setPokemonFalg(true);

            setPokemonData({
                Name: pokemonName,
                Type: res.data.types[0].type.name,
                Img: res.data.sprites.front_default,
                Hp: res.data.stats[0].base_stat,
                Attack: res.data.stats[1].base_stat,
                Defence: res.data.stats[2].base_stat
            });
        });
    }

    return (
        <div>
            <div className='container'>
                <Input type='text' placeholder="Pokemon Name" onChange={(event) => setPokemonName(event.target.value)} />
                <Button type='submit' onClick={searchPokemon} >Search</Button>
            </div>
            <Content pokemonData={pokemonData} pokemonFlag={pokemonFlag} />
        </div>
    );
}

export default SearchModule