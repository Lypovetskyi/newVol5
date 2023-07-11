document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let prevButton = document.querySelector(".prev-button");
    let nextButton = document.querySelector(".next-button");
    let nextButton2 = document.querySelector(".next-button-2");
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides[currentSlideIndex].classList.remove("active");
        slides[index].classList.add("active");
        currentSlideIndex = index;
    }

    function showNextSlide() {
        let nextSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(nextSlideIndex);
    }

    function showPreviousSlide() {
        let prevSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(prevSlideIndex);
    }

    prevButton.addEventListener("click", function() {
        showPreviousSlide();
        prevButton.classList.add("red");
        nextButton.classList.remove("red");
        nextButton2.classList.remove("red");
    });

    nextButton.addEventListener("click", function() {
        showNextSlide();
        prevButton.classList.remove("red");
        nextButton.classList.add("red");
        nextButton2.classList.remove("red");
    });

    nextButton2.addEventListener("click", function() {
        showNextSlide();
        prevButton.classList.remove("red");
        nextButton.classList.remove("red");
        nextButton2.classList.add("red");
    });

});
