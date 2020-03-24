$( document ).ready(function() {
  
});


function checkScroll(){
    var startY = $('.navbar').height(); //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

var $animation_elements = $(".animation-element");
    var $window = $(window);
    
    $window.on("scroll", check_if_in_view);
    

    function check_if_in_view(){
        var window_height  = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function(){
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            if((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
                $element.addClass("in-view");
            }
            else{
                // $element.removeClass("in-view");
            }
        });
    }
    
    $window.on("scroll resize", check_if_in_view);
    //$window.on("scroll", move);
    //$window.on("scroll resize", move);
    $window.trigger("scroll");