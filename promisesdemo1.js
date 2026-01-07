const bubble_game = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) + 1;
    if (number >= 5) {
        resolve("high score");
    }
    else {
        reject("low score");
    }
});
bubble_game.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
});
