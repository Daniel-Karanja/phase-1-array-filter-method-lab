// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const findMatching = (drivers, str) => {
  return drivers.filter((driver) => {
    if (driver.toLowerCase() === str.toLowerCase()) {
      return driver;
    }
  });
};

const fuzzyMatch = (drivers, str) => {
  let l = str.length;
  return drivers.filter((driver) => {
    if (driver.slice(0, l) === str) {
      return driver;
    }
  });
};

const matchName = (drivers, str) => {
  return drivers.filter((driver) => {
    if (driver.name === str) {
      return driver;
    }
  });
};
