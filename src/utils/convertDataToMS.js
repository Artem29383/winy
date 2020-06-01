export const convertDataToMS = () => {
  const date = new Date();
  const now = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  const parseData = now.split('.');
  return Date.UTC(parseData[2], parseData[1], parseData[0]);
};
