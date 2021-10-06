function hamburger() {  
	const hamburger = document.querySelector('.header__hamburger'),
		  menu = document.querySelector('.header__nav'),
		  close = document.querySelector('.header__close'),
		  body = document.querySelector('body');
      
	hamburger.addEventListener('click', () => {
		menu.classList.add('header__nav_active');
		body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
		body.style.overflow = 'scroll';
	});
}

hamburger();

$('.slider__wrapper').slick({
    autoplay: true,
    arrows: false,
    centerPadding: '20px',
    slidesToShow: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
});
