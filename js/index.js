// Your code goes here

//mouseover
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(el=>{
    el.addEventListener("mouseover", ()=>{
        el.style.color = "orange";
    })
});

//keydown
const key = document.querySelectorAll("h2");
key.forEach(el=>{
    document.addEventListener("keydown", ()=>{
        el.style.color = "green";
    })
})

//wheel
const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("wheel", ()=>{
    funBus.style.fontSize = "2rem";
});

//drag/drop
// const dragMe = document.querySelector(".drag");
// const dropMe = document.querySelector(".drop");

//new
const imgSize = document.querySelector(".img-fluid");
imgSize.addEventListener("mouseenter", ()=>{
    imgSize.style.transform = "scale(1.2)";
    imgSize.style.transition = "transform 0.3s";
})


//load
const loadImg = document.querySelectorAll(".img-content")
loadImg.forEach(el=>{
    window.addEventListener("load",()=>{
        alert("images are loaded");
    })
})

//

//focus
const foc = document.querySelectorAll("p");
foc.forEach(el=>{
    el.blur();
})


//resize
const bottomImg = document.querySelector(".bottom-img");
window.addEventListener("resize", ()=>{
    bottomImg.src = "http://3.bp.blogspot.com/-AtfFKj36CMc/UQ1OOZCeVvI/AAAAAAAAD48/O2edq9hIj-8/s1600/IMG_4438F+-+Port+Hadlock+WA+-+NWSWBB+-+TLC+-+FSB+Sea+Trials+off+Port+Hadlock.jpg";
})

//scroll
const scrollBar = document.querySelectorAll(".text-content p");
scrollBar.forEach(el=>{
    window.addEventListener("scroll", ()=>{
        el.style.color = "red";
    })
})

//select
const selectBtn = document.querySelectorAll(".btn");
selectBtn.forEach(el=>{
    el.remove(el.selectedIndex);
})

//dblclick
const topImg = document.querySelector(".top-img");
topImg.addEventListener("dblclick", ()=>{
    topImg.src="http://i.ebayimg.com/images/i/281356037156-0-1/s-l1000.jpg";
})

//Stop propogation
const body = document.querySelector('body');
body.addEventListener('click', ()=>{
    body.style.backgroundColor = "pink";
})

const dest = document.querySelector('.content-pick');
dest.addEventListener('click', (event)=>{
    dest.style.backgroundColor = "blue";
    event.stopPropagation();
})

//Stop navigation from refreshing page
const stopRef = document.querySelectorAll(".nav-link");
stopRef.forEach(el=>{
    el.addEventListener("click", (event)=>{
        event.preventDefault();
    })
})