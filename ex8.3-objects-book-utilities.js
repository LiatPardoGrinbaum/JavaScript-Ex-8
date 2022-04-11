//1
const book1 = {
  name: "The Farseer Trilogy",
  author: " Robin Hobb",
  year: 1995,
};

const book2 = {
  name: "Holes",
  author: "Louis Sachar",
  year: 1998,
};

//2
const bookUtils = {};

//3
bookUtils.getFirstPublished = (book1, book2) => {
  let yearBook1 = book1.year;
  let yearBook2 = book2.year;
  let smallerYear = yearBook1 < yearBook2 ? yearBook1 : yearBook2;
  return smallerYear;
};
console.log(bookUtils.getFirstPublished(book1, book2));

//4
bookUtils.setNewEdition = (book, edition) => {
  book.latestEdition = edition;
};

bookUtils.setNewEdition(book1, 1999);
console.log(book1);

//5
bookUtils.setLanguage = (book, language) => {
  book.language = language;
};

bookUtils.setLanguage(book1, "hebrew");
console.log(book1);

//6
bookUtils.setTranslation = (book, language, translator) => {
  book.translation = {
    translator: translator,
    language: language,
  };
};

bookUtils.setTranslation(book1, "English", "German");
console.log(book1);

//also can use anonymous function this way:
// bookUtils.setTranslation=function (book, language, translator) {
//   book.translation = {
//     translator: translator,
//     language: language,
//   };
// };

//7
bookUtils.setPublisher = (book, name, location) => {
  book.publisher = {
    name: name,
    location: location,
  };
};
bookUtils.setPublisher(book1, "Liat", "USA");
console.log(book1);

//8
bookUtils.isSamePublisher = (book1, book2) => {
  if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) {
    console.log(`${book1.name} and ${book2.name} name and location are identical.`);
  } else {
    console.log(`${book1.name} and ${book2.name} name and location are NOT identical.`);
  }
};

bookUtils.setPublisher(book2, "another-publisher-name", "USA");
bookUtils.isSamePublisher(book1, book2);
