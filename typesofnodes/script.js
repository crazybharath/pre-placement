// console.log("yes");

const nodes=document.body.childNodes;

let text="";
for(let i=0;i<nodes.length;i++){
    text+=nodes[i].nodeName + "<br>"
}
document.getElementById("list").innerHTML=text;

