
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if ( entry.isIntersecting){
            entry.target.classList.add('show')

        }
         else {
            entry.target.classList.remove('show')
         }
    })
})





const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))



let width = window.innerWidth






// for blob
let blobb = document.querySelector("#blob");

if (!window.matchMedia("(pointer: coarse)").matches) {
$(document).on('pointermove', function(e){

    $('#blob').animate({
       left:  e.pageX,
       top:   e.pageY,
    },{ duration: 3, fill: "forwards"})

});


let foot = document.querySelector('.footer')

$(foot).on('mouseenter', function(e){
$(blobb).animate({
    height: 1 + 'px',
},{duration:50}
)
}).on('mouseleave',function(e){
    $(blobb).css({
        height: 30 + 'vw',
    })
})

    
}

else {

$('#blob').hidden()

console.log(
    'success'
)
}


const container = document.querySelector(".container");
const primaryNav = document.querySelector(".nav__list");
const toggleButton = document.querySelector(".nav-toggle");

toggleButton.addEventListener("click", () => {
    const isExpanded = primaryNav.getAttribute("aria-expanded");
    primaryNav.setAttribute(
        "aria-expanded",
        isExpanded === "false" ? "true" : "false"
    );
});

container.addEventListener("click", (e) => {
    if (!primaryNav.contains(e.target) && !toggleButton.contains(e.target)) {
        primaryNav.setAttribute("aria-expanded", "false");
    }
});
