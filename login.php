<?php
  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
  // require('connect-db.php');
  // require('db-functions.php');
  session_start();
  // $data = (int) $_SERVER['CONTENT_LENGTH']; 

  // retrieve data from the request
  $postdata = file_get_contents("php://input");

  if ($postdata!=""){
    // process data 
    // (this example simply extracts the data and restructures them back) 
    $request = json_decode($postdata);

    $user = $request->user;
    $pass = $request->pass;

    // sent response (in json format) back to the front end
    $xml=simplexml_load_file("users.xml");
    $auth = false;
    foreach($xml->children() as $registered){
      if($user == $registered->username & $pass == $registered->password){
        echo '{"user":"'.$user.'", "auth":"1"}';
        $_SESSION['auth'] = 1;
        $_SESSION['user']=$user;
        $auth = true;
        break;
      }
    }
    if(!$auth) {
      //if wrong authentication details, output not authenticated
      echo '{"user":"'.$user.'", "auth":"0"}';
      $_SESSION['auth'] = 0;
      $_SESSION['user'] = 'none';
    }
  }
  else{
    echo '{"user":"'."lala".'", "auth":"'."0".'"}';
    // if($_SESSION['auth'] == 0) {
    //   echo '{"user":"none", "auth":"0"}'; 
    // } else {
    //   //if authenticated, output json
    //   echo '{"user":"'.$_SESSION['user'].'", "auth":"'.$_SESSION['auth'].'"}';
    // }
  }
?>