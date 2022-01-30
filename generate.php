<?php


$consumerKey = '<CONSUMER_KEY>';
$consumerSecret = '<CONSUMER_SECRET>';
$oAuthToken = '<OAUTH_TOKEN>';
$oAuthSecret = '<OAUTH_SECRET>';

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
