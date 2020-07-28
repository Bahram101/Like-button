$(function(){
    // $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('.like-button').on('click', function(e){

        var likeCounter = $(this).find('.like-counter');
        var likes = parseInt(likeCounter.text());
        if($(this).hasClass('liked')){
            likeCounter.text(likes-1);
            $(this).addClass('btn-light').removeClass('btn-success');
            $(this).css('animation', 'like-scale 1s ease-in-out');

        }else{
            $(this).css('animation', 'like-scale 1s ease-in-out');
            likeCounter.text(likes+1);
            $(this).addClass('btn-success').removeClass('btn-light');
        }
        $(this).toggleClass('liked');


    });
});