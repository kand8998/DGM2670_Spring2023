
//create a for loop using i (iterator stand in variable)
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// while loop
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// break test
// for (let i = 0; i < 10; i++) {
//     if ( i === 5) {
//         break;
//     }
//     console.log(i);
// }

// // continue test 
// for (let i = 0; i < 10; i++) {
//     if ( i % 2 === 0) {
//         continue
//     }
//     console.log(i);
// }

// // while break and continue 
// let i = 0;

// while (i < 10) {
//   if (i === 5) {
//     break;
//   }
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// // Output: 1 3

// // labels
// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (i === 1 && j === 1) {
//         break outer;
//       }
//       console.log(i, j);
//     }
//   }
//   // Output: 0 0 0 1 1 0

// // for each loop
// const arr = [1, 2, 3, 4, 5, 6];
// const animalArr = ["dog", "cat", "bird", "worm"];

// animalArr.forEach(animal => {
//     if (animal === "dog") {
//         console.log("very good " + animal);
//         return;
//     }
//     console.log("good " + animal);
// })

// // for of loop (does same as the for each loop above)
// for (let animal of animalArr) {
//     console.log(animal);
// }


//Array Filter
// Define an array of objects
var students = [
    { name: "Alice", grade: 80 },
    { name: "Bob", grade: 90 },
    { name: "Charlie", grade: 70 },
    { name: "David", grade: 60 },
    { name: "Eve", grade: 95 }
  ];
  
  // Filter the array to only include students with a grade of 80 or higher
  var highAchievers = students.filter(function(student) {
    return student.grade >= 80;
  });
  
  // Sort the array of high-achieving students by their grade
  highAchievers.sort(function(a, b) {
    return b.grade - a.grade;
  });
  
  // Log the sorted array of high-achieving students
  console.log(highAchievers);