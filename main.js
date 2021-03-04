let image_first = document.querySelector(".image_first")
let image_second = document.querySelector(".image_second")
let image_third = document.querySelector(".image_third")
let rustam_information = document.querySelector(".rustam_information")
let munavar_information = document.querySelector(".munavar_information")
let ahllidin_information = document.querySelector(".ahllidin_information")
let del_btn = document.querySelector(".del_btn")
let s_del_btn = document.querySelector(".s_del_btn")
let t_del_btn = document.querySelector(".t_del_btn")


image_first.addEventListener("click", function(){
    showHideCard(rustam_information, munavar_information, ahllidin_information )
    // rustam_information.classList.add("active")
    // munavar_information.classList.remove("active")
    // ahllidin_information.classList.remove("active")
})

del_btn.addEventListener("click", function(){
    rustam_information.classList.remove("active")
})

image_second.addEventListener("click", function(){
    showHideCard(munavar_information, rustam_information, ahllidin_information )
    // munavar_information.classList.add("active")
    // rustam_information.classList.remove("active")
    // ahllidin_information.classList.remove("active")
})

s_del_btn.addEventListener("click", function(){
    munavar_information.classList.remove("active")
})

image_third.addEventListener("click", function(){
    showHideCard(ahllidin_information, rustam_information, munavar_information)
    // ahllidin_information.classList.add("active")
    // rustam_information.classList.remove("active")
    // munavar_information.classList.remove("active")
})

t_del_btn.addEventListener("click", function(){
    ahllidin_information.classList.remove("active")
})


function showHideCard(activatedCard, deactivatedCard1, deactivatedCard2 ){
    activatedCard.classList.add("active")
    deactivatedCard1.classList.remove("active")
    deactivatedCard2.classList.remove("active")
}