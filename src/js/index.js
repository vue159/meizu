$.ajax({
    type: "post",
    url: "../lib/images.php",
    dataType: "json",
    success: function(response) {
        console.log(response);
        var template = '';
        for (var i = 0; i < 2; i++) {
            var pic = JSON.parse(response[i].pic);
            console.log(pic[0].src)
            template = `
            <li class="big">
            <a href="detail.html?id=${response[i].id}" class="box-img" target="_blank">
            <img class="goods-img lazy-img" data-original="${pic[0].src}" src="${pic[0].src}">
            <span class="box-info">
            <span class="goods-name">${response[i].title}</span>
            <span class="goods-desc">${response[i].details}</span>
            <span class="goods-price">
            <i>￥</i>
            ${response[i].price}
            <em></em>
            </span>
            </span>
            <span class="product-sign red" data-color="red">新品</span>
            </a>
            </li>
            `;
            $('.index_main_3_phone').append(template);
        }
        for (var j = 2; j < 10; j++) {
            var pic = JSON.parse(response[j].pic);
            console.log(pic[0].src);
            template = `
            <li class="Phone${j+1}">
            <a class="box-img box-img-retina" href="detail.html?id=${response[j].id}" target="_blank">
                <img class="goods-img lazy-img smallphone" data-original="${pic[0].src}"  src="${pic[0].src}">
                <span class="box-info">
                    <span class="goods-name">${response[j].title}</span>
                <span class="goods-desc">${response[j].details}</span>
                <span class="goods-price">
                        <i>￥</i>
                        ${response[j].price}
                        <em></em>
                    </span>
                </span>
                <span class="product-sign blue" data-color="blue">领券</span>
            </a>
        </li>
            `
            $('.index_main_3_phone').append(template);
        }
    }

});