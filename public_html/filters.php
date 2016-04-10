<?php 
    $con=mysql_connect("localhost","root","");  
    $action = $_POST['action'];
    if (!$con)
    {
        die('Could not connect: ' . mysql_error());
    }
    mysql_select_db("filtercars",$con);
    if($action === "getFilters"){
        $result =   mysql_query("select * from filters",$con);
    
        $rows = Array();
    
        while($row = mysql_fetch_array($result, MYSQL_ASSOC)){
            array_push($rows, $row);
        }
        echo json_encode($rows);
        mysql_close($con);
    }
    else if($action === "updateFilters"){
        $brand =    $_POST['brand'];
        $model =    $_POST['model'];
        $from_date =$_POST['from_date'];
        $to_date =  $_POST['to_date'];
        $price =    $_POST['price'];
        $sql = "INSERT INTO filters (brand, model, from_date, to_date, price) VALUES ('".$brand."','".$model."','".$from_date."','".$to_date."','".$price."')";

        if (mysql_query($sql,$con)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysql_error($con);
        }

        mysql_close($con);
    }
    else if($action === "deleteFilters"){
        $id      =    $_POST['id'];
        $sql = "DELETE FROM filters WHERE id = '" .$id."'";

        if (mysql_query($sql,$con)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysql_error($con);
        }

        mysql_close($con);
    }
?>
