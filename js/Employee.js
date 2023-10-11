export default class Employee {
  constructor(id, fullName, baseSalary, productQuantity) {
    this.id = id;
    this.fullName = fullName;
    this.baseSalary = baseSalary;
    this.productSalary = 50;
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
