<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
require('connect-db.php');
require('db-functions.php');
// $data = (int) $_SERVER['CONTENT_LENGTH']; 

// retrieve data from the request
$postdata = file_get_contents("php://input");

// // process data 
// // (this example simply extracts the data and restructures them back) 
$request = json_decode($postdata);
$receive = getAlertByName($request->user);

// // sent response (in json format) back to the front end
// echo $receive;

echo json_encode(['content'=>$receive]);

?>