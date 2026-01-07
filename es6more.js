//multi line strings
//backtick
let desc =
    `Vignan's Lara Institute of Technology & Science (VLITS) is a private engineering college in Vadlamudi, Guntur, Andhra Pradesh, 
    established in 2007, known for its quality tech education, NAAC A + accreditation,
    and focus on practical skills, offering B.Tech & M.Tech in various engineering fields with good industry placements, particularly in CSE.
    It's affiliated with JNTU, Kakinada, and approved by AICTE, featuring decent infrastructure, faculty, and a conducive academic environment with facilities like hostels, health centers, and sports amenities.`;
console.log(desc);
//string interpolation
let firstname = "chandana";
let lastname = "sree";
console.log(`${firstname}${lastname}`);
//array destructing
let pname = ["realme", "lg", "vivo"];
let [brand1, brand2, brand3] = pname;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movieinfo = {
    moviename: "bahubali",
    director: "rajamouli",
    producer: "shobu"
};
let { moviename, director, producer } = movieinfo;
console.log(moviename);
console.log(director);
console.log(producer);
