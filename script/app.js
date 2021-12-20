// form submit
document.querySelector('.search__form')?.addEventListener('submit', (event) => {
	event.preventDefault();
	if(document.querySelector('.search__input').value != "") {
		document.querySelector('.search__add-info').style.display = 'none';
		document.querySelector('.search__results').style.display = 'none';
		let loading = document.querySelector('.loading'),
			loadingBox = loading.querySelector('.loading__box-inner'),
			loadingPercent = loading.querySelector('.loading__percent span');
	
		loading.style.display = 'block';
		animateValue(loadingBox, 100, 0, 11000);
	
		// animate width and percentage
		function animateValue(obj, start, end, duration) {
			let startTimestamp = null;
			const step = (timestamp) => {
			  if (!startTimestamp) startTimestamp = timestamp;
			  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			  let percent  = Math.floor(progress * (start - end));
			  loadingPercent.innerHTML = percent;
			  obj.style.width = percent + "%";
			  if (progress < 1) {
				window.requestAnimationFrame(step);
			  } else {
				  setTimeout(showResults, 300);
			  }
			};
			window.requestAnimationFrame(step);
		}
	
		// show results
		function showResults () {
			loading.style.display = 'none';
			document.querySelector('.search__results').style.display = 'block';
		}
	}

})

// popup
let popup = document.querySelector('.popup-overlay'),
    popupInner = popup?.querySelector('.popup__body'),
	className = 'popup_opened',
	shownPopupClassName = 'popup--shown';	

// open popup
document.querySelectorAll('.open-popup')?.forEach( (item, i) => { 
	item.addEventListener('click', (event) => {
		event.preventDefault();
		let popupName = item.getAttribute('data-popup');
		document.querySelector(`.popup--${popupName}`).classList.add(shownPopupClassName)
		popup.classList.add(className);
	})
});

// close popup
popup?.addEventListener('click', (event) => {
	if(event.target.classList.contains('popup') || event.target.classList.contains('popup-overlay')) {
		popup.classList.remove(className);
		document.querySelectorAll(`.${shownPopupClassName}`)?.forEach( item => item.classList.remove(shownPopupClassName))
	}
})

// open pdf
document.querySelectorAll('.pdf-opener')?.forEach( (item, i) => { 
	item.addEventListener('click', (event) => {
		event.preventDefault();
		let popupName = item.getAttribute('data-popup'),
			pdfLink = item.getAttribute('data-pdf-link'),
			pdfPrice = item.getAttribute('data-pdf-price');
		document.querySelectorAll(`.${shownPopupClassName}`)?.forEach( item => item.classList.remove(shownPopupClassName))
		document.querySelector(`.popup--${popupName}`).classList.add(shownPopupClassName)
		document.querySelector('.popup__object').data = pdfLink
		document.querySelector('.popup__object-link').href = pdfLink
		document.querySelector('.popup__object-link').innerHTML = pdfLink
		document.querySelector('.popup__order-pdf__price').innerHTML = pdfPrice
	})
});


// fix header
lastScrollTop = 60;
document.addEventListener("DOMContentLoaded", fixHeader);
window.addEventListener("scroll", fixHeader);
function fixHeader() {
	let st = window.pageYOffset || document.documentElement.scrollTop,
	header = document.querySelector('.home-page .header'),
	className = 'header__blue';
	if (header) {
		if (st > lastScrollTop){
			header.classList.add(className)
		} else {
			header.classList.remove(className)
		}
	}

}
// count price
let inputs = Array.prototype.slice.call( document.querySelectorAll('.step__input') ) ;
inputs?.forEach( (item, i) => { 
	item.addEventListener('change', (event) => {
		calculatePrice();
	})
});

function calculatePrice() {
	var result = inputs.reduce(function(sum, current) {
		if(current.checked) {
			sum+= + +current.value
		}
		return sum
	}, 0);
	document.querySelectorAll('.order__sum')?.forEach( (item, i) => { 
		item.innerHTML = result
	})
}
calculatePrice()

// change order step
const nextStep = document.querySelector('.order__next-step');
nextStep?.addEventListener('click', (event) => {
	event.preventDefault();
	document.querySelector('.order__step_first').style.display = 'none';
	document.querySelector('.order__step_second').classList.add('order_shown')
})

// permission to make an order

// const orderForm = document.querySelector('.order__form');
// orderForm?.addEventListener('submit', (event) => {
// 	let agreement = document.querySelector('.order__agreement');
// 	if(!agreement.checked) {
// 		event.preventDefault();
// 	}
// })

let agreement = document.querySelector('.order__agreement');
document.querySelector('.order__register')?.addEventListener('click', (event) => {
	if(!agreement.checked) {
		event.preventDefault();
	}
})

// menu close/open
document.querySelector('.burger')?.addEventListener('click', () => {
	console.log("licked")
	openCloseMenu()
})
document.querySelector('.nav__close')?.addEventListener('click', () => {
	console.log("licked")
	openCloseMenu()
})
function openCloseMenu() {
	let menuWr = document.querySelector('.nav__menu-wr'),
		className = 'nav__menu--opened';
	if(menuWr.classList.contains(className)) {
		menuWr.classList.remove(className)
	} else {
		menuWr.classList.add(className)
	}
}