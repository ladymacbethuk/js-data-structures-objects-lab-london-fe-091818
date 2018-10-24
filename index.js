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
  let newdriver = Object.assign({}, driver);
  console.log("newdriver is : ", newdriver );

  delete newdriver.key;
  console.log("newdriver is now : ", newdriver );
  return newdriver;
}


/* function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  return driver;
}

*/