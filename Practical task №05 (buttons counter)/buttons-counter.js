function makeCounter() {
    let counter = 0;
    return () => {
        return ++counter;
    }
};

document.querySelectorAll(".btn").forEach(element => {
    let count = makeCounter();
    element.onclick = () => {
        element.innerText = count();
    };
});