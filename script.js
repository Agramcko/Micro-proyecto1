const contarValor = document.getElementById("count");
const colorPart = document.querySelectorAll(".color-part");
const contenedor = document.querySelector(".contenedor");
const empezarButton = document.querySelector("#empezar");
const resultado = document.querySelector("#resultado");
const envuelto = document.querySelector(".envuelto");

const sonidos = {
    verde: document.getElementById("sonido-verde"),
    rojo: document.getElementById("sonido-rojo"),
    azul: document.getElementById("sonido-azul"),
    amarillo: document.getElementById("sonido-amarillo"),
};

const colores = {
    verde: {
        current: "#068e10",
        new: "#11e711",
    },
    rojo: {
        current: "#950310",
        new: "#fd2a2a",
    },
    azul: {
        current: "#01019c",
        new: "#2062fc",
    },
    amarillo: {
        current: "#919110",
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
    envuelto.classList.remove("oculto");
    contenedor.classList.add("oculto");
    pathGenerate();
})




const pathGenerate = () => {
    coloresRamdom.push(generateRandomValor(colores));
    count = coloresRamdom.length;
    pathGeneratorBool = true;
    pathDecide(count);
};




const generateRandomValor = (obj) => {
    let arr = Object.keys(obj);
    return arr[Math.floor(Math.random() * arr.length)];
};



const pathDecide = async (count) => {
    contarValor.innerText = count;
    for (let i of coloresRamdom) {
        let currentColor = document.querySelector(`.${i}`);
        await delay(500);
        currentColor.style.backgroundColor = `${colores[i]["new"]}`;
        await delay(600);
        currentColor.style.backgroundColor = `${colores[i]["current"]}`;
        await delay(600);
    }
    pathGeneratorBool = false;
};



async function delay(time) {
    return await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}


colorPart.forEach((element) => {
    element.addEventListener("click", async (e) => {
        if (pathGeneratorBool) {
            return false;
        }
        const colorClass = e.target.classList[0];
        if (colorClass == coloresRamdom[clickCount]) {
            e.target.style.backgroundColor = `${colores[coloresRamdom[clickCount]]["new"]}`;
            sonidos[colorClass].currentTime = 0;
            sonidos[colorClass].play();
            await delay(500);
            e.target.style.backgroundColor = `${colores[coloresRamdom[clickCount]]["current"]}`;
            clickCount += 1;

            if (clickCount == count) {
                clickCount = 0;
                pathGenerate();
            }
        }
        else {
            perder();
        }
    });
});

const perder = () => {
    resultado.innerHTML = `<span> Tu puntuación: </span> ${count}`;
    resultado.classList.remove("oculto");
    contenedor.classList.remove("oculto");
    envuelto.classList.add("oculto");
    empezarButton.innerText = "Jugar Otra vez";
    empezarButton.classList.remove("oculto");
};

