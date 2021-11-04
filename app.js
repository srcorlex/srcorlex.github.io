window.onload = function () {

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



};