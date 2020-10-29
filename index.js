// const db = require ("./db");
const connection = require ("./db/connection");
const inquirer = require ("inquirer");



mainPrompt();

function mainPrompt() {
    inquirer
    .prompt ({
        name: "action",
        type: "list",
        message: "What would you like to do?", 
        choices: ["View all employees", 
        "View all employees by department", 
        "View all employees by manager", 
        "Add employee", 
        "Remove employee", 
        "Update employee role",
        "Update employee manager"]

    }).then (response => {
         switch(response.action) {

                case "VIEW_EMPLOYEES":
                    return viewEmployees();
                case "EMPLOYEES_BY_DEPARTMENT":
                    return employeesByDepartment();
                case "EMPLOYEES_BY_MANAGER":
                    return employeesByManager();
                case "ADD_EMPLOYEE":
                    return addEmployee();
                case "REMOVE_EMPLOYEE":
                    return removeEmployee();
                case "UPDATE_EMPLOYEE_ROLE":
                    return updateEmployeeRole();
                case "UPDATE_EMPLOYEE_MANAGER":
                    return updateEmployeeManager();
                case "VIEW_ROLES":
                    return viewRoles();
                case "ADD_ROLE":
                    return addRole();
                case "REMOVE_ROLE":
                    return removeRole();
                case "VIEW_DEPARTMENTS":
                    return viewDepartments();
                case "ADD_DEPARTMENT":
                    return addDepartment();
                case "REMOVE_DEPARTMENT":
                    return addDepartment();
                    default:
                        break;
            }
        });
    }
   

// function viewEmployees () {
//     inquirer.prompt ({
//         name: "employee",
//         type: "list",
//         message: "What "
//     })
// }

// function employeesByDepartment() {
//   var query = "SELECT * FROM employee";
//   connection.query(query, function (err, res){
//       for (var i = 0; i < res.length; i ++) {
//           console.log("Id: " + res[i].id + " || First Name: " + res[i].first_name + " || Last Name: " + res[i].last_name);
//       }
//       mainPrompt();
//   });

    
// }

// // function employeesByManager() {
// // }


function addEmployee () {
    connection.query("SELECT * FROM role", function (err, res){
            if (err) throw err;
            inquirer.prompt  ([
                {
                    name: "first_name",
                    message: "What is the employee's first name?"
                },
                {
                    name: "last_name",
                    message: "What is the employee's last name?"
                }
            ]);
                console.log(res);
    });
   
}


// function removeEmployee() {

// }


// function updateEmployeeRole() {
// }


// function updateEmployeeManager() {
// }


// function viewRoles() {
// }


// function addRole() {
// }


//  function removeRole() {
// }

//  function viewDepartments () {

// }


//  function addDepartment () {
//     const department = await prompt ([
//         {
//             name: "name",
//             message: "What is the name of the department?"
//         }
//     ]).then(response => {
//         connection.query('INSERT INTO department SET ?', response)
//     })
        
//     console.log(`Added ${department.name} to the database`);
//     // console.log(response)

// }


// function removeDepartment() {
// }




