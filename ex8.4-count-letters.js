// const arr4 = Object.values(obj);

const arrayWords = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const letters = (arr) => {
  let letterString = arr.join("");
  letterString = letterString.replace(/\s/g, "").toLowerCase();
  // console.log(letterString);

  const objCount = {}; //define an empty object

  for (let char of letterString) {
    //fill the object
    if (objCount[char]) {
      // if true, means if there's a number of occurrences inside
      objCount[char] += 1;
    } else {
      // else, add 1
      objCount[char] = 1;
    }
  }
  console.log(objCount);
};

letters(arrayWords);

//notes:
/* \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces). */
