// Write your solution in this file!

let driver = {
  
};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newdriver = { ...driver };
  newdriver[key] = value;
  return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const x = Object.assign ({}, driver);
  delete x.key;
  return x;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  return driver;
}

