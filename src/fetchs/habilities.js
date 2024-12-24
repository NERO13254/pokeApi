export async function habilities(getIdPokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${getIdPokemon}/`)
    .then(res=>res.json())
    .then(data=>{return data});
}