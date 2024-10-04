


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
        console.time("fetchBooks");

        const res = await Promise.all([
            fetchBookDetails(1),
            fetchBookDetails(2),
            fetchBookDetails(3)
        ]);

        res.forEach((book, index) => {
            console.log(`Book ${index + 1}:`, book);
        });

        console.timeEnd("fetchBooks");

    } catch (error) {
        console.log(error);
    }
};

loadBookData();
