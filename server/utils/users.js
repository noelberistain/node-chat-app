// [{
//     id: '/#12hjwjhwfcydg',
//     name: 'Andrew',
//     room: 'The Office Fans'
// }]

class Users {
    constructor() {
        this.users = [];
    }
    //METHODS

    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }//addUser(id, na...

    removeUser(id) {
        var user = this.getUser(id);
        if(user){
            this.users = this.users.filter(user=>user.id !== id);
        }
        return user;
    }//removeUser()

    getUser(id) {
        return this.users.filter(user => user.id === id)[0]
    }//getUser(id)

    getUserList(room) {
        var users = this.users.filter(user => user.room === room);
        //var namesArray = this.users.filter(user => user.room === room).map(user=>user.name);
        var namesArray = users.map(user => user.name);
        return namesArray;
    }//getUserList()

} // class Users...

module.exports = { Users };


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old`
//     }
// }

// var me = new Person('Noel', 35);
// console.log('this.name', me.name);
// console.log('this.age', me.age);