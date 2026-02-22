const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["Batman","Superman","Flash"]


//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const allnewheros = [...marvel_heros,...dc_heros]
//console.log(allnewheros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr = another_array.flat(Infinity)
console.log(real_arr);


console.log(Array.isArray("luci"))
console.log(Array.from("luci"))
console.log(Array.from({name:"luci"})) //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



