// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

const books = [
    {
        title: "laws of human nature",
        author: "abcd",
        year: "1999",
    },

    {
        title: "psychology ",
        author: "cfd",
        year: "2000",
    },
    {
        title: "Diary of a young girl",
        author: "annie frank",
        year: "1904",
    },
];

function sortTitle(heading){
    let sorted= heading.sort();
    console.log(sorted);
}

function onlyBooktitles(books,callback){
  const titles = books.map((book)=> book.title);
  callback(titles)
}

onlyBooktitles(books,sortTitle);