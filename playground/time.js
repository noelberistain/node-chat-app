var moment = require('moment');

var date = moment();


var createdAt = 1234;
var date = moment(createdAt);

var someTimestamp = moment().valueOf();
console.log(date.format('k:mm a'))
console.log(someTimestamp);