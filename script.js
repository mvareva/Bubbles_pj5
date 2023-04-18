let imgb = document.getElementsByTagName("img");
let audio = new Audio ("Pop-1.mov");
console.log(imgb.length);
for (let i = 0; i <imgb.length; i++) {
imgb[i].addEventListener("click", (event)=>{
imgb[i].setAttribute("src", "popped.png");  
imgb[i].classList.add('popped')
audio.play();
}); 
}