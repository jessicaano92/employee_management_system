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
DROP DATABASE IF EXISTS employee_system_db;
CREATE DATABASE employee_system_db;
USE employee_system_db;



  CREATE TABLE department (
      id INT(10),
      name VARCHAR(30),
      PRIMARY KEY (id)
  );

  CREATE TABLE role (
      id INT (10),
      title VARCHAR(30), 
      salary --don't know decimal
      department_id INT (10),
      PRIMARY KEY (id)
  );

  CREATE TABLE employee (
      id INT (10),
      first_name VARCHAR(30),
      last_name VARCHAR(30),
      role_id INT (10),
      manager_id INT(10) NULL
  )

  


  