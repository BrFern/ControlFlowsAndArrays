//Introduction

// var names = ['ryu', 'crystal', 'mario']
// names.length 
// names.sort();
// window
// window.innerWidth
// null //not object

// var name ='mario'
// name.length

// var name2 = new String('ryu')

//Object Literals

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);

//Updating Properties

userOne.name = 'Yoshi';

