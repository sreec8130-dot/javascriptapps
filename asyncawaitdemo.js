//async await logic
const movie_rating = () => {
    return new Promise((resolve, reject) => {
        let rating = 4.5;
        if (rating > 4) {
            resolve("good movie");
        }
        else {
            resolve("waste");
        }
    });
};
// how to call promise with async/await
const movieresult = async () => {
    try {
        const result = await movie_rating();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
};
movieresult();