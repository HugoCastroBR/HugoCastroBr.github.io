


function addClass(element,class_name){
    element.classList.add(class_name)
}

function removeClass(element,class_name){
    element.classList.remove(class_name)
}


function ToggleMenu(){
    const transparent = "transparent"
    const noDisplay = "noDisplay"
    const options_container = document.querySelector(".home_main__menu_options__container")
    const options_items = document.querySelector(".home_main__menu_options__items")
    const menu_background = document.querySelector(".home_main__menu_button__container")

    if(options_container.classList.contains(transparent)){
        removeClass(options_container,transparent)
        removeClass(options_items,noDisplay)
        removeClass(menu_background,transparent)
    }else{
        addClass(options_container,transparent)
        addClass(options_items,noDisplay)
        addClass(menu_background,transparent)
    }
}