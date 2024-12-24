import { getParticularData } from "../fetchs/getParticularData.js";
import { habilities } from "../fetchs/habilities.js";

export async function desplegateInfo(data , newData) {
    console.log(data);
    let getIdPokemon = data.id;
    let resultContainer =  document.getElementById("resultContainer");
    resultContainer.innerHTML="";

    // obtiene los datos generales
    const getHabilities = await habilities(getIdPokemon);

    // obtiene los datos particulares 
    const particularData = await getParticularData(getIdPokemon);
    // crea el contenedor de la informacion con la imagen
    let div = document.createElement("div");
    div.id = "contentInfo";

    console.log(particularData);
    console.log(getHabilities);
    let eggGroups = particularData["egg_groups"].length>1 ? particularData["egg_groups"][1]["name"] : particularData["egg_groups"][0]["name"]
    let habitat = (particularData["habitat"] &&Object.keys(particularData["habitat"]).length>0) ? particularData["habitat"]["name"] : "???";
    let color = Object.keys(particularData["color"]).length>0 ? particularData["color"]["name"] : "???";
    div.innerHTML = `
        <div class='imgMaximized'>

        </div>
        <strong>${getHabilities["name"]} : </strong>
        <p>Pokemon type : ${ eggGroups } </p>
        <p>Color :  ${color}</p>
        <p>Habitat : ${habitat}</p>
        <div class='infoContent'>
            <p>${particularData["flavor_text_entries"][0]["flavor_text"].replace(//g , " ").toUpperCase()}4</p>
        </di>

    `;
    // añade el contenedor al html e inserta la ruta de la imagen en su contenedor
    resultContainer.append(div);

    if(!newData){
        // obtine la imagen seleccionada y la clona
        let imgCloned = data.cloneNode(true);
        div.children[0].append(imgCloned);
    }else{
        let img = document.createElement("img");
        img.src = data.sprites["front_default"];
        img.alt = "img";
        div.children[0].append(img);
    }
    

    div.classList.add("showElement");
}