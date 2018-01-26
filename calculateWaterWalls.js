const calculateWaterWalls = (walls) => {
  const peaks = getPeaks(walls)
  let maxWater = 0;
  let maxWaterPeaks = [];
  for (let i = 0; i < peaks.length - 1; i++) {
    const totalArea = (peaks[i + 1] - peaks[i] - 1) * Math.min(walls[peaks[i + 1]], walls[peaks[i]]);
    const wallArea = walls.slice(peaks[i] + 1, peaks[i + 1]).reduce((a,b) => a + b);
    const waterArea = totalArea - wallArea;
    if (waterArea > maxWater) {
      maxWater = waterArea;
      maxWaterPeaks = [peaks[i] + 1, peaks[i + 1] + 1];
    }
  }
  return maxWaterPeaks.concat([maxWater]);
}

const getPeaks = (walls) => {
  const allPeaks = [];
  walls.forEach((wall, index) => {
    if (
      (walls[index - 1] < wall && walls[index + 1] < wall) || 
      (index === 0 && walls[index + 1] < wall) || 
      (index === walls.length - 1 && walls[index - 1] < wall)
    ) {
      allPeaks.push(index);
    }
  });
  return filterPeaks(walls, allPeaks);
}

const filterPeaks = (walls, allPeaks) => {
  let peakIndex = 0;
  const filteredPeaks = allPeaks.slice();
  while (peakIndex + 2 < filteredPeaks.length) {
    if (walls[filteredPeaks[peakIndex]] > walls[filteredPeaks[peakIndex + 1]]) {
      filteredPeaks.splice(peakIndex + 1, 1);
    } else {
      peakIndex++;
    }
  }
  return filteredPeaks;
}


module.exports = {
  calculateWaterWalls,
  getPeaks,
  filterPeaks,
};

