window.onload = function () {

    let sidebar = document.getElementById("sidebar");
        
    let bars = document.getElementById("bars").addEventListener("click", function () {

        //         if (sidebar.style.display == "none"
        //         ) {
        //             sidebar.style.display = "flex";
        //             sidebar.style.marginLeft = "40%";
        //         } else {
        //             sidebar.style.display = "none";
        // }
        
    gsap.to('#sidebar', { duration: 0.2, x: -225, ease: 'expo.out', yoyo: true});
        sidebar.style.display = "flex";
        
        // sidebar.style.marginLeft = "40%";
    });

    let port = document.getElementById('portfolio');
    port.addEventListener('click', function () {
            window.scroll({
        top: 500,
        left: 0,
        behavior: 'smooth'
    });
    });

    let dp = document.getElementById('dp');
    dp.addEventListener('click', function () {
            window.scroll({
        top: 2200,
        left: 0,
        behavior: 'smooth'
    });
    });

    let bio = document.getElementById('biografia');
    bio.addEventListener('click', function () {
            window.scroll({
        top: 3050,
        left: 0,
        behavior: 'smooth'
    });
    });

    
    let com = document.getElementById('comisiones');
    com.addEventListener('click', function () {
            window.scroll({
        top: 3700,
        left: 0,
        behavior: 'smooth'
    });
    });

    const slider = document.querySelector("#slider");

    let sliderSection = document.querySelectorAll(".slider__section");

    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    
    const btnleft = document.querySelector("#btn-left");
    const btnright = document.querySelector("#btn-right");

    slider.insertAdjacentElement('afterbegin', sliderSectionLast);

    function next() {
        
        let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.5s";

        setTimeout(function () {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
            
        }, 500);

    }

        function prev() {
        
        let sliderSection = document.querySelectorAll(".slider__section");
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
            
        slider.style.marginLeft = "0%";
        slider.style.transition = "all 0.5s";

        setTimeout(function () {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft = "-100%";
            
        }, 500);

    }

    btnright.addEventListener('click', function () {
        next();
    });

        btnleft.addEventListener('click', function () {
        prev();
        });
    
    setInterval(function() {
        next();
    }, 7000);

    // let imagen = document.getElementsByClassName("imagen");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.leftpart', { opacity: 0, duration: 2.5, x: -150, ease: 'expo.out', delay: 1});
    gsap.from('.header', { opacity: 0, duration: 2.5, y: -150, ease: 'expo.out'});
    gsap.from('.rightpart', { opacity: 0, duration: 2, x: 50, delay: 1 });
    gsap.to('.circle2', { duration: 10, y: 800, repeat: 10, yoyo: true});
    gsap.to('.circle1', { duration: 10, y: 500, x: 800, delay: 1, repeat: 10, yoyo: true});
    gsap.to('.circle3', { duration: 10, y: -400, x: -800, repeat: 10, yoyo: true});
    gsap.to('.circle4', { duration: 10, y: -300, x: -900, repeat: 10, yoyo: true });
    gsap.from('.chantale__cont', {
        scrollTrigger: '.chantale__cont', opacity: 0, duration: 1, x: 50
    });


};