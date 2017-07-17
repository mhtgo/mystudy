<?php
//main页 分页查询

header("Content-Type:application/json");

@$start = $_REQUEST['start'];
$count = 5;
$output = [];

if(empty($start))
{
    $start = 0;
}

$conn = mysqli_connect('127.0.0.1','root','root','kaifanla');
//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
$sql = 'SET NAMES UTF8';
mysqli_query($conn,$sql);
$sql = "SELECT did,name,price,material,img_sm FROM kf_dish LIMIT $start,$count";
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