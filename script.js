// Creazione delle animazioni 

// Creazione di uno scrollcon addeventlistener
document.addEventListener('scroll', function() {
    
    var animato = document.getElementById('animato');

    if (window.scrollY >= 100) {

      animato.classList.add('visibile');

    } else {

        
      animato.classList.remove('visibile');
    }
});



document.addEventListener('scroll', function() {
    var animato = document.getElementById('animato2');
    if (window.scrollY >= 350) {
      animato.classList.add('visibile');
    } else {
      animato.classList.remove('visibile');
    }
});

document.addEventListener('scroll', function() {
    var animato = document.getElementById('animato3');
    if (window.scrollY >= 550) {
      animato.classList.add('visibile');
    } else {
      animato.classList.remove('visibile');
    }
});