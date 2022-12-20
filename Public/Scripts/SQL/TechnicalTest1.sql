CREATE DATABASE TechnicalTest1;
CREATE TABLE TechnicalTest1.Customers (
    CustomersId INT PRIMARY KEY AUTO_INCREMENT,
    CustomersTitle VARCHAR(4),
    CustomersFirstName VARCHAR(32),
    CustomersMiddleName VARCHAR(32),
    CustomersLastName VARCHAR(32),
    CustomersMailAddress VARCHAR(64),
    CustomersActive BOOLEAN,
    CustomersDateCreated VARCHAR(32)
);