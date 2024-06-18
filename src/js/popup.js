const popup = document.querySelector(".popup");
const close = document.querySelector(".popup__close");
function openPopup(popup){
    popup.style.opacity = "1";
    popup.style.top = "40vh";
    popup.style.right = "20px";
}

function closeModal(popup){
    popup.style.opacity = "0";
    popup.style.top = "-300px";
    popup.style.right = "-300px";
}

close.addEventListener("click", ()=>{
    closeModal(popup);
})
if(localStorage.getItem("isAlreadyLogined")){
    document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(()=>{openPopup(popup)}, 1000)
        setInterval(()=>{openPopup(popup)}, 30000);
    })
}
