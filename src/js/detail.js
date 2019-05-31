//头部的向上隐藏
$('header').css('margin-top', '-82px')
$('body').mousewheel(function (event, delta) {
    var dir = delta > 0 ? 'Up' : 'Down';
    var scroll = $(window).scrollTop();
    if (dir == 'Up'&&scroll==0) {
        $('header').css('margin-top', '0px')
    } 
});
//main-选购
    //main-选购-left-tabs
    var main_choise_img=$('.preview-booth img')[0];
    var main_choise_url=['../images/index/Cgbj0VzaXQqAMN2pAAa47vx50YU413.png','../images/Cgbj0Vy9cy-AQHw_AAItbvBkEag325.png680x680.jpg','../images/Cgbj0Fy9cyiAapmYAAPdKnA-Nq4341.png680x680.jpg','../images/Cgbj0Fy9cyCAFTiJAALUkAwtnM0798.png680x680.jpg']
    $('.preview-thumb li').on('click',function(){
        var index=$('.preview-thumb li').index(this);
        $('.preview-thumb li').removeClass('main-box-shadow');
        $(this).addClass('main-box-shadow');
        main_choise_img.src=main_choise_url[index];
    })