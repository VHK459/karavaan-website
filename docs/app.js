
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









// for blob
let blobb = document.querySelector("#blob");


$(document).on('pointermove', function(e){
    $('#blob').animate({
       left:  e.pageX,
       top:   e.pageY
    },{ duration: 3, fill: "forwards"});
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
