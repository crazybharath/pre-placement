const colors=["red","blue","yellow","pink"];

const addBtn=document.getElementById("btn2");
const colorChange=document.getElementById("btn1");
const removeBtn=document.getElementById("btn3");

colorChange.addEventListener("click", function(){
    let random=colors[Math.floor(Math.random()*colors.length)];
    // console.log(random);
    let container=document.getElementById("first")
    container.style.background=random
})
const squareBox=document.createElement("div");
squareBox.style.cssText="width:200px; height:200px; background:green"
addBtn.addEventListener("click",function(){
    let container=document.getElementById("first");
    container.appendChild(squareBox)
})
removeBtn.addEventListener("click",function(){
    let container=document.getElementById("first")
    container.removeChild(squareBox)
})