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


let changeImgAndText = () => {
	setTimeout(() => {
		let e = document.querySelector(".how-it"),
			t = parseInt(document.documentElement.clientHeight),
			i = document.querySelector(".how-it__imgs"),
			o = document.querySelector(".how-it__wrap"),
			n = o.offsetHeight,
			s = o.getBoundingClientRect().left,
			c = i.offsetWidth,
			a = document.querySelectorAll(".how-it__img"),
			r = document.querySelectorAll(".how-it__text"),
			l = document.querySelector('.how-it__text[data-text="0"]'),
			// d = document.querySelector('.how-it__text[data-text="4"]'),
			m = a[0].offsetHeight;
		// r.forEach((e, t) => {
		// 		e.style.minHeight = m;
		// 	}),
		// 	(i.style.height = n + "px"),
		// 	a.forEach((e, t) => {
		// 		e.style.width = c + "px";
		// 	});
		let u = 0;
		window.addEventListener(
			"scroll",
			() => {
				(textItemFirstTop = parseInt(l.getBoundingClientRect().top + m / 2)),
				// (textItemLastTop = parseInt(d.getBoundingClientRect().top + m / 2)),
				(imgsWrapBottom = t - parseInt(i.getBoundingClientRect().bottom));
				// (imgActiveBottom = t - parseInt(a[4].getBoundingClientRect().bottom));
				var o = window.pageYOffset || document.documentElement.scrollTop;
				o > u ?
					(textItemFirstTop - t / 2 <= 0 &&
						a.forEach((e, t) => {
							// e.classList.contains("is-fixed") || (e.classList.add("is-fixed"), (e.style.left = s + "px"), (e.style.top = "auto"));
						}),
						r.forEach((e, i) => {
							let o = parseInt(e.getBoundingClientRect().top);
							if (o <= t / 2 && o >= m / 2) {
								r.forEach((e) => {
										e.classList.remove("is-active");
									}),
									e.classList.add("is-active");
								let t = i;
								a.forEach((e) => {
										e.classList.remove("is-active");
									}),
									a[t].classList.add("is-active");
							}
						}),
						// imgsWrapBottom >= imgActiveBottom &&
						a.forEach((e, t) => {
							// e.classList.contains("is-fixed") && (e.classList.remove("is-fixed"), (e.style.left = "0"), (e.style.bottom = "0"));
						})) :
					t - e.getBoundingClientRect().bottom <= 0 &&
					(textItemFirstTop - t / 2 > 0 &&
						a.forEach((e, t) => {
							// e.classList.contains("is-fixed") && (e.classList.remove("is-fixed"), (e.style.left = "0"), (e.style.top = "0"));
						}),
						r.forEach((e, i) => {
							let o = parseInt(e.getBoundingClientRect().bottom);
							if (o >= t / 2 && o <= m) {
								r.forEach((e) => {
										e.classList.remove("is-active");
									}),
									e.classList.add("is-active");
								let t = i;
								a.forEach((e) => {
										e.classList.remove("is-active");
									}),
									a[t].classList.add("is-active");
							}
						}),
						// imgsWrapBottom >= imgActiveBottom &&
						a.forEach((e, t) => {
							// e.classList.contains("is-fixed") || (e.classList.add("is-fixed"), (e.style.left = s + "px"), (e.style.top = "auto"), (e.style.bottom = "50%"));
						})),
					(u = o <= 0 ? 0 : o);
			},
			!1
		);
	}, 100);
};
changeImgAndText(),
window.addEventListener("resize", () => {
	changeImgAndText();
});

$(document).ready(function() {

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


