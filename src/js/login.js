var reg = {
    'password': /^\w{6,}$/, //输入起码六位 的 密码，字母数字 下划线
    'phone': /^1[3-9]\d{9}$/, //验证手机号
}
var user = $('#user');
var psw = $('#passwrod')
    // console.log(user, psw)
user.on('keyup', function() {
    // console.log(reg[this.phone].test(this.value))
    // console.log(this.value)
    if (reg['phone'].test(this.value)) { //如果当前input的value值 符合username的正则内容则执行
        this.dataset.pass = "true";
    } else {
        this.dataset.pass = "false";
    }
})
psw.on('keyup', function() {
    // console.log(reg[this.phone].test(this.value))
    // console.log(this.value)
    if (reg['password'].test(this.value)) { //如果当前input的value值 符合username的正则内容则执行
        this.dataset.pass = "true";
    } else {
        this.dataset.pass = "false";
    }
})
$('.btn-login a').on('click', function() {
    // alert(0);
    check()
})

function check() {
    var pass = document.querySelectorAll('input[data-pass="true"]');
    if (pass.length == 2) {
        $.ajax({
            type: "get",
            url: "../lib/login.php",
            data: {
                'username': user.val(),
                'password': psw.val()
            },
            success: function(data) {
                if (data == 1) {
                    $('.btn-login a').attr('href', 'index.html')
                } else {
                    $('.tishi').html('帐号密码输入错误');
                    $('.tishi').css('color', 'red')
                }
            }
        });

    } else {
        $('.tishi').html('格式错误请重新输入');
        $('.tishi').css('color', 'red')
    }
}