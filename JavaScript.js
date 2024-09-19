const container = document.querySelector(".container");


function createRows (rows) {

    i = 0;
    while (i < rows) {
        const divrow = container.appendChild(document.createElement("div"));
        i2 = 0;
        divrow.classList.add("divrow");
        while(i2 < rows){

        
        const div = divrow.appendChild(document.createElement("div"));
        div.classList.add("box");
        div.style.padding = "20px";
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
    allRows = document.querySelectorAll(".divrow")
    allRows.forEach(row => {
        row.remove()
    })

    
    
    createRows(size);

})