<?php
  include(conn.php);
  
  $id= $_REQUEST['id'];
  $title= $_REQUEST['title'];
  $price= $_REQUEST['price'];
  $num= $_REQUEST['num'];
  $pic= $_REQUEST['pic'];
  $pic= $_REQUEST['details'];

  $sql = "select * from product where id=$id";

  $res = $mysqli->query($sql);

  if($res->num_rows>0){
      echo '{
          "id":"id",
          "title":"
      }';
  }else{
      echo '{"msg":"用户名可以使用","has":false,"status":200}';
  }

  $mysqli->close();
?>