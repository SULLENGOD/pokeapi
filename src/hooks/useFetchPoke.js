import { useEffect, useState } from "react"
import { getPokemon } from "../helpers/getPokemon";

export const useFetchPoke = ( category ) => {

    const [state, setState] = useState({

        data: [],
        loading: true
    });

    useEffect( () => {

        //Lanzar la peticion
        getPokemon( category ).then( imgs => {

            setState({

                data: imgs,
                loading: false

            })
        });

        //Lanzar unicamente cuando se cambie el parametro
    }, [ category ]);

    return state

    
}