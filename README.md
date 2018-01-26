# Strategy
find indeces of all peaks by iterating through array and looking for downward slopes on both sides. Remove all peaks that are surrounded by higher peaks to get possible solutions. Then, calculate area of all solutions by subtracting wall area from total area.

# Big-O
O(n) - itterates over problem space three time in linear fashion

```javascript
const calculateWaterWalls = (walls) => {
  const peaks = getPeaks(walls)
  // iterate over peaks and get water from calculateWater()
  // return indeces of greatest water area
}

const calculateWater = (peaks) => {
  // find height of the smaller peaks
  // calculate potential water area (if there were no walls inside peaks)
  // subtract area of walls
}

const getPeaks = (walls) => {
  // iterate over walls looking for walls that have smaller ones on either side
  // filter out peaks that have higher surrounding peaks
  // return peals
}
```