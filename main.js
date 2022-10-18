const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home_data')
sr.reveal('.home_handle', {delay: 700})
sr.reveal('.home_social, .home_scroll', {delay: 1000, origin: 'bottom'})
sr.reveal('.about_handle', {delay: 900, origin: 'left'})
sr.reveal('.about_box', {delay: 900, origin: 'right'})
sr.reveal('.about_description', {delay: 1250, origin: 'bottom'})
sr.reveal('.about_data', {delay: 1000, origin: 'top'})
sr.reveal('.skills_handle', {delay: 900, origin: 'bottom'})
sr.reveal('.skills_container', {delay: 1000, origin: 'left'})
sr.reveal('.services_handle', {delay: 900, origin: 'top'})
sr.reveal('.services_card', {delay: 1000, origin: 'right'})
sr.reveal('.contact_handle', {delay: 1000, origin: 'bottom'})
sr.reveal('.contact_container', {delay: 1000, origin: 'left'})
sr.reveal('.footer_title', {delay: 1000, origin: 'right'})
sr.reveal('.footer_social', {delay: 1000, origin: 'bottom'})
sr.reveal('.footer_list', {delay: 1000, origin: 'top'})
sr.reveal('.footer_copy', {delay: 1000, origin: 'left'})