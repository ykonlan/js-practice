function createGrid(size){
    let container = document.querySelector(".container");
    for(let i=0; i<size; i++){
        let theDiv = document.createElement("div");
        theDiv.style.display = "flex";
        container.appendChild(theDiv);
        for(let j=0; j<size; j++){
            let subDiv = document.createElement("div");
            subDiv.classList.add("sub-div");
            theDiv.appendChild(subDiv);
        }
    }
}

createGrid(16);