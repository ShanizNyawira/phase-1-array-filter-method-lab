// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(drivers, driversName) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === driversName.toLowerCase();
  });
}
console.log(findMatching(drivers, "sarah"));

function fuzzyMatch(drivers, myString) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase().startsWith(myString.toLowerCase());
  });
}
console.log(fuzzyMatch(drivers, 's'));
const driver2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(drivers, driversName,  ) {
    return drivers.filter(function (driver) {
        return driver.name === driversName;
    })
}
console.log(matchName(driver2,"Bobby"));