let menuList = document.getElementById('list')
console.log(menuList)

let menuOpen = document.getElementById("menu-up")
console.log(menuOpen)

let menuClose = document.getElementById("menu-down")
console.log(menuClose)

function menuname(){
    menuList.style.display = 'flex'
    menuOpen.style.display = 'none'
    menuClose.style.display = "flex"
}

function menux(){
    menuList.style.display = "none"
    menuOpen.style.display = "flex"
    menuClose.style.display = "none"

}

 
