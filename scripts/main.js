//togel respon
const navSlide = () => {
    const agung_burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-agung_burger");
    });
}


//clear form 
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};