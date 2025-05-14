const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')

const blurOverlay = document.querySelector('.blur__overlay')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)


new fullpage('#fullpage', {
	autoScrolling: true,	
	navigation: true,
	anchors: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'],
	navigationTooltips: ['Model Y', 'Model 3', 'CyberTruck', 'Model X', 'Model S', 'Solar Panels', 'Solar Roofs ', 'Powerwall', 'Accessories', 'Join', 'Find Us'],
	showActiveTooltip: true,
});
