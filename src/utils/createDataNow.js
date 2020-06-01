export const createDataNow = (plusDay = 0, plusMonth = 0) => {
  const date = new Date();
  return `${date.getDate() + plusDay}.${date.getMonth() +
    1 +
    plusMonth}.${date.getFullYear()}`;
};
