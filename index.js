// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: 'Castle Street'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
  }
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Bond St');
  
  
  console.log(updatedEmployee);
  console.log(employee);