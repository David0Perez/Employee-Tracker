const inquirer = require('inquirer');
const cTable = require('console.table');
const sql = require('./db/query_lib');
const cHelper = require('./libchoiceHelper');

const newDept = async () => {

    const deptName = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            messgae: 'What is the name of the new department?',
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name for the department.');
                    return false;
                }
            },
        },
    ]);
    await sql.addDept(deptName.name);
    chooseRequest();
}
const newEmp = async () => {
    const roles = await cHelper.roleChoices();
    const mgmt = await cHelper.mgmtChoices();
    const emp = await inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: 'What is the first name of the new employee?',
            validate: (first) => {
                if (first) {
                    return true;
                } else {
                    console.log('Please enter a first name for the employee.');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'last',
            message: 'What is the last name of the new employee?',
            validate: (last) => {
                if (last) {
                    return true;
                } else {
                    console.log('Please enter a last name for the employee.');
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Who is the manager of the employee?',
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the role of the employee?',
        }
    ]);

    await sql.addEmp(emp);
    chooseRequest();
}