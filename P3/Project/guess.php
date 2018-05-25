<?php
$file = 'guess.txt';
$savePass = $_POST["word"]." ";
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= $savePass;
// Write the contents back to the file
file_put_contents($file, $current);
echo "thank you! you can go back and see your passphrase on the wall."
?>