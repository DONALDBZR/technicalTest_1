<?php
require_once "{$_SERVER['DOCUMENT_ROOT']}/Models/Router.php";
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        switch ($_SERVER['REQUEST_URI']) {
            case '/':
                $Router = new Router("GET", "/", "/Views/Homepage.php");
                break;
            case '/Customers/New':
                $Router = new Router("GET", "/Customers/New", "/Views/CustomersNew.php");
                break;
        }
        break;
    case 'POST':
        switch ($_SERVER['REQUEST_URI']) {
        }
}
