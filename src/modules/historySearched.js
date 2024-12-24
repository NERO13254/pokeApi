export async function historySearched(data) {

    let getAllData  = Array.from(document.querySelectorAll(".searchedContent strong"));
    let dataFiltered = getAllData.filter(fill=> fill.textContent.includes(data));
    // si no se encuentra el dato buscado en la lista lo añade
    if(dataFiltered.length<=0){
        // crea el elemento HTML del historial de busqueda
        let getDiv = document.createElement("div");
        getDiv.className="searchedContent";
        getDiv.innerHTML=`
        <strong>${data}</strong>
        `;
        // añade el elemento al HTML
        document.getElementById("freshSearchsContent").prepend(getDiv);
    }else{
      let getNode = dataFiltered[0].parentNode;
      console.log(getNode);
      document.getElementById("freshSearchsContent").prepend(getNode);
    }
}