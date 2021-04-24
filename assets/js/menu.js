const menu = document.querySelector('.dealer__menu');
const btnMenu = document.querySelector('.dealer__btnMenu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menuAtivo');
})


// SubMenu
const submenu = document.querySelector('.dealer__menuItem--subMenu');
const BtnArrow = document.querySelector('.subMenuArrow');

BtnArrow.addEventListener('click', () => {
  submenu.classList.toggle('mostraSubMenu');
})
