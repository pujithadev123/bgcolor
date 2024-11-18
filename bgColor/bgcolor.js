let input=document.getElementById("color")
let input2=document.getElementById("range")

let image=document.querySelector("img") 

function colorchange(z){
   if(z.key === "Enter"){
    document.body.style.backgroundColor=input.value
   }
}

function borderchange(z){
    if(z.key === "Enter"){
     image.style.borderRadius=`${input2.value}px`
    }
 }