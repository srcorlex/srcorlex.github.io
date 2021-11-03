window.onload = function () {
    var port = document.getElementById('portfolio');
    port.addEventListener('click', function () {
            window.scroll({
        top: 250,
        left: 0,
        behavior: 'smooth'
    });
    });

    var bio = document.getElementById('biografia');
    bio.addEventListener('click', function () {
            window.scroll({
        top: 2100,
        left: 0,
        behavior: 'smooth'
    });
    });

    
    var com = document.getElementById('comisiones');
    com.addEventListener('click', function () {
            window.scroll({
        top: 2800,
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

};



