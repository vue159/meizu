var shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop);
    // console.log(shop)
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
                console.log(elm);
                var pic = JSON.parse(elm.pic);
                var arr = shop.filter((val, i) => {
                    return val.id === elm.id;
                });
                template = `
                
                    <li>
                        <input type="checkbox" class="sp-check">
                        <img src="${pic[0].src}"  class="sp-img">
                        <h3 class="sp-title">${elm.title}</h3>
                        <div class="dingdan">
                            <div class="sp-cont clear">
                                <p class="sp-content">${elm.details}</p>
                                <p class="sp-pri"><i>单价：￥</i>${elm.price}</p>
                                <p class="sp-pri-all">总价：￥${(arr[0].num*elm.price).toFixed(2)}</p>
                                <p class="sp-num">数量：<input type="number"value="${arr[0].num}" min="1" max="${elm.num}"></p>
                            </div>
                        </div>
                        <div class="del">删除</div>
                    </li>
               
                `;
                $('.buy-login-car').append(template);
            });
        }
    });
}