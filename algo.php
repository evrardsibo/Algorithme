<?php
$array = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
$random = array_rand($array);
function searchNumber($array, $random) {
    foreach($array as $key => $value) {
        if($value == $random) {
            return $value;
        }
    }
}
echo "Random : " . $random;
echo "<br>";
print_r(searchNumber($array, $random));