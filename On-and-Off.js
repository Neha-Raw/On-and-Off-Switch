var button = document.querySelector("#on")
let i = 0;
on.addEventListener("click", function () {
    on.innerHTML = "Turn on";
    on.style.background = "green"
    if (i === 0) {
        on.innerHTML = 'Turn on';
        i = 1
    }
    else {
        on.innerHTML = 'Turn off';
        on.style.background="white"
        i = 0
    }
});