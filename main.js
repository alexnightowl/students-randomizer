let list, decidedName, randomizer, i = 0;

const start = (event) => {
    event.target.disabled = true;
    list = document.getElementById("txtList").value.split("\n").filter(x => x.trim() !== "").sort();

    if (list.length < 1) return;

    for (let k = 0; k < randomRange(50, 100); k++) {
        shuffleArray(list);
        decidedName = list[randomRange(0, list.length - 1)];
    }

    randomizer = setInterval(() => {
        if (i === list.length) {
            i = 0;
        }

        document.getElementById("divSelected").textContent = list[i++];
    }, 50);

    setTimeout(() => {
        clearInterval(randomizer);
        document.getElementById("divSelected").textContent = decidedName;
        event.target.disabled = false;
    }, 3000);
};

const button = document.querySelector(".spinner-button");
button.addEventListener("click", start);

const randomRange = (myMin, myMax) => {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const toggleList = () => {
    document.querySelector(".wrapper").classList.toggle("show");
};
