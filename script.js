let imgb = document.getElementsByTagName("img");
let audio = new Audio ("Pop-1.mov");
console.log(imgb.length);
for (let i = 0; i <imgb.length; i++) {
imgb[i].addEventListener("click", (event)=>{
imgb[i].setAttribute("src", "poppedimg.png");  
imgb[i].classList.add('popped')
audio.play();
}); 
}

let opener = document.getElementsByClassName("opener")[0];
opener.addEventListener("click", (event)=>{
opener.style.display = "none";
opener.classList.add('closed')
});

let openermobile = document.getElementsByClassName("openermobile")[0];
openermobile.addEventListener("click", (event)=>{
openermobile.style.display = "none";
openermobile.classList.add('closed')
});
// let background = document.getElementsByClassName("background")[0];
// background.addEventListener("click", (event)=>{
// background.setAttribute("src", "Frame 40.png");  
// background.classList.add('grid1')
// });