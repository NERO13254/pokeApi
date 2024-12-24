export async function getFirstSpecimenes(){
    // realiza una consulta a la api para obtener los primeros 3 pokemones
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=3").then(res=>{
       return res.json();
    }).then(data=>{
       return data["results"]
    })
}
