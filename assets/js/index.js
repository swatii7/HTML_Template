var header = document.querySelector('.headerWrapper');
var navbar = document.querySelector('.mobile-navTabsWrapper');
var barIcon = document.querySelector('.barIcon');

barIcon.addEventListener('click', function() {
  header.style.height = (header.style.height === '245px'? '100px': '245px');
  navbar.style.display = (navbar.style.display === 'block'? 'none': 'block');
});


