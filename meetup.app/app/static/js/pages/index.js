document.onreadystatechange = function(){
	if(document.readyState === 'complete'){
		let dots = document.getElementsByClassName('squirrel-slider__slide__pictures__dots__item'),
		    dotsContainer = document.getElementById('dots'),
		    slides = document.getElementsByClassName('squirrel-slider__slide__pictures__images__item'),
		    loc = document.querySelector('#squirrelLocation'),
		    share = document.getElementById('share'),
		    dislike = document.getElementById('dislike'),
		    like = document.getElementById('like'),
		    slideIndex = 1;

		    showSlides(slideIndex);
		let status = false;


			function showSlides (n) {
			    if (n < 1) {
			        slideIndex = slides.length;
			    } else if (n > slides.length) {
			        slideIndex = 1;
			    }
			    for (let i = 0; i < slides.length; i++) {
			        slides[i].style.display = 'none';
			    }
			    for (let i = 0; i < dots.length; i++) {
			        dots[i].classList.remove('squirrel-slider__slide__pictures__dots__item_active');
			    }
			    slides[slideIndex - 1].style.display = 'block';
			    dots[slideIndex - 1].classList.add('squirrel-slider__slide__pictures__dots__item_active');
			}

			function plusSlides (n) {
			    showSlides(slideIndex += n);
			}
			function currentSlide (n) {
			    showSlides(slideIndex = n)
			}

			share.onclick = function() { 
				status = true;
			}

			dislike.onclick = function() { 
				status = true;
			}

			like.onclick = function() { 
				status = true;
			}

			loc.onclick = function(e) { 
				if(status == false) {
					let width = document.getElementById('squirrelLocation').offsetWidth;
					let x = e.pageX;
					if(x > width/2 && x - width/2 > (dots.length + 1) * 7 + (dots.length + 1) * 10) {
						plusSlides(1);
					}
					else if(x < width/2 && width/2 - x > (dots.length + 1) * 7 + (dots.length + 1) * 5) {
					  	plusSlides(-1);
					}
				}
			}

			dotsContainer.onclick = function (e) {
			    for (let i = 0; i < dots.length + 1; i++) {
			        if (e.target.classList.contains('squirrel-slider__slide__pictures__dots__item') && e.target == dots[i - 1]) {
			            currentSlide(i);
			        }
			    }
			}

			$(".squirrel-slider__slide__info").click(function() {
				$(".popup-event").css("display", "block");
			});
			$(".popup-event__header__close").click(function() {
				$(".popup-event").css("display", "none");
			});
	}
};