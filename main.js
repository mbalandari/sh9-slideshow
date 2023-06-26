var currentSlide = 0

var nextSlide = function () {
    currentSlide = currentSlide + 1
    var leftPosition = (-currentSlide * 100) + 'vw'
    $('.holder').css('left', leftPosition)
}

var prevSlide = function () {
    currentSlide = currentSlide - 1
    var leftPosition = (-currentSlide * 100) + 'vw'
    $('.holder').css('left', leftPosition)
}

setInterval(function () {

    nextSlide()

}, 3000)

