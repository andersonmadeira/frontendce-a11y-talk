function openSideMenu() {
  document.getElementById('side-menu').style.width = '250px'
}

function closeSideMenu() {
  document.getElementById('side-menu').style.width = '0'
  document.query
}

const toggleMenuButton = document.getElementById('menu-toggle-button')
const closeMenuButton = document.querySelector('.close-button')

closeMenuButton.addEventListener('click', function () {
  const menuItems = document.querySelectorAll('#side-menu a')

  menuItems.forEach(item => {
    item.setAttribute('tabindex', '-1')
  })
})

toggleMenuButton.addEventListener('click', function () {
  const menuItems = document.querySelectorAll('#side-menu a')

  menuItems.forEach(item => {
    item.setAttribute('tabindex', '0')
  })
})
