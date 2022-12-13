const dark = document.querySelector('.dark')
const night = document.querySelector('.night')
const light = document.querySelector('.light')

const sidebar = document.querySelector('.sidebar')
const sidebarTop = document.querySelector('.sidebar-top')
const sidebarCenter = document.querySelector('.sidebar-center')
const sidebarBottom = document.querySelector('.sidebar-bottom')
// const listItems = document.querySelector('.list-items')
const activeListItem = document.querySelector('.list-items.active')

dark.addEventListener('click', () => {
  sidebar.classList = 'sidebar'
  sidebarTop.classList = 'sidebar-top'
  sidebarCenter.classList = 'sidebar-center'
  sidebarBottom.classList = 'sidebar-bottom'
  // listItems = 'list-items'
  activeListItem = 'list-items active'

})

night.addEventListener('click', () => {
  sidebar.classList = 'sidebar night'
  sidebarTop.classList = 'sidebar-top night'
  sidebarCenter.classList = 'sidebar-center night'
  sidebarBottom.classList = 'sidebar-bottom night'
  // listItems = 'list-items night'
  activeListItem = 'list-items active night'
})

light.addEventListener('click', () => {
  sidebar.classList = 'sidebar light'
  sidebarTop.classList = 'sidebar-top light'
  sidebarCenter.classList = 'sidebar-center light'
  sidebarBottom.classList = 'sidebar-bottom light'
  // listItems.classList.add('light')
  activeListItem = 'list-items light'
})