<?php
    $brand   = $_POST["brand"];
    $action  = $_POST["action"];
    
    if( $action == "getModels"){
        $var1 = 'http://www.car.gr/classifieds/cars/models/'. $brand .'/?e';
        $result = file_get_contents($var1);
    }
    
    echo $result;


?>
