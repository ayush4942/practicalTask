const books = [
      { title: "Book One", author: "Author A", year: 2020 },
      { title: "Book Two", author: "Author B", year: 2021 },
      { title: "Book Three", author: "Author A", year: 2020 },
      { title: "Book Four", author: "Author C", year: 2022 },
      { title: "Book Five", author: "Author B", year: 2021 }
    ];
    
    const year = books.reduce((p, c) => {
      const key = c.year; 
      
      if (!Object.prototype.hasOwnProperty.call(p, key)) {
        p[key] = []; 
      }
    
      p[key].push(c); 
      return p;
    
    }, {});
    
    console.log(year);
