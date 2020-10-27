

--possibly add an INDEX for large amount of data
      --special table for SQL for look ups in a more efficient way

--multi-join 


DROP DATABASE IF EXISTS employeeSystem_db;
CREATE DATABASE employeeSystem_db;
USE employeeSystem_db;



  CREATE TABLE department (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(30),
  );

  CREATE TABLE role (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(30), 
      salary --don't know decimal
      department_id INT UNSIGNED,
      
  );

  CREATE TABLE employee (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(30),
      last_name VARCHAR(30),
      role_id INT UNSIGNED,
      manager_id INT UNSIGNED NULL
  )

  


  