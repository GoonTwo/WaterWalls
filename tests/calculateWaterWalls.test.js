const { calculateWaterWalls, getPeaks, filteredPeaks, } = require('../calculateWaterWalls');

test('finds indeces of walls that give max water', () => {
  expect(calculateWaterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
  expect(calculateWaterWalls([7,1,1,7])).toEqual([1, 4, 12]);
});