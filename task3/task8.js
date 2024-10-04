
const books = [
    { id: 1, title: "Book One", author: "Author A" },
    { id: 2, title: "Book Two", author: "Author B" },
    { id: 3, title: "Book Three", author: "Author C" }
  ];
  
  function* bookIterator() {
    for (const book of books) {
      yield book;
    }
  }
  
  function unreliableFetchBookDetails(id) {
    return new Promise((resolve, reject) => {
      const randomTimeout = Math.random() * 3000;
      setTimeout(() => {
        const book = books.find(b => b.id === id);
        if (book) {
          resolve(book);
        } else {
          reject("Book not found");
        }
      }, randomTimeout);
    });
  }
  
  const loadBookData = async () => {
    console.time("fetchBooks");
  
    try {
      const result = await Promise.any([
        unreliableFetchBookDetails(1),
        unreliableFetchBookDetails(2),
        unreliableFetchBookDetails(3)
      ]);
  
      console.log("Fetched Book:", result);
    } catch (error) {
      console.log("All requests failed:", error);
    }
  
    console.timeEnd("fetchBooks");
  };
  
  loadBookData();
  
  console.log("Books in Iterator:");
  const iterator = bookIterator();
  let nextBook = iterator.next();
  while (!nextBook.done) {
    console.log(nextBook.value);
    nextBook = iterator.next();
  }