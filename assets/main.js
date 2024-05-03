// toggle the side menu
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle')
    menuToggle.classList.toggle('active')
}

// dark mode and light mode 
function colourSchemeShift(){
    document.body.classList.toggle("dark")
}
let darkMode = localStorage.getItem("darkMode")

//todo js of nav menu
//todo report
//todo about and project pages