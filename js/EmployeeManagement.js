import Employee from "./Employee.js";
function main() {
  let employees = new Array();
  employees = initEmployees(employees);
  outputEmployees(employees);
  inputEmployees(employees);
  outputEmployees(employees);
  employees = calculateSalary(employees);
  outputEmployees(employees);
  employees = sortBySalary(employees);
  outputEmployees(employees);
  employees = findMaxSalaryEmployees(employees);
  outputEmployees(employees);
  employees = editEmployeeInfo(employees);
  outputEmployees(employees);
  employees = removeEmployee(employees);
  outputEmployees(employees);
}

function outputEmployees(employeeList) {
  console.log("List of employees is: ");
  employeeList.forEach((e) => console.log(e));
}
function initEmployees(employeeList) {
  let firstEmployee = new Employee(1, "Ty", 500, 50);
  let sencondEmployee = new Employee(2, "Teo", 550, 55);
  let thirdEmployee = new Employee(3, "To", 450, 45);
  let fouthEmployee = new Employee(4, "Bin", 600, 60);
  let fifthEmployee = new Employee(5, "Bo", 650, 65);

  employeeList.push(firstEmployee);
  employeeList.push(sencondEmployee);
  employeeList.push(thirdEmployee);
  employeeList.push(fouthEmployee);
  employeeList.push(fifthEmployee);
  return employeeList;
}

function inputEmployee(idx) {
  let id = idx + 1;
  let fullName = prompt(`Enter employees[${id}] full name: `);
  let baseSalary = Number(prompt(`Enter employees[${id}] base salary: `));
  let productSalary = 50;
  let productQuantity = Number(
    prompt(`Enter employees[${id}] product quantity: `)
  );
  return { id, fullName, baseSalary, productSalary, productQuantity };
}
function inputEmployees(employeeList) {
  let n = Number(prompt("Enter number of employees: "));
  let nextIdx = employeeList.length;
  for (let i = 0; i < n; i++) {
    let newEmployee = inputEmployee(i + nextIdx);
    employeeList.push(newEmployee);
  }
}
function calculateSalary(employeeList) {
  employeeList.forEach((employee) => {
    let baseSalary = employee.baseSalary;
    let productSalary = employee.productSalary;
    let productQuantity = employee.productQuantity;
    let totalSalary = baseSalary + productSalary * productQuantity;

    employee.productQuantity < 50
      ? (totalSalary *= 0.9)
      : (totalSalary += (productQuantity - 50) * 0.1 * productSalary);
  });
}
function sortBySalary(employeeList) {
  return employeeList.sort((a, b) => a.totalSalary - b.totalSalary);
}
function findMaxSalaryEmployees(employeeList) {
  employeeList.sort((a, b) => a.totalSalary - b.totalSalary);
  let maxTotalSalary = employeeList[employeeList.length - 1].totalSalary;
  return employeeList.filter((e) => e.totalSalary === maxTotalSalary);
}
function editEmployeeInfo(employeeList) {
  let editingId = Number(prompt(`Enter employee id to edit: `));
  let editingEmployee = employeeList.filter((e) => e.id === editingId);
  editingEmployee.map((e) => {
    e.fullName = prompt("Enter new full name: ");
    e.baseSalary = Number(prompt("Enter new base salary: "));
    e.productSalary = 50;
    e.productQuantity = Number(prompt("Enter new product quantity: "));
    return e;
  });
  return employeeList;
}
function removeEmployee(employeeList) {
  let removingId = Number(prompt(`Enter employee id to remove: `));
  return employeeList.filter((e) => e.id !== removingId);
}

main();
