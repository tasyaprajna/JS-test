// array for each

//ambil element
const skills = document.getElementById("skills");

//buat variabel
const mySkills = ["ES6", "UX Design", "Git", "Java"];
mySkills.push("Dev"); //kalau ditambahin gabakal error (push, pop)

//mySkills = ["C++"]; //tapi kalau valuenya diganti semua bakal error

console.log(mySkills);

//ES6
//foreach 
// mySkills.forEach(function(mySkill) { //iterator function
//     console.log(mySkill);
// });

//version 2 pisah function
// function showSkill(mySkill) {
//     console.log(mySkill);
// }

// mySkills.forEach(showSkill);


//version 3
// mySkills.forEach((mySkill) => { //iterator function
//     console.log(mySkill);
// });

//version 4 pisah function
const showSkill = (mySkill) => {
    console.log(mySkill);
}

mySkills.forEach(showSkill);

//version 5
let parent = "<ul>";

mySkills.forEach((mySkill) => {
    parent += `<li>${mySkill}</li>`;
});

parent += "</ul>";

skills.innerHTML = parent;