import { getFirstSpecimenes } from "../fetchs/getNames.js";
import { getImg } from "../getImgs.js";


export async function chargeFirstData() {
    // obtiene los nombres de los pokemon
    let getData = await getFirstSpecimenes();

    getData.forEach(element => {
        let div = document.createElement("div");
        div.id = element["name"];
        let getId = element["url"].split("/");

        div.innerHTML = `
        <img src="" alt="" id='${getId[getId.length-2]}'>
        `;
        // inserta los div en el html 
        document.getElementById("buttonContent").append(div);
    });
    // inserta las imagenes
    await getImg();
}