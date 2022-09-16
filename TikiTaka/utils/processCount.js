const processCount = count => {
  if (count < 1000) {
    return count;
  } else if (count < 10000) {
    return `${(count / 1000).toFixed(1)}천`;
  } else if (count < 100000) {
    return `${(count / 10000).toFixed(1)}만`;
  } else if (count < 100000000) {
    return `${(count / 10000).toFixed(0)}만`;
  } else {
    return `${(count / 100000000).toFixed(0)}억`;
  }
};

export default processCount;
