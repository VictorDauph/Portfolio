//Ce fichier sert à appliquer ou désappliquer l'affichage ciruclaire de la section à propos en fonction de la taille de l'écrant

const circleContainer = document.getElementById("circle-container")
const circleContainerTitle = document.getElementById("circle-container-title")

window.onresize = function() {circularResponsive()};

function circularResponsive(){
    if (screen.width<576){
        circleContainer.classList.remove("circle-container")
        circleContainerTitle.classList.remove("circle-container-title")
    }
    else{
        circleContainer.classList.add("circle-container")
        circleContainerTitle.classList.add("circle-container-title")
    }
}

circularResponsive()