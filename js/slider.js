import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

let swiperEl = document.querySelector('.swiper');
let swiperStyle = document.querySelector('.slider-style');
let buttonShowMore = document.querySelector('.brends__read-more--show');
let buttonShowLess = document.querySelector('.brends__read-more--less');
const breakpoint = window.matchMedia('(min-width:768px)');
let swiper;


function createSwiper(elem) {
	const swiper = new Swiper(swiperEl, {
		// Optional parameters
		swiperPerView: "auto",
		loop: true,
		spaceBetween: -20,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	return swiper;
}


function destroySwiper(linkStyle, style) {
	swiper.destroy(true, true);
	linkStyle.href = style;
	swiper = undefined;
}

const enableSwiper = function (linkStyle) {
	swiper = createSwiper(swiperEl);
	linkStyle.href = "https://unpkg.com/swiper@8/swiper-bundle.min.css";
};



const breakpointChecker = function () {
	if (breakpoint.matches === true) {

		if (swiper !== undefined) destroySwiper(swiperStyle, 'css/list_brend.css');

		return;

	} else if (breakpoint.matches === false) {
		if (swiper) return

		return enableSwiper(swiperStyle);
	}
};

const showMore = function () {
	let elements = document.querySelectorAll('.swiper-slide:nth-of-type(8) ~ .swiper-slide');
	for (const elem of elements) {
		elem.style.display = 'block';
	}
	buttonShowMore.style.display = 'none';
	buttonShowLess.style.display = 'block';
}

const showLess = function () {
	let elements = document.querySelectorAll('.swiper-slide:nth-of-type(8) ~ .swiper-slide');
	for (const elem of elements) {
		elem.style.display = 'none';
	}
	buttonShowMore.style.display = 'block';
	buttonShowLess.style.display = 'none';
}

window.addEventListener('resize', breakpointChecker);

swiper = createSwiper(swiperEl);

breakpointChecker();

buttonShowMore.addEventListener('click', showMore);
buttonShowLess.addEventListener('click', showLess);


