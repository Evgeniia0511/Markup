
$(document).ready(function(){
  $("#owl-demo").owlCarousel({
      pagination:true,
      navigation : true,
      autoPlay: 4000, 
      mouseDrag: true,
      singleItem: true,
      transitionStyle: "fade" 
  });
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
  $(".item-wrapper .item-info").responsiveEqualHeightGrid();
  $(".mobile_menu_btn").on("click",function(event){
        event.preventDefault();
        $(".mobile_wrap").addClass("open").addClass("anim");
    });

    $(".mobile_wrap").on("click",function(event){
        if (!$(event.target).closest(".mobile_container").length) {
            $(".mobile_wrap").removeClass("anim");
            setTimeout(function(){$(".mobile_wrap").removeClass("open");},400)
        }
    });
    $(".mobile_close_btn").on("click",function(event){
        event.preventDefault();
        $(".mobile_wrap").removeClass("anim")
        setTimeout(function(){$(".mobile_wrap").removeClass("open");},400)
    });

	$('.header-bottom').addClass('original').clone().insertAfter('.header-bottom').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}
 $("#phone").mask("+38 (999) 999-99-99");
  var modalBody = $('#myModal');
  modalBody.find(".submit").on('click',function(){ sendSubmit(modalBody); });
});
  function sendSubmit(el){
       var err = validation(el);     

     if(err==0){
       el.find(".error").hide();
     } else {
       el.find(".error").show();
     }
 } 
function validation(el) {
   
   var err = 0;
     el.find(".valid_inp").each(function (){
     if($(this).val().length < 3){
       $(this).addClass("error");
       err++;
     } else $(this).removeClass("error");
     });
     el.find(".valid_email").each(function (){
     if($(this).val().length < 5){
       $(this).addClass("error");
       err++;
     } else {
            var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
            if($(this).val().search(pattern) == 0){
        $(this).removeClass("error");
      } else {
            $(this).addClass("error");
            err++;
      }
     }
     });
   
   return err;

 }