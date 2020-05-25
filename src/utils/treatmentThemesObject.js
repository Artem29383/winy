export const treatmentThemesObject = array => {
  return array.reduce((acc, item) => {
    return { ...acc, ...item };
  }, {});
};
