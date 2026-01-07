//bind method
const movie_info = {
    movie_details: function () {
        return this.heroname + " " + this.villanname;
    }
};
const pushpa = {
    heroname: "bhai",
    villanname: "fahad fassil"
};
let= res=movie_info.movie_details.bind(pushpa);
console.log(res());