console.log("hello");

// arrays
let bucket_list = ["Travel around Europe", "Go to Japan", "Go to Key West"];
console.log(bucket_list[3]);

// for loop
for (let i = 0; i < bucket_list.length; i++) {
        console.log(bucket_list[i]);
}

// nested loop
let my_top = [
  "1The Dark Night",
  "2The Avengers",
  "10Interstellar",
  "3Inception",
  "12 Angry Men"
];

let imdb_top =  [
  "The Dark Night",
  "The Godfather",
  "The Shawshank Redemption",
  "12 Angry Men"
];

for (let i = 0; i < my_top.length; i++) {
  for (let j = 0; j < imdb_top.length; j++) {
    if (my_top[i] == imdb_top[j]) {
      console.log(my_top[i]);
    }
  }
}

// while loop
let balance = 1000
let years = 0

while (balance < 1000000) {
  balance += balance * 0.07;
  years += 1;
}
console.log(years);

// Iterators
my_top.forEach(movie => console.log("- " + movie));

let new_list = my_top.filter(movie  => movie.slice(0,1) == "1")
new_list.forEach(movie => console.log("- " + movie));
