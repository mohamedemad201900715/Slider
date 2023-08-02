(function createSlider() {
    const slider = document.querySelector('.slider');
    const slides = slider.getElementsByTagName('img');
    const right = document.querySelector('.arrow-right')
    const left = document.querySelector('.arrow-left')
    const sliderBottom = document.querySelector(".slides-bottom").getElementsByTagName("div");

    let currentIndex = 0;

    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        sliderBottom[i].classList.remove('active');
      }
      sliderBottom[currentIndex].classList.add('active');
      slides[index].style.display = 'block';
    }
    right.onclick = function (){
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex)
    }
    left.onclick = function (){
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
      
    }

        showSlide(currentIndex);

      })();
