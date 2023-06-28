// Swiper js madatory cammands

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,

	autoplay: {
		delay: 3000,
	},

	effect: 'fade',

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// for hamburger menu

const hamBtn = document.querySelector('.hamburger-menu')
const navbar = document.querySelector('nav ul')

hamBtn.addEventListener('click', () => {
	let active = hamBtn.getAttribute('data-expanded')
	let activeNav = navbar.getAttribute('data-visible')

	if (active === 'false' && activeNav === 'false') {
		navbar.setAttribute('data-visible', true)
		hamBtn.setAttribute('data-expanded', true)
	} else if (active === 'true' && activeNav === 'true') {
		navbar.setAttribute('data-visible', false)
		hamBtn.setAttribute('data-expanded', false)
	}
})

// activeNavLinks

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.navbar ul li a')

if (!location.href.includes('/contact.html')) {
	window.onscroll = () => {
		sections.forEach((section) => {
			let top = window.scrollY
			let offset = section.offsetTop - 200
			let height = section.offsetHeight
			let ids = section.getAttribute('id')

			if (top >= offset && top < offset + height) {
				navLinks.forEach((links) => {
					links.classList.remove('active')

					document
						.querySelector(`.navbar ul li a[href*=${ids}]`)
						.classList.add('active')
				})
			}
		})
	}
}
