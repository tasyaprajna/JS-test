// console.log('Hello World');

// var myName = "Prajna"
// const mySecondName = "Tasya"

// console.log(myName)

const user = document.getElementById('user');

//ES5
const user_logged_in = "Prajna";
user.innerHTML = "Welcome, " + user_logged_in;


//ES6
// user.innerHTML = 'Selamat datang, ${ user_logged_in }';

user.innerHTML = `Anda berhasil login ${user_logged_in}`;