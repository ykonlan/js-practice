function createGrid(size){
    while((!((0 < size) && (size < 100))|| !Number.isInteger(size)) || (Number.isNaN(size))){
        if(!((0 < size) && (size < 100))|| !Number.isInteger(size)){
            size = Number(prompt("Please enter a positive integer less than 100"));
        }else{
            size = Number(prompt("Please enter a valid number"));
        }
    }
    let container = document.querySelector(".container");
    let width = 960 / size;
    for(let i=0; i<size; i++){
        let theDiv = document.createElement("div");
        theDiv.style.display = "flex";
        container.appendChild(theDiv);
        for(let j=0; j<size; j++){
            let subDiv = document.createElement("div");
            subDiv.classList.add("sub-div");
            subDiv.style.height = `${width}px`;
            subDiv.style.width = `${width}px`;
            theDiv.appendChild(subDiv);
        }
    }
}

let resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", function(){
    size = prompt("Enter Grid Size");
    let container = document.querySelector(".container");
    container.innerHTML = "";
    createGrid(Number(size));
})

createGrid(16);