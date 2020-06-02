import { createDataNow } from 'utils/createDataNow';

const WEEK_DAYS = 7;

export const correctPrintLineGraphics = data => {
  const keysRemove = [];
  const keys = Object.keys(data).sort((a, b) => (a > b ? 1 : -1));
  const labels = keys.map(key => data[key].dataNow);
  const dataGraph = keys.map(key => data[key].totalLikes);
  if (labels.length < WEEK_DAYS) {
    let counts = labels.length;
    let i = 1;
    while (counts !== WEEK_DAYS) {
      labels.push(createDataNow(i));
      counts += 1;
      i += 1;
    }
  } else if (labels.length > WEEK_DAYS) {
    while (labels.length !== WEEK_DAYS) {
      keysRemove.push(keys.splice(0, 1));
      dataGraph.splice(0, 1);
      labels.splice(0, 1);
    }
  }
  return { labels, dataGraph, keysRemove };
};
