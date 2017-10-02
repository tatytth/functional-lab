const parseItems = (items) => {
  const arr = []
  for (let i = 0; i < items.length; i++) {
    arr.push(parseInt(items[i]));
    //items[i] = parseInt(items[i])
  }
  return arr.sort();
  //return items.sort()
};

module.exports = parseItems;
