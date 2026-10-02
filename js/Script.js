// ==========================================
// FLUXO — NAVEGACIÓN
// ==========================================

const pages = document.querySelectorAll(".page");

const navigationButtons =
    document.querySelectorAll(".glass-button");

const backButtons =
    document.querySelectorAll(".back-button");


// CAMBIAR DE PÁGINA

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

}


// BOTONES PRINCIPALES

navigationButtons.forEach(button => {

    button.addEventListener("click", () => {

        const pageId =
            button.getAttribute("data-page");

        showPage(pageId);

    });

});


// BOTONES VOLVER

backButtons.forEach(button => {

    button.addEventListener("click", () => {

        showPage("home");

    });

});


// FORMULARIO

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Gracias por contactar con Fluxo.");

        contactForm.reset();

    });

}