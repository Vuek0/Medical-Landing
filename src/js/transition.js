const headerLinks = document.querySelectorAll('.menu__item a');
const pill = document.querySelector(".transition__image");
const html = document.querySelector("html");
const forms = document.querySelectorAll(".form__container form")
function removePixels(value){
    return value.split('px')[0];

}

document.addEventListener("DOMContentLoaded", ()=>{
    const animation = localStorage.getItem("animation");
    const object = JSON.parse(animation)
    forms.forEach(item => {
        item.style.opacity = 1;
        item.style.transform = "translate(0px)";
    })
    if(animation){ 
        html.style.overflowY = "hidden";
        console.log(object.rotate);
        console.log(object.translate);
        let rotateValue = object.rotate;
        let translateValue = object.translate;
        localStorage.removeItem('animation');
        // pill.style.display = "flex";
        // pill.style.transform = `translateX(${translateValue}px)`

        const anim = setInterval(()=>{
            translateValue+=23;
            rotateValue+=3;
            pill.style.transform = `translateX(${translateValue}px) rotate(${rotateValue}deg)`
            // pill.style.left = `${removePixels(pill.style.left) - 10}px`
        }, 15)
        setTimeout(()=>{
            pill.style.opacity = 0;
            pill.style.display = "none";
            pill.style.transform = "translateX(-2000px)";
            // pill.style.opacity = 1;
            html.style.overflowY = "auto";
            clearInterval(anim);            
        }, 1300)
    } else{
        pill.style.display = "none";
        pill.style.transform = "translateX(-2000px)"
    }
})

headerLinks.forEach((item) => {
    item.addEventListener("click", function animationHandler(e){
        e.preventDefault();
        popup.style.opacity = 0;
        forms.forEach(form => {
            form.style.opacity = 0;
            form.style.transform = "translateY(150px)";
        })

        item.removeEventListener("click", animationHandler);
        item.addEventListener("click", ()=>{
            e.preventDefault();
        })
        html.style.overflowY = "hidden";
        let rotateValue = 0;
        let translateValue = -1300;
        const href = item.getAttribute('href');
        // console.log(href);
        pill.style.display = "flex";
        pill.style.opacity = 1;
        const anim = setInterval(()=>{
            translateValue+=20;
            rotateValue+=3;
            pill.style.transform = `translateX(${translateValue}px) rotate(${rotateValue}deg)`
            // pill.style.left = `${removePixels(pill.style.left) - 10}px`
        }, 15)
        setTimeout(()=>{
            clearInterval(anim);
            localStorage.setItem("animation", JSON.stringify({
                translate: translateValue,
                rotate: rotateValue
            }));            
            window.location.href = href;
        }, 1160)
    })
})