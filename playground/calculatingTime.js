var moment = require('moment');

// // var date = new moment();

// var todayFormat = moment().format('MMMM Do YYYY, h:mm:ss a');

// console.log(todayFormat);
console.log(moment().subtract(10, 'days').calendar()); 
console.log(moment().add(1, 'days').calendar());

// difference


// var birth = moment([1982,10,16]);
// var today = moment([2018,9,17]);
// // console.log(today);

// function time(now, before){
//     return console.log(now.diff(before, 'years'));
// }

// time(today, birth);



// better approach / easier

// console.log(moment(birth, today).fromNow());
