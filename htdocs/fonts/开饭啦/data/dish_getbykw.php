<?php
//main页 根据关键词进行搜索

header("Content-Type:application/json");

@$kw = $_REQUEST['kw'];
$output = [];

if(empty($kw))
{
    echo '[]';
    return;
}

$conn = mysqli_connect('127.0.0.1','root','root','kaifanla');
//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
$sql = 'SET NAMES UTF8';
mysqli_query($conn,$sql);

$sql = "SELECT did,name,material,img_sm,price FROM kf_dish WHERE name LIKE '%$kw%' OR material LIKE '%$kw%'";
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