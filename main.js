var currentSlide = 0

setInterval(function () {

    currentSlide = currentSlide + 1
    var vwUnit = -currentSlide * 100
    var leftPosition = vwUnit + 'vw'

    $('.holder').css('left', leftPosition)

}, 3000)

