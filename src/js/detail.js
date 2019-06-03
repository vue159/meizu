//头部的向上隐藏
console.log('ok')
$('header').css('margin-top', '-82px')
$('body').mousewheel(function(event, delta) {
    var dir = delta > 0 ? 'Up' : 'Down';
    var scroll = $(window).scrollTop();
    if (dir == 'Up' && scroll == 0) {
        $('header').css('margin-top', '0px')
    }
});
var id = location.search.split('=')[1];
$.ajax({
    type: "get",
    url: "../lib/getdetail.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(response) {
        console.log(response)
        var pic = JSON.parse(response.pic)
        var template = `
            <main class="detail-main">
            <!-- 第一个小导航 -->
            <div class="detail-main-first-nav">
                <div id="wrapper">
                    <ul class="detail-main-first-nav-list clear">
                        <li class="list-iteam">
                            <a href="javascript:;">概述</a>
                        </li>
                        <li class="list-iteam">
                            <a href="javascript:;">设计</a>
                        </li>
                        <li class="list-iteam">
                            <a href="javascript:;">性能</a>
                        </li>
                        <li class="list-iteam">
                            <a href="javascript:;">相机</a>
                        </li>
                        <li class="list-iteam">
                            <a href="javascript:;">参数</a>
                        </li>
                        <li class="list-iteam">
                            <a href="javascript:;">常见问题</a>
                        </li>
                    </ul>
                    <div class="nav-name">魅族 16s</div>
                </div>
            </div>
            <!-- 选购 -->
            <div class="detail-main-choise">
                <div id="wrapper">
                    <!-- 选购-图片 -->
                    <div class="details-main-choise-left left">
                        <div class="preview-booth">
                            <a href="javascript:;">
                                <img data-original="${pic[0].src}" src="${pic[0].src}" class="lazy-img change-img" />
                            </a>
                        </div>
                        <ul class="preview-thumb clear">
                            <li class="main-box-shadow">
                                <img data-original="${pic[0].src}" src="${pic[0].src}"
                                    class="lazy-img" />
                            </li>
                            <li>
                                <img data-original="../images/Cgbj0Vy9cy-AQHw_AAItbvBkEag325.png120x120.jpg"
                                    class="lazy-img" src="../images/Cgbj0Vy9cy-AQHw_AAItbvBkEag325.png120x120.jpg"
                                    class="lazy-img" />
                            </li>
                            <li>
                                <img data-original="../images/Cgbj0Fy9cyiAapmYAAPdKnA-Nq4341.png120x120.jpg"
                                    class="lazy-img" src="../images/Cgbj0Fy9cyiAapmYAAPdKnA-Nq4341.png120x120.jpg"
                                    class="lazy-img"/>
                            </li>
                            <li>
                                <img data-original="../images/Cgbj0Fy9cyCAFTiJAALUkAwtnM0798.png120x120.jpg"
                                    class="lazy-img" src="../images/Cgbj0Fy9cyCAFTiJAALUkAwtnM0798.png120x120.jpg"
                                    class="lazy-img"/>
                            </li>
                        </ul>
    
                    </div>
    
                    <!-- 选购-详情 -->
                    <div class="details-main-choise-right right">
                        <!-- 选购头部 -->
                        <div class="property-hd">
                            <h1>${response.title}</h1>
                            <p class="mod-info activer">${response.details}</p>
                        </div>
                        <!-- 商品详情价格 -->
                        <div class="property-sell">
                            <div class="mod-price">
                                <small>¥</small>
                                <span id="J_price" class="vm-money">${response.price}</span>
                            </div>
                            <dl class="property-sell-morebuy clear" id="J_prodMorebuy">
                                <dt class="vm-entry">
                                    <span>加价购</span>
                                </dt>
                                <dd>
                                    <span>
                                        另加<em id="J_moreBuyStart">19</em>元起，即可换购超值商品
                                    </span>
                                    <a class="vm-more" data-mtype="store_de_coupon_more"
                                        data-bh="click_store_de_coupon_more" id="J_moreBuyEnter" href="#">立即加购 &gt;</a>
                                </dd>
                            </dl>
                        </div>
                        <!-- 支付方式-地区选择 -->
                        <div class="property-service">
                            <dl class="property-service-item clearfix">
                                <dt class="vm-metatit-zc">支持</dt>
                                <dd class="mod-bd" id="J_prodService">
                                    <span><i class="have">✔</i>花呗分期</span>
                                    <span><i class="have">✔</i>顺丰发货</span>
                                    <span><i class="have">✔</i>7天无理由退货</span>
                                </dd>
                            </dl>
                            <dl class="property-service-suda clear">
                                <dt class="vm-metatit">配送服务</dt>
                                <div class="mod-site clear">
                                    <div class="site-selector">
                                        <div class="text">浙江省 杭州市 江干区 九堡镇
                                            <i class="sanjiao"></i>
                                        </div>
                                    </div>
                                    <!-- 选择地区 -->
                                    <div class="city-content clear">
                                        <div class="JD-stock">
                                            <!-- 上面的地区显示 -->
                                            <div class="mt">
                                                <ul class="tab">
                                                    <li data-index="0" data-widget="tab-item">
                                                        <a href="#none" title="天津" class="city-active">
                                                            <em>浙江</em>
                                                            <i></i>
                                                        </a>
                                                    </li>
                                                    <li data-index="1" data-widget="tab-item">
                                                        <a href="#none" title="天津">
                                                            <em>杭州市</em>
                                                            <i></i>
                                                        </a>
                                                    </li>
                                                    <li data-index="2" data-widget="tab-item">
                                                        <a href="#none" title="天津">
                                                            <em>江干区</em>
                                                            <i></i>
                                                        </a>
                                                    </li>
                                                    <li data-index="3" data-widget="tab-item">
                                                        <a href="#none" title="天津">
                                                            <em>九堡镇</em>
                                                            <i></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- 占位 -->
                                            <div class="zw height-1"></div>
                                            <!-- 地区选择 -->
                                            <!-- 省份 -->
                                            <div class="mc clear main-show" data-area="0" data-widget="tab-content"
                                                id="site-province-item">
                                                <ul class="area-list clear">
                                                    <li><a href="#none" data-value="2911">北京</a></li>
                                                    <li><a href="#none" data-value="14848">天津</a></li>
                                                    <li><a href="#none" data-value="7450">吉林</a></li>
                                                    <li><a href="#none" data-value="8452">辽宁</a></li>
                                                    <li><a href="#none" data-value="16860">浙江</a></li>
                                                    <li><a href="#none" data-value="1">福建</a></li>
                                                    <li><a href="#none" data-value="16624">上海</a></li>
                                                    <li><a href="#none" data-value="18482">广东</a></li>
                                                    <li><a href="#none" data-value="21612">海南</a></li>
                                                    <li><a href="#none" data-value="41143">湖北</a></li>
                                                    <li><a href="#none" data-value="42634">湖南</a></li>
                                                    <li><a href="#none" data-value="36793">安徽</a></li>
                                                    <li><a href="#none" data-value="15121">江苏</a></li>
                                                    <li><a href="#none" data-value="1214">江西</a></li>
                                                    <li><a href="#none" data-value="27304">四川</a></li>
                                                    <li><a href="#none" data-value="35714">重庆</a></li>
                                                    <li><a href="#none" data-value="34187">云南</a></li>
                                                    <li><a href="#none" data-value="23366">贵州</a></li>
                                                    <li><a href="#none" data-value="20238">广西</a></li>
                                                    <li><a href="#none" data-value="32166">西藏</a></li>
                                                    <li><a href="#none" data-value="11241">山东</a></li>
                                                    <li><a href="#none" data-value="38498">河南</a></li>
                                                    <li><a href="#none" data-value="21894">甘肃</a></li>
                                                    <li><a href="#none" data-value="3251">河北</a></li>
                                                    <li><a href="#none" data-value="10088">内蒙古</a></li>
                                                    <li><a href="#none" data-value="25024">宁夏</a></li>
                                                    <li><a href="#none" data-value="25305">青海</a></li>
                                                    <li><a href="#none" data-value="13289">山西</a></li>
                                                    <li><a href="#none" data-value="25761">陕西</a></li>
                                                    <li><a href="#none" data-value="32939">新疆</a></li>
                                                    <li><a href="#none" data-value="5700">黑龙江</a></li>
                                                </ul>
                                            </div>
                                            <!-- 市-->
                                            <div class="mc clear" data-area="1" data-widget="tab-content"
                                                id="site-city-item">
                                                <ul class="area-list clear">
                                                    <li><a href="#none" data-value="16861">杭州市</a></li>
                                                    <li><a href="#none" data-value="17072">湖州市</a></li>
                                                    <li><a href="#none" data-value="17146">嘉兴市</a></li>
                                                    <li><a href="#none" data-value="17227">衢州市</a></li>
                                                    <li><a href="#none" data-value="17343">丽水市</a></li>
                                                    <li><a href="#none" data-value="17535">金华市</a></li>
                                                    <li><a href="#none" data-value="17697">宁波市</a></li>
                                                    <li><a href="#none" data-value="17861">舟山市</a></li>
                                                    <li><a href="#none" data-value="17909">绍兴市</a></li>
                                                    <li><a href="#none" data-value="18035">台州市</a></li>
                                                    <li><a href="#none" data-value="18179">温州市</a></li>
                                                </ul>
                                            </div>
                                            <!-- 区  -->
                                            <div class="mc clear" data-area="2" data-widget="tab-content"
                                                id="site-area-item">
                                                <ul class="area-list clear">
                                                    <li><a href="#none" data-value="16862">上城区</a></li>
                                                    <li><a href="#none" data-value="16869">下城区</a></li>
                                                    <li><a href="#none" data-value="16878">江干区</a></li>
                                                    <li><a href="#none" data-value="16889">拱墅区</a></li>
                                                    <li><a href="#none" data-value="16900">西湖区</a></li>
                                                    <li><a href="#none" data-value="16913">滨江区</a></li>
                                                    <li><a href="#none" data-value="16917">萧山区</a></li>
                                                    <li><a href="#none" data-value="16944">余杭区</a></li>
                                                    <li><a href="#none" data-value="16965">桐庐县</a></li>
                                                    <li><a href="#none" data-value="16979">淳安县</a></li>
                                                    <li><a href="#none" data-value="17003">建德市</a></li>
                                                    <li><a href="#none" data-value="17020">富阳区</a></li>
                                                    <li><a href="#none" data-value="17045">临安市</a></li>
                                                </ul>
                                            </div>
                                            <!-- 街道 -->
                                            <div class="mc" data-area="3" data-widget="tab-content" id="site-town-item">
                                                <ul class="area-list">
                                                    <li><a href="#none" data-value="16879">凯旋街道</a></li>
                                                    <li><a href="#none" data-value="16880">采荷街道</a></li>
                                                    <li><a href="#none" data-value="16881">闸弄口街道</a></li>
                                                    <li><a href="#none" data-value="16882">四季青街道</a></li>
                                                    <li><a href="#none" data-value="16883">白杨街道</a></li>
                                                    <li><a href="#none" data-value="16884">下沙街道</a></li>
                                                    <li><a href="#none" data-value="16885">彭埠镇</a></li>
                                                    <li><a href="#none" data-value="16886">笕桥镇</a></li>
                                                    <li><a href="#none" data-value="16887">丁桥镇</a></li>
                                                    <li><a href="#none" data-value="16888">九堡镇</a></li>
                                                    <li><a href="#none" data-value="0">其他</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </div>
                        <!-- buy -->
                        <div class="property-buy">
                            <p class="vm-message" id="J_message">
                            </p>
                            <dl class="property-buy-quantity">
                                <dt class="vm-metatit">数量</dt>
                                <dd id="clear" class="num-choise">
                                    <div class="mod-control">
                                        <a title="减少" href="javascript:;" class="vm-minus disabled">-</a>
                                        <input type="text" value="1" id="J_quantity" data-max="5">
                                        <a title="增加" href="javascript:;" class="vm-plus">+</a>
                                    </div>
                                </dd>
                            </dl>
                            <div class="property-buy-action">
    
                                <a data-mtype="store_de_buy" data-bh="click_store_de_buy" href="buy.html"
                                    id="J_btnBuy" class="btn btn-primary btn-lg mr20"
                                    style="display: inline-block;">立即购买</a>
                                
                                <span class="vm-service" id="J_panicBuyingWrap"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <script>
        
        //main-选购-left-tabs
        var main_choise_img = $('.preview-booth img')[0];
        var main_choise_url = ['${pic[0].src}', '../images/Cgbj0Vy9cy-AQHw_AAItbvBkEag325.png680x680.jpg', '../images/Cgbj0Fy9cyiAapmYAAPdKnA-Nq4341.png680x680.jpg', '../images/Cgbj0Fy9cyCAFTiJAALUkAwtnM0798.png680x680.jpg']
        $('.preview-thumb li').on('click', function() {
                var index = $('.preview-thumb li').index(this);
                $('.preview-thumb li').removeClass('main-box-shadow');
                $(this).addClass('main-box-shadow');
                main_choise_img.src = main_choise_url[index];
            })
          
            var numjia = $('.vm-plus');
            var numjian =$('.vm-minus')
            var shopnum=$('#J_quantity').val()
            
            console.log($('#J_quantity').val())
            numjia.on('click', function() {
                if($('#J_quantity').val()>=1){
             numjian.removeClass('disabled')
            } 
            if($('#J_quantity').val()<${response.num}){
                shopnum++;
                $('#J_quantity').val(shopnum)
                }else if($('#J_quantity').val()>=${response.num}){
                    numjia.addClass('disabled')
                }
            })
            numjian.on('click', function() {

                if($('#J_quantity').val()<=${response.num}){
             numjia.removeClass('disabled')
            } 
            if($('#J_quantity').val()>1){
                shopnum--;
                $('#J_quantity').val(shopnum)
                }else if($('#J_quantity').val()<=1){
                    numjian.addClass('disabled')
                }
            })
                            $('.site-selector .text').hover(function() {
                                $('.city-content').addClass('main-show');
                                $('.city-content .tab li').on('click', function() {
                                    var index = $('.city-content .tab li').index(this);
                                    // console.log(index)
                                    $('.city-content .tab li').find('a').removeClass('city-active')
                                    $(this).find('a').addClass('city-active');
                                    $('.zw').removeClass('height-1')
                                    $('.zw').css({
                                        'height': $('.mc').eq(index).height()
                                    })
                                    console.log($('.city-content').height())
                                    console.log($('.zw').height())
                                    $('.mc').removeClass('main-show');
                                    $('.mc').eq(index).addClass('main-show');
                            
                                })
                            }, function() {
                                $('.city-content').removeClass('main-show');
                            })
                            $('.city-content').hover(function() {
                                $('.city-content').addClass('main-show');
                            }, function() {
                                $('.city-content').removeClass('main-show');
                            })
                            $('.mc').last().find('a').on('click', function() {
                                    $('.site-selector .text').html('浙江省 杭州市 江干区' + ' ' + $(this).html() + '<i class="sanjiao"></i>')
                                    $('city-content').css('dislay', 'none!important')
                                })
                $('#J_btnBuy').on('click',function(){

                })

          </script>
`
        $('.main').append(template).find('#J_btnBuy').on('click', function() {
            console.log(this)
            addShopCar(response.id, response.price, $('#num').val());
        });


        function addShopCar(id, price, num) {
            var shop = cookie.get('shop'); //从cookie获取shop
            var product = {
                "id": id,
                "price": price,
                "num": num
            };

            if (shop) {
                shop = JSON.parse(shop); // cookie中如果有数据 这个数据是json字符串 转成对象

                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(function(elm, i) {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
                cookie.set('shop', JSON.stringify(shop), 1);
            } else {
                shop = [];
                shop.push(product);
                cookie.set('shop', JSON.stringify(shop), 1);
            }
        }
    }

});
$("img.lazy-img").lazyload({
    effect: "fadeIn",
    threshold: 200,
    placeholder: "../images/timg.gif"
});