// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}





// ===============================
// SCROLL ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(
    ".animate-item"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {


            if (entry.isIntersecting) {


                entry.target.classList.add(
                    "show"
                );


            }


        });


    },
    {
        threshold: 0.2
    }
);



animatedElements.forEach((element)=>{

    observer.observe(element);

});
