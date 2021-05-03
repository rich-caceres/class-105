var swiper2 = new Swiper("#swiper2", {

	autoplay: {
		delay: 3500
	},

	pagination: {
		el: "#specOpsPage",
		clickable: true,
		bulletClass: "specOp__item",
		bulletActiveClass: "is-active"
	},
	plugins: [SwiperPluginPagination, SwiperPluginAutoPlay]
});

var swiper1 = new Swiper("#apparatusSwiper", {
	autoplay: {
		delay: 3500
	},

	pagination: {
		el: ".swiper-plugin-pagination",
		clickable: true,
		bulletClass: "swiper-plugin-pagination__item",
		bulletActiveClass: "is-active"
	},
	plugins: [SwiperPluginPagination, SwiperPluginAutoPlay]

});

new ResizeSensor(jQuery('#SPECOP'), () => {
	swiper2.update(),
		swiper2.updateSize()
})

new ResizeSensor(jQuery('#collapseTwo'), () => {
	swiper1.update(),
		swiper1.updateSize()
})