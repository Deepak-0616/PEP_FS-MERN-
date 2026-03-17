let dragged;

document.addEventListener("dragstart",(e)=>{
dragged=e.target;
});

document.addEventListener("dragover",(e)=>{
e.preventDefault();
});

document.addEventListener("drop",(e)=>{
if(e.target.classList.contains("card")){
e.target.parentNode.insertBefore(dragged,e.target);
}
});