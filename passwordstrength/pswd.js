let pswd=document.getElementById("pswd")
let content=document.getElementById("text")

function pswdcheck(z){
    if(z.key === "Enter"){
        if(pswd.value.length<=4){
            content.textContent="week password"
            content.style.color="red"

        }
        else if (pswd.value.length >= 4 && pswd.value.length <= 10) {
            content.textContent = "good password"
            content.style.color="orange"

        } else {
            content.textContent = "strong password"
            content.style.color="green"
        }
    }
   
}