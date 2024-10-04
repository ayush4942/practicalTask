let books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 2005
    },
    {
      id: 4,
      title: "Moby Dick",
      author: "Herman Melville",
      year:2001
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813
    }
  ];

  const bookAfter2000 = books.filter(book => book.year >2000);
  console.log(bookAfter2000);
  