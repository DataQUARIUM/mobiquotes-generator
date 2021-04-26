<?php


$consumerKey = '9jFgRu4natCndfucJ06bZQ';
$consumerSecret = '2XWCrtxHGL0Ba21LpvnOsYjCGpjRWinKEt2A1ClG4';
$oAuthToken = '567427617-88ncjIVrBRX08ZXB42I7hqcVldYHGBmMXxdV5jhq';
$oAuthSecret = '5oQRhRcjqPiqSFUlRJIEbyd5p0cdCpV6bDkf0cdk';

require_once('twitteroauth.php');

$handle = fopen("quotes.txt", "r") or die("Couldn't get handle");
  if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        // Process buffer here..

       $tweet = new TwitterOAuth($consumerKey, $consumerSecret, $oAuthToken, $oAuthSecret);
       $message = "$buffer";
       $tweet->post('statuses/update', array('status' => "$message"));
       sleep(73);

    }
    fclose($handle);
  }


?>
