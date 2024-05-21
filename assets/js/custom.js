
// var productImg = $('.product_single img');
// productImg.on('mousemove', function(event)
// {
//     var pre = $('#preview');
//     var posX = event.offsetX;
//     var posY = event.offsetY;
//     pre.css(
//         {
//             'background-image': "url(productImg.attr('src')",
//              'visibility': 'visible',
//              'background-position': (-posX*2.5)+"px "+(-posY*5.5)+"px",
//         });
//         console.log(productImg.attr('src'))
// })














$('.productList .product_single').on('click', function()
{
    var productsrc = $(this).children('img').attr('src').replace('_p', '_po').replace('.png', '.jpg');
    var productsrc2 = $(this).children('img').attr('src');

    $('.productBG img').attr('src', productsrc);
    $('.liveproduct').attr('src', productsrc2);
    console.log(productsrc , productsrc2);
})




// interactive rating system 
$(document).ready(function()

{
    
    var isMouseDown = false;
    var currentRating = 0;
    var totalRating = 10;
  
    $('.bar-single-inner').each(function() {
      var barInner = $(this);
      var barFills = barInner.find('.bar-fill');
      var totalRatingDisplay = barInner.find('.total-rating');
  
      barFills.mousedown(function() {
        isMouseDown = true;
        $(this).addClass('filled');
        currentRating = $(this).index() + 1;
        updateTotalRating();
      });
  
      barFills.mouseover(function() {
        if (isMouseDown) {
          $(this).addClass('filled');
          var newRating = $(this).index() + 1;
          if (newRating > currentRating) {
            currentRating = newRating;
            updateTotalRating();
          }
        } else {
          $(this).addClass('filled-hover');
          $(this).prevAll('.bar-fill').addClass('filled-hover');
        }
      }).mouseout(function() {
        $(this).removeClass('filled-hover');
        $(this).prevAll('.bar-fill').removeClass('filled-hover');
      });
  
      barInner.click(function(event) {
        var clickedIndex = $(event.target).index();
        currentRating = clickedIndex + 1;
        barFills.removeClass('filled');
        barFills.removeClass('filled-hover');
        barFills.filter(':lt(' + currentRating + ')').addClass('filled');
        updateTotalRating();
      });
  
      function updateTotalRating() {
        var totalRatings = 0;
        var totalFilled = 0;
      
        $('.bar-single-inner').each(function() {
          var filled = $(this).find('.filled').length;
          totalRatings += filled;
          totalFilled += filled > 0 ? 1 : 0;
        });
        totalRatingDisplay.text(currentRating + '/' + totalRating);
        
      }
      
    });
  
    $(document).mouseup(function() {
      isMouseDown = false;
    });
  });

$('#sub').on('click', function()
{
    window.location = 'thankyou.html';
})

