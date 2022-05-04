 //Solicitar los props
 export const getPokemon = async ( category ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI( category )}`

    //Hacer la peticion
    const resp = await fetch( url );

    const pokemon = await resp.json();

    // console.log( pokemon );

    //configurar la informacion necesaria

    return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default
    };

}