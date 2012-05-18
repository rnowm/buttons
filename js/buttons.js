$(document).ready(function() {
	
	$.each($('.button'), function() {           
        $(this).wrapInner('<i></i>').wrap('<div class="' + $(this).attr('class') + '"><span></span></div>');
    });

    $('.button').hover(function() {  
        $(this).addClass('over'); 
    }, function () {
        $(this).removeClass('over'); 
    });
    
    $('.button').mousedown(function() {  
        $(this).addClass('pressed'); 
    }).mouseleave(function(){
        $(this).removeClass('pressed');
    });
    
});
