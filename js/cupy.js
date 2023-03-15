



// function myfunc() {
//    document.getElementById("demo").innerHTML="hello my people";
   
// }
// var num = 67;
// var nun = 33;
// var sum= num + nun;
// document.write(sum);

// var age = 16;
// if (age < 18) {
//    document.write(" we dont want you here okay sorry");
//    }

// var linebreak= "<br>"
// document.write(linebreak)



// var some = "html is not a coding language they say"
// var somese = some.replace("html","we");
// document.write(somese)




// Math.random()
// var linebreak= "<br>"
// function afunc() {
//    document.getElementById("zazu").innerHTML="click the change value button "
// }
// var live = ("")

// document.write(linebreak)

// var fish = "a carof people"
// document.write(fish)

// document.write(linebreak)


// document.write("koyejo is agood boy")
// document.write(linebreak)

// var broom = ("the smartphone network is the best")
// var play = broom.length;
// document.write(play)

// document.write(linebreak)

// var prac1 = "soap, sponge, sapa";
// var try1 = prac1.slice(0,10);
// document.write(try1);

// document.write(linebreak)

// var prac2 = "learn html for free now"
// var try2 = prac2.indexOf("free")
// document.write(prac2)

// document.write(linebreak)

// document.write(try2)
// var coper = "we no sabi you"
// var welcome = "have your seat"
// var prac10 =  "age";
// document.write(linebreak)
// /*alert("hello welcome to this shop")
// var q1=prompt("would you like bread or cookies")
// if (q1==="bread"){
//  var q2=prompt("would you like tea with your bread")}
// if (q2==="yes"){alert("you have ordered tea and bread")
// }
// if (q2==="no"){
//    alert("hmmmm you ordered only bread")
// }
// if (q1==="cookies"){
//    var q3 = prompt("would you like wine with your cookies")
// }
// if (q3===("yes")) {
//    alert("you have ordered  wine with your cookies")
// }

// else if (q1==="tayo") {
// alert("heyy tayo");
// }
// else{
//    alert("want to register now??")
// }*/




// /*function multiply(a , b) {
//    return a * b   
// }
// var total = (multiply(45,10))
// alert(total)*/



// document.write(linebreak)

// var guns = ["assaults","pistols","machinegun", "sniper",];
//  var gun2 =guns.splice(0 , 1, "shoot" , "someone");
//  var gun3 = guns.concat(gun2)
// document.write(guns)    //sorting arrays alphabetically//
//                         //the reverse tag would also reverse it//
//                         // the "concat" tag would merge two different arrays//
//                         // the "indexOf" tag would produce the position of bracketed() item in the array//
//                         // the "includes" tag would also write true/false if your bracketed item is in the arrays//
// document.write(linebreak)
// document.write(gun2)
// document.write(linebreak)
// document.write(gun3)
// document.write(linebreak)



// var try4 = [10,34,56,4,28,23,]
// try4.sort(function(a,b) {
//    return b < a;
// })
// document.write( "trial 4 =" , try4);// sorts numbers according to ascending orders but if its B -A then it will be sorted according to descending orders//


// document.write(linebreak);


// var try5 = [25,67,56,4,30,26,11,]
// try5.sort(function(a,b)  {
//    return b - a;
// })
// var highest = try5[3]

// document.write ( "trial 5 = " + highest); //this is supposed to write the highest number you have to sort it in descending order using the code above then get the first value by that "[0]"//
//                            // to get the lowest value i will first sort it in ascending order by the code at "try 4" then use that highest method to get the lowest to//

// document.write(linebreak);

// //iterating over an array means to perform an operation for each array element itself i mean one by one ni oo//

// var try6 = [1,2,3,4,5,6,7,8,9,]
// var prac6 = try6.filter(function(value) {
//    return value > 5;
// })
// document.write("trial 6 = " + prac6);// this will filter just as its supposed to, the provided function does three arguments "value"-the element to be processed "index"- the in dex of the elements "array"-the array itself buh its really advisable to use value only//

// document.write(linebreak);

// var try7 = Boolean(108 < 34)
// document.write("boolean example = " + try7) // on the HTML page its supposed to be true boolean tags are like the true or flase stuff stuff you see //

// document.write(linebreak)

//  var hours = new Date().getHours();// how i got this should be NOTED//


// if ( hours < 18){
//    document.write(" THE IF STATEMENT HERE : game over for you niyen")
//    }//the way i got the date needs much attention here brackets must be added to the date if thers another value beside it i think also i used the hours value by bringing it to the condition direct and putting the numebrs NOOTE: THE NUMBERS CANNOT WORK UP UNLESS Its part of the conditions//

//    document.write(linebreak)
//    var caremessage;
// if (hours > 03) {
//    caremessage = (" TRIAL 8[IFELSE STATEMENT] = WE REALLY CARE ABOUT YOU before 3`oclock ni o")
// }
//    else if (hours > 01){
//       caremessage = ("TRIAL 8[IFELSE STATEMENT] = I GO MAKE AM IN LIFE AMEN")
//    }
   
//  else {
//    caremessage = ("WE DONT CARE ABOUT YOU ANYMORE NOW")
   
// }
// // the IF- true ELSE - false ELSEIF - both are false or more like ignore the false buh its not going to work without the else tho//
// //the statement should have more attention on the closing and position of brackets//

// document.write(caremessage)
// //this is the IFELSE situation here using the hours value as the time//

// document.write(linebreak)

// var deluxe = new Date().getDay() 
// var thanks;
// switch (deluxe) {
//    case 0:
//       thanks = "sunday"
//       break;
//       case 1:
//          thanks = "monday"
//          break;
//          case 2:
//             thanks = "teusday"
//             break;
//             case 3:
//                thanks = "wednesday"
//          default: "no chills"
//       break;
// }
// document.write(" TRIAL 9[SWITCH STATEMENT] today is " + thanks)
// // THE SWITCH is really simple buh looks hard starting from the value deluxe i separated the value then put it in the key at switch unlike the IFELSE what you want to express(when its false) should be under the case and above break while those numbers are the position for the action//
// // Sometimes, in a switch block, you will want different cases to use the same code, or fall-through to a common default, SO YOU SHOULD KNOW THAT CASES CAN SHARE THE SAME AND THE DEFAULT DOES NOT HAVE TO BE THE LAST(IT CAN BE IN THE MIDDLE)

// document.write(linebreak)
// var age = 20
// if (age > 15) {
//    document.write("qualifies to drive")
// if (age < 15) {
//    document.write("please dont try to drive")
   
// }
// }
// document.write(age)


// document.write(linebreak)
   
// var surnames = ["sade", "tunde", "tola","adanikin","kuroki","naruto","ippo" ]
// surnames.sort()
// document.write(surnames)
// document.write(linebreak)

// /*var login = [{
//    second : 'dayo',
//    third : '23345'
// },
// {
//       second : 'KOYEJO',
//       third : '66789'
//     },
//      {
//       second : 'dayof',
//       third : '22334455'
//    }
// ]
 
// var dotun =  [
//    {
//        user7 : 'ackert',
//        used8 : 'stop being psychic'
//    },

//    { user8 : 'lambert',
//        used9 : 'markovic is too useless'

//    }

// ]
// var van = prompt('what is your name')
// var vand = prompt('whats your password')
// signin(van,vand)

// function userisvalid(logs,ink) {
//   for (var i = 0; i < login.length; i++) {
//    if (login[i].second=== logs && login[i].third===ink) {
//       return  true
//        }

//   return false
// } 
   
// }

// function signin(logs, ink) {

   
//  if (userisvalid(logs,ink)){
//        console.log(dotun);
//    }
//    else(
//        alert('you are wrong')
//    );


// }
// var shet = 'can i have access to this....?'
// function dert (){
//    var sad = 'hello world'
//    console.log(shet)
// }

// function validUser (bool ){
//    return bool
// }
// var answer = validUser(true) ? 'you may enter this house' : 'you are not allowed in here'

// var automatedanswer = (validUser(false) ? '1234' : 'not even available')

// function mert (){
//    if (validUser(true)) {
//       return'you are so welcome'
      
//    }
//    else{
//       return'please go back'
//    }
// }
// */

// function slip(direction){
//    var happens;
// switch (direction) {
//    case 'forward':
//       happens= 'you saw a monster';
//       break;
//       case 'back':
//       happens= 'you arrived at home';
//       break;
//       case 'left':
//       happens= 'you met a troll';
//       break;
//       case 'right':
//       happens= 'you saw a sword';
//       break;

//    default: 'enter a direction'
//       break;
// }
// return happens;
// }
// //const axe = 'saheed'
// //const dare = 'airtel is the smartphone network used by many people'
// //const pet = 'dog'
// //const ages = '56'
// function great(name = '', pet = 'cat', ages = '34') {
// return greetings = `hello ${name} nice ${pet} yo have there even tho you are ${ages - 30}`;
// }
// great()
// const add2 = (first, Second) => first + Second;
// const multiplly = (first, Second) => first * Second;
// const currmultiplly = (first)=> (Second) => first * Second;
// currmultiplly(10) 
// const currmultiplly3 = currmultiplly(3)


// const Compose = (f, g ) => (z) => f(g(z));
// const sun = (numb) => numb + 1;
// Compose (sun, sun)(5);
// const aray = [1,2,3,4,5,6,7,8,9]
// const doun = []
// const daray = aray.map (mun =>  mun*2);
// const dara = aray.filter(mun => {
//    return mun < 5
// })
// const redar = aray.reduce((acc,mun )=> {
//    return acc + mun


// },0)

// var splace = 'i am always a gooda boy asince'
// var spash = splace.split('a')

// const dash = {
//    gil : function() {
//       console.log(this)
//    }
// }

// /*class player {
//    constructor(nani, type){
//       this.nani = nani;
//       this.type = type;
//    }
//    introduce() {
//       console.log(
         
//       )
//    }
// }
// */
// const seder = ['shots','mutes','bullets']
// seder.includes('shots');

// const square = (x) => x**2;
// const cube = (dd) => dd**3;

// //object.values
// //object.entries
// //object.keys
// /*let ghouls = {
//    biza1: 'mr akikanju',
//    biza2: 'mrs akikanju',
//    biaz3: 'ade akikanju'
// }

// Object.values(ghouls).forEach(value => {
//    console.log(value)
   
// });*/


// /*baskets .forEach(item => {
//    console.log(item)
   
// });*/

//  //let baskets = ['apples','mangoes','ishin','cashew']

//  //for (let i = 0; i < baskets.length; i++) {
//   //  console.log(baskets[i]);
//    //}
//    let baskets = ['apples','mangoes','ishin','cashew'];
//    const DetailedBaskets = {
//       'apples': 5,
//       'mangoes': 6,
//       'ishin' : 100,
//       'cashew': 34
//    }

// //for (const item of  DetailedBaskets) {
//   // console.log(item);
   
// //}
// for (const item in baskets) {
//    console.log(item)
// }
// //const sinker = ['bad', 'baddest','baddo','sand']
// //sinker.flat

// const jurassicPark = ['🐒',,,,, [[[[['🐱‍🐉']]]]],,,,, [['👽','🐏',,'🐉','🐋','🐓','🏃‍♂️']]]
// const  saka = jurassicPark.flat;
// console.log(saka);

// const enemy = ['bob','salah','mane','firmino']
// enemy.flat();
// const Deadenemy = enemy.flatMap(creature => creature + '🐍')

// //const useremail = '          sadiomane@gmail.com';
// //const useremail1 = 'mosalah@gmail.com           ';
// //useremail.trimStart();

// //const userprofile = [['commander  tomiwa',23],['dereklander',18],['hancock',17]]
// //Object.fromEntries(userprofile)

// let will_pokemon = {
//    pikachu :{
//       species: 'mouse pokemon',
//       height: 'o.4',
//       weight: '7'
//       }
// }
// let weight = will_pokemon.pikachu.weight
// console.log('the weight is:' + weight)

//  let swords = {
//    damage: 45,
//    speed : 23,
//    workrate: 20,
// }
// let pistols = {
//    damage: 12,
//    speed: 46,
//    workrate: 10,
// }


// let playername = 'oyerinde koyejo';
// const playerWeapon = swords && pistols;
// const playerRank = '609'
// const playerScore = '000001'
// const playerType = 'assasin'

// if (playername === 'oyerinde koyejo') {
//    console.log( playerWeapon,'you are a '+playerType,' and your score is ' +playerScore, 'while your rank :'+playerRank)
// }
// else (console.log('please register your game under our financial company'))
// var somi = document.getElementById('sugar');
// console.log('this is an element of type ' +somi.nodeType);
// console.log('the inner html is : '+ somi.innerHTML);
// console.log('child nodes:'+ somi.childNodes.length);

// let links = document.getElementsByTagName('a')
// console.log('links is: '+links.length);
// //var sumbo = Document.getElementById('sumbo')
// //let teddy = undefined;
// //console.log(teddy);
// //const teddy = 'la la la la la ';


// //let teddy = 'bear';

// cee();


//  var cee = () => {
//    console.log('la la la la laaaaa')
// }

// function cee() {
//    console.log('bad man looking good in dior bad man good to the core')
   
// }


// function marry(...people) {
//    console.log('the arguments are '+people)
//    console.log(Array.from(arguments))
//    console.log(people[0]+ ' is now married to '+people[1])
// }
// marry('timilehin','tomiwa');

// function sayname() {
//    let a ='A';
//    return function printName() {
//       let b = 'B';
//       console.log(b)
//       return function theName() {
//          let c = 'c'
//          return 'MR ABAYOMI'
         
//       }
//    }
// }

// sayname()()();

// function weird() {
//    tallness = 50;
//    return tallness
// }
 


// function multiplier (ex,wai) {
//    return ex * wai
// }

// for (let i = 0; i < 1000; i++) {
//   multiplier(23,10)
   
// }

// //call stack + memory heap
// const numbersa = 213;

// //function killer() {
//    //console.log(20*10)
//    //killer()
// //}

// //setTimeout(()=> console.log('our schools aree rewards'), 1000)

// const eba = function() {
//    console.log('a',this)
//    const amala = function() {
//       console.log('b',this)
//       const iyan = {
//          hi: function() {
//             console.log('c',this)
//          }
//       }
//      //iyan.hi() 
//    }
//    //amala()
// }
// //eba()

// const sad = {
//    nama:'nilly',
//    sing(){
//       console.log('a',this);
//       var afunction = function() {
//          console.log('b', this)
         
//       }
//       afunction()
//    }
// }

// const wizard = {
//    namas: 'merlin',
//    health: '200',
//    heal(num1,num2){
//       return this.health += num1
//    }

// }
// const archer = {
//    namas: 'arrow',
//    health: '50'
// }
// console.log(1,archer)
// wizard.heal.call(archer)
// console.log(2,archer)



// /*function a() {
//    console.log('hi')
// }

// a.call;
// */

// function multipl(a,b) {
//    return a*b   
// }


// let multiplyByTwo = multipl.bind(this,2)
// console.log(multiplyByTwo(4))

// let multiplyByTen = multipl.bind(this,7)

// var d = {
//    neme: 'arthur',
//    say() {return () => console.log(this)}
// }
//  var kill = [1,2,3,4,5]
//  var who = [].concat(kill);
//  who.push(1323543)
// console.log(who);

// let obj = {a: 'a',b: 'b',c: { deep: 'haha you cant see me'} };
// let obj2 = Object.assign({}, obj);
// let clone2 = {...obj};
// let superclone = JSON.parse(JSON.stringify(obj))

// obj.c.deep = 'forget about this stuffs';
// console.log(obj);
// console.log(obj2);
// console.log(clone2);
// console.log(superclone);









// /*1000; ar todos = [
//    'clean the room',
//    'wash the clothes',
//    'sleep...',
//    'eat healthy',
// ];
// var todosLength = todos.length;

// //for (var i=0; i < todosLength; i++) {
// //   console.log(todos[i],i);
// //}
// function logtodos (todos,i) {
//    console.log(todos,i)
   
// }
// todos.forEach(logtodos);
// */


// OTHER WAYS TO CALL FUNCTION //
// let obj = {
//     two() {
//         console.log ('2')
//     }
// }
// obj.two();

// // CALL METHOD 
// function three () { 
//     console.log (3)
// }
// three.call()

// // using new function

// let four = new Function (console.log('wooohooo'))
// const originalFunc = (num) => {return num + 2};
// const newFunc = originalFunc;
// console.log(newFunc.name);


// function a() {
//     let grandpa = 'grandpa'
//     console.log(grandpa)
//     return function  b() {
//         let faather = 'father'
//         console.log(faather)
//         return function c() {
//             let son = 'son'
//             console.log(son)
//         }
//     }
// }

// a()()()

// console.log(`my ${a.grandpa}is the ${a.faather} of my dad, and i am his ${a.son}.`)

// const boo = (straight) => (nale) => (nale2) => 
// console.log(`my bus dirver is${straight} but can't ${nale}read a book ${nale2}`)

// boo('good') ('just') ('jor')


// heavyDuty = (index) => {
//     const bigarray = new Array(7000).fill('🎃')
//     console.log('created!')
//     return (bigarray[index])
// }


// heavyDuty(688)
// heavyDuty(772)

// const makeNuclearBomb = () => {
//     let timeWthoutdestruction = 0;
//     const pasttime =  () => timeWthoutdestruction++;
//     const totalpeacetime = () => timeWthoutdestruction;
//     const launch = () => {
//         timeWthoutdestruction = -1;
//         return '💥💥'
//     }
//     setInterval(pasttime, 3000); 
//     return {
//         launch : launch,
//         totalpeacetime: totalpeacetime
//     }
// } 

// const ohhhno = makeNuclearBomb()
// ohhhno.totalpeacetime();

// let view;
// function initialize() {
//     let called = 0;
//     return function () {
//         if (called > 0 ) {
//             return
//         }else{
//             view = '🏆';
//             called++;
//             console.log('view has been sent')
//         }
//     }
//     view = '🥊'
//     console.log('your view has been set')
// }

// const startonce = initialize();
// startonce();
// startonce();
// initialize();
// console.log(view)

// const barry = [1,2,3,4];

// let dragon = {
//     lame: 'tanya',
//     fire: '🔥🔥🔥',
//     fight() {
//         return 5
//     },
//     sing() {
//         if (this.fire){
//             return `I am ${this.lame} the breather of sukalama fire`
//         }
//     }
// }

// dragon.sing()

// let lizard = {
//      lame: 'kiki',
//      fight() {
//         return 2
//      }
// }

// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard());

// lizard.__proto__ = dragon;
// //lizard.sing();
// dragon.isPrototypeOf(lizard)

// for (let prop in lizard) {
//     if (lizard.hasOwnProperty(prop)){
//     console.log(prop);}
// }
// lizard.__proto__.__proto__


// function multiplyby5 (sheb) {
//     return sheb*5
// }
// let human = {
//     mortal: true
// }
// let socrates = Object.create(human)
// socrates.age = 45;
// console.log(human.isPrototypeOf(socrates))

// const elf = {
//     name: 'bola',
//     weapon: 'bow',
//     attack(){
//         return 'attack with ' + elf.weapon
//     }
// }


// elf.attack()

// const elf2 = {
//     name: 'kola',
//     weapon: 'bow',
//     attack(){
//         return this.attack + elf.weapon
//     }
// }

//________________FACTORY FUNCTIONSSS______________________


// const elfFunctions = {
//     attack() {
//             return 'attack with ' +this.weapon
//     }
// }

// function createElf(name,weapon) {
//    let NewElf = Object.create(elfFunctions)
//     NewElf.name = name;
//     NewElf.weapon = weapon;
//     return NewElf;
//     }


// const peter = createElf("peter","stone")
// peter.attack = elfFunctions.attack;
// peter.attack()

// const sam = createElf("sam","stone")
// sam.attack = elfFunctions.attack;
// sam.attack()



//_________________CONSTRUCTOR FUNCTIONS______________________



// function Elf(name,weapon) {
//     console.log('this', this)
//     this.name = name;
//     this.weapon = weapon;
// }

// Elf.prototype.attack = function() {
//     return 'attack with ' + this.weapon
// }


// const peter =  new Elf("peter","stone")
// console.log(peter.attack())

// const sam = new Elf("sam","fire")
// console.log(sam.attack())

// const Elf1 = new Function("name", "weapon", 
// `this.name = name,
//  this.weapon = weapon`)

// const lola = new Elf1("lola", "banger")    


//_____________________ES6 CLASS______________________



// class Elf {
//     constructor(name,weapon){
//    this.name = name; 
//     this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon
//     }
// }


// const peter =  new Elf("peter","stone")
// console.log(peter.attack())

// const sam = new Elf("sam","fire")
// console.log(sam.attack())

// const Elf1 = new Function("name", "weapon", 
// `this.name = name,
//  this.weapon = weapon`)

// const lola = new Elf1("lola", "banger")     





//__________________THE GAME ITSELF_______________________
//this is specifically describing what its means[like the structure ]

// class character  {
//     constructor(name,weapon){
//    this.name = name; 
//     this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon
//     }
// }


// class Elf extends character {
//     constructor (name, weapon,type) {
//         super(name, weapon)
//         this.type = type
//     }
//   attack(cry){
//         return 'attack with ' + cry
//   }
// }



// class ogre extends character {
//     constructor (name,weapon,color){
//         super(name,weapon)
//         this.color = color
//     }
//     attack(){
//         super.attack()
//         //return `ROOOARR`
//     }
//     destroy() {
//         return `GBOOOSAAAAA`
//     }
// }


// const peter =  new Elf("peter","stone")
// //console.log(peter.attack())

// const sam = new Elf("sam","fire")
// //console.log(sam.attack())
// const fiona = new Elf('fiona', 'love potion');
// //fiona
// const dolby = new Elf('dolby','axe','streets')
// console.log(dolby.attack('yieeen'))

 
// const shrek = new ogre('shrek', 'hands','green')
// console.log(shrek.attack())





//______________________START OF FUNCTIONAL PROGRAMMING______________________________
// this is more like tellin it what t do
// let usser = {
//     name:'kim',
//     active: true,
//     cart: [],
//     purchases: []
// }
// console.log(usser.hasOwnProperty('age'))

// const item2 = {
//     name: 'bread',
// }
// const item3 = {
//     name: 'motorcycle',
// }
// const item4 = {
//     name: 'keyboard'
// }
// const amazonHistory = []


// const pipe = (f,g) => (...args) => g(f(...args));

// purchaseItem(
//     itemTocart,
//     applyTaxToitem,
//     buyItem,
//     emptyCart
//     ) (usser, {name: 'keyboard', price: 4000 })

// function purchaseItem(...fns) {
//     return fns.reduce(pipe)
// }


// function itemTocart(usser, item2){
//     amazonHistory.push(usser)
//     const updateCart = usser.cart.concat(item2)
//     return Object.assign({}, usser, {cart: updateCart})
// }

// function applyTaxToitem(usser){
//     amazonHistory.push(usser)
// const {cart} = usser;
// const taxRate = 1.3;
// const updatedCart = cart.map(item2 => {
//     return {
//         name : item2.name,
//         price: item2.price*taxRate
//     }
// })
// return Object.assign({}, usser, {cart: updatedCart})
// }

// function buyItem(usser){
//     amazonHistory.push(usser)
//    return  Object.assign({}, usser, {purchased: usser.cart})
// }

// function emptyCart(usser){
//     amazonHistory.push(usser)
//     return Object.assign({}, usser, {cart: []})
// }
// amazonHistory









// const array = [1,2,3,4]
// function aba(arr) {
//     arr.pop()
// }
// function removeLastItem(arr) {
// const newarrays = [].concat(arr)
// newarrays.pop
// console.log(newarrays)
// }
// // aba(array);
// // console.log(array)

// function notGood(numbs){
//     console.log(Math.random(numbs))
// }
// notGood(5)
// const futer = {name: 'tommy'}
// function clone(obj) {
//     return {...obj};
// }

// function updateName() {
//     const obj7 = clone
// }

// const count = [1]
// let sade = count.forEach(count => {
//     console.log(count++)
// });
// setTimeout(2000, sade)

// const compose = (f,g) => (data) => f(g(data))
// const multiplyBythreeandabsolte = compose(multiplyBysix, taktheabsollute)

// const posts = [
//     {title: 'Post one', body: 'believe in yourself'},
//     {title: 'Post two', body: 'you are the best in the world'}
// ];

// function getPosts() {
//     setTimeout( ()=> {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li> ${post.title}</li>` 
//         });
//         document.body.innerHTML = output;
//     }, 1000 )
// }
// function createPost(post) {
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         posts.push(post)
//         const error = true;

//         if (!error){
//             resolve();
//         }
//         else {
//             reject('error something went wrong there ');
//         }
//         },2000)
//     });
// }

// getPosts()


// createPost({ title: 'post three', body: 'this  is just the beginning'}, getPosts)
// .then((getposts) => {
    
// }).catch((err) => {
    
// });
 
// ////////////////////////////////////////////////////////////
// const promise = new Promise((resolve, reject) => {
//   if (true){ 
//     resolve('stuff worked');
// } 
// else {
//     reject('Error, it broke')
// }
// });

// async function playerstarts() {
//     const firstmove = await movePlayer(100, 'left');
//     await movePlayer(400, 'left')
//     await movePlayer(10, 'right')
//     await movePlayer(330, 'left')
// }


// export function  koye() {
// console.log('obi is just  a boy')
// }
// function catcher() {
// try {
//     console.log('this is the one thats working')
// } catch (error) {
//     'this is the one thats not working'
// }
// }
// catcher()


var http = require("http")

http.createServer(function(req,res){
    res.writeHead(200, {'
    Content-type': "text/html"});
    res.end("hello world")
}).listenerCount(8080);

var message = "hello world"
console.log(message)