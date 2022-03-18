const { prompt } = require("inquirer");

function letsStart() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Departments",
          value: "viewAllDepartments"
        },
        {
          name: "View All Roles",
          value: "viewAllRoles"
        },
        {
          name: "View All Employees",
          value: "viewAllEmployees"
        },
        {
          name: "Add A Department",
          value: "addDepartment"
        },
        {
          name: "Add A Role",
          value: "addRole"
        },
        {
          name: "Add An Employee",
          value: "addEmployee"
        },
        {
          name: "Update An Employee Role",
          value: "updateEmployeeRole"
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    // Call the function depending on what the user chooses.
    switch (choice) {
      case "viewAllDepartments":
        viewAllDepartments();
        break;
      case "viewAllRoles":
        viewAllRoles();
        break;
      case "viewAllEmployees":
        viewAllEmployees();
        break;
      case "addDepartment":
        addDepartment();
        break;
      case "addRole":
        addRole();
        break;
      case "addEmployee":
        addEmployee();
        break;
      case "updateEmployeeRole":
        updateEmployeeRole();
        break;
    }
  }
  )
}

letsStart()