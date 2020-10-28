USE employee_db;

INSERT INTO department (department_name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");



INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), 
("Salesperson", 80000, 1), 
("Lead Engineer", 150000, 2), 
("Software Engineer", 120000, 2), 
("Accountant", 125000, 3), 
("Legal Team Lead", 250000, 4), 
("Lawyer", 190000, 4), 
("Lead Engineer", 150000, 2);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3), 
("John", "Doe", 1, 3), 
("John", "Doe", 1, 3), 
("John", "Doe", 1, 3), 
("John", "Doe", 1, 3),          --update names, id's, manager id's
("John", "Doe", 1, 3), 
("John", "Doe", 1, 3), 
("John", "Doe", 1, 3);

SELECT * FROM employees;
SELECT * FROM role;
SELECT * FROM department;


--try to join 