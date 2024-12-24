export async function getParticularData(getIdPokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${getIdPokemon}/`)
    .then(res => res.json())
    .then(data =>{ return data });
}