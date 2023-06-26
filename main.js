var currentSlide = 0
var totalSlides = $('.holder div').length

var nextSlide = function () {
    currentSlide = currentSlide + 1
    var leftPosition = (-currentSlide * 100) + 'vw'
    $('.holder').css('left', leftPosition)

    var slideNum = currentSlide + 1
    $('.steps').text(slideNum + ' / ' + totalSlides)
}

var prevSlide = function () {
    currentSlide = currentSlide - 1
    var leftPosition = (-currentSlide * 100) + 'vw'
    $('.holder').css('left', leftPosition)

    var slideNum = currentSlide + 1
    $('.steps').text(slideNum + ' / ' + totalSlides)
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