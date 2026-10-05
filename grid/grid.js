function createGrid(size){
    // check for invalid input (negative numbers and non-numeric characters)
    while((!((0 < size) && (size < 100))|| !Number.isInteger(size)) || (Number.isNaN(size))){
        if(!((0 < size) && (size < 100))|| !Number.isInteger(size)){
            size = Number(prompt("Please enter a positive integer less than 100"));
        }else{
            size = Number(prompt("Please enter a valid number"));
        }
    }
    let container = document.querySelector(".container");
    // fix grid size at 960px x 960px
    let width = 960 / size;
    for(let i=0; i<size; i++){
        // create flex rows which get stretched with cubes based on the size specified by user
        let theDiv = document.createElement("div");
        theDiv.style.display = "flex";
        container.appendChild(theDiv);
        for(let j=0; j<size; j++){
            // create cubes per row
            let subDiv = document.createElement("div");
            subDiv.classList.add("sub-div");
            subDiv.style.height = `${width}px`;
            subDiv.style.width = `${width}px`;
            subDiv.setAttribute("interactions", "0");
            subDiv.addEventListener("mouseenter", function(e){
                // generate random integers for the rgb coloration
                let int1 = randInt();
                let int2 = randInt();
                let int3 = randInt();
                let interactions = Number(e.target.getAttribute("interactions"));
                e.target.setAttribute("interactions", `${interactions + 1}`);
                interactions = interactions + 1;
                if(interactions <= 9){
                    e.target.style.backgroundColor = `rgb(${int1}, ${int2}, ${int3})`;
                    e.target.style.opacity = `${interactions}`;
                }else{
                    e.target.style.backgroundColor = "black";
                }
            })
            theDiv.appendChild(subDiv);
        }
    }
}

function randInt(){
    return Math.floor((Math.random() * 256));
}

// button for customizing grid size
let resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", function(){
    size = prompt("Enter Grid Size");
    let container = document.querySelector(".container");
    container.innerHTML = "";
    createGrid(Number(size));
})

// default grid
createGrid(6);