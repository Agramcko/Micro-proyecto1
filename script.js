const contarValor = document.getElementById("count");
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




const pathGenerate = () =>  {
    coloresRamdom.push(generateRandomValor(colores));
    count = coloresRamdom.length;
    pathGeneratorBool = true;
    pathDecide(count);
};




const generateRandomValor = (obj) => {
    let arr = Object.keys(obj);
    return arr[Math.floor(Math.random() * arr.length)];
};



const pathDecide = async(count) => {
    contarValor.innerText = count;
    for(let i of coloresRamdom){
        let currentColor = document.querySelector(`.${i}`);
        await delay(500);
        currentColor.style.backgroundColor = `${colores[i]["new"]}`;
        await delay(600);
        currentColor.style.backgroundColor = `${colores[i]["current"]}`;
        await delay(600);
    }
    pathGeneratorBool = false;
};



async function delay(time){
    return await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}


colorPart.forEach((element) => {
    element.addEventListener("click", async(e) => {
        if(pathGeneratorBool){
            return false;
        }
        if(e.target.)
    })
})