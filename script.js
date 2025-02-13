const contarvalor = document.getElementById("count");
const colorPart = document.querySelectorAll(".color-part");
const contenedor = document.querySelector(".contenedor");
const empezarButton = document.querySelector("#empezar");
const resultado = document.querySelector("#resultado");
const envuelto = document.querySelector(".envuelto");



const colores = {
    verde: {
        current: "#008000",
        new: "#11e711",
    },
    rojo: {
        current: "#ff0000",
        new: "#fd2a2a",
    },
    azul: {
        current: "#0000FF",
        new: "#2062fc",
    },
    amarillo: {
        current: "#FFFF00",
        new: "#fafa18",
    },
};

let coloresRamdom = []; 
let pathGeneratorBool = false;
let count, 
    clickCount = 0;


empezarButton.addEventListener("click", () => {
    count = 0;
    clickCount = 0;
    coloresRamdom = [];
    pathGeneratorBool = false;
    pathGenerate();
} )




