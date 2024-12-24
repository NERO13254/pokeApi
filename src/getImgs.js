import { getFirstSpecimenes } from "./fetchs/getNames.js";

export async function getImg() {

    let getData = await getFirstSpecimenes();

    for (let i = 0; i < getData.length; i++) {
        const element = getData[i];
        // obtiene el id de cada uno 
        let getId = element["url"].split("/");
        getId = getId[`${getId.length-2}`]
        // obtiene las imagenes
        let getImgs = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId}.png`)
        .then(res=> {return res})
        // inserta las imagenes
        document.getElementById(`${element["name"]}`).children[0].src=`${getImgs["url"]}`
    }
}
