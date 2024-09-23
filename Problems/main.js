// Problem Solving

// function trailingZeros(n) {
//   let i = "";
//   while (n >= 2) {
//     let a = n % 2;
//     a.toString();
//     i = a + i;
//     n = n / 2;
//   }
//   n.toString();
//   i = n + i;
//   let count = 0;
//   console.log(i);
//   for (let j = i.length - 1; j > 0; j--) {
//     if (i[j] != "0") {
//       break;
//     }
//     count++;
//   }
//   return count;
// }



// function hero(bullets, dragons) {
//   if (bullets / 2 < dragons) {
//     return false;
//   }
//   return true;
// }



// function sc(floor){
//   if(floor<2){
//     return ""
//   }
//   let i = 0;
//   let answer = "";
//   while(i<floor-1){
//     answer += "Aa~ ";
//     i++;
//   }
//   if(floor<7){
//     answer += "Pa! Aa!";
//   }else{
//     answer += "Pa!"
//   }
//   return answer
// }