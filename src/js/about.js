// 请求头部到about
$.ajax({
    type: "get",
    url: "header.html",
    success: function (data) {
        var result = $(data);
        $('header').html(result);
    }
});
//请求footer到about
$.ajax({
    type: "get",
    url: "footer.html",
    success: function (data) {
        var result = $(data);
        $('footer').html(result);
    }
});
//tab
var aboutImg=$('.about-banner-img')
var aboutImgs=['../images/98abc838-4433-4e9c-af35-dc6743f922ad.webp','../images/8880a7ab-b18e-49c3-9a8e-247951205d01.webp','../images/7222840b-4940-4b92-9eeb-cd300c32c639.webp','../images/1a65e11f-29d2-447d-b3c2-c833137b7fbb.webp']
$('.about-tabs__item').on('click',function(){
    var index=$('.about-tabs__item').index(this);
    $('.about-tabs__item').removeClass('about-active');
    console.log(aboutImgs[index])
    aboutImg.attr('src',aboutImgs[index])
    $(this).addClass('about-active');
    $('.about-panels__item').removeClass('about-show');
    $('.about-panels__item').eq(index).addClass('about-show');
    if(index!=3){
        $('.address-container').css('display','none')
    }else{
        $('.address-container').css('display','block')
    }
})