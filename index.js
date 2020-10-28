// const db = require ("./db");
const connection = require ("./db/connection");




async function viewEmployees() {



   
}


async function employeesByDepartment() {



    addDepartment();                //calling addDepartment function
}


async function employeesByManager() {
}


async function addEmployee () {
    const roles = await connection.query("SELECT department.name FROM department")
    const employee = await prompt ([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        }
    ]);
}


async function removeEmployee() {

}


async function updateEmployeeRole() {
}


async function updateEmployeeManager() {
}


async function viewRoles() {
}


async function addRole() {
}


async function removeRole() {
}

async function viewDepartments () {

}


 async function addDepartment () {
    const department = await prompt ([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ]).then(response => {
        connection.query('INSERT INTO department SET ?', response)
    })
        
    console.log(`Added ${department.name} to the database`);
    // console.log(response)

}


async function removeDepartment() {
}




switch(choice) {
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
        default: return quit ();
}