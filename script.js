let display = document.getElementById("output");

let btn = document.querySelectorAll("button");
let btnArray = Array.from(btn);

let string = "";

btnArray.forEach((btn)=>{

    btn.addEventListener("click", (event)=>{
        event.preventDefault();
        
        if(event.target.innerText === "DEL"){
            string = string.substring(0, string.length-1);
            display.value = string;
        }
        else if(event.target.innerText === "AC"){
            string = "";
            display.value = string;
        }
        else if(event.target.innerText === "="){
            string = eval(string);
            display.value = string;
        }
        else{
            string += event.target.innerText;
            display.value = string;
        }
    });
});