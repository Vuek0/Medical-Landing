// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".smooth-scroll"),
//     smooth: true
// })
// locoScroll.on("scroll", ScrollTrigger.update);

const bg = document.querySelector("body::before");
// bg.style.display = "none"
const links = document.querySelectorAll("a");
console.log(links);
links.forEach(item => {
    linkAnimation(item);
})
function linkAnimation(link){
    const initial = link.textContent;
    if(initial){
        link.addEventListener("mouseover", (e)=>{
            const arr = [];
            link.style.textDecoration = "underline";
            for(let i = 0; i < link.textContent.length; i++){
                arr.push(link.textContent[i]);
            }
            const interval = setInterval(()=>{
                let newContent = "";
                let digits = [];
                for(let i = 0; i < arr.length;i++){
                    
                    const randomNumber = Math.floor(Math.random() * arr.length);

                    if (digits.includes(randomNumber)){
                        randomNumber = Math.floor(Math.random() * arr.length);
                    }
                    newContent+=arr[randomNumber];
                }
                link.textContent=newContent;
            }, 60)
            setTimeout(()=>{
                clearInterval(interval);
                link.textContent = initial;
            }, 180)
            
        })
        link.addEventListener("mouseout", ()=>{
            link.style.textDecoration = "none";
        })
    }
}

// console.log(bg);