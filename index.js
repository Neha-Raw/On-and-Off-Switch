const button = document.querySelector("#on")
let com = 0;
on.addEventListener("click", function () {

    on.style.backgroundColor = "green"


    if (com === 0) {
        button.innerHTML = "turn On"
        let img = document.querySelector("#image")
        img.setAttribute("src" , "bulb-on.png")
        com = 1
        
    } else {
        on.innerHTML = "turn Off "
        on.style.backgroundColor = "white"
        let img = document.querySelector("#image")
        img.setAttribute("src" , "bulb-off.png")
        com = 0
    }
})
