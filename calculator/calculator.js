let buttons = document.querySelectorAll(".button");
let currentOp = document.querySelector(".operation");
buttons.forEach(button => {
    button.addEventListener("click", function(e){
        if(!(e.target.dataset.value === '=')){
            currentOp.textContent += e.target.dataset.value;
        }
    });
});