export const getDate = () => {
  const date = new Date();
  const arrayMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jule',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${date.getDate()}.${
    arrayMonth[date.getMonth()]
  }.${date.getFullYear()}`;
};
