import React, { useState } from 'react';
import { UseFetch } from '../UseFetch';
import { Cards } from '../cards/Cards';

const Inicio = () => {
    let offset = Math.round(Math.random() * 1126);
    const [url,] = useState('https://pokeapi.co/api/v2/pokemon?limit=6&offset=0' + offset)
    const estado = UseFetch(url)
    const { cargando, data } = estado
    cargando ? console.log('cargando') : console.log(data.results)

    return (
        <div>
            {
                cargando
                    ?
                    <h1>Cargando...</h1>
                    :
                    <div>
                        <Cards results={data.results} />
                    </div>

            }
        </div>
    )
}

export default Inicio