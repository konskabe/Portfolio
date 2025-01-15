function toggleMenu(){
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".hamburgerIcon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showErrorMessage(){
    alert("Not implemented yet.");
}

//Project Button Links//
document.querySelectorAll('.projectBtn').forEach(button => {
    const url = button.getAttribute("data-url");

    button.addEventListener("click", ()=> {
        if (url){
            window.location.href = url;
        }
    });
    
    button.addEventListener("auxclick", (event)=> {
        if (event.button === 1){
            if (url){
                window.open(url, "_blank");
                event.preventDefault();
            }
        }
    });
});