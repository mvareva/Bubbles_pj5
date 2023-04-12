let imgb = document.getElementsByTagName("img");
let audio = new Audio ("pop.wav");
console.log(imgb.length);
for (let i = 0; i <imgb.length; i++) {
imgb[i].addEventListener("click", (event)=>{
imgb[i].setAttribute("src", "07 2.png");  
audio.play();
}); 
}