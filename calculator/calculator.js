function add(a,b){
    return Number(a) + Number(b);
}

function subtract(a,b){
    return Number(a) - Number(b);
}

function multiply(a,b){
    return Number(a) * Number(b);
}

function divide(a,b){
    return Number(a)/Number(b);
}


let buttons = document.querySelectorAll(".button");
let currentOp = document.querySelector(".operation");
let operation = [];
let standardOperators = {"+":[1,add], "-":[1,subtract], "*":[2,multiply], "/":[2,divide]};
let current = "";
buttons.forEach(button => {
    button.addEventListener("click", function(e){
        if(!(e.target.dataset.value === '=')){
            currentOp.textContent += e.target.dataset.value;
            if(e.target.dataset.value in standardOperators){
                if(current !== ""){
                    operation.push(current);
                    current = "";
                }
                operation.push(e.target.dataset.value);
            }else{
                current += e.target.dataset.value;
            }
        }else{
            if(current !== ""){
                operation.push(current);
                current = "";
            }
            console.log(operation);
            let answer = resolveOperation(operation);
            console.log(operation);
            let answerBox = document.querySelector(".answer-box");
            answerBox.textContent = answer;
        }
    });
});



function resolveOperation(op){
    while((op.length > 1) && (op.includes("*") || op.includes("/"))){
        for(let i = 0; i < op.length; i++){
            if(op[i] in standardOperators && standardOperators[op[i]][0] === 2){
                res = standardOperators[op[i]][1](op[i-1], op[i+1]);
                op.splice(i-1, 3, res);
            }
        }
    }

    while((op.length > 1) && (op.includes("+") || op.includes("-"))){
        for(let i = 0; i < op.length; i++){
            if(op[i] in standardOperators && standardOperators[op[i]][0] === 1){
                res = standardOperators[op[i]][1](op[i-1], op[i+1]);
                op.splice(i-1, 3, res);
            }
        }
    }

    if(op.length === 1){
        return op[0];
    }else{
        return false;
    }

}

let backspace = document.querySelector("#backspace");
backspace.addEventListener("click", function(e){
    if((current !== "") || operation.length > 0){
        if(current !== ""){
            current = current.slice(0,-1);
        }else{
            operation[operation.length-1] = operation[operation.length-1].slice(0,-1);
            if(operation[operation.length-1] === ""){
                operation.pop();
            }
        }
        let jointOp = operation.join("");
        currentOp.textContent = jointOp + current;
    }
})

let refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener("click", function(e){
    location.reload();
})