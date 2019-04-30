<?php
  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
  // require('connect-db.php');
  // require('db-functions.php');
  session_start();
  // $data = (int) $_SERVER['CONTENT_LENGTH']; 

  // retrieve data from the request
//   $postdata = file_get_contents("php://input");

  // process data 
  // (this example simply extracts the data and restructures them back) 
//   $request = json_decode($postdata);

//   $data = [];
//   foreach ($request as $k => $v)
//   {
//     $data[0][$k] = $v;
//   }
//   $data[0]['status'] = 'fail';

  // sent response (in json format) back to the front end
//   $_SESSION['username'] = "hello";
$myArr = array($_SESSION['username'], "Mary", "Peter", "Sally");

$myJSON = json_encode($myArr);

echo $myJSON;
//   echo json_encode(['content'=>$data]);

  
//     $user = trim($_POST['username']);
//   //   if (!ctype_alnum($user))   // ctype_alnum() check if the values contain only alphanumeric data
//   //       reject('User Name');
//     if (isset($_POST['password']))
//     {
//         $pwd = trim($_POST['password']);
//       //   if (!ctype_alnum($pwd))
//       //     reject('');
//       //   else
//       //   {
//           $_SESSION['user'] = $user;
//           $_SESSION['pwd'] = $pwd;
//           // redirect the browser to another page using the header() function to specify the target URL
//       //   }
//     }
//     $start = time();
//     setcookie('start', $start, time()+3600);
//     $xml=simplexml_load_file("users.xml");
//   foreach($xml->children() as $registered){
//     if($user == $registered->username & $pwd == $registered->password){
//       // header("Location: localhost:4200");
//     }
//     else{
//       print "invalid";
//     }
//   }
?>