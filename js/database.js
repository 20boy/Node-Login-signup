// var database = 
//     {
//        used3 :'johnson',
//        user4 : 'folder'
       
//     }
 
// import { koye } from "./cupy.js"; 
//  koye()


//  var stories = [
//     {
//         user5 : 'femo',
//         stowy : 'chemistry is too hard '
//     },
//     {
//        user6 : 'femi',
//        stowy : 'physics is soo fun'
 
//     }
 
//  ]
 
//  var usser = prompt('whats your username')
//  var useer = prompt('whats your password')
 
//  function signIn(pass, word ) {
//   if (pass === database.used3 && word === database.user4) {
//     console.log(stories)
//     }
//     else{
//         alert('somethin is not right');
//     }
//      }
     
//      signIn(useer,useer)


// function catcher() {
//    try {
//        console.log('this is the one thats working')
//       throw new Error('omo you no sabi anything oo')
//       } catch (error) {
//       console.log(console.log(error.message))}
//       finally{
//          console.log("you sha don sabi am like dat")
//       } 
//    }
// catcher()

// const labalba = 0

// if (labalba = 10)
//  {
//    console.log(true)
// }

// function forwardHistory()  {window.history.forward()}

// let dior = confirm('press a button please')

// if (dior === true) {
//    alert('you just agreed now')
// }
// else {
//    alert('you said no')
// }

function reverseWords(epa) {
if (!epa && epa.length < 2 && typeof epa !== "string" ){
   return "i dont like that"
}

const backwards = [];
const totalItems = epa.length - 1;
let i = totalItems;
for (i >= 0; i--;) {
   backwards.push(epa[i]);
}
console.log(backwards);

return backwards.join('');
}
reverseWords('koyejo does his javascript always')

function reversWays2(epa) {
   return epa.split('').reverse('').join('')
}
 
 reversWays2('I`m koyejo and i like javascript')
 
 
 
 
 