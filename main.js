const menuIcon = document.querySelector('.menu')
const navigation = document.querySelector('.navigation')
const mainContent = document.querySelector('.main-content')
const menuNavigation = document.querySelector('.menu-navigation')

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('active')
	navigation.classList.toggle('active')
	menuNavigation.classList.toggle('active')
	mainContent.classList.toggle('blur')
})
