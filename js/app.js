$('.header__select').stylishSelect();

let mobileMenu = document.querySelector(".mobile-menu"),
	  openMenuBtn = document.querySelector(".js-open-menu"),
	  closeMenuBtn = document.querySelector(".js-close-menu");
	  body = document.querySelector("body");
openMenuBtn.addEventListener("click", (e) => {
	e.preventDefault(), mobileMenu.classList.add("is-active");
	body.classList.add("no-scroll");
}),
closeMenuBtn.addEventListener("click", (e) => {
	e.preventDefault(), mobileMenu.classList.remove("is-active");
	body.classList.remove("no-scroll");
});


let faqItems = document.querySelectorAll(".faq__item");

function anchorLinkHandler(e) {
	const t = (e) => Math.floor(e.getBoundingClientRect().top);
	e.preventDefault();
	const i = this.getAttribute("href"),
		o = document.querySelector(i);
	if (!o) return;
	const n = t(o);
	window.scrollBy({ top: n, left: 0, behavior: "smooth" });
	const s = setInterval(function() {
		const e = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		(0 === t(o) || e) && ((o.tabIndex = "-1"), o.focus(), window.history.pushState("", "", i), clearInterval(s));
	}, 100);
}
faqItems.forEach((e) => {
	e.addEventListener("click", (t) => {
		t.preventDefault(), e.classList.toggle("is-active");
	});
});

let homeSliderWrapper = document.querySelector(".wifi__slider"),
	homeSlider = new Glide(homeSliderWrapper, { perView: 1, animationDuration: 400, rewind: !0, gap: 0, bound: !0, animationTimingFunc: "ease", breakpoints: { 567: { peek: 30, gap: 15 } } });
homeSliderWrapper && homeSlider.mount();
let contactSliderWrapper = document.querySelector(".office__slider"),
	contactSlider = new Glide(contactSliderWrapper, { perView: 1, animationDuration: 400, rewind: !0, gap: 0, bound: !0, animationTimingFunc: "ease", breakpoints: { 567: { peek: 30, gap: 15 } } });
contactSliderWrapper && contactSlider.mount();

$(document).ready(function() {

	let howImg = $('.how-it__img'),
      howItText = $('.how-it__text');
  function imagesSticky() {
  	howImg.each(function(n) {
			let viewportOffsetTop = howItText[n].getBoundingClientRect().top,
			    viewportOffsetBottom = howItText[n].getBoundingClientRect().bottom,
	        windowHalf = $(window).height() / 2,
	        elemHeight = howItText.height();
	  	if (viewportOffsetTop < windowHalf && windowHalf < viewportOffsetBottom) {
	  		howImg.removeClass('is-active');
	  		$(howImg[n]).addClass('is-active');
	  	};
  	});
  };
  imagesSticky();
  $(window).on('scroll resize', imagesSticky)

	$owlMain = $('.owl-main');
	function initializeMain() {
	  if (window.matchMedia('(max-width: 991.98px)').matches) {
	  	$owlMain.addClass('owl-carousel');
	    $owlMain.owlCarousel({
		    items: 1,
		    smartSpeed: 1000,
		});
	  } else {
	    $owlMain.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
	    $owlMain.find('.owl-stage-outer').children().unwrap();
	  }
	};
	$(window).resize(initializeMain);
	initializeMain();

	$(".faq__aside .faq__nav a[href*='#']").mPageScroll2id({
  	offset: 20
	}); 

});


