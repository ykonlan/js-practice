function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
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
                operation.push(current);
                operation.push(e.target.dataset.value);
                current = "";
            }else{
                current += e.target.dataset.value;
            }
        }else{
            if(current){
                operation.push(current);
            }
            let answer = resolveOperation(operation);
            let answerBox = document.querySelector(".answer-box");
            answerBox.textContent = answer;
            console.log(answer);
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