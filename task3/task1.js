const books = [
    { title: "Book One", author: "Author A" },
  { title: "Book Two", author: "Author B" },
  { title: "Book Three", author: "Author A" },
  { title: "Book Four", author: "Author C" },
]

const  uniqueauthor = new Set(books.map(book =>book.author));
console.log(uniqueauthor);