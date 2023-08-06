// домашнее задание алгоритмы 1

// let array = [3, 6, 4, 7, 2, 1, 9]
// let count = 0
// function findIndex(num_1,num_2){
// let resul = 0
// for(let i = 0; i < num_1.length;i++){
// count++
//   if(num_2 == num_1[i]){
//     resul = num_2[i]
//     return ` найденное число ${num_2}  индейс числа ${i} `
//   }
// }
// }
// console.log(findIndex(array,7));
// console.log( ' сусмма итерации '  + count);


// домашнее задание алгоритмы 2

let   array = [3, 6, 4, 7, 2, 1, 9]
function resultSqr(item) {
  let sum = 0
  for(let i = 0;i < item.length;i++){
  sum +=  item[i] ** 2
  }
  return sum 
}
console.log( resultSqr(array));