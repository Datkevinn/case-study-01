const PRODUCT_SALARY = 50;

class Employee {
  constructor(id, fullName, baseSalary, productQuantity) {
    this.id = id;
    this.fullName = fullName;
    this.baseSalary = baseSalary;
    this.productSalary = PRODUCT_SALARY;
    this.productQuantity = productQuantity;
  }

  get getId() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }
  get getFullName() {
    return this.fullName;
  }
  set setFullName(fullName) {
    this.fullName = fullName;
  }
  get getBaseSalary() {
    return this.baseSalary;
  }
  set setBaseSalary(baseSalary) {
    this.baseSalary = baseSalary;
  }
  get getProductQuantity() {
    return this.productQuantity;
  }
  set setProductQuantity(productQuantity) {
    this.productQuantity = productQuantity;
  }
}

var prompt = require("prompt-sync")();

function main() {
  let employees = [];

  inputNumberEmployee(employees);
  outputNumberEmployee(employees);
}

function inputEmployee() {
  let id = Number(prompt("Nhap id: "));
  let fullName = prompt("Nhap ho va ten: ");
  let baseSalary = Number(prompt("Nhap luong co ban: "));
  let productQuantity = Number(prompt("Nhap so luong san pham: "));

  let employee = new Employee(id, fullName, baseSalary, productQuantity);
  return employee;
}

function inputNumberEmployee(listEmployee) {
  let number = Number(prompt("Nhap so nhan vien cu the: "));
  for (let i = 0; i < number; i++) {
    let newEmployee = inputEmployee(i);
    listEmployee[i] = newEmployee;
  }
  return listEmployee;
}

function outputNumberEmployee(listEmployee) {
    for (let i = 0; i < listEmployee.length; i++) {
      console.log(listEmployee);
    }
}
main();