function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let buttonNext = document.querySelector('.carousel__arrow_right');
  let buttonBack = document.querySelector('.carousel__arrow_left');
  let elem = document.querySelector('[data-carousel-holder]');
  let currentSlideNumber = 0;
  let slidesAmount = 4;
  update()
  elem.onclick = ({target}) => {
    if(target.closest('.carousel__arrow_right')){
      next()
    }
    if(target.closest('.carousel__arrow_left')){
      back()
    }
  }
  function next() {
    currentSlideNumber++;
    update()
  }
  function back() {
    currentSlideNumber--;
    update()
  }
  function update() {
    let slideWidth = -carouselInner.offsetWidth * currentSlideNumber;
    carouselInner.style.transform = `translateX(${slideWidth}px)`;
    if (currentSlideNumber == slidesAmount - 1) {
      buttonNext.style.display = 'none'
    } else {
      buttonNext.style.display = ''
    }
    if (currentSlideNumber == 0) {
      buttonBack.style.display = 'none'
    } else if (currentSlideNumber > 0){
      buttonBack.style.display = ''
    }
  }
}

