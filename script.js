/*function loadHidden(button){

    const card = button.closest(".card");
    const content = card.querySelector(".extra-content");

    if(content.style.display == "block"){
        
        content.style.display = "none";
        button.textContent("Show More");
    }else{
        content.style.display = "block";
        button.textContent = "Show Less";
    }

}
*/

document.addEventListener("DOMContentLoaded", showMore)
function showMore(){

    const buttons = document.querySelectorAll(".showMore");

    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            getOneAtATime(button)
        });
    });

}

function getOneAtATime(button) {
    
    const cards = document.querySelectorAll(".card");
     cards.forEach(card => {
        const content = card.querySelector(".extra-content");
        const toggleButton = card.querySelector(".showMore-button");

        if(card.contains(button)){
            const isOpen = content.classList.contains("show");

            content.classList.toggle("show", !isOpen);
            toggleButton.textContent = isOpen ? "show more" : "show less";
        }else{
            content.classList.remove(show);
            button.textContent = "show more"
        }
     });
}

document.addEventListener("DOMContentLoaded", showMore());