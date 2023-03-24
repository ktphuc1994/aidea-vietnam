interface MinMax {
  min: number;
  max: number;
}
export const priceRange: Record<string, MinMax> = {
  range1: { min: 0, max: 999999 },
  range2: { min: 1000000, max: 2000000 },
  range3: { min: 2000000, max: 3000000 },
  range4: { min: 3000000, max: 5000000 },
  range5: { min: 5000000, max: 7000000 },
  range6: { min: 7000000, max: Infinity },
};

export const areaRange: Record<string, MinMax> = {
  area1: { min: 0, max: 19 },
  area2: { min: 20, max: 30 },
  area3: { min: 30, max: 50 },
  area4: { min: 50, max: 60 },
  area5: { min: 60, max: 70 },
  area6: { min: 70, max: Infinity },
};
