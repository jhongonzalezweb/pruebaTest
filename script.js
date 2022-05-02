
//Inicia arreglo de palabras
const words = [
    'te',
    'amo',
    'yuli',
    'nunca',
    'dejare',
    'de',
    'amarte',
];

// variables

var time = 10;
var score = 0;
var lenWords = words.length;


// La funcion randomWords para sacar palabras aleatorias.

function randomWords() {
    for (var i = 0; i < lenWords; i++) {
        //var x = Math.ceil(Math.random(lenWords) * 10);
        var x = Math.floor(Math.random(lenWords) * lenWords);

        //retorna la palabra en la posicion del arreglo
        return words[x]
    }
}

var randomW = randomWords();

// La funcion addToDOMM que le agrega una palabra random al h1.

function addToDOM() {

    var addTo = document.getElementById("randomWord").innerHTML = randomW;
    // retorna lo que enviara ak DOM
    return addTo;

}

var addToDOM = addToDOM();
console.log(addToDOM);

// funcion que evalua si la palabra ingresada es la misma que la posicion del arreglo

function evaluar() {

    var palabraIngresada = document.getElementById("text").value;

    if (palabraIngresada == randomW) {
        //console.log(palabraIngresada);

        /////console.log("Buen trabajo");

        score += 2;

        document.getElementById("timeSpan").innerHTML = time + " s";

        document.getElementById("score").innerHTML = score;

        randomW = randomWords();

        document.getElementById("text").value = "";

        /////console.log(randomW);

        // vuelve hacer llamado de la funcioon que envia al DOM

        function addToDomAgain() {

            var addTo = document.getElementById("randomWord").innerHTML = randomW;
            return addTo;

        }

        var addToDomAgainVar = addToDomAgain();
        console.log(addToDomAgainVar);

    }

}


// funcion que hace que sea intervalos de 1 segundo

let timeInterval = setInterval(actualizarTiempo, 1000);

// actualiza el tiempo y hace el llamado a detener el contador y decir juego terminado

function actualizarTiempo() {

    time = time - 1;
    console.log(time);
    if (time === 0) {

        myStop()
        gameOver()

    }

    if (time <= 0) {

        document.getElementById("timeSpan").style.display = "none";
        document.getElementById("timeDown").style.display = "none";
        document.getElementById("scoreDown").style.display = "none";
        document.getElementById("text").style.display = "none";

    } else {

        document.getElementById("timeSpan").innerHTML = time + " s";

    }
}
// funcion donde realiza la detencion del contador

function myStop() {

    console.log("Entre al log donde muere el time");
    clearInterval(timeInterval);
}


// funcion donde da el termino de la partida

function gameOver() {
    console.log(1);

    var tituloEndGame = document.querySelector('h1');

    tituloEndGame.textContent = "Has terminado el tiempo."

    var createP = document.createElement("p");
    createP.textContent = " ❤️🥰 Te amo Yuli, nunca dejare de amarte 🥰❤️ ";
    document.body.appendChild(createP);
    createP.classList.add("anotherclass");

    let btn = document.createElement("button");
    btn.innerHTML = "Volver a empezar";
    btn.onclick = function () { reiniciarAqui() };
    document.body.appendChild(btn);

}

// funcion donde reinicia a travez del boton y jugar de nuevo..

function reiniciarAqui() {
    location.reload();
}

    //@jhonxabar
    //@jhonwebdesing
