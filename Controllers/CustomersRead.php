<?php
require_once "{$_SERVER['DOCUMENT_ROOT']}/Routes.php";
require_once "{$_SERVER['DOCUMENT_ROOT']}/Models/Customer.php";
$Customer = new Customer();
if ($_SERVER["REQUEST_URI"] == "/Customers") {
    $Customer->read();
} else {
    $request_uri = str_replace("/Customers/", "", $_SERVER['REQUEST_URI']);
    $parameters = explode("/", $request_uri);
    $Customer->sortRead($parameters[0], $parameters[1]);
}
