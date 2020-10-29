

DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE department (   --table for the name of the department
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
     department_name VARCHAR(30)
);


  CREATE TABLE role ( --table for the roles of the employees
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
      title VARCHAR(30) NOT NULL, 
      salary DECIMAL (10) NOT NULL,
      department_id INT(10)
      
  );

  CREATE TABLE employee (  --table for employee details
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
      first_name VARCHAR(30),
      last_name VARCHAR(30),
      role_id INT UNSIGNED NOT NULL,
      manager_id INT UNSIGNED NULL
  );

