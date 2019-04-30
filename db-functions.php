<?php
function addAlert($currency,$price,$user){
   require("connect-db.php");
   $user2 = findUser($user)[0];
   $query = "INSERT INTO alerts (currency, price, user) VALUES (:currency, :price, :user)";
   $statement = $db->prepare($query);
   $statement->bindValue(':currency', $currency);
   $statement->bindValue(':price', $price);
   $statement->bindValue(':user', $user2);
   $statement->execute();
   $statement->closeCursor();
}

function findUser($user){
   require("connect-db.php");
   $query = "select * from users where name = :user";
   $statement = $db->prepare($query);
   $statement->bindValue(':user', $user);
   $statement->execute();

   // fetchAll() returns an array for all of the rows in the result set
   // fetch() return a row 
   $results = $statement->fetch();

   // closes the cursor and frees the connection to the server so other SQL statements may be issued
   $statement->closecursor();
   return $results;
}

function getAlertByName($user)
{
   require("connect-db.php");
   $query = "select * from alerts where user = :id";
   $id = findUser($user)[0];
   $statement = $db->prepare($query); 
   $statement->bindValue(':id', $id);
   $statement->execute();

   // fetchAll() returns an array for all of the rows in the result set
   $results = $statement->fetchAll();

   // closes the cursor and frees the connection to the server so other SQL statements may be issued 
   $statement->closecursor();

   return $results;
}


function deleteAlert($id)
{
   require("connect-db.php");
   $query = "DELETE FROM alerts WHERE id=:id";
   $statement = $db->prepare($query);
   $statement->bindValue(':id', $id);
   $statement->execute();
   $statement->closeCursor();
}

function updateAlertPrice($id, $price)
{
   require("connect-db.php");
   
   $query = "UPDATE alerts SET price=:price WHERE id=:id";
   $statement = $db->prepare($query);
   $statement->bindValue(':id', $id);
   $statement->bindValue(':price', $price);
   $statement->execute();
   $statement->closeCursor();
}

?>

