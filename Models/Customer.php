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
}
