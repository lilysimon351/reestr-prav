// popup
let popup = document.querySelector('.popup'),
    popupInner = popup.querySelector('.popup__body'),
	className = 'popup_opened';	

// open popup
document.querySelectorAll('.show-descr')?.forEach( (item, i) => { 
	item.addEventListener('click', (event) => {
		event.preventDefault();
		popup.classList.add(className);
	})
});

// close popup
popup?.addEventListener('click', (event) => {
	event.preventDefault();
	event.stopPropagation();
	popup.classList.remove(className);
})

// stop propagation on link click
popupInner?.addEventListener('click', (event) => {
	event.stopPropagation();
})

// fix header
lastScrollTop = 60;
document.addEventListener("DOMContentLoaded", fixHeader);
window.addEventListener("scroll", fixHeader);
function fixHeader() {
	let st = window.pageYOffset || document.documentElement.scrollTop,
	header = document.querySelector('.header'),
	className = 'header__blue';
	if (st > lastScrollTop){
	   header.classList.add(className)
	} else {
	   header.classList.remove(className)

	}
}

// order steps
let nextStep = document.querySelector('.order__next-step');
nextStep?.addEventListener('click', (event) => {
	event.preventDefault();
	document.querySelector('.order__step_first').style.display = 'none';
	document.querySelector('.order__step_second').classList.add('order_shown')
})