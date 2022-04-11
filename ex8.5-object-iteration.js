const obj = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
};

const swappedObj = (obj) => {
  const newObj = {};
  for (let key in obj) {
    let newKey = obj[key];
    newObj[newKey] = key;
  }
  return newObj;
};

console.log(swappedObj(obj));
