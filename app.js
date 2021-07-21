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


};



