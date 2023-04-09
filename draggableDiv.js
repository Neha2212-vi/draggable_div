const draggableEle = document.querySelector(".container");

const draggableDiv = (e)=>{
    draggableEle.style.top = e.pageY + "px";
    draggableEle.style.left = e.pageX + "px";
}

draggableEle.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", draggableDiv);
})

window.addEventListener("mouseup", ()=>{
    window.removeEventListener("mousemove", draggableDiv)
});