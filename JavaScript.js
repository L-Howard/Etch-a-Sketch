const container = document.querySelector(".container");


function createRows (rows) {

    i = 0;
    while (i < rows) {
        const divrow = container.appendChild(document.createElement("div"));
        i2 = 0;
        divrow.classList.add("divrow");
        divrow.style.flexShrink = "1";
        while(i2 < rows){

        
        const div = divrow.appendChild(document.createElement("div"));
        div.classList.add("box");
        const boxSize = Math.floor(500 / rows);
        div.style.height = `${boxSize}px`;
        div.style.width = `${boxSize}px`;
        div.style.border = "1px solid black";


        i2 ++;
    }

        i++;
    }
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "black";
});
});
}

createRows(16);



const button = document.querySelector("button")

button.addEventListener("click", function (){
    size = prompt("How many squares per side? Max: 100");

    if(size > 100 || size <= 0) {
        alert("Invalid size");
    
    }
    else {

    
    allRows = document.querySelectorAll(".divrow")
    allRows.forEach(row => {
        row.remove()
    })

    
    
    createRows(size);
    }
})