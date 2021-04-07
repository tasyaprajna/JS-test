// ambil element
const skills = document.getElementById('skills');
const primarySkills = document.getElementById('primarySkills');

const mySkills = ["ES6", "Git", "UX Design"];

//map
const printSkillsMap = mySkills.map((skill) => {
    return skill;
});
skills.innerHTML = printSkillsMap;


//foreach
const printSkillsForEach = mySkills.forEach((skill) => { //undefined
    return skill;
});
// skills.innerHTML = printSkillsForEach;


//filter
const printPrimarySkills = mySkills.filter((skill) => {
    return skill != "Git";
});

primarySkills.innerHTML = printPrimarySkills;