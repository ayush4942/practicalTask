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

const raceBookFetch = (id) => {
    return Promise.race([
        fetchBookDetails(id),
        new Promise((_, reject) => setTimeout(() => reject("Request timed out"), 2000))
    ]);
};

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
    console.time("fetchBooks");

    const results = await Promise.allSettled([
        raceBookFetch(1),
        raceBookFetch(2),
        raceBookFetch(3)
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Book ${index + 1}:`, result.value);


        } else {
            console.log(`Book ${index + 1} failed:`, result.reason);
        }
    });

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
