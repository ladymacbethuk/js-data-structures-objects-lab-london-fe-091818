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
  console.log("the argument called driver has a value of: ", driver);
  console.log("the argument called key has a value of: ", key );
  const x = Object.assign ({}, driver);
  delete x.key;
  return x;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  return driver;
}

