//导航
//手机 声学 配件
$('.meizu_header_nav>a').hover(function () {
    var oClass = $(this).attr('data');
    $('header').addClass('header_hbg');//a hover header background to #fff
    $('.nav_out a').addClass('a_color');// a hover all a in nav color to gray
    $(this).addClass('active');// a hover only a color to blue
    $('.' + oClass).slideDown();
    $('.' + oClass).hover(function () {
        var index = $(this).index();
        $('.meizu_header_nav>a').eq(index - 1).addClass('active');
        $('header').addClass('header_hbg');
        $('.nav_out a').addClass('a_color');
        $(this).addClass('show');
        //给子导航添加透明度
        $('.subnav li').hover(function(){
            $(this).siblings().css('opacity','0.3')
        },function(){
            $(this).siblings().css('opacity','1')
        })
    }, function () {
        var index = $(this).index();
        $('.meizu_header_nav>a').eq(index - 1).removeClass('active');

        $('.nav_out a').removeClass('a_color');
        $('header').removeClass('header_hbg');
        $(this).removeClass('show');
        $('.subnav span').removeClass('op_span');
    })
}, function () {
    var oClass = $(this).attr('data');
    $('header').removeClass('header_hbg');

    $('.nav_out a').removeClass('a_color');
    $(this).removeClass('active');
    $('.' + oClass).hide()
})
//下载
$('.meizu_header_nav_down>a').hover(function () {
    $(this).addClass('active');
    $('.subnav_xz').slideDown();
    $('header').addClass('header_hbg');
    $('.nav_out a').addClass('a_color');
    $('.subnav_xz').hover(function () {
        $('.meizu_header_nav_down>a').addClass('active')
    $('header').addClass('header_hbg');
    $('.nav_out a').addClass('a_color');
        $(this).addClass('xz_show');
    }, function () {
        $('.meizu_header_nav_down>a').removeClass('active')
        $('header').removeClass('header_hbg');
        $('.nav_out a').removeClass('a_color');
        $(this).removeClass('xz_show');
    })
}, function () {
    $(this).removeClass('active');
    $('header').removeClass('header_hbg');
    $('.nav_out a').removeClass('a_color');
    $('.subnav_xz').hide()
})
//footer 
$('.ii-subscribe-img ').hover(function(){
    var index=$('.ii-subscribe-img').index(this);
    $('#ii-subscribe a img').eq(index).addClass('ewm_show')
},function(){
    var index=$('.ii-subscribe-img').index(this);
    $('#ii-subscribe a img').eq(index).removeClass('ewm_show')
})