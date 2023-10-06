import React from 'react';
import { useState } from 'react';

import "./Content.css";

import Axios from 'axios';
import { Input, Button } from 'antd';

function Content() {

    const [pokemonName, setPokemonName] = useState('');

    const [pokemonData, setPokemonData] = useState({Name: "", Type: "", Img:"", Hp: "", Attack: "", Defence: ""});

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemonData({
                Name: res.data.species.name, 
                Type: res.data.types[0].type.name, 
                Img: res.data.sprites.front_default, 
                Hp: res.data.stats[0].base_stat,
                Attack: res.data.stats[1].base_stat,
                Defence: res.data.stats[2].base_stat});
            });
    }   

    return (
        <div className='container'>
            <Input  
                type='text'
                onChange={(event) => setPokemonName(event.target.value) }
            />
            <Button type='submit' onClick={searchPokemon} >Search Pokemon</Button>

            

        </div>

    );
  }

export default Content