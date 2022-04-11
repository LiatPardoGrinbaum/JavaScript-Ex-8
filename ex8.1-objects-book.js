const book = {
  name: "Angela's Ashes",
  author: "Frank McCourt’s ",
  "publish year": 1996,
  "original language": "english",
  pages: 368,
};

const bookDescription = (book) => {
  console.log(`The book ${book.name} was written by ${book.author}in the year ${book["publish year"]}`);
};

bookDescription(book);
