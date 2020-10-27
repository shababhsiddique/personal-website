<?php

function getArrayFromCsv($file) {
    if (($handle = fopen($file, "r")) !== FALSE) {
        while (($lineArray = fgetcsv($handle)) !== FALSE) {
            $dataArray[$lineArray[0]] = $lineArray[1];
        }
        fclose($handle);
    }
    return $dataArray;
}

if (isset($_GET['url'])) {
    $sites = getArrayFromCsv('log.csv');

    if (isset($sites[$_GET['url']])) {
        $url = $_GET["url"];
        echo "Site was added $sites[$url]";
    } else {
        echo "site just added";
        $url = $_GET["url"];
        $list = array(
            array($url, date("d-m-y h:i:s")),
        );

        $fp = fopen('log.csv', 'a');

        foreach ($list as $fields) {
            fputcsv($fp, $fields);
        }

        fclose($fp);
    }
}

$sites = getArrayFromCsv('log.csv');
echo "<pre>";
print_r($sites);


//$row = 1;
//if (($handle = fopen("test.csv", "r")) !== FALSE) {
//    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
//        $num = count($data);
//        echo "<p> $num fields in line $row: <br /></p>\n";
//        $row++;
//        for ($c=0; $c < $num; $c++) {
//            echo $data[$c] . "<br />\n";
//        }
//    }
//    fclose($handle);
//}