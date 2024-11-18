let icon=document.querySelector("i")
let content=document.querySelector("p")
function a(){
    if(icon.className === "fa-solid fa-sun"){
        icon.className="fa-solid fa-moon"
        document.body.style.backgroundColor="black"
        document.body.style.color="white"

    }
    else{
        icon.className="fa-solid fa-sun"
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
}