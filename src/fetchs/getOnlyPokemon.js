export async function getOnlyPokemon(data) {
    // realiza la consulta a la api por el valor buscado
    return fetch(`https://pokeapi.co/api/v2/pokemon/${data}`)
    .then((res)=>{
        // si no se encuentra el valor envia el estado de la consulta
        if(!res["ok"]){
            return res.status;
        }else{
            // sino la transforma en json y la envia 
            return res.json();
        }
    }).catch(err=>{
        console.log("si falla entra aca");
        return err
    }) // exporta los datos
    .then(josonData=>{return josonData})
    
}