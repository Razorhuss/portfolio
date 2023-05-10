AOS.init();

const navSliderEffects = document.querySelectorAll("#main, #gallery, #portfolio-image, #footer, #main-nav")

// open side nav


function openNav(){
    document.getElementById("mySideNav").style.width = "280px";
    document.body.style.backgroundColor= "rgba(0,0,0,0.2)";

    navSliderEffects.forEach(effect =>{
        effect.style.cssText =`
        filter:blur(1.5px) brightness(80%)
        `
    })
}


// close side nav

function closeNav(){
    document.getElementById("mySideNav").style.width = "0px";
    document.body.style.backgroundColor= "rgba(0,0,0,0)";

    navSliderEffects.forEach(effect =>{
        effect.style.cssText =`
        filter:blur(0px) brightness(100%)
        `
    })
}