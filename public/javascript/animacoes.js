
const iconeMenu = document.querySelector('.pontinhos__icone');
iconeMenu.addEventListener('click', function() {
  const ContenerAdicionar = document.querySelector('.menu__adicionar');
  const menus = ContenerAdicionar.classList.toggle('menu-visible');

  if (menus) {
    ContenerAdicionar.style.visibility = 'hidden';
  } else {
    ContenerAdicionar.style.visibility = 'visible';
  }
});


