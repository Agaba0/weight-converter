console.log("welcome to Kilogram to Gram weight converter");
let select = prompt('enter "1" for Kg-G and "2" for pound--ounce converter');

function converter() {
  if (select == 1) {
    one();
  } else if (select == 2) {
    two();
  } else {
    reEnter = prompt("please enter the correct input");
    if (reEnter == 1) {
      one();
    } else if (reEnter == 2) {
      two();
    } else {
      console.log(" wrong input  'thanks for trying' ");
    }
  }
  function one() {
    let input = prompt("please enter the number in kilogram");
    let gram = input * 1000;
    console.log(`the result of ${input}k is ${gram}G `);
  }
  function two() {
    let input = prompt("please enter the number in pound");
    let ounce = input * 16;
    console.log(`the result of ${input}Pounce is ${ounce} ounce `);
  }
}

converter();
