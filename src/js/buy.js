var shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop);
    var idList = shop.map(elm => elm.id).join();
    $.ajax({
        type: "get",
        url: "../lib/shop.php",
        data: {
            "idList": idList
        },
        dataType: "json",
        success: function(response) {
            var template = "";
            response.forEach(function(elm) {
                // console.log(elm);
                var pic = JSON.parse(elm.pic);
                var arr = shop.filter((val, i) => {
                    return val.id === elm.id;
                });
                // console.log(arr[0].num)
                template = `
                    <li>
                        <input type="checkbox" class="sp-check">
                        <img src="${pic[0].src}"  class="sp-img">
                        <h3 class="sp-title">${elm.title}</h3>
                        <div class="dingdan">
                            <div class="sp-cont clear">
                                <p class="sp-content">${elm.details}</p>
                                <p class="sp-num">数量：<input type="number"value="${arr[0].num}" disabled checked></p>
                                <p class="sp-pri"><i>单价：￥</i>${elm.price}</p>
                                <p class="sp-pri-all">总价：￥<i></i></p>
                            </div>
                        </div>
                        <div class="del">删除</div>
                    </li>
               
                `;

                $('.buy-login-car').append(template);
                $('.sp-pri-all i').html((arr[0].num * elm.price).toFixed(2))
            });
            // $('.sp-allmoney').html($('.sp-pri-all')[checked])
            // console.log($('.sp-pri-all')[checked])
            $('.del').on('click', function() {
                var index = $('.del').index(this)
                console.log(shop[index])

                shop.splice(index, 1) //从索引j开始，向后删除1个数组内的元素
                cookie.set('shop', JSON.stringify(shop), 1);
                window.location.reload()
                console.log(shop)
                $('.buy-login-car').remove(this.parentNode);

            })
        }
    });
}