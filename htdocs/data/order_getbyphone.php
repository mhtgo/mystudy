<?php
//personal页 获取当前用户的订单信息

header("Content-Type:application/json");

@$phone = $_REQUEST['phone'];
$output = [];

if(empty($phone))
{
    echo '[]';
    return;
}

$conn = mysqli_connect('127.0.0.1','root','root','kaifanla');
//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
$sql = 'SET NAMES UTF8';
mysqli_query($conn,$sql);

$sql = "SELECT kf_order.oid,kf_order.user_name,kf_order.addr,kf_order.order_time,kf_dish.img_sm,kf_dish.did FROM kf_order,kf_dish WHERE kf_order.phone='$phone' AND kf_order.did=kf_dish.did";
$result = mysqli_query($conn,$sql);

while(true)
{
    $row = mysqli_fetch_assoc($result);
    if(!$row)
    {
        break;
    }
    $output[] = $row;
}

echo json_encode($output);
?>