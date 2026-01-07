//promises logic in js
const movie_rating = new Promise((resovle, reject) => {
    let rating = 1.5;
    if (rating > 4) {
        resovle("good movie");
    }
    else {
        reject("waste of time");
    }
});
//call promises
movie_rating.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
})