let employee = {
  name: "Hannah",
  streetAddress: 'Castle Street'
};
// console.log(employee);

// question 1
function updateEmployeeWithKeyAndValue(employee, key, value) {
 return {...employee, [key]: value};
 return employee;
}
//console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Bond Street'));

// quesiton 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
};
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam'));

//question 3
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}
//console.log(deleteFromEmployeeByKey(employee, 'name'))
//console.log(employee);

// question 4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
//console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'));