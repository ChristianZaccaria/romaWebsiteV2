$(document).ready(function() {

  $('.ui.fluid.image').css('opacity', 0.7)

  $('.ui.fluid.image').hover(
    function(){
    $(this).stop().fadeTo('slow', 1)
    },
    function(){
    $(this).stop().fadeTo('slow', 0.6)
    })

  
  lightbox.option({
      'fadeDuration':1200,
      'imageFadeDuration':2400,
      'wrapAround': true
  })

    

})
