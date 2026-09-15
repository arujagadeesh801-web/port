/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close mobile menu */

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});



/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText =
    document.getElementById("typingText");


const roles = [

    "AI & Machine Learning Enthusiast",

    "Full Stack Developer",

    "CSE Student",

    "Problem Solver"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }

    }

    else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 45 : 80;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



/* =====================================================
   SCROLL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".section, .hero-content, .hero-image-container"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(element => {

    observer.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        }

        else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener(
    "load",
    () => {

        document
            .querySelector(".hero-content")
            .classList.add("visible");


        document
            .querySelector(".hero-image-container")
            .classList.add("visible");

    }
);