const stringLength = (string) => {
  let str = string.split('');
  let count = 0;
  str.forEach(element => {
    count += 1; 
  });
  if (count < 1 || count > 10) { 
    // throw new Error('String must be between 1 character and 10 characters');
    return false;
  }
  return true;
}

module.exports = stringLength;