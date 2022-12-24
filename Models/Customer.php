<?php
require_once "{$_SERVER['DOCUMENT_ROOT']}/Models/PDO.php";
/**
 * The API and data model of the customer
 */
class Customer
{
    /**
     * The primary key and the identifier of the customer
     */
    private int $id;
    /**
     * The title of the customer
     */
    private ?string $title;
    /**
     * First name of the customer
     */
    private string $firstName;
    /**
     * Middle name of the customer
     */
    private string $middleName;
    /**
     * Last name of the customer
     */
    private ?string $lastName;
    /**
     * Mail address of the customer
     */
    private string $mailAddress;
    /**
     * Active status of the customer
     */
    private bool $active;
    /**
     * The date at which the user has been created
     */
    private string $dateCreated;
    /**
     * A simpler version of PDO for developers to understand
     */
    protected PHPDataObject $PDO;
    public function __construct()
    {
        $this->PDO = new PHPDataObject();
    }
    public function getId(): int
    {
        return $this->id;
    }
    public function setId(int $id): void
    {
        $this->id = $id;
    }
    public function getTitle(): ?string
    {
        return $this->title;
    }
    public function setTitle(?string $title): void
    {
        $this->title = $title;
    }
    public function getFirstName(): string
    {
        return $this->firstName;
    }
    public function setFirstName(string $first_name): void
    {
        $this->firstName = $first_name;
    }
    public function getMiddleName(): string
    {
        return $this->middleName;
    }
    public function setMiddleName(string $middle_name): void
    {
        $this->middleName = $middle_name;
    }
    public function getLastName(): ?string
    {
        return $this->lastName;
    }
    public function setLastName(?string $last_name): void
    {
        $this->lastName = $last_name;
    }
    public function getMailAddress(): string
    {
        return $this->mailAddress;
    }
    public function setMailAddress(string $mail_address): void
    {
        $this->mailAddress = $mail_address;
    }
    public function getActive(): bool
    {
        return $this->active;
    }
    public function setActive(bool $active): void
    {
        $this->active = $active;
    }
    public function getDateCreated(): string
    {
        return $this->dateCreated;
    }
    public function setDateCreated(): void
    {
        $this->dateCreated = date("Y.m.d H:i:s ");
    }
    /**
     * Creating the customer
     */
    public function create(): void
    {
        $request = json_decode(file_get_contents("php://input"));
        $this->setTitle($request->title);
        $this->setFirstName($request->firstName);
        $this->setMiddleName($request->middleName);
        $this->setLastName($request->lastName);
        $this->setMailAddress($request->mailAddress);
        if ($request->active == 0) {
            $this->setActive(false);
        } else if ($request->active == 1) {
            $this->setActive(true);
        } else {
            $response = array(
                "status" => 1,
                "message" => "Incorrect Form",
                "url" => $_SERVER['HTTP_REFERER']
            );
        }
        $this->setDateCreated();
        if ($this->getFirstName() != null && $this->getMiddleName() != null && $this->getMailAddress() != null && str_contains($this->getMailAddress(), "@") && str_contains($this->getMailAddress(), ".")) {
            $this->PDO->query("INSERT INTO TechnicalTest1.Customers(CustomersTitle, CustomersFirstName, CustomersMiddleName, CustomersLastName, CustomersMailAddress, CustomersActive, CustomersDateCreated) VALUES (:CustomersTitle, :CustomersFirstName, :CustomersMiddleName, :CustomersLastName, :CustomersMailAddress, :CustomersActive, :CustomersDateCreated)");
            $this->PDO->bind(":CustomersTitle", $this->getTitle());
            $this->PDO->bind(":CustomersFirstName", $this->getFirstName());
            $this->PDO->bind(":CustomersMiddleName", $this->getMiddleName());
            $this->PDO->bind(":CustomersLastName", $this->getLastName());
            $this->PDO->bind(":CustomersMailAddress", $this->getMailAddress());
            $this->PDO->bind(":CustomersActive", $this->getActive());
            $this->PDO->bind(":CustomersDateCreated", $this->getDateCreated());
            $this->PDO->execute();
            $response = array(
                "status" => 0,
                "message" => "Customer Created!",
                "url" => "http://{$_SERVER['HTTP_HOST']}"
            );
        } else {
            $response = array(
                "status" => 1,
                "message" => "Incorrect Form",
                "url" => $_SERVER['HTTP_REFERER']
            );
        }
        header('Content-Type: application/json', true, 300);
        echo json_encode($response);
    }
    /**
     * Reading all the data from the database
     */
    public function read(): void
    {
        $this->PDO->query("SELECT * FROM TechnicalTest1.Customers");
        $this->PDO->execute();
        $customers = array();
        for ($index = 0; $index < count($this->PDO->resultSet()); $index++) {
            $customer = array(
                "id" => $this->PDO->resultSet()[$index]['CustomersId'],
                "title" => $this->PDO->resultSet()[$index]['CustomersTitle'],
                "firstName" => $this->PDO->resultSet()[$index]['CustomersFirstName'],
                "middleName" => $this->PDO->resultSet()[$index]['CustomersMiddleName'],
                "lastName" => $this->PDO->resultSet()[$index]['CustomersLastName'],
                "mailAddress" => $this->PDO->resultSet()[$index]['CustomersMailAddress'],
                "active" => $this->PDO->resultSet()[$index]['CustomersActive'],
                "dateCreated" => $this->PDO->resultSet()[$index]['CustomersDateCreated']
            );
            array_push($customers, $customer);
        }
        $_SESSION["Customers"] = $customers;
        $response = $_SESSION["Customers"];
        header('Content-Type: application/json', true, 200);
        echo json_encode($response);
    }
    /**
     * Reading all the data from the database while sorting against the field and the order
     */
    public function sortRead(string $field, string $order): void
    {
        $this->PDO->query("SELECT * FROM TechnicalTest1.Customers ORDER BY {$field} {$order}");
        $this->PDO->execute();
        $customers = array();
        for ($index = 0; $index < count($this->PDO->resultSet()); $index++) {
            $customer = array(
                "id" => $this->PDO->resultSet()[$index]['CustomersId'],
                "title" => $this->PDO->resultSet()[$index]['CustomersTitle'],
                "firstName" => $this->PDO->resultSet()[$index]['CustomersFirstName'],
                "middleName" => $this->PDO->resultSet()[$index]['CustomersMiddleName'],
                "lastName" => $this->PDO->resultSet()[$index]['CustomersLastName'],
                "mailAddress" => $this->PDO->resultSet()[$index]['CustomersMailAddress'],
                "active" => $this->PDO->resultSet()[$index]['CustomersActive'],
                "dateCreated" => $this->PDO->resultSet()[$index]['CustomersDateCreated']
            );
            array_push($customers, $customer);
        }
        $_SESSION["Customers"] = $customers;
        $response = $_SESSION["Customers"];
        header('Content-Type: application/json', true, 200);
        echo json_encode($response);
    }
}
