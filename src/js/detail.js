setTimeout($('header').css('margin-top','-82px'),800)
var scrolling=false;
$(window).scroll(function(){
    if($(window).scrollTop()<=0){
        $('header').css('margin-top','0px')
    }
})