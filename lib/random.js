// module.exports = (val1,val2)=> {
//     return (val1 === val2)?true:false;
// };


function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
  }
  
  module.exports = randomNumber;