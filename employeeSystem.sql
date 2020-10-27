/* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager*/

--possibly add an INDEX for large amount of data
      --special table for SQL for look ups in a more efficient way


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

  


  