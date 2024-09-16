const getTheTitles = function(books) {
    const bookTitles=[];
    for(let val of books){
        bookTitles.push(val.title);
    }
    return bookTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
