/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const elements = document.querySelectorAll(
    "section, .skill, .projects article, .timeline div"
);


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},
{
threshold:0.15
});



elements.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});







/* =========================
   CURRENT YEAR FOOTER
========================= */


const footer = document.querySelector("footer");


const year = new Date().getFullYear();


footer.innerHTML = 
`© ${year} Olfa Ameur | Embedded Systems Engineer`;







/* =========================
   NAVBAR ACTIVE EFFECT
========================= */


const links = document.querySelectorAll("nav a");


links.forEach(link=>{


link.addEventListener(
"click",
()=>{


links.forEach(item=>{

item.classList.remove("active");

});


link.classList.add("active");


});


});