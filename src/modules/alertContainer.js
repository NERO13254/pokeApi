export function reportStatus(message , append){

    let div = document.createElement("div");
    div.className = "errorContainer";
    div.innerHTML=`
    <strong>${message}</strong>
    `;
    alertContent.innerHTML="";
    div.classList.add("showElement");
    append.append(div);
}