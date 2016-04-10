<?php
    $pg   = $_POST["pg"];
    
    if ($pg == "0") {
        //$var1 = 'http://www.car.gr/classifieds/cars/?h&sort=cr&rg=3&offer_type=sale&created=1&registration=1995-2016&st=p&pg=' . $pg;
        $var1 = 'http://localhost:8080/cargr/public_html/test2.html';
        $result = file_get_contents($var1);
    } else {
        //$var1 = 'http://www.car.gr/classifieds/cars/?sort=cr&rg=3&offer_type=sale&created=1&registration=1995-2016&st=p&pg=' . $pg;
        $var1 = 'http://localhost:8080/cargr/public_html/test.html';
        $result = file_get_contents($var1);
    }
    echo $result;
?>
