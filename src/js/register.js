var reg = {
    'password': /^\w{6,}$/, //输入起码六位 的 密码，字母数字 下划线
    'phone': /^1[3-9]\d{9}$/, //验证手机号
}
var user = $('#user');
var psw = $('#passwrod');
user.on('keyup', function() { //正则验证用户名
    if (reg['phone'].test(this.value)) { //如果当前input的value值 符合username的正则内容则执行
        this.dataset.pass = "true";
    } else {
        this.dataset.pass = "false";
    }
})
psw.on('keyup', function() { //正则验证密码
    if (reg['password'].test(this.value)) { //如果当前input的value值 符合username的正则内容则执行
        this.dataset.pass = "true";
    } else {
        this.dataset.pass = "false";
    }
})

$('.btn-register a').on('click', function() {
    check()
})
console.log($('.btn-register a'))

function check() {
    var pass = document.querySelectorAll('input[data-pass="true"]');
    if (pass.length == 2) {
        $.ajax({
            type: "get",
            url: "../lib/register.php",
            data: {
                'username': user.val(),
                'password': psw.val()
            },
            success: function(response) {
                console.log(response)
                if (response == 1) {
                    $('.btn-register a').attr('href', 'login.html')
                } else {
                    $('tishi').html('用户名已存在')
                }
            }
        });

    } else {
        $('.tishi').html('格式错误请重新输入');
        $('.tishi').css('color', 'red')
    }
}