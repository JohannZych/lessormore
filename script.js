const random = Math.floor(Math.random() * 100) + 1;
let tryPlayer = 0;
let namePlayer = prompt("Votre nom ?");
console.log(random);

function getValue() {
    const content = document.querySelector(".content");
    let numberPlayer = document.getElementById("numberPlayer").value;
    if (parseInt(numberPlayer) > random) {
        tryPlayer++;
        const result = document.createElement("div");
        result.innerHTML = tryPlayer + " : C'est trop !";
        result.classList.add(".content");
        content.appendChild(result);
        console.log(resultTest);

    } else if (parseInt(numberPlayer) < random) {
        tryPlayer++;
        const result = document.createElement("div");
        result.innerHTML = tryPlayer + " : Ce n'est pas assez !";
        result.classList.add(".content");
        content.appendChild(result);
        console.log(resultTest);

    } else if (parseInt(numberPlayer) === random) {
        tryPlayer++;
        const result = document.createElement("div");
        alert("Bravo " + namePlayer + " ! Vous avez gagné en " + tryPlayer + " coup(s) !");
    }

}