function findSummingNumbers (list, target) {
  for (i = 0; i < list.length; i++) {
    let num = list[i];
    //how to exclude num from the array i
    let updatedArray = list.filter(item => item !== num);
    let diff = target - num;
    if (updatedArray.indexOf(diff) >= 0 ) {
      return [num, diff];
    }
  }
  return [null, null];
}

module.exports = { findSummingNumbers };
