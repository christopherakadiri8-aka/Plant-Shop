let btn = document.getElementById('onebtn');
let nav = document.querySelector('.navlinks');
btn.addEventListener('click', function() {
    nav.classList.toggle('open');
});