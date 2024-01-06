$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    
    $(window).on('scroll load', function(){
    
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        
        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
        
        $('section').each(function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            
            if(top >= offset && top < height + offset){
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });

});
