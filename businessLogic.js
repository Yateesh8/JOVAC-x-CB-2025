const firstName = ["Amit", "Priya", "Rahul", "Neha", "Vivek", "Anjali", "Karan", "Sneha", "Ravi", "Pooja", "Sumit", "Kriti", "Arjun", "Divya", "Manish", "Riya", "Siddharth", "Megha", "Nikhil", "Tanya"];
const lastName = ["Sharma", "Verma", "Gupta", "Mehta", "Rastogi", "Singh", "Yadav", "Joshi", "Kapoor", "Chauhan", "Malhotra", "Bansal", "Kumar", "Rana", "Mishra", "Choudhary", "Jain", "Rathore", "Dwivedi", "Desai"];
var age = [28, 26, 32, 24, 29, 31, 27, 33, 30, 25, 26, 29, 35, 24, 32, 28, 31, 30, 27, 29];
var salary = [35000, 38000, 35000, 38000, 34000, 42000, 40000, 32000, 39000, 48000, 31000, 37000, 42000, 39000, 44000, 34000, 36000, 37000, 35000, 38000];
let workingDays = [27, 29, 26, 30, 28, 25, 30, 26, 27, 28, 29, 30, 25, 26, 28, 27, 30, 29, 28, 30];

const employees = []; //null array

for(let i=0; i<20; i++){
    employees.push({
        firstName : firstName[i],
        lastName : lastName[i],
        age : age[i],
        salary : salary[i],
        workingDays : workingDays[i]
    }); //to enter data from above

}
console.log(employees); //to access all the employees details

// map
const firstName1 = employees.map(emp => emp.firstName);
console.log(firstName1); // to get the firstname of all the employees

const lastName1 = employees.map(emp => emp.lastName);
console.log(lastName1); // to get the firstname of all the employees

const firstNameAndAge = employees.map(emp => ({Name:emp.firstName, Age:emp.age}));
console.log(firstNameAndAge); // // to get the firstname and age of all the employees

const summary = employees.map(emp => ({
  Name: emp.firstName,
  WorkingDays: emp.workingDays
}));
console.log(summary); // to get name and working days

// reduce
const totalSalary = employees.reduce((acc,emp) => acc + emp.salary,0);
console.log("Total Salary: " + totalSalary); // To get the total salary of the employees

const avgSalary = employees.reduce((acc, emp, _, arr) => acc + emp.salary / arr.length, 0);
console.log("Average Salary:", avgSalary); // to get the average salary of the employees

// filter
const highEarners = employees.filter(emp => emp.salary > 35000).map(emp => emp.firstName + " " + emp.lastName);
console.log("High Salary Employees:", highEarners); // To know the highest earning employees

const hardWorkers = employees.filter(emp => emp.workingDays == 30).map(emp => emp.firstName + " " + emp.lastName);
console.log("Hard workers: ", hardWorkers); // To know the employees who work for the whole month