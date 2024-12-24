import { getOnlyPokemon } from "../fetchs/getOnlyPokemon.js";
import { desplegateInfo } from "./desplegateInfo.js";
import { historySearched } from "./historySearched.js";
import {reportStatus} from "./alertContainer.js";

let searchContainer  = "";

export async function searchPokemon(getValue) {
    // getValue es el valor ingresado por el usuario donde se transformó a minusculas y se removieron los espacios 
    getValue = getValue.toLowerCase().trim();
    // contenedor de la alerta
    let alertContent = document.getElementById("alertContent");

    // obtine los datos del pokemon buscado
    let getData = await getOnlyPokemon(getValue);
    // si encuentra el pokemon despliega la información de este y limpia el campo de alerta
    if(!parseInt(getData)){
        await desplegateInfo(getData, "newPokemon");
        await historySearched(getValue);
        alertContent.innerHTML="";
    }else{
        // si no encuentra el pokemon buscado , crea la alerta y la añade al HTML
        reportStatus("Especimen no encontrado , corrobore el nombre ingresado" , alertContent);
    }
    
}