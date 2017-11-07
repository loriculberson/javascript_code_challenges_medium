const { findSummingNumbers }= require('./summingNums');

test('returns pair of numbers that add to the target', () => {
  let target = 13;
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  let pairs = findSummingNumbers(numList, target);

  expect(pairs).toEqual([9, 4])
});

test('returns first pair of numbers that are both negative', () => {
  let target = -5;
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  let pairs = findSummingNumbers(numList, target);

  expect(pairs).toEqual([-2, -3])
});

test('returns first pair of numbers that add to the target later in array', () => {
  let target = 18;
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  let pairs = findSummingNumbers(numList, target);

  expect(pairs).toEqual([10, 8])
});

test('returns null if no pairs add to target', () => {
  let target = 30;
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  let pairs = findSummingNumbers(numList, target);

  expect(pairs).toEqual([null, null])
});
