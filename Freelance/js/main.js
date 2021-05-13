'use strict';

function initMap() {
	var pos = { lat: 43.25422587400006, lng: 76.92444653973439 };
	var opt = {
		center: pos,
		zoom: 15,
		styles: [
			{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
			{
				featureType: "administrative.locality",
				elementType: "labels.text.fill",
				stylers: [{ color: "#d59563" }],
			},
			{
				featureType: "poi",
				elementType: "labels.text.fill",
				stylers: [{ color: "#d59563" }],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [{ color: "#263c3f" }],
			},
			{
				featureType: "poi.park",
				elementType: "labels.text.fill",
				stylers: [{ color: "#6b9a76" }],
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [{ color: "#38414e" }],
			},
			{
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [{ color: "#212a37" }],
			},
			{
				featureType: "road",
				elementType: "labels.text.fill",
				stylers: [{ color: "#9ca5b3" }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [{ color: "#746855" }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [{ color: "#1f2835" }],
			},
			{
				featureType: "road.highway",
				elementType: "labels.text.fill",
				stylers: [{ color: "#f3d19c" }],
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [{ color: "#2f3948" }],
			},
			{
				featureType: "transit.station",
				elementType: "labels.text.fill",
				stylers: [{ color: "#d59563" }],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#17263c" }],
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [{ color: "#515c6d" }],
			},
			{
				featureType: "water",
				elementType: "labels.text.stroke",
				stylers: [{ color: "#17263c" }],
			},
		],
	};
	var myMap = new google.maps.Map(document.getElementById("map"),
		opt);

	var marker = new google.maps.Marker({
		position: pos,
		map: myMap,
		icon: 'img/pin.svg',
	});
	var info = new google.maps.InfoWindow({
		content: '<h3>Это мое место</h3>'
	})
}
document.addEventListener('DOMContentLoaded', () => {


	// hamburger menu
	const btnMenu = document.querySelectorAll('.header-hamburger');
	const menuHamb = document.querySelectorAll('.wrapper-menu');

	function openMenu() {
		btnMenu.forEach((e) => {
			e.addEventListener('click', (elem) => {
				menuHamb.forEach(elem => {
					elem.style.display = 'block';
					setTimeout(() => {
						elem.style.transform = 'translateX(0vh)';
						elem.style.left = '0px';
					}, 100);

				});
			});
		});
	}
	function closeMenu() {
		const btnCloseMenu = document.querySelectorAll('.wrapper-menu-close');
		const btnGoToHeader = document.querySelectorAll('.wrapper-menu-logo');
		const btnWrapperMenuLink = document.querySelectorAll('.wrapper-menu-link');
		btnCloseMenu.forEach(e => {
			e.addEventListener('click', () => {
				menuHamb.forEach(elem => {
					elem.style.transform = 'translateX(2000%)';
					setTimeout(() => {
						elem.style.display = 'none';
					}, 100);

				});

			});
		});

		btnGoToHeader.forEach(e => {
			e.addEventListener('click', () => {
				menuHamb.forEach(elem => {
					elem.style.left = '5000px';
					setTimeout(() => {
						elem.style.display = 'none';
					}, 100);
				});
			});
		});

		btnWrapperMenuLink.forEach(e => {
			e.addEventListener('click', () => {
				menuHamb.forEach(elem => {
					elem.style.left = '5000px';
					setTimeout(() => {
						elem.style.display = 'none';
					}, 100);
				});
			});
		});
	}
	openMenu();
	closeMenu();

	// hamburger menu

	// выбадающее меню с input

	const btnCreativeArrowDownCompany = document.querySelector('.creative-arrow-down-company');
	const btnCreativeArrowDownCategory = document.querySelector('.creative-arrow-down-category');
	const companyNavListCompany = document.querySelector('.company');
	const companyNavListCategory = document.querySelector('.category');
	const creativeContainer = document.querySelector('.creative .content');


	function openCreativeNavList() {
		btnCreativeArrowDownCompany.addEventListener('click', () => {
			companyNavListCompany.style.display = 'block';
			companyNavListCategory.style.display = 'none';
		});
		btnCreativeArrowDownCategory.addEventListener('click', () => {
			companyNavListCategory.style.display = 'block';
			companyNavListCompany.style.display = 'none';
		});
	}

	function closeCreativeNavList() {
		creativeContainer.addEventListener('click', (e) => {
			if (e.target === creativeContainer) {
				companyNavListCompany.style.display = 'none';
				companyNavListCategory.style.display = 'none';
			}
		});
		window.addEventListener("keyup", function (e) {
			if (e.keyCode == 27) {
				companyNavListCompany.style.display = 'none';
				companyNavListCategory.style.display = 'none';
			}
		}, false);
	}




	openCreativeNavList();
	closeCreativeNavList();


	// выбадающее меню с input

	// добавляем zIndex в секции



	const eventBtn = document.querySelector('.event-list-item-link-event');
	const btlBtn = document.querySelector('.event-list-item-link-btl');
	const creativeBtn = document.querySelector('.event-list-item-link-creative');
	const eventImageToChange = document.querySelector('.event-planet-img');
	const eventImageToChangeImg = document.querySelector('.event-planet-img img');





	function eventChangePlanetImage() {
		eventBtn.addEventListener('click', () => {
			eventImageToChange.style.top = '20%';
			eventImageToChange.style.left = '-10%';
			eventImageToChangeImg.src = 'img/event/event-planet.png';
			eventBtn.classList.add('event-list-item-link-active');
			btlBtn.classList.remove('btl-list-item-link-active');
			creativeBtn.classList.remove('creative-list-item-link-active');
			btlBtn.href = "#";
			creativeBtn.href = "#";
			setTimeout(() => {
				eventBtn.href = "#balmuzday";
			}, 100);
		});
		btlBtn.addEventListener('click', () => {
			eventImageToChange.style.top = '30%';
			eventImageToChange.style.left = '-5%';
			eventImageToChangeImg.src = 'img/event/event-cov.png';
			btlBtn.classList.add('btl-list-item-link-active');
			eventBtn.classList.remove('event-list-item-link-active');
			creativeBtn.classList.remove('creative-list-item-link-active');
			creativeBtn.href = "#";
			eventBtn.href = "#";
			setTimeout(() => {
				btlBtn.href = "#btl";
			}, 100);
		});
		creativeBtn.addEventListener('click', () => {
			eventImageToChange.style.top = '40%';
			eventImageToChange.style.left = '12%';
			eventImageToChangeImg.src = 'img/event/event-creative.png';
			creativeBtn.classList.add('creative-list-item-link-active');
			btlBtn.classList.remove('btl-list-item-link-active');
			eventBtn.classList.remove('event-list-item-link-active');
			eventBtn.href = "#";
			btlBtn.href = "#";
			setTimeout(() => {
				creativeBtn.href = "#creative";
			}, 100);
		});




	}



	eventChangePlanetImage();




	// меняеться картинка при нажатии одного из пунктов в секции event

	// slayder small

	new Swiper('.image-slider', {
		//arrow
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});



	const slyderBtnPrev = document.querySelector('.slyder-btns-left');
	const slyderBtnNext = document.querySelector('.slyder-btns-right');
	const slyderBackground = document.querySelector('.slyder-background');

	slyderBtnPrev.addEventListener('click', () => {
		slyderBackground.style.width = '825px';
		slyderBackground.style.left = '263px';
	});
	slyderBtnNext.addEventListener('click', () => {
		slyderBackground.style.width = '275px';
		slyderBackground.style.left = '530px';
	});

	// slayder small


	// scroll with raf

	let links = document.querySelectorAll('[href^="#"]'),
		speed = 0.2;

	links.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			let widthTop = document.documentElement.scrollTop,
				hash = this.hash,
				toBlock = document.querySelector(hash).getBoundingClientRect().top,
				start = null;

			requestAnimationFrame(step);

			function step(time) {
				if (start === null) {
					start = time;
				}

				let progress = time - start,
					r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

				document.documentElement.scrollTo(0, r);

				if (r != widthTop + toBlock) {
					requestAnimationFrame(step);
				} else {
					location.hash = hash;
				}
			}
		});
	});


	// scroll with raf

	// nextCase



	// nextCase

	// bigslyder

	const btnArrowBalmuzday = document.querySelector('.balmuzday-right-menu-arrow-right');
	const eventTringle = document.querySelector('.balmuzday-triangle');
	const eventIceCream = document.querySelector('.balmuzday-ice-cream');
	const eventH2 = document.querySelector('.balmuzday-h2');
	const eventText = document.querySelector('.balmuzday-text');
	const eventFirstScrollH2 = document.querySelector('.balmuzday-first-scroll-h2');
	const eventFirstScrollText = document.querySelector('.balmuzday-first-scroll-text');
	const eventFirstScrollDisk = document.querySelector('.balmuzday-first-scroll-disk');
	const eventFirstScrollDiskImg = document.querySelector('.balmuzday-first-scroll-disk img')
	const eventFirstScrollBall = document.querySelector('.balmuzday-first-scroll-ball');
	const eventFirstScrollDots = document.querySelector('.balmuzday-first-scroll-dots');
	const eventFirstScrollImg = document.querySelector('.balmuzday-first-scroll-img');
	const eventFirstScrollImgObj = document.querySelector('.balmuzday-first-scroll-img img');
	const eventSecondScrollh2 = document.querySelector('.balmuzday-second-scroll-h2');
	const eventSecondScrollText = document.querySelector('.balmuzday-second-scroll-text');
	const eventSecondScrollLine = document.querySelector('.balmuzday-second-scroll-btl-one-line');
	const eventSecondScrollTwoLines = document.querySelector('.balmuzday-second-scroll-two-line');
	const eventSecondScrollDots = document.querySelector('.balmuzday-second-scroll-dots');
	const eventThirdScrollH2 = document.querySelector('.balmuzday-third-scroll-h2');
	const eventThirdScrollText = document.querySelector('.balmuzday-third-scroll-text');
	const eventThirdScrollRing = document.querySelector('.balmuzday-third-scroll-ring');
	const eventThirdScrollRingImg = document.querySelector('.balmuzday-third-scroll-ring img');
	const eventThirdScrollDots = document.querySelector('.balmuzday-third-scroll-tringledots');
	const eventFourScrollH2 = document.querySelector('.balmuzday-four-scroll-h2');
	const eventFourScrollText = document.querySelector('.balmuzday-four-scroll-text');
	const eventFourScrollDots = document.querySelector('.balmuzday-four-scroll-dots');
	const eventFourScrollLight = document.querySelector('.balmuzday-four-scroll-lightning');
	const eventFiveScrollH2 = document.querySelector('.balmuzday-five-scroll-h2');
	const eventFiveScrollBox = document.querySelector('.balmuzday-five-scroll-box');
	const eventFiveScrollBoxImg = document.querySelector('.balmuzday-five-scroll-box img');
	const eventSixScrollH2 = document.querySelector('.balmuzday-six-scroll-h2');
	const eventSixScrollDots = document.querySelector('.balmuzday-six-scroll-dots');
	const eventSixScrollFourLines = document.querySelector('.balmuz-six-scroll-four-lines');
	const eventSixScrollPlanet = document.querySelector('.balmuzday-six-scroll-planet');
	const eventSevenScrollH2 = document.querySelector('.balmuzday-seven-scroll-h2');
	const eventSevenScrollDots = document.querySelector('.balmuzday-seven-scroll-dots');
	const eventSevenScrollBall = document.querySelector('.balmuzday-seven-scroll-ball');
	const eventSevenScrollBallImg = document.querySelector('.balmuzday-seven-scroll-ball img');
	const eventEightScrollH2 = document.querySelector('.balmuzday-eight-scroll-h2');
	const eventEightScrollTringle = document.querySelector('.balmuzday-eight-scroll-tringle');
	const eventEightScrollLight = document.querySelector('.balmuzday-eight-scroll-lightning');
	const eventNineScrollH2 = document.querySelector('.balmuzday-nine-scroll-h2');
	const eventTenScrollH2 = document.querySelector('.balmuzday-ten-scroll-h2');
	const eventTenScrollLine = document.querySelector('.balmuzday-ten-scroll-line');
	const eventTenScrollRing = document.querySelector('.balmuzday-ten-scroll-many-ring');
	const eventElevenScrollH2 = document.querySelector('.balmuzday-eleven-scroll-h2');
	const blackBgH2First = document.querySelector('.black-bg-first');
	const blackBgH2Second = document.querySelector('.black-bg-second');
	const blackBgH2Third = document.querySelector('.black-bg-thirt');




	btnArrowBalmuzday.addEventListener('click', () => {
		eventTringle.style.transform = 'translateX(-4000%)';
		eventH2.style.transform = 'translateX(-4000%)';
		eventText.style.transform = 'translateX(-4000%)';
		eventIceCream.style.transform = 'translateX(-4000%)';
		btnArrowBalmuzday.classList.add('balmuz-first-scroll');
		btnArrowBalmuzday.classList.remove('balmuzday-right-menu-arrow-right');
		const btnBalmuzFirstScroll = document.querySelector('.balmuz-first-scroll');
		// 
		setTimeout(() => {
			eventFirstScrollH2.style.transform = 'translateX(0%)';
			eventFirstScrollText.style.transform = 'translateX(0%)';
			eventFirstScrollDisk.style.transform = 'translateX(0%)';
			eventFirstScrollBall.style.transform = 'translateX(0%)';
			eventFirstScrollDots.style.transform = 'translateX(0%)';
			eventFirstScrollImg.style.transform = 'translateX(0%)';
			if (document.documentElement.clientWidth < 480) {
				blackBgH2First.style.width = '205px';
				blackBgH2Second.style.opacity = '1';
				blackBgH2Second.style.width = '87px';
				blackBgH2Third.style.opacity = '0';
			} else {
				blackBgH2First.style.width = '405px';
				blackBgH2Second.style.width = '171px';
			};

		}, 50);
		eventFirstScrollH2.style.display = 'block';
		eventFirstScrollText.style.display = 'block';
		eventFirstScrollDisk.style.display = 'block';
		eventFirstScrollBall.style.display = 'block';
		eventFirstScrollDots.style.display = 'block';
		eventFirstScrollImg.style.display = 'block';
		btnBalmuzFirstScroll.addEventListener('click', () => {
			btnBalmuzFirstScroll.classList.add('balmuz-second-scroll');
			btnBalmuzFirstScroll.classList.remove('balmuz-first-scroll');
			const btnBalmuzSecondScroll = document.querySelector('.balmuz-second-scroll');
			setTimeout(() => {
				eventFirstScrollDiskImg.src = 'img/balmuzday/second-scroll/disk.svg';
				eventFirstScrollDisk.style.transform = 'translateX(-3%)';
				eventFirstScrollH2.style.transform = 'translateX(-4000%)';
				eventFirstScrollDots.style.transform = 'translateX(-4000%)';
				eventFirstScrollBall.style.transform = 'translateX(-4000%)';
				eventFirstScrollImgObj.src = 'img/balmuzday/second-scroll/bw_sumsung.png';
				eventFirstScrollImg.style.transform = 'translateX(1%)';
				eventFirstScrollText.style.transform = 'translateX(-4000%)';
				eventSecondScrollh2.style.transform = 'translateY(-2%) translateX(0%)';
				eventSecondScrollText.style.transform = 'translateY(-52%) translateX(0%)';
				eventSecondScrollLine.style.transform = 'translateX(0%)';
				eventSecondScrollTwoLines.style.transform = 'translateX(0%)';
				eventSecondScrollDots.style.transform = 'translateX(0%)';
				if (document.documentElement.clientWidth < 480) {
					blackBgH2First.style.width = '195px';
					blackBgH2Second.style.opacity = '0';
				} else {
					blackBgH2First.style.width = '365px';
					blackBgH2Second.style.opacity = '0';
				};

			}, 50);
			eventSecondScrollh2.style.display = 'block';
			eventSecondScrollText.style.display = 'block';
			eventSecondScrollLine.style.display = 'block';
			eventSecondScrollTwoLines.style.display = 'block';
			eventSecondScrollDots.style.display = 'block';
			btnBalmuzSecondScroll.addEventListener('click', () => {
				btnBalmuzFirstScroll.classList.add('balmuz-third-scroll');
				btnBalmuzFirstScroll.classList.remove('balmuz-second-scroll');
				const btnBalmuzThirdScroll = document.querySelector('.balmuz-third-scroll');
				setTimeout(() => {
					eventSecondScrollh2.style.transform = 'translateX(-4000%)';
					eventSecondScrollText.style.transform = 'translateX(-4000%)';
					eventSecondScrollLine.style.transform = 'translateX(-4000%)';
					eventSecondScrollTwoLines.style.transform = 'translateX(-4000%)';
					eventSecondScrollDots.style.transform = 'translateX(-4000%)';
					eventSecondScrollDots.style.transform = 'translateX(-4000%)';
					eventFirstScrollDisk.style.transform = 'translateX(-4000%)';
					eventFirstScrollImg.style.transform = 'translateX(-4000%)';
					eventThirdScrollH2.style.transform = 'translateX(0%)';
					eventThirdScrollText.style.transform = 'translateX(0%) translateY(0%)';
					eventThirdScrollRing.style.transform = 'translateX(12%) translateY(13vh)';
					eventThirdScrollDots.style.transform = 'translateX(10%)';
					if (document.documentElement.clientWidth < 480) {
						blackBgH2First.style.width = '235px';
						blackBgH2Second.style.opacity = '0';
					} else {
						blackBgH2First.style.width = '225px';
						blackBgH2First.style.top = '-59px';
						blackBgH2Second.style.opacity = '1';
						blackBgH2Second.style.width = '251px';
						blackBgH2Second.style.height = '93px';
					};

				}, 50);
				eventThirdScrollH2.style.display = 'block';
				eventThirdScrollText.style.display = 'block';
				eventThirdScrollRing.style.display = 'block';
				eventThirdScrollDots.style.display = 'block';
				btnBalmuzThirdScroll.addEventListener('click', () => {
					btnBalmuzFirstScroll.classList.add('balmuz-four-scroll');
					btnBalmuzFirstScroll.classList.remove('balmuz-third-scroll');
					const btnBalmuzFourScroll = document.querySelector('.balmuz-four-scroll');
					setTimeout(() => {
						eventThirdScrollH2.style.transform = 'translateX(-4000%)';
						eventThirdScrollText.style.transform = 'translateX(-4000%)';
						eventThirdScrollRing.style.transform = 'translateX(50%) translateY(10%)';
						eventThirdScrollDots.style.transform = 'translateX(-4000%)';
						eventFourScrollH2.style.transform = 'translateX(0%) translateY(0%)';
						eventFourScrollText.style.transform = 'translateX(0%)';
						eventFourScrollDots.style.transform = 'translateY(-50%) translateX(10%)';
						eventFourScrollLight.style.transform = 'translateX(0%)';
						if (document.documentElement.clientWidth < 480) {
							blackBgH2First.style.width = '173px';
							blackBgH2Second.style.opacity = '1';
							blackBgH2Second.style.width = '160px';
						} else {
							blackBgH2First.style.width = '344px';
							blackBgH2Second.style.width = '315px';
						};

					}, 50);
					eventFourScrollH2.style.display = 'block';
					eventFourScrollText.style.display = 'block';
					eventFourScrollDots.style.display = 'block';
					eventFourScrollLight.style.display = 'block';
					btnBalmuzFourScroll.addEventListener('click', () => {
						btnBalmuzFirstScroll.classList.add('balmuz-five-scroll');
						btnBalmuzFirstScroll.classList.remove('balmuz-four-scroll');
						const btnBalmuzFiveScroll = document.querySelector('.balmuz-five-scroll');

						setTimeout(() => {
							eventFourScrollH2.style.transform = 'translateX(-4000%) translateY(-10%)';
							eventSecondScrollTwoLines.style.transform = 'translateX(0%) translateY(-305%)';
							eventSecondScrollTwoLines.style.right = 'auto';
							eventThirdScrollRingImg.src = 'img/balmuzday/five-scroll/ring-without-bottom.svg';
							eventThirdScrollRing.style.transform = 'translateX(0%) translateY(0%)';
							eventThirdScrollRing.style.top = 'auto';
							eventThirdScrollRing.style.bottom = '0';
							eventThirdScrollRing.style.left = 'auto';
							eventThirdScrollRing.style.right = '0';

							eventFourScrollDots.style.transform = 'translateX(-4000%)';
							eventFourScrollLight.style.transform = 'translateX(-4000%)';
							eventFourScrollText.style.transform = 'translateX(0%) translateY(0%)';
							eventFiveScrollH2.style.transform = 'translateX(0%) translateY(0%)';
							eventFiveScrollBox.style.transform = 'translateX(0%)';
							if (document.documentElement.clientWidth < 480) {
								blackBgH2First.style.width = '270px';
								blackBgH2Second.style.opacity = '0';
								blackBgH2Second.style.width = '160px';
							} else {
								blackBgH2First.style.width = '125px';
								blackBgH2Second.style.width = '390px';
							};

						}, 50);
						eventFiveScrollH2.style.display = 'block';
						eventFiveScrollBox.style.display = 'block';
						btnBalmuzFiveScroll.addEventListener('click', () => {
							btnBalmuzFirstScroll.classList.add('balmuz-six-scroll');
							btnBalmuzFirstScroll.classList.remove('balmuz-five-scroll');
							const btnBalmuzSixScroll = document.querySelector('.balmuz-six-scroll');
							setTimeout(() => {
								eventFirstScrollImgObj.src = 'img/balmuzday/six-scroll/bw_tele2.png';
								eventFirstScrollImg.style.transform = 'translateX(1%)';
								eventFiveScrollH2.style.transform = 'translateX(-4000%) translateY(-20%)';
								eventFiveScrollBox.style.transform = 'translateX(-4000%)';
								eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-145%)';
								eventThirdScrollRing.style.transform = 'translateX(-4000%) translateY(70%) scale(1.5, 1.5)';
								eventFourScrollText.style.transform = 'translateX(0%)	 translateY(0%)';
								eventSixScrollH2.style.transform = 'translateX(0%)';
								eventSixScrollDots.style.transform = 'translateX(0%)';
								eventSixScrollFourLines.style.transform = 'translateX(0%)';
								eventSixScrollPlanet.style.transform = 'translateX(0%)';
								if (document.documentElement.clientWidth < 480) {
									blackBgH2First.style.width = '210px';
									blackBgH2Second.style.opacity = '0';
									blackBgH2Second.style.width = '160px';
								} else {
									blackBgH2First.style.width = '403px';
									blackBgH2Second.style.opacity = '0';
								};

							}, 50);
							eventSixScrollH2.style.display = 'block';
							eventSixScrollDots.style.display = 'block';
							eventSixScrollFourLines.style.display = 'block';
							eventSixScrollPlanet.style.display = 'block';
							btnBalmuzSixScroll.addEventListener('click', () => {
								btnBalmuzFirstScroll.classList.add('balmuz-seven-scroll');
								btnBalmuzFirstScroll.classList.remove('balmuz-six-scroll');
								const btnBalmuzSevenScroll = document.querySelector('.balmuz-seven-scroll');
								setTimeout(() => {
									eventSixScrollH2.style.transform = 'translateX(-4000%)';
									eventSixScrollDots.style.transform = 'translateX(-4000%)';
									eventSixScrollFourLines.style.transform = 'translateX(-4000%)';
									eventSixScrollPlanet.style.transform = 'translateX(-4000%)';
									eventSecondScrollTwoLines.style.transform = 'translateX(30%) translateY(-215%)';
									eventFirstScrollImg.style.transform = 'translateX(-4000%)';
									eventSevenScrollH2.style.transform = 'translateX(0%) translateY(0%)';
									eventSevenScrollDots.style.transform = 'translateX(0%)';
									eventSevenScrollBall.style.transform = 'translateX(0%) translateY(-63%) scale(0.6 , 0.5)';
									if (document.documentElement.clientWidth < 480) {
										blackBgH2First.style.width = '135px';
										blackBgH2Second.style.opacity = '1';
										blackBgH2Second.style.width = '195px';
										blackBgH2Third.style.opacity = '1';
										blackBgH2Third.style.width = '165px';
										blackBgH2Third.style.marginTop = '15px';
									} else {
										blackBgH2First.style.width = '645px';
										blackBgH2Second.style.opacity = '1';
										blackBgH2Second.style.width = '325px';
									};

								}, 50);
								eventSevenScrollH2.style.display = 'block';
								eventSevenScrollDots.style.display = 'block';
								eventSevenScrollBall.style.display = 'block';
								btnBalmuzSevenScroll.addEventListener('click', () => {
									btnBalmuzFirstScroll.classList.add('balmuz-eight-scroll');
									btnBalmuzFirstScroll.classList.remove('balmuz-seven-scroll');
									const btnBalmuzEightScroll = document.querySelector('.balmuz-eight-scroll');
									setTimeout(() => {
										eventSevenScrollH2.style.transform = 'translateX(-4000%) translateY(-40%)';
										eventSevenScrollDots.style.transform = 'translateX(-4000%)';
										eventSevenScrollBall.style.transform = 'translateX(0%)';
										eventSevenScrollBallImg.src = 'img/balmuzday/nine-scroll/ball-without-down.svg';
										eventSevenScrollBall.style.top = 'auto';
										eventSevenScrollBall.style.bottom = '0';
										eventSevenScrollBall.style.right = 'auto';
										eventSevenScrollBall.style.left = '0';
										eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-135%)';
										eventEightScrollH2.style.transform = 'translateX(0%) translateY(0%)';
										eventEightScrollTringle.style.transform = 'translateX(0%) translateY(0%)';
										eventEightScrollLight.style.transform = 'translateX(0%) translateY(0%)';
										if (document.documentElement.clientWidth < 480) {
											blackBgH2First.style.width = '210px';
											blackBgH2Second.style.opacity = '0';
											blackBgH2Second.style.width = '195px';
											blackBgH2Third.style.opacity = '0';
											blackBgH2Third.style.width = '165px';
											blackBgH2Third.style.marginTop = '15px';
										} else {
											blackBgH2First.style.width = '405px';
											blackBgH2Second.style.opacity = '0';
										};

									}, 50);
									eventEightScrollH2.style.display = 'block';
									eventEightScrollTringle.style.display = 'block';
									eventEightScrollLight.style.display = 'block';
									btnBalmuzEightScroll.addEventListener('click', () => {
										btnBalmuzFirstScroll.classList.add('balmuz-nine-scroll');
										btnBalmuzFirstScroll.classList.remove('balmuz-eight-scroll');
										const btnBalmuzNineScroll = document.querySelector('.balmuz-nine-scroll');
										setTimeout(() => {
											eventEightScrollH2.style.transform = 'translateX(-4000%) translateY(0%)';
											eventEightScrollTringle.style.transform = 'translateX(-4000%) translateY(0%)';
											eventEightScrollLight.style.transform = 'translateX(-4000%) translateY(0%)';
											eventFirstScrollImgObj.src = 'img/balmuzday/nine-scroll/bw_Bosh-Openninh.png';
											eventFirstScrollImg.style.transform = 'translateX(1%) translateY(0%)';
											eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-135%)';
											eventSevenScrollBall.style.transform = 'translateX(0%) translateY(0%) scale(2,2)';
											eventSecondScrollTwoLines.style.transform = 'translateX(0%) translateY(-280%)';
											eventSecondScrollTwoLines.style.right = '0';
											eventNineScrollH2.style.transform = 'translateX(0%) translateY(0%)';
											if (document.documentElement.clientWidth < 480) {
												blackBgH2First.style.width = '107px';
												blackBgH2Second.style.opacity = '1';
												blackBgH2Second.style.width = '200px';
												blackBgH2Third.style.opacity = '0';
												blackBgH2Third.style.width = '165px';
												blackBgH2Third.style.marginTop = '15px';
											} else {
												blackBgH2First.style.width = '200px';
												blackBgH2Second.style.opacity = '1';
												blackBgH2Second.style.width = '385px';
											};

										}, 50);
										eventNineScrollH2.style.display = 'block';
										btnBalmuzNineScroll.addEventListener('click', () => {
											btnBalmuzFirstScroll.classList.add('balmuz-ten-scroll');
											btnBalmuzFirstScroll.classList.remove('balmuz-nine-scroll');
											const btnBalmuzTenScroll = document.querySelector('.balmuz-ten-scroll');

											setTimeout(() => {
												eventNineScrollH2.style.transform = 'translateX(-4000%)';
												eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-170%)';
												eventFirstScrollImg.style.transform = 'translateX(-4000%) translateY(-45%)';
												eventSevenScrollBall.style.transform = 'translateX(-4000%) translateY(47%) scale(0.8 , 0.8)';
												eventTenScrollH2.style.transform = 'translateX(0%) translateY(0%)';
												eventTenScrollLine.style.transform = 'translateX(0%)';
												eventTenScrollRing.style.transform = 'translateX(-5%) translateY(0%) scale(1 , 1)';
												if (document.documentElement.clientWidth < 480) {
													blackBgH2First.style.width = '195px';
													blackBgH2Second.style.opacity = '1';
													blackBgH2Second.style.width = '230px';
													blackBgH2Third.style.opacity = '0';
													blackBgH2Third.style.width = '165px';
													blackBgH2Third.style.marginTop = '15px';
												} else {
													blackBgH2First.style.width = '375px';
													blackBgH2Second.style.width = '445px';
												};

											}, 50);
											eventTenScrollH2.style.display = 'block';
											eventTenScrollLine.style.display = 'block';
											eventTenScrollRing.style.display = 'block';
											btnBalmuzTenScroll.addEventListener('click', () => {
												btnBalmuzFirstScroll.classList.add('balmuz-begin-scroll');
												btnBalmuzFirstScroll.classList.remove('balmuz-ten-scroll');

												setTimeout(() => {
													eventElevenScrollH2.style.transform = 'translateX(0%) translateY(0%)';
													eventTenScrollRing.style.transform = 'translateX(-4000%) translateY(0%) scale(0.85 , 0.85)';
													eventTenScrollLine.style.transform = 'translateX(-4000%)';
													eventTenScrollH2.style.transform = 'translateX(-4000%) translateY(0%)';
													eventFourScrollLight.style.transform = 'translateX(-5%) translateY(0%)';
													eventThirdScrollRing.style.transform = 'translateX(0%) translateY(0%) scale(1.5, 1.5)';
													eventFourScrollDots.style.transform = 'translateX(0%) translateY(-50%)';
													if (document.documentElement.clientWidth < 480) {
														blackBgH2First.style.width = '275px';
														blackBgH2Second.style.opacity = '1';
														blackBgH2Second.style.width = '100px';
														blackBgH2Third.style.opacity = '0';
														blackBgH2Third.style.width = '165px';
														blackBgH2Third.style.marginTop = '15px';
													} else {
														blackBgH2First.style.width = '345px';
														blackBgH2Second.style.width = '385px';
													};


												}, 50);
												btnBalmuzTenScroll.style.display = 'none';
												eventElevenScrollH2.style.display = 'block';
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});



	const btnArrowBtl = document.querySelector('.btl-right-menu-arrow-right');
	const bltFoutLines = document.querySelector('.btl-four-lines');
	const btlTwoLines = document.querySelector('.btl-two-lines');
	const btlTwoLinesImg = document.querySelector('.btl-two-lines img');
	const btlYellowLine = document.querySelector('.btl-yellow-vertical-line');
	const h2Btl = document.querySelector('.btl-h2-without');
	const btlManyDots = document.querySelector('.btl-manydots');
	const imgBtlFSCov = document.querySelector('.btl-first-scroll-cov');
	const imgBtlFSYellowBall = document.querySelector('.btl-first-scroll-yellow-ball');
	const h2BtlFS = document.querySelector('.btl-first-scroll-h2');
	const btlSSh2 = document.querySelector('.second-scroll-btl-h2');
	const btlSSManyDots = document.querySelector('.second-scroll-btl-many-dots');
	const btlSSOneLine = document.querySelector('.second-scroll-btl-one-line');
	const btlSSBall = document.querySelector('.second-scroll-btl-ball');
	const btlTSh2 = document.querySelector('.third-scroll-h2');
	const btlTSDots = document.querySelector('.third-scroll-many-dots');
	const btlTSRing = document.querySelector('.third-scroll-ring');
	const btlTSRingImg = document.querySelector('.third-scroll-ring img');
	const btlFSImg = document.querySelector('.third-scroll-many-dots img');
	const btlFSh2 = document.querySelector('.four-scroll-h2');
	const btlFiveScrollLightning = document.querySelector('.btl-five-scroll-lightning');
	const btlFiveScrollh2 = document.querySelector('.btl-five-scroll-h2');
	const btlSixScrollBox = document.querySelector('.btl-six-scroll-box');
	const btlSixScrollh2 = document.querySelector('.btl-six-scroll-h2');
	const btlSevenScrollh2 = document.querySelector('.btl-seven-scroll-h2');
	const btlSevenScrollTwoLine = document.querySelector('.btl-seven-scroll-two-line');
	const btlSevenScrollBall = document.querySelector('.btl-seven-scroll-ball');
	const btlSevenScrollDots = document.querySelector('.btl-seven-scroll-dots');
	const btlEightScrollh2 = document.querySelector('.btl-eight-scroll-h2');
	const btlEightScrollDisk = document.querySelector('.btl-eight-scroll-disk');
	const btlEightScrollDots = document.querySelector('.btl-eight-scroll-dots');
	const btlNineScrollh2 = document.querySelector('.btl-nine-scroll-h2');
	const btlNineScrollBeer = document.querySelector('.btl-nine-scroll-beer');
	const btlBgH2Body = document.querySelector('.btl-black-back');
	const btlBgH2First = document.querySelector('.btl-black-bg-first');
	const btlBgH2Second = document.querySelector('.btl-black-bg-second');
	const btlBgH2Third = document.querySelector('.btl-black-bg-thirt');


	btnArrowBtl.addEventListener('click', () => {
		setTimeout(() => {
			btlTwoLines.style.transform = 'translateY(76%) rotate(0deg)';
			btlTwoLines.style.left = '0px';
			btlTwoLines.style.bottom = '6%';
			btlTwoLines.style.width = '500px';
			btlTwoLinesImg.src = 'img/btl/first-scroll/btl-two-lines-long.svg';
			bltFoutLines.style.top = '0px';
			bltFoutLines.style.left = '15%';
			btlYellowLine.style.transform = 'translateX(-300%)';
			h2Btl.style.transform = 'translateX(-1500%)';
			imgBtlFSYellowBall.style.transform = 'translateX(0%)';
			imgBtlFSCov.style.transform = 'translateX(0%)';
			h2BtlFS.style.transform = 'translateX(0%)';
			btlManyDots.style.transform = 'translateX(-4000%)';
			if (document.documentElement.clientWidth < 480) {
				btlBgH2First.style.width = '115px';
			} else {
				btlBgH2First.style.width = '220px';
			};
		}, 100);
		imgBtlFSCov.style.display = 'block';
		imgBtlFSYellowBall.style.display = 'block';
		h2BtlFS.style.display = 'block';
		btnArrowBtl.addEventListener('click', () => {
			setTimeout(() => {
				bltFoutLines.style.top = '';
				bltFoutLines.style.bottom = '0px';
				bltFoutLines.style.left = '29%';
				btlSSManyDots.style.transform = 'translateX(0%)';
				btlSSOneLine.style.transform = 'translateX(0%)';
				btlSSh2.style.transform = 'translateX(0%)';
				btlSSBall.style.transform = 'translateX(0%)';
				imgBtlFSCov.style.transform = 'translateX(-3000%)';
				imgBtlFSYellowBall.style.transform = 'translateX(-3000%)';
				h2BtlFS.style.transform = 'translateX(-3000%)';
				btlTwoLines.style.transform = 'translateX(-2280%) rotate(0deg)';
				if (document.documentElement.clientWidth < 480) {

				} else {
					btlBgH2First.style.width = '220px';
				};
			}, 100);
			// 
			btlSSh2.style.display = 'block';
			btlSSManyDots.style.display = 'block';
			btlSSOneLine.style.display = 'block';
			btlSSBall.style.display = 'block';
			btnArrowBtl.addEventListener('click', () => {
				setTimeout(() => {
					btlTSh2.style.transform = 'translateX(0%)';
					btlTSDots.style.transform = 'translateX(0%)';
					btlTSRing.style.transform = 'translateX(0%) translateY(17vh)';
					bltFoutLines.style.transform = 'translateX(-4000%)';
					btlSSh2.style.transform = 'translateX(-4000%)';
					btlSSManyDots.style.transform = 'translateX(-4000%)';
					btlSSOneLine.style.transform = 'translateX(-4000%)';
					btlSSBall.style.transform = 'translateX(-4000%)';
					if (document.documentElement.clientWidth < 480) {
						btlBgH2First.style.width = '185px';
					} else {
						btlBgH2First.style.width = '355px';
					};
				}, 100);
				//
				btlTSh2.style.display = 'block';
				btlTSDots.style.display = 'block';
				btlTSRing.style.display = 'block';
				btnArrowBtl.addEventListener('click', () => {
					setTimeout(() => {
						btlTSRing.style.transform = 'translateX(15%) translateY(17vh)';
						btlTSDots.style.top = '0px';
						btlTSDots.style.left = '7.5%';
						btlFSImg.src = 'img/btl/FS/btl-FS-many-dots.svg';
						btlFSh2.style.transform = 'translateX(0%)';
						btlTSh2.style.transform = 'translateX(4000%)';
						if (document.documentElement.clientWidth < 480) {
							btlBgH2First.style.width = '180px';
							btlBgH2Second.style.opacity = '1';
							btlBgH2Second.style.width = '200px';
							btlBgH2Second.style.top = '-20px';
						} else {
							btlBgH2First.style.width = '355px';
							btlBgH2Second.style.opacity = '1';
							btlBgH2Second.style.width = '400px';
						};
					}, 100);
					// 
					btlFSh2.style.display = 'block';
					btnArrowBtl.addEventListener('click', () => {
						setTimeout(() => {
							btlTSRing.style.transform = 'translateX(65%) translateY(10%)';
							btlFiveScrollLightning.style.transform = 'translateX(0%)';
							btlFiveScrollh2.style.transform = 'translateX(10%) translateY(0%)';
							btlBgH2Body.style.transform = 'translateX(-60%) translateY(0%)';
							btlTSDots.style.transform = 'translateY(0%)';
							btlFSImg.src = 'img/btl/five-scroll/many-dots-translete.svg';
							btlFSh2.style.transform = 'translateX(-5000%)';
							if (document.documentElement.clientWidth < 480) {
								btlBgH2Body.style.transform = 'translateX(3%) translateY(0%)';
								btlFiveScrollh2.style.transform = 'translateX(4%) translateY(0%)';
								btlBgH2Third.style.opacity = '1';
								btlBgH2Third.style.width = '175px';
							} else {
								btlBgH2First.style.width = '687px';
								btlBgH2Second.style.opacity = '1';
								btlBgH2Second.style.width = '350px';
							};
						}, 100);
						// 
						btlFiveScrollLightning.style.display = 'block';
						btlFiveScrollh2.style.display = 'block';
						btnArrowBtl.addEventListener('click', () => {
							setTimeout(() => {
								btlTSRing.style.transform = 'translateX(0%) translateY(0%)';
								btlTSRing.style.bottom = '0px';
								btlTSRing.style.top = 'auto';
								btlTSRing.style.right = 'auto';
								btlFiveScrollLightning.style.transform = 'translateX(-230%) translateY(-30%) rotate(90deg)';
								btlFiveScrollLightning.style.right = '0px';
								btlFiveScrollLightning.style.left = 'auto';
								btlSixScrollh2.style.transform = 'translateX(10%) translateY(0%)';
								btlSixScrollBox.style.transform = 'translateX(0%) translateY(0%)';
								btlTSRingImg.src = 'img/btl/six/ball-big-left.svg';
								btlTSDots.style.transform = 'translateX(-4000%)';
								btlFiveScrollh2.style.transform = 'translateX(-4000%)';
								if (document.documentElement.clientWidth < 480) {
									btlBgH2Body.style.transform = 'translateX(5%) translateY(0%)';
									btlSixScrollh2.style.transform = 'translateX(9%) translateY(0%)';
									btlBgH2First.style.width = '160px';
									btlBgH2Second.style.opacity = '1';
									btlBgH2Second.style.width = '215px'
									btlBgH2Third.style.width = '150px';
								} else {
									btlBgH2First.style.width = '695px';
									btlBgH2Second.style.opacity = '1';
									btlBgH2Second.style.width = '275px';
								};
							}, 100);
							btlSixScrollh2.style.display = 'block';
							btlSixScrollBox.style.display = 'block';
							btnArrowBtl.addEventListener('click', () => {
								setTimeout(() => {
									btlSevenScrollh2.style.transform = 'translateX(10%) translateY(0%)';
									btlSevenScrollDots.style.transform = 'translateX(0%)';
									btlSixScrollh2.style.transform = 'translateX(-4000%)';
									btlSixScrollBox.style.transform = 'translateX(-4000%)';
									btlTSRing.style.transform = 'translateX(-4000%)';
									btlFiveScrollLightning.style.transform = 'translateX(-4000%)';
									if (document.documentElement.clientWidth < 480) {
										btlSevenScrollh2.style.transform = 'translateX(9%) translateY(0%)';
										btlBgH2First.style.width = '155px';
										btlBgH2Second.style.width = '160px'
										btlBgH2Third.style.width = '170px';
									} else {
										btlBgH2First.style.width = '565px';
										btlBgH2Second.style.opacity = '1';
										btlBgH2Second.style.width = '320px';
									};
								}, 100);
								// 
								btlSevenScrollh2.style.display = 'block';
								btlSevenScrollTwoLine.style.display = 'block';
								btlSevenScrollBall.style.display = 'block';
								btlSevenScrollDots.style.display = 'block';
								btnArrowBtl.addEventListener('click', () => {
									setTimeout(() => {
										btlSevenScrollTwoLine.style.bottom = '0px';
										btlSevenScrollTwoLine.style.right = '0px';
										btlSevenScrollTwoLine.style.top = 'auto';
										btlSevenScrollTwoLine.style.left = 'auto';
										btlEightScrollh2.style.transform = 'translateX(10%) translateY(0%)';
										btlEightScrollDisk.style.transform = 'translateX(0%)';
										btlEightScrollDots.style.transform = 'translateX(0%)';
										btlSSOneLine.style.transform = 'translateX(10%)';
										btlSSOneLine.style.zIndex = '1';
										btlSevenScrollh2.style.transform = 'translateX(-4000%)';
										btlSevenScrollBall.style.transform = 'translateX(-4000%)';
										btlSevenScrollDots.style.transform = 'translateX(-4000%)';
										if (document.documentElement.clientWidth < 480) {
											btlEightScrollh2.style.transform = 'translateX(9%) translateY(0%)';
											btlBgH2First.style.width = '195px';
											btlBgH2Second.style.width = '215px'
											btlBgH2Third.style.width = '95px';
										} else {
											btlBgH2First.style.width = '385px';
											btlBgH2Second.style.opacity = '1';
											btlBgH2Second.style.width = '605px';
										};
									}, 100);
									// 
									btlEightScrollh2.style.display = 'block';
									btlEightScrollDisk.style.display = 'block';
									btlEightScrollDots.style.display = 'block';
									btnArrowBtl.addEventListener('click', () => {
										setTimeout(() => {
											btlEightScrollDots.style.transform = 'translateX(100%) translateY(60%) rotate(60deg)';
											btlSevenScrollTwoLine.style.transform = 'translateY(-175%) translateX(0%)';
											btlSevenScrollTwoLine.style.right = 'auto';
											btnArrowBtl.style.display = 'none';
											btlNineScrollh2.style.transform = 'translateX(10%) translateY(0%)';
											btlNineScrollBeer.style.transform = 'translateX(0%)';
											btlEightScrollh2.style.transform = 'translateX(-4000%)';
											btlEightScrollDisk.style.transform = 'translateX(-4000%)';
											btlSSOneLine.style.transform = 'translateX(-4000%)';
											if (document.documentElement.clientWidth < 480) {
												btlNineScrollh2.style.transform = 'translateX(9%) translateY(0%)';
												btlBgH2First.style.width = '195px';
												btlBgH2Second.style.width = '160px'
												btlBgH2Third.style.width = '195px';
											} else {
												btlBgH2First.style.width = '670px';
												btlBgH2Second.style.opacity = '1';
												btlBgH2Second.style.width = '380px';
											};
										}, 100);
										//
										btlNineScrollh2.style.display = 'block';
										btlNineScrollBeer.style.display = 'block';
									});
								});
							});
						});
					});
				});
			});
		});
	});



	const headerLogo = document.querySelector('.header-right-menu-logo');


	// bigslyder

	// поднятие карточки

	const balmuzdayH2 = document.querySelector('.balmuzday-h2');
	const balmuzdayFirstH2 = document.querySelector('.balmuzday-first-scroll-h2');
	const balmuzdayTwoH2 = document.querySelector('.balmuzday-second-scroll-h2');
	const balmuzdayThirdH2 = document.querySelector('.balmuzday-third-scroll-h2');
	const balmuzdayFourH2 = document.querySelector('.balmuzday-four-scroll-h2');
	const balmuzdayFiveH2 = document.querySelector('.balmuzday-five-scroll-h2');
	const balmuzdaySixH2 = document.querySelector('.balmuzday-six-scroll-h2');
	const balmuzdaySevenH2 = document.querySelector('.balmuzday-seven-scroll-h2');
	const balmuzdayEightH2 = document.querySelector('.balmuzday-eight-scroll-h2');
	const balmuzdayNineH2 = document.querySelector('.balmuzday-nine-scroll-h2');
	const balmuzdayTenH2 = document.querySelector('.balmuzday-ten-scroll-h2');
	const balmuzdayElevenH2 = document.querySelector('.balmuzday-eleven-scroll-h2');



	const balmuzDayCartFirst = document.querySelector('.balmuzdaycart');
	const balmuzDayCartSecond = document.querySelector('.kfcbattlefirst');
	const balmuzDayCartThird = document.querySelector('.balmuz-samsung');
	const balmuzDayCartFour = document.querySelector('.balmuz-leroymerlin');
	const balmuzDayCartFive = document.querySelector('.balmuz-clientsname');
	const balmuzDayCartSix = document.querySelector('.balmuz-clientsname-balmuz-second');
	const balmuzDayCartSeven = document.querySelector('.balmuz-clientsname-balmuz-third');
	const balmuzDayCartEight = document.querySelector('.balmuz-clientsname-balmuz-four');
	const balmuzDayCartNine = document.querySelector('.balmuz-clientsname-balmuz-five');
	const balmuzDayCartTen = document.querySelector('.balmuz-clientsname-balmuz-six');
	const balmuzDayCartEleven = document.querySelector('.balmuz-clientsname-balmuz-seven');
	const balmuzDayCartTwell = document.querySelector('.balmuz-clientsname-balmuz-eight');


	const btlDayCartFirst = document.querySelector('.btlcart');
	const btlDayCartSecond = document.querySelector('.btlkfcbattle');
	const btlDayCartThird = document.querySelector('.btlsamsung');
	const btlDayCartFour = document.querySelector('.btlleroymerlin');
	const btlDayCartFive = document.querySelector('.btl-clientsname-balmuz-first');
	const btlDayCartSix = document.querySelector('.btl-clientsname-balmuz-second');
	const btlDayCartSeven = document.querySelector('.btl-clientsname-balmuz-third');
	const btlDayCartEight = document.querySelector('.btl-clientsname-balmuz-four');
	const btlDayCartNine = document.querySelector('.btl-clientsname-balmuz-five');
	const btlDayCartTen = document.querySelector('.btl-clientsname-balmuz-six');



	const nextCaseBtnBalmuzFirst = document.querySelector('.balmuzdaycart .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzSecond = document.querySelector('.balmuzdayapps-kcreed-second');
	const nextCaseBtnBalmuzThird = document.querySelector('.balmuz-samsung .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzFour = document.querySelector('.balmuz-leroymerlin .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzFive = document.querySelector('.balmuz-clientsname .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzSix = document.querySelector('.balmuz-clientsname-balmuz-second .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzSeven = document.querySelector('.balmuz-clientsname-balmuz-third .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzEight = document.querySelector('.balmuz-clientsname-balmuz-four .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzNine = document.querySelector('.balmuz-clientsname-balmuz-five .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzTen = document.querySelector('.balmuz-clientsname-balmuz-six .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzEleven = document.querySelector('.balmuz-clientsname-balmuz-seven .balmuzdayapps-kcreed');
	const nextCaseBtnBalmuzTwell = document.querySelector('.balmuz-clientsname-balmuz-eight .balmuzdayapps-kcreed');
	const btnBalmuzFirstScroll = document.querySelector('.balmuz-first-scroll');
	const btnBalmuzSecondScroll = document.querySelector('.balmuz-second-scroll');
	const btnBalmuzThirdScroll = document.querySelector('.balmuz-third-scroll');
	const btnBalmuzFourScroll = document.querySelector('.balmuz-four-scroll');
	const btnBalmuzFiveScroll = document.querySelector('.balmuz-five-scroll');
	const btnBalmuzSixScroll = document.querySelector('.balmuz-six-scroll');
	const btnBalmuzSevenScroll = document.querySelector('.balmuz-seven-scroll');
	const btnBalmuzEightScroll = document.querySelector('.balmuz-eight-scroll');
	const btnBalmuzNineScroll = document.querySelector('.balmuz-nine-scroll');
	const btnBalmuzTenScroll = document.querySelector('.balmuz-ten-scroll');
	const allArrowsSlideBalmuz = document.querySelector('.balmuz-arrows-slide');
	const allArrowsSlideBtl = document.querySelector('.btl-arrows-slide');
	// function nextCase() {

	// 	nextCaseBtnBalmuzFirst.addEventListener('click', () => {
	// 		eventTringle.style.transform = 'translateX(-4000%)';
	// 		eventH2.style.transform = 'translateX(-4000%)';
	// 		eventText.style.transform = 'translateX(-4000%)';
	// 		eventIceCream.style.transform = 'translateX(-4000%)';
	// 		allArrowsSlideBalmuz.classList.add('balmuz-first-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuzday-right-menu-arrow-right');

	// 		// 
	// 		setTimeout(() => {
	// 			eventFirstScrollH2.style.transform = 'translateX(0%)';
	// 			eventFirstScrollText.style.transform = 'translateX(0%)';
	// 			eventFirstScrollDisk.style.transform = 'translateX(0%)';
	// 			eventFirstScrollBall.style.transform = 'translateX(0%)';
	// 			eventFirstScrollDots.style.transform = 'translateX(0%)';
	// 			eventFirstScrollImg.style.transform = 'translateX(0%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '205px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '87px';
	// 				blackBgH2Third.style.opacity = '0';
	// 			} else {
	// 				blackBgH2First.style.width = '405px';
	// 				blackBgH2Second.style.width = '171px';
	// 			};

	// 		}, 50);
	// 		eventFirstScrollH2.style.display = 'block';
	// 		eventFirstScrollText.style.display = 'block';
	// 		eventFirstScrollDisk.style.display = 'block';
	// 		eventFirstScrollBall.style.display = 'block';
	// 		eventFirstScrollDots.style.display = 'block';
	// 		eventFirstScrollImg.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzSecond.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-second-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-first-scroll');
	// 		const btnBalmuzSecondScroll = document.querySelector('.balmuz-second-scroll');
	// 		setTimeout(() => {
	// 			console.log('3sec');
	// 			eventFirstScrollDiskImg.src = 'img/balmuzday/second-scroll/disk.svg';
	// 			eventFirstScrollDisk.style.transform = 'translateX(-3%)';
	// 			eventFirstScrollH2.style.transform = 'translateX(-4000%)';
	// 			eventFirstScrollDots.style.transform = 'translateX(-4000%)';
	// 			eventFirstScrollBall.style.transform = 'translateX(-4000%)';
	// 			eventFirstScrollImgObj.src = 'img/balmuzday/second-scroll/bw_sumsung.png';
	// 			eventFirstScrollImg.style.transform = 'translateX(1%)';
	// 			eventFirstScrollText.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollh2.style.transform = 'translateY(-2%) translateX(0%)';
	// 			eventSecondScrollText.style.transform = 'translateY(-52%) translateX(0%)';
	// 			eventSecondScrollLine.style.transform = 'translateX(0%)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(0%)';
	// 			eventSecondScrollDots.style.transform = 'translateX(0%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '195px';
	// 				blackBgH2Second.style.opacity = '0';
	// 			} else {
	// 				blackBgH2First.style.width = '365px';
	// 				blackBgH2Second.style.opacity = '0';
	// 			};

	// 		}, 50);
	// 		eventSecondScrollh2.style.display = 'block';
	// 		eventSecondScrollText.style.display = 'block';
	// 		eventSecondScrollLine.style.display = 'block';
	// 		eventSecondScrollTwoLines.style.display = 'block';
	// 		eventSecondScrollDots.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzThird.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-third-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-second-scroll');
	// 		const btnBalmuzThirdScroll = document.querySelector('.balmuz-third-scroll');
	// 		setTimeout(() => {
	// 			eventSecondScrollh2.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollText.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollLine.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollDots.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollDots.style.transform = 'translateX(-4000%)';
	// 			eventFirstScrollDisk.style.transform = 'translateX(-4000%)';
	// 			eventFirstScrollImg.style.transform = 'translateX(-4000%)';
	// 			eventThirdScrollH2.style.transform = 'translateX(0%)';
	// 			eventThirdScrollText.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventThirdScrollRing.style.transform = 'translateX(12%) translateY(13vh)';
	// 			eventThirdScrollDots.style.transform = 'translateX(10%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '235px';
	// 				blackBgH2Second.style.opacity = '0';
	// 			} else {
	// 				blackBgH2First.style.width = '225px';
	// 				blackBgH2First.style.top = '-59px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '251px';
	// 				blackBgH2Second.style.height = '93px';
	// 			};

	// 		}, 50);
	// 		eventThirdScrollH2.style.display = 'block';
	// 		eventThirdScrollText.style.display = 'block';
	// 		eventThirdScrollRing.style.display = 'block';
	// 		eventThirdScrollDots.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzFour.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-four-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-third-scroll');

	// 		setTimeout(() => {
	// 			eventThirdScrollH2.style.transform = 'translateX(-4000%)';
	// 			eventThirdScrollText.style.transform = 'translateX(-4000%)';
	// 			eventThirdScrollRing.style.transform = 'translateX(50%) translateY(10%)';
	// 			eventThirdScrollDots.style.transform = 'translateX(-4000%)';
	// 			eventFourScrollH2.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventFourScrollText.style.transform = 'translateX(0%)';
	// 			eventFourScrollDots.style.transform = 'translateY(-50%) translateX(10%)';
	// 			eventFourScrollLight.style.transform = 'translateX(0%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '173px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '160px';
	// 			} else {
	// 				blackBgH2First.style.width = '344px';
	// 				blackBgH2Second.style.width = '315px';
	// 			};

	// 		}, 50);
	// 		eventFourScrollH2.style.display = 'block';
	// 		eventFourScrollText.style.display = 'block';
	// 		eventFourScrollDots.style.display = 'block';
	// 		eventFourScrollLight.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzFive.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-five-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-four-scroll');


	// 		setTimeout(() => {
	// 			eventFourScrollH2.style.transform = 'translateX(-4000%) translateY(-10%)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(0%) translateY(-305%)';
	// 			eventSecondScrollTwoLines.style.right = 'auto';
	// 			eventThirdScrollRingImg.src = 'img/balmuzday/five-scroll/ring-without-bottom.svg';
	// 			eventThirdScrollRing.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventThirdScrollRing.style.top = 'auto';
	// 			eventThirdScrollRing.style.bottom = '0';
	// 			eventThirdScrollRing.style.left = 'auto';
	// 			eventThirdScrollRing.style.right = '0';

	// 			eventFourScrollDots.style.transform = 'translateX(-4000%)';
	// 			eventFourScrollLight.style.transform = 'translateX(-4000%)';
	// 			eventFourScrollText.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventFiveScrollH2.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventFiveScrollBox.style.transform = 'translateX(0%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '270px';
	// 				blackBgH2Second.style.opacity = '0';
	// 				blackBgH2Second.style.width = '160px';
	// 			} else {
	// 				blackBgH2First.style.width = '125px';
	// 				blackBgH2Second.style.width = '390px';
	// 			};

	// 		}, 50);
	// 		eventFiveScrollH2.style.display = 'block';
	// 		eventFiveScrollBox.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzSix.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-six-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-five-scroll');

	// 		setTimeout(() => {
	// 			eventFirstScrollImgObj.src = 'img/balmuzday/six-scroll/bw_tele2.png';
	// 			eventFirstScrollImg.style.transform = 'translateX(1%)';
	// 			eventFiveScrollH2.style.transform = 'translateX(-4000%) translateY(-20%)';
	// 			eventFiveScrollBox.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-145%)';
	// 			eventThirdScrollRing.style.transform = 'translateX(-4000%) translateY(70%) scale(1.5, 1.5)';
	// 			eventFourScrollText.style.transform = 'translateX(0%)	 translateY(0%)';
	// 			eventSixScrollH2.style.transform = 'translateX(0%)';
	// 			eventSixScrollDots.style.transform = 'translateX(0%)';
	// 			eventSixScrollFourLines.style.transform = 'translateX(0%)';
	// 			eventSixScrollPlanet.style.transform = 'translateX(0%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '210px';
	// 				blackBgH2Second.style.opacity = '0';
	// 				blackBgH2Second.style.width = '160px';
	// 			} else {
	// 				blackBgH2First.style.width = '403px';
	// 				blackBgH2Second.style.opacity = '0';
	// 			};

	// 		}, 50);
	// 		eventSixScrollH2.style.display = 'block';
	// 		eventSixScrollDots.style.display = 'block';
	// 		eventSixScrollFourLines.style.display = 'block';
	// 		eventSixScrollPlanet.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzSeven.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-seven-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-six-scroll');

	// 		setTimeout(() => {
	// 			eventSixScrollH2.style.transform = 'translateX(-4000%)';
	// 			eventSixScrollDots.style.transform = 'translateX(-4000%)';
	// 			eventSixScrollFourLines.style.transform = 'translateX(-4000%)';
	// 			eventSixScrollPlanet.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(30%) translateY(-215%)';
	// 			eventFirstScrollImg.style.transform = 'translateX(-4000%)';
	// 			eventSevenScrollH2.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventSevenScrollDots.style.transform = 'translateX(0%)';
	// 			eventSevenScrollBall.style.transform = 'translateX(0%) translateY(-63%) scale(0.6 , 0.5)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '135px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '195px';
	// 				blackBgH2Third.style.opacity = '1';
	// 				blackBgH2Third.style.width = '165px';
	// 				blackBgH2Third.style.marginTop = '15px';
	// 			} else {
	// 				blackBgH2First.style.width = '645px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '325px';
	// 			};

	// 		}, 50);
	// 		eventSevenScrollH2.style.display = 'block';
	// 		eventSevenScrollDots.style.display = 'block';
	// 		eventSevenScrollBall.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzEight.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-eight-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-seven-scroll');

	// 		setTimeout(() => {
	// 			eventSevenScrollH2.style.transform = 'translateX(-4000%) translateY(-40%)';
	// 			eventSevenScrollDots.style.transform = 'translateX(-4000%)';
	// 			eventSevenScrollBall.style.transform = 'translateX(0%)';
	// 			eventSevenScrollBallImg.src = 'img/balmuzday/nine-scroll/ball-without-down.svg';
	// 			eventSevenScrollBall.style.top = 'auto';
	// 			eventSevenScrollBall.style.bottom = '0';
	// 			eventSevenScrollBall.style.right = 'auto';
	// 			eventSevenScrollBall.style.left = '0';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-135%)';
	// 			eventEightScrollH2.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventEightScrollTringle.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventEightScrollLight.style.transform = 'translateX(0%) translateY(0%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '210px';
	// 				blackBgH2Second.style.opacity = '0';
	// 				blackBgH2Second.style.width = '195px';
	// 				blackBgH2Third.style.opacity = '0';
	// 				blackBgH2Third.style.width = '165px';
	// 				blackBgH2Third.style.marginTop = '15px';
	// 			} else {
	// 				blackBgH2First.style.width = '405px';
	// 				blackBgH2Second.style.opacity = '0';
	// 			};

	// 		}, 50);
	// 		eventEightScrollH2.style.display = 'block';
	// 		eventEightScrollTringle.style.display = 'block';
	// 		eventEightScrollLight.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzNine.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-nine-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-eight-scroll');

	// 		setTimeout(() => {
	// 			eventEightScrollH2.style.transform = 'translateX(-4000%) translateY(0%)';
	// 			eventEightScrollTringle.style.transform = 'translateX(-4000%) translateY(0%)';
	// 			eventEightScrollLight.style.transform = 'translateX(-4000%) translateY(0%)';
	// 			eventFirstScrollImgObj.src = 'img/balmuzday/nine-scroll/bw_Bosh-Openninh.png';
	// 			eventFirstScrollImg.style.transform = 'translateX(1%) translateY(0%)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-135%)';
	// 			eventSevenScrollBall.style.transform = 'translateX(0%) translateY(0%) scale(2,2)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(0%) translateY(-280%)';
	// 			eventSecondScrollTwoLines.style.right = '0';
	// 			eventNineScrollH2.style.transform = 'translateX(0%) translateY(0%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '107px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '200px';
	// 				blackBgH2Third.style.opacity = '0';
	// 				blackBgH2Third.style.width = '165px';
	// 				blackBgH2Third.style.marginTop = '15px';
	// 			} else {
	// 				blackBgH2First.style.width = '200px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '385px';
	// 			};

	// 		}, 50);
	// 		eventNineScrollH2.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzTen.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-ten-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-nine-scroll');


	// 		setTimeout(() => {
	// 			eventNineScrollH2.style.transform = 'translateX(-4000%)';
	// 			eventSecondScrollTwoLines.style.transform = 'translateX(-4000%) translateY(-170%)';
	// 			eventFirstScrollImg.style.transform = 'translateX(-4000%) translateY(-45%)';
	// 			eventSevenScrollBall.style.transform = 'translateX(-4000%) translateY(47%) scale(0.8 , 0.8)';
	// 			eventTenScrollH2.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventTenScrollLine.style.transform = 'translateX(0%)';
	// 			eventTenScrollRing.style.transform = 'translateX(-5%) translateY(0%) scale(1 , 1)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '195px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '230px';
	// 				blackBgH2Third.style.opacity = '0';
	// 				blackBgH2Third.style.width = '165px';
	// 				blackBgH2Third.style.marginTop = '15px';
	// 			} else {
	// 				blackBgH2First.style.width = '375px';
	// 				blackBgH2Second.style.width = '445px';
	// 			};

	// 		}, 50);
	// 		eventTenScrollH2.style.display = 'block';
	// 		eventTenScrollLine.style.display = 'block';
	// 		eventTenScrollRing.style.display = 'block';
	// 	});
	// 	nextCaseBtnBalmuzEleven.addEventListener('click', () => {
	// 		allArrowsSlideBalmuz.classList.add('balmuz-begin-scroll');
	// 		allArrowsSlideBalmuz.classList.remove('balmuz-ten-scroll');

	// 		setTimeout(() => {
	// 			eventElevenScrollH2.style.transform = 'translateX(0%) translateY(0%)';
	// 			eventTenScrollRing.style.transform = 'translateX(-4000%) translateY(0%) scale(0.85 , 0.85)';
	// 			eventTenScrollLine.style.transform = 'translateX(-4000%)';
	// 			eventTenScrollH2.style.transform = 'translateX(-4000%) translateY(0%)';
	// 			eventFourScrollLight.style.transform = 'translateX(-5%) translateY(0%)';
	// 			eventThirdScrollRing.style.transform = 'translateX(0%) translateY(0%) scale(1.5, 1.5)';
	// 			eventFourScrollDots.style.transform = 'translateX(0%) translateY(-50%)';
	// 			if (document.documentElement.clientWidth < 480) {
	// 				blackBgH2First.style.width = '275px';
	// 				blackBgH2Second.style.opacity = '1';
	// 				blackBgH2Second.style.width = '100px';
	// 				blackBgH2Third.style.opacity = '0';
	// 				blackBgH2Third.style.width = '165px';
	// 				blackBgH2Third.style.marginTop = '15px';
	// 			} else {
	// 				blackBgH2First.style.width = '345px';
	// 				blackBgH2Second.style.width = '385px';
	// 			};


	// 		}, 50);
	// 		btnBalmuzTenScroll.style.display = 'none';
	// 		eventElevenScrollH2.style.display = 'block';
	// 	});


	// }

	// nextCase();




	//ОТКРЫТИЕ ОКНА

	balmuzdayH2.addEventListener('click', () => {
		balmuzDayCartFirst.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartFirst.style.transform = 'translateY(-200vh)';
		}, 500);


		balmuzDayCartFirst.style.zIndex = '15';
	});
	balmuzdayFirstH2.addEventListener('click', () => {

		const balmuzDayCartSecondClose = document.querySelector('.kfcbattle .balmuzdayapps-arrow');
		balmuzDayCartSecond.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartSecond.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartSecondClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartSecond.style.display = 'none';
			}, 1500);
			balmuzDayCartSecond.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartSecond.style.zIndex = '15';
	});
	balmuzdayTwoH2.addEventListener('click', () => {
		const balmuzDayCartThirdClose = document.querySelector('.samsung .balmuzdayapps-arrow');
		balmuzDayCartThird.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartThird.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartThirdClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartThird.style.display = 'none';
			}, 1500);
			balmuzDayCartThird.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartThird.style.zIndex = '15';
	});
	balmuzdayThirdH2.addEventListener('click', () => {
		const balmuzDayCartFourClose = document.querySelector('.leroymerlin .balmuzdayapps-arrow');
		balmuzDayCartFour.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartFour.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFourClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartFour.style.display = 'none';
			}, 1500);
			balmuzDayCartFour.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartFour.style.zIndex = '15';
	});
	balmuzdayFourH2.addEventListener('click', () => {
		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartFive.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartFive.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartFive.style.display = 'none';
			}, 1500);
			balmuzDayCartFive.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartFive.style.zIndex = '15';
	});
	balmuzdayFiveH2.addEventListener('click', () => {
		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartSix.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartSix.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartSix.style.display = 'none';
			}, 1500);
			balmuzDayCartSix.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartSix.style.zIndex = '15';
	});
	balmuzdaySixH2.addEventListener('click', () => {

		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartSeven.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartSeven.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartSeven.style.display = 'none';
			}, 1500);
			balmuzDayCartSeven.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartSeven.style.zIndex = '15';
	});
	balmuzdaySevenH2.addEventListener('click', () => {

		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartEight.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartEight.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartEight.style.display = 'none';
			}, 1500);
			balmuzDayCartEight.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartEight.style.zIndex = '15';
	});
	balmuzdayEightH2.addEventListener('click', () => {
		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartNine.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartNine.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartNine.style.display = 'none';
			}, 1500);
			balmuzDayCartNine.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartNine.style.zIndex = '15';
	});
	balmuzdayNineH2.addEventListener('click', () => {
		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartTen.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartTen.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartTen.style.display = 'none';
			}, 1500);
			balmuzDayCartTen.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartTen.style.zIndex = '15';
	});
	balmuzdayTenH2.addEventListener('click', () => {
		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartEleven.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartEleven.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartEleven.style.display = 'none';
			}, 1500);
			balmuzDayCartEleven.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartEleven.style.zIndex = '15';
	});
	balmuzdayElevenH2.addEventListener('click', () => {
		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartTwell.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartTwell.style.transform = 'translateY(-200vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartTwell.style.display = 'none';
			}, 1500);
			balmuzDayCartTwell.style.transform = 'translateY(200vh)';

		});

		balmuzDayCartTwell.style.zIndex = '15';
	});

	//ОТКРЫТИЕ ОКНА


	const aboutCloseAppsBtn = document.querySelectorAll('.balmuzdayapps-event-about');
	aboutCloseAppsBtn.forEach(item => {
		item.addEventListener('click', () => {
			const allApps = document.querySelectorAll('.balmuzdayapps');
			allApps.forEach(items => {
				setTimeout(() => {
					items.style.transform = 'translateY(200vh)';
				}, 1500);
				items.style.display = 'none';
			});
		});
	});


	const closeAppsBtn = document.querySelectorAll('.balmuzdayapps-arrow');

	const btlH2 = document.querySelector('.btl-h2-without');
	const btlFirstH2 = document.querySelector('.btl-first-scroll-h2');
	const btlTwoH2 = document.querySelector('.second-scroll-btl-h2');
	const btlThirdH2 = document.querySelector('.third-scroll-h2');
	const btlFourH2 = document.querySelector('.four-scroll-h2');
	const btlFiveH2 = document.querySelector('.btl-five-scroll-h2');
	const btlSixH2 = document.querySelector('.btl-six-scroll-h2');
	const btlSevenH2 = document.querySelector('.btl-seven-scroll-h2');
	const btlEightH2 = document.querySelector('.btl-eight-scroll-h2');
	const btlNineH2 = document.querySelector('.btl-nine-scroll-h2');
	const creedImgNextSection = document.querySelectorAll('.balmuzdayapps-kcreed');
	const listInApps = document.querySelectorAll('.balmuzdayapps-nav li');


	function closeSectionApps() {
		creedImgNextSection.forEach(item => {
			item.addEventListener('click', () => {
				const allAppsSections = document.querySelectorAll('.balmuzdayapps');
				allAppsSections.forEach(element => {
					setTimeout(() => {
						element.style.display = 'none';
					}, 1500);
					element.style.transform = 'translateY(200vh)';
				});
			});
		});
		listInApps.forEach(i => {
			i.addEventListener('click', () => {
				const allAppsSections = document.querySelectorAll('.balmuzdayapps');
				allAppsSections.forEach(element => {
					setTimeout(() => {
						element.style.display = 'none';
					}, 500);
					element.style.transform = 'translateY(200vh)';
				});
			});
		});


	}
	closeSectionApps();


	btlH2.addEventListener('click', () => {
		btlDayCartFirst.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartFirst.style.transform = 'translateY(-100vh)';
		}, 500);

		balmuzDayCartFirst.style.zIndex = '15';
	});
	btlFirstH2.addEventListener('click', () => {
		const btlDayCartSecondClose = document.querySelector('.kfcbattle .balmuzdayapps-arrow');
		btlDayCartSecond.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartSecond.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartSecondClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartSecond.style.display = 'none';
			}, 1500);
			btlDayCartSecond.style.transform = 'translateY(200vh)';
		});

		btlDayCartSecond.style.zIndex = '15';
	});
	btlTwoH2.addEventListener('click', () => {
		const btlDayCartThirdClose = document.querySelector('.samsung .balmuzdayapps-arrow');
		btlDayCartThird.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartThird.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartThirdClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartThird.style.display = 'none';
			}, 1500);
			btlDayCartThird.style.transform = 'translateY(200vh)';
		});


		btlDayCartThird.style.zIndex = '15';
	});
	btlThirdH2.addEventListener('click', () => {
		const btlDayCartFourClose = document.querySelector('.leroymerlin .balmuzdayapps-arrow');
		btlDayCartFour.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartFour.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartFourClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartFour.style.display = 'none';
			}, 1500);
			btlDayCartFour.style.transform = 'translateY(200vh)';
		});

		btlDayCartFour.style.zIndex = '15';
	});
	btlFourH2.addEventListener('click', () => {
		const balmuzDayCartFive = document.querySelector('.clientsname');
		const balmuzDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		balmuzDayCartFive.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			balmuzDayCartFive.style.transform = 'translateY(-100vh)';
		}, 500);
		balmuzDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				balmuzDayCartFive.style.display = 'none';
			}, 1500);
			balmuzDayCartFive.style.transform = 'translateY(200vh)';
		});

		balmuzDayCartSecond.style.zIndex = '15';
	});
	btlFiveH2.addEventListener('click', () => {
		const btlDayCartFiveClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		btlDayCartFive.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartFive.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartFiveClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartFive.style.display = 'none';
			}, 1500);
			btlDayCartFive.style.transform = 'translateY(200vh)';
		});

		btlDayCartFive.style.zIndex = '15';
	});
	btlSixH2.addEventListener('click', () => {
		const btlDayCartSixClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		btlDayCartSix.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartSix.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartSixClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartSix.style.display = 'none';
			}, 1500);
			btlDayCartSix.style.transform = 'translateY(200vh)';
		});

		btlDayCartSix.style.zIndex = '15';
	});
	btlSevenH2.addEventListener('click', () => {

		const btlDayCartSevenClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		btlDayCartSeven.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartSeven.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartSevenClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartSeven.style.display = 'none';
			}, 1500);
			btlDayCartSeven.style.transform = 'translateY(200vh)';
		});

		btlDayCartSeven.style.zIndex = '15';
	});
	btlEightH2.addEventListener('click', () => {
		const btlDayCartEightClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		btlDayCartEight.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartEight.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartEightClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartEight.style.display = 'none';
			}, 1500);
			btlDayCartEight.style.transform = 'translateY(200vh)';
		});

		btlDayCartEight.style.zIndex = '15';
	});
	btlNineH2.addEventListener('click', () => {
		const btlDayCartNineClose = document.querySelector('.clientsname .balmuzdayapps-arrow');
		btlDayCartNine.style.display = 'block';
		// balmuzDayCartFirst.style.top = '-200vh';
		setTimeout(() => {
			btlDayCartNine.style.transform = 'translateY(-100vh)';
		}, 500);
		btlDayCartNineClose.addEventListener('click', () => {
			setTimeout(() => {
				btlDayCartNine.style.display = 'none';
			}, 1500);
			btlDayCartNine.style.transform = 'translateY(200vh)';
		});

		btlDayCartNine.style.zIndex = '15';
	});

	function closeApps() {

		const allApps = document.querySelectorAll('.balmuzdayapps');
		closeAppsBtn.forEach(element => {
			element.addEventListener('click', () => {
				setTimeout(() => {
					allApps.forEach(item => {
						item.style.display = 'none';
					});
				}, 500);
				allApps.forEach(item => {
					item.style.transform = 'translateY(200vh)';
				})
			});
		});

	}

	closeApps();

	// поднятие карточки

	// slyder



	// slyder
});

