import { reportStatus } from "./src/modules/alertContainer.js";
import { chargeFirstData } from "./src/modules/chargeFirstData.js"
import { desplegateInfo } from "./src/modules/desplegateInfo.js";
import { searchPokemon } from "./src/modules/searchPokemon.js";

window.onload = async()=>{
  // carga los primeros 5 pokemons
  await chargeFirstData();
  searchPokemon("venusaur");
  // al hacer click sobre algun pokemon se despliega su informacion en el lateral
  document.getElementById("buttonContent").addEventListener("click" , (e)=>{
    if(e.target.tagName=="IMG"){
      desplegateInfo(e.target);
    }
  });
  // al hacer click en el boton buscar 
  document.getElementById("startSearch").addEventListener("click" , async()=>{
    // obtiene el valor de busqueda
    let getValue = document.getElementById("searcherContentInput").value;
    corroborateCharacters(getValue);
  });
  // al hacer click en alguno de los div de historial de busqueda
  document.getElementById("freshSearchsContent").addEventListener("click" , (e)=>{
    if(e.target.parentNode.className == "searchedContent"){
      let getTxt = e.target.textContent;
      corroborateCharacters(getTxt);
    }
  });
  // al presionar el boton "☰" en movil
  document.getElementById("closeSearcher").addEventListener("click" , ()=>{
    document.getElementById("freshSearchsContent").classList.toggle("show");
    document.getElementById("alertContent").classList.toggle("show");
    document.getElementById("searcherContent").classList.toggle("desplegate");
  });

  // corrobora los datos ingresados por el usuario
  function corroborateCharacters(data){
    let specialCharacters = data.replace(/[a-zA-Z0-9']/g, "");
    console.log(specialCharacters)
    if(specialCharacters.length>0){
      reportStatus("error no se permiten caracteres especiales" , document.getElementById("alertContent"));
    }else{
      searchPokemon(data);
    }
  }
}
