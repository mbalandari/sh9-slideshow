var currentSlide = 0
var totalSlides = $('.holder div').length

var moveSlide = function (slide) {
    var leftPosition = (-slide * 100) + 'vw'
    $('.holder').css('left', leftPosition)

    var slideNum = slide + 1
    $('.steps').text(slideNum + ' / ' + totalSlides)
}

var nextSlide = function () {
    currentSlide = currentSlide + 1
    if (currentSlide >= totalSlides) {
        currentSlide = 0
    }

    moveSlide(currentSlide)
}

var prevSlide = function () {
    currentSlide = currentSlide - 1
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1
    }

    moveSlide(currentSlide)
}

var autoSlide = setInterval(function () {

    nextSlide()

}, 3000)

$('.next').on('click', function () {
    clearInterval(autoSlide)
    nextSlide()
})

$('.prev').on('click', function () {
    clearInterval(autoSlide)
    prevSlide()
})

var slideNum = currentSlide + 1
$('.steps').text(slideNum + ' / ' + totalSlides)

$('body').on('keydown', function (event) {
    var keyCode = event.keyCode
    if (keyCode == 37) {
        clearInterval(autoSlide)
        prevSlide()
    }
    else if (keyCode == 39) {
        clearInterval(autoSlide)
        nextSlide()
    }
})