// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    }else{

        header.style.background = "rgba(15,23,42,.85)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// AUTO SLIDE GALLERY
// ==========================

const gallery = document.querySelector(".gallery-slider");

if(gallery){

    setInterval(() => {

        gallery.scrollBy({
            left: 440,
            behavior: "smooth"
        });

        if(
            gallery.scrollLeft + gallery.clientWidth >=
            gallery.scrollWidth - 20
        ){

            gallery.scrollTo({
                left:0,
                behavior:"smooth"
            });

        }

    },3000);

}

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".stat-box h2");

const runCounter = () => {

    counters.forEach(counter => {

        const text = counter.innerText;

        const target = parseInt(text.replace(/\D/g,""));

        let count = 0;

        const speed = target / 80;

        const updateCounter = () => {

            if(count < target){

                count += speed;

                if(text.includes("%")){

                    counter.innerText =
                        Math.floor(count) + "%";

                }
                else if(text.includes("+")){

                    counter.innerText =
                        Math.floor(count) + "+";

                }
                else{

                    counter.innerText =
                        Math.floor(count);

                }

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = text;

            }

        };

        updateCounter();

    });

};

// ==========================
// COUNTER ON VIEW
// ==========================

const statsSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {

    if(!statsSection) return;

    const sectionTop =
        statsSection.offsetTop - 400;

    if(window.scrollY >= sectionTop && !started){

        runCounter();
        started = true;

    }

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements =
    document.querySelectorAll(
        ".card, .produk-card, .testi-card, .process-item"
    );

const reveal = () => {

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".6s";

});

window.addEventListener("scroll", reveal);
reveal();

// ==========================
// SMOOTH SCROLL MENU
// ==========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
