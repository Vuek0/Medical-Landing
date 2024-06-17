const popup = document.querySelector(".popup");
const close = document.querySelector(".popup__close");
function openPopup(popup){
    popup.style.right = "20px";
}

function closeModal(popup){
    popup.style.right = "-300px";
}

close.addEventListener("click", ()=>{
    closeModal(popup);
})
if(localStorage.getItem("IsAlreadyLogined")){
    document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(()=>{openPopup(popup)}, 1000);
    })
}
