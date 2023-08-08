'use strict';

// secure mode and avoid introduction of bug

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log('I can drive : D');

// function logger()
// {
//     console.log('My name is Aniket');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples , oranges)
// {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(20,15);
// console.log(appleJuice);

// // Anonymous function

// const calcAge = function(birthyear)
// {
//     return 2037-birthyear;
// }
// const age = calcAge(1991);

// console.log(age);


// //arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age2= calcAge3(1992);
// console.log(age2);

// const yearUntilRetirement = birthyear =>
// {
//     const age=2037-birthyear;
//     const retirement=65 - age ;
//     return retirement;
// }

// console.log(yearUntilRetirement(1991));


//Arrays

// const friends = [ 'michael' , 'steven' , 'peter'];
// console.log(friends);

// const years = new Array(1991,1984,2008,2020);

// console.log(friends.length);

// console.log(friends[friends.length-1]);

// const firstName = 'Aniket';
// const Aniket = [ firstName , 'saha' , 2023-1999 , 'Engg', friends];

// console.log(Aniket);
// console.log(Aniket.length);

const friends = [ 'michael' , 'steven' , 'peter'];
const newLength =friends.push('jay'); // push pop returns the length of the array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add to first position

// Remove elements

friends.pop(); // last element
console.log(friends); 

friends.shift(); // removes first element
console.log(friends);

console.log(friends.indexOf('steven'));

console.log(friends.includes('bob'));

const aniketArray = [
    'Aniket',
    'Saha',
    2023-1999,
    'engg',
    ['mihcael','peter','steven']
];

const aniket = {
    firstName : ' Aniket' , 
    lastName : 'Saha',
    job : 'engg',
    friendz : ['mihcael','peter','steven']
};

// interesting stuff

const nameKey = 'Name';
console.log(aniket['first'+nameKey]);
console.log(aniket['last'+nameKey]);

// thing it does it the code inside the [] is considered as
// a expression so it concats the 'first' with the value stored inside the variable
// it becomes firstName which is the key of the predefined array and outputs the object associated with the key
// . notation for extact entity and [] for expression


// add attributes

aniket.location = 'India';
aniket['github'] = 'aniket30i';


// const interestedIn = prompt('What you want?')
// console.log(aniket[interestedIn]);


// if(aniket[interestedIn])
// {
//     console.log(aniket[interestedIn]);
// }
// else
// {
//     console.log('Wrong req!')
// }

console.log(aniket);

console.log(`${aniket.firstName} has ${aniket.friendz.length} friends and ${aniket.friendz[0]} is the bestfriend yo1`)