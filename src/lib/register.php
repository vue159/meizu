<?php
    // 注册的业务逻辑
    // 1. 连接数据库
    // 2. 接收前端传入的内容
    // 3. 查找前端给予的用户名在数据库中是否存在
    // 如果存在 注册失败
    // 不存在 插入一条数据 注册成功
    include('conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $sql = "select * from users where username='$username'";
    // echo $sql;
    $result = $mysqli->query($sql);
    // var_dump($result);
    // echo $result->num_rows;
    if($result->num_rows>0){
        die('用户名已存在');
    }
    
    $insertSql = "insert into users(username,password)values('$username','$password')";
    $res = $mysqli->query($insertSql);
    // var_dump($res);
    if($res){
        echo '1';
    }

    $mysqli->close();  //关闭连接
?>