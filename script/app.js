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