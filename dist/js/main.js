$(document).ready(function(){
    var slider = $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      speed: 600,
      appendArrows: false,
    });
    
    $('.slider-progress').each(function(i, el) {
      var sliderId = $(el).data('slider'),
          $slider = $('#' + sliderId),
          $progressInput = $(el).find('.slider-progress__input');
      
      $progressInput.attr('max', $slider[0].slick.slideCount - 1)
      
      $slider.on('afterChange', function(event, slick, currentSlide){
        $progressInput.val(currentSlide);
        console.log(currentSlide)
      });
      
      $($progressInput).mousedown(function() {
        $slider.slick('slickPause')
      });
    
      $($progressInput).mouseup(function() {
        $slider.slick('slickPlay')
      })
      
      $($progressInput).on('input', function() {
        $slider.slick('slickGoTo', $(this).val());
      })
    })
  })