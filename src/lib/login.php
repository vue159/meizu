<?php
    include('conn.php');

    // 登陆的业务逻辑
    // 1. 连接数据库
    // 2. 获取前端传过来的数据
    // 3. 在数据库查询数据
    // 4. 存在并且用户名密码都正确 登陆成功  否则 失败
    // 5. 如果成功 跳转到主页   如果失败 跳回登陆页

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $sql = "select * from users where username='$username' and password='$password'";
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        echo "1" ;
    }else{
        echo "0";
    }
    $mysqli->close();
?>