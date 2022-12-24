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
            case '/Customers':
                $Router = new Router("GET", "/Customers", "/Controllers/CustomersRead.php");
                break;
            case '/Title=ASC':
                $Router = new Router("GET", "/Title=ASC", "/Views/Homepage.php");
                break;
            case '/Title=DESC':
                $Router = new Router("GET", "/Title=DESC", "/Views/Homepage.php");
                break;
            case '/Customers/CustomersTitle/ASC':
                $Router = new Router("GET", "/Customers/CustomersTitle/ASC", "/Controllers/CustomersRead.php");
                break;
            case '/Customers/CustomersTitle/DESC':
                $Router = new Router("GET", "/Customers/CustomersTitle/DESC", "/Controllers/CustomersRead.php");
                break;
            case '/FirstName=ASC':
                $Router = new Router("GET", "/FirstName=ASC", "/Views/Homepage.php");
                break;
            case '/FirstName=DESC':
                $Router = new Router("GET", "/FirstName=DESC", "/Views/Homepage.php");
                break;
            case '/Customers/CustomersFirstName/ASC':
                $Router = new Router("GET", "/Customers/CustomersFirstName/ASC", "/Controllers/CustomersRead.php");
                break;
            case '/Customers/CustomersFirstName/DESC':
                $Router = new Router("GET", "/Customers/CustomersFirstName/DESC", "/Controllers/CustomersRead.php");
                break;
            case '/MiddleName=ASC':
                $Router = new Router("GET", "/MiddleName=ASC", "/Views/Homepage.php");
                break;
            case '/MiddleName=DESC':
                $Router = new Router("GET", "/MiddleName=DESC", "/Views/Homepage.php");
                break;
            case '/Customers/CustomersMiddleName/ASC':
                $Router = new Router("GET", "/Customers/CustomersMiddleName/ASC", "/Controllers/CustomersRead.php");
                break;
            case '/Customers/CustomersMiddleName/DESC':
                $Router = new Router("GET", "/Customers/CustomersMiddleName/DESC", "/Controllers/CustomersRead.php");
                break;
            case '/LastName=ASC':
                $Router = new Router("GET", "/LastName=ASC", "/Views/Homepage.php");
                break;
            case '/LastName=DESC':
                $Router = new Router("GET", "/LastName=DESC", "/Views/Homepage.php");
                break;
            case '/Customers/CustomersLastName/ASC':
                $Router = new Router("GET", "/Customers/CustomersLastName/ASC", "/Controllers/CustomersRead.php");
                break;
            case '/Customers/CustomersLastName/DESC':
                $Router = new Router("GET", "/Customers/CustomersLastName/DESC", "/Controllers/CustomersRead.php");
                break;
            case '/MailAddress=ASC':
                $Router = new Router("GET", "/MailAddress=ASC", "/Views/Homepage.php");
                break;
            case '/MailAddress=DESC':
                $Router = new Router("GET", "/MailAddress=DESC", "/Views/Homepage.php");
                break;
            case '/Customers/CustomersMailAddress/ASC':
                $Router = new Router("GET", "/Customers/CustomersMailAddress/ASC", "/Controllers/CustomersRead.php");
                break;
            case '/Customers/CustomersMailAddress/DESC':
                $Router = new Router("GET", "/Customers/CustomersMailAddress/DESC", "/Controllers/CustomersRead.php");
                break;
            case '/Active=ASC':
                $Router = new Router("GET", "/Active=ASC", "/Views/Homepage.php");
                break;
            case '/Active=DESC':
                $Router = new Router("GET", "/Active=DESC", "/Views/Homepage.php");
                break;
            case '/Customers/CustomersActive/ASC':
                $Router = new Router("GET", "/Customers/CustomersActive/ASC", "/Controllers/CustomersRead.php");
                break;
            case '/Customers/CustomersActive/DESC':
                $Router = new Router("GET", "/Customers/CustomersActive/DESC", "/Controllers/CustomersRead.php");
                break;
            case '/DateCreated=ASC':
                $Router = new Router("GET", "/DateCreated=ASC", "/Views/Homepage.php");
                break;
            case '/DateCreated=DESC':
                $Router = new Router("GET", "/DateCreated=DESC", "/Views/Homepage.php");
                break;
            case '/Customers/CustomersDateCreated/ASC':
                $Router = new Router("GET", "/Customers/CustomersDateCreated/ASC", "/Controllers/CustomersRead.php");
                break;
            case '/Customers/CustomersDateCreated/DESC':
                $Router = new Router("GET", "/Customers/CustomersDateCreated/DESC", "/Controllers/CustomersRead.php");
                break;
        }
        break;
    case 'POST':
        switch ($_SERVER['REQUEST_URI']) {
            case '/Customers/Create':
                $Router = new Router("POST", "/Customers/Create", "/Controllers/CustomersCreate.php");
                break;
        }
}
