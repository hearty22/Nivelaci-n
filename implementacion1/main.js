
//actividad de la caja de texto
let text = document.getElementById("input-text");
let button = document.getElementById("button");

text.addEventListener("keypress", (event)=>{
    if (event.key === ("Enter" || "enter")){
        (text.value === "") ? alert("la caja de texto está vacia") : alert(text.value)
    }
});

button.addEventListener("click", (event)=>{
    event.preventDefault()
    if(text.value === ""){
        alert("la caja de texto se encuentra vacia")
        return;
    };
    alert(text.value)
});

//actividad de cambio de colores


let colorState = 1;
let buttonColor = document.getElementById("button-color")


buttonColor.addEventListener("click", (event)=>{
    event.preventDefault();

    colorState++
    if(colorState === 4){
        colorState = 1
    }

    if(colorState === 1){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        return
    }
    if (colorState === 2){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
    if (colorState === 3){
        document.body.style.backgroundColor = "lightblue"
        document.body.style.color = "red";
    }
})

