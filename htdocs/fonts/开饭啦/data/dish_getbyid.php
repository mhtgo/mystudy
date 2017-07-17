<?php
//detail页面 根据id获取详情
//
header("Content-Type:application/json");

@$id = $_REQUEST['id'];
$output = [];

if(empty($id))
{
    echo '[]';
    return;
}

$conn = mysqli_connect('127.0.0.1','root','root','kaifanla');
//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
$sql = 'SET NAMES UTF8';
mysqli_query($conn,$sql);

$sql = "SELECT did,name,detail,material,img_lg,price FROM kf_dish WHERE did=$id";
$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($result);
if(empty($row))
{
    echo '[]';
}
else
{
    $output[] = $row;
    echo json_encode($output);

}
?>