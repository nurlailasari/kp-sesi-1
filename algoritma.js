//***IF and IF ELSE ***/

// let nilai = 100;
// let grade;

// if(nilai < 50) {
//     grade = 'E';
// } else if (nilai >= 50 && nilai <= 60) {
//     grade = 'D';
// } else if (nilai >= 61 && nilai <= 80) {
//     grade = 'C';
// } else {
//     grade = 'A';
// }

// console.log(`Grade: ${grade}`);


// //*** SWITCH CASE ***/
// const nilai = 70;
// let grade;

// switch (nilai) {
//     case 80:
//       grade = 'A';
//       break;      
//     case 70:
//       grade = 'B';
//       break; 
//     case 60:
//       grade = 'C';
//       break; 
// }

// console.log(`Grade: ${grade}`);


//*** Pengulangan ***/
// For

// for (let i = 0; i <= 10; i++) {
//     // console.log('halo semua');
//     console.log(`halo semua ${i}`);
// }

// While
// let x = 1;

// while (x <= 10) {
//     console.log(`halo semua ${x}`);
//     x++;
// }

// 

// ForEach
// const nilai = [50, 70, 40, 100];
// console.log(`isi nilai: ${nilai}`);

// nilai.forEach((value, index) => {
//     nilai[index] = value + 10;

//     // console.log(`${n+10}`)
//     // console.log (`isi nilai ${n}`);
//     // if (n < 50) { // with condition
//     //     console.log ('nilai jelek');
//     // } else {
//     //     console.log ('nilai bagus');
//     // }
// });
// console.log(`isi nilai +10: ${nilai}`)

// Map
// const nilai = [50, 70, 40, 100];

// const nilaiBaru = nilai.map((n, i) => {
//     if (i === 0) {
//         return n + 10;
//     } else {
//         return n;
//     }
//     // return n + 10;
// })

// console.log(`nilai baru: ${nilaiBaru}`)


// Filter
const nilai = [50, 70, 40, 100];

const nilaiDibawah75 = nilai.filter((value, index) => {
    return value < 75 && index < 2;
})

console.log (`nilai baru: ${nilaiDibawah75}`)