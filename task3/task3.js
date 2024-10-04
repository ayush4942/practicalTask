

const books = [
    { id: 1, title: "Book One", author: "Author A" },
    { id: 2, title: "Book Two", author: "Author B" },
    { id: 3, title: "Book Three", author: "Author C" }
  ];
  
  function fetchBookDetails(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const book = books.find(b => b.id === id); 
        if (book) {
          resolve(book); 
        } else {
          reject("Book not found"); 
        }
      }, 1000); 
    });
  }
  
  const loadBookData = async () => {
    try {
      const [book1, book2] = await Promise.all([
        fetchBookDetails(1),
        fetchBookDetails(2)
      ]);
      console.log("Book 1:", book1);
      console.log("Book 2:", book2);
    } catch (error) {
      console.log(error);
    }
  };
  
  loadBookData();